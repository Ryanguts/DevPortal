/**
 * DevPortal — API + static server (TypeScript)
 * --------------------------------------------
 * Arquivo: server.ts
 * Por que TypeScript: tipagem no backend reduz bugs em auth, papéis e sessão.
 * Por que este arquivo existe: contas persistidas, painel admin e site no ar.
 *
 * Local:
 *   npm install
 *   npm run dev          # tsx server.ts
 *   npm start            # node dist/server.js (após build)
 *
 * Moderador (padrão, sobrescreva com variáveis de ambiente):
 *   ADMIN_EMAIL / ADMIN_PASSWORD
 */

import http from "http";
import fs from "fs";
import path from "path";
import crypto from "crypto";
import { URL } from "url";

// ---------- tipos ----------
type Role = "owner" | "moderator" | "user";

interface ModPermissions {
  timeout: boolean;
  ban: boolean;
  impersonate: boolean;
  editProfiles: boolean;
  manageMods: boolean; // só owner usa de verdade
}

const DEFAULT_MOD_PERMS: ModPermissions = {
  timeout: true,
  ban: false,
  impersonate: false,
  editProfiles: false,
  manageMods: false,
};

const OWNER_PERMS: ModPermissions = {
  timeout: true,
  ban: true,
  impersonate: true,
  editProfiles: true,
  manageMods: true,
};

interface UserRecord {
  id: string;
  email: string;
  passwordHash: string;
  role: Role;
  createdAt: string;
  favorites: string[];
  lastLoginAt?: string;
  failedLogins?: number;
  lockedUntil?: string | null;
  /** Timeout manual do moderador (ISO date). */
  timeoutUntil?: string | null;
  /** Ban permanente. */
  banned?: boolean;
  bannedAt?: string | null;
  banReason?: string | null;
  username?: string;
  displayName?: string;
  avatarUrl?: string;
  bio?: string;
  permissions?: ModPermissions;
}

interface PublicUser {
  id: string;
  email: string;
  role: Role;
  createdAt: string;
  favoritesCount: number;
  favorites: string[];
  lastLoginAt?: string;
  timeoutUntil?: string | null;
  banned?: boolean;
  bannedAt?: string | null;
  banReason?: string | null;
  username?: string;
  displayName?: string;
  avatarUrl?: string;
  bio?: string;
  permissions?: ModPermissions;
  hasPassword: boolean;
}

interface BanEntry {
  email: string;
  reason?: string;
  bannedAt: string;
  by: string;
}

interface SessionMap {
  [token: string]: { email: string; createdAt: number; realEmail?: string };
}

interface RateBucket {
  count: number;
  resetAt: number;
}

// ---------- config / segurança ----------
const PORT = Number(process.env.PORT) || 3847;
const ROOT = process.cwd();
const DATA_DIR = path.join(ROOT, "data");
const USERS_FILE = path.join(DATA_DIR, "users.json");
const SESSIONS_FILE = path.join(DATA_DIR, "sessions.json");
const BANS_FILE = path.join(DATA_DIR, "bans.json");
const CHAT_FILE = path.join(DATA_DIR, "chat.json");
const UPLOADS_DIR = path.join(DATA_DIR, "uploads");
const NODE_ENV = process.env.NODE_ENV || "development";
const IS_PROD = NODE_ENV === "production";

const ADMIN_EMAIL = (process.env.ADMIN_EMAIL || "r.guts").trim().toLowerCase();
const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || "02022010";
const GOOGLE_CLIENT_ID = (process.env.GOOGLE_CLIENT_ID || "").trim();

const ALLOWED_ORIGINS = (process.env.ALLOWED_ORIGINS || "")
  .split(",")
  .map((s) => s.trim())
  .filter(Boolean);

const MAX_BODY = 256 * 1024;
const SESSION_TTL_MS = 1000 * 60 * 60 * 24 * 7; // 7 dias
const RATE_WINDOW_MS = 60_000;
const RATE_MAX_AUTH = 20; // tentativas de login/register por IP / min
const LOCK_AFTER_FAILS = 8;
const LOCK_MINUTES = 15;

const MIME: Record<string, string> = {
  ".html": "text/html; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".js": "application/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".png": "image/png",
  ".svg": "image/svg+xml",
  ".ico": "image/x-icon",
  ".woff2": "font/woff2",
  ".map": "application/json; charset=utf-8",
  ".txt": "text/plain; charset=utf-8",
};

const rateLimitMap = new Map<string, RateBucket>();

// ---------- utils ----------
function ensureData(): void {
  if (!fs.existsSync(DATA_DIR)) fs.mkdirSync(DATA_DIR, { recursive: true });
  if (!fs.existsSync(USERS_FILE)) writeJSON(USERS_FILE, []);
  if (!fs.existsSync(SESSIONS_FILE)) writeJSON(SESSIONS_FILE, {});
  if (!fs.existsSync(BANS_FILE)) writeJSON(BANS_FILE, []);
  if (!fs.existsSync(CHAT_FILE)) writeJSON(CHAT_FILE, { threads: [], announcements: [] });
  if (!fs.existsSync(UPLOADS_DIR)) fs.mkdirSync(UPLOADS_DIR, { recursive: true });
}

function readJSON<T>(file: string, fallback: T): T {
  try {
    return JSON.parse(fs.readFileSync(file, "utf8")) as T;
  } catch {
    return fallback;
  }
}

function writeJSON(file: string, data: unknown): void {
  const tmp = `${file}.tmp`;
  fs.writeFileSync(tmp, JSON.stringify(data, null, 2), "utf8");
  fs.renameSync(tmp, file);
}

function hashPassword(password: string): string {
  const salt = crypto.randomBytes(16).toString("hex");
  const hash = crypto.scryptSync(password, salt, 64).toString("hex");
  return `${salt}:${hash}`;
}

function verifyPassword(password: string, stored: string): boolean {
  const [salt, hash] = String(stored || "").split(":");
  if (!salt || !hash) return false;
  const check = crypto.scryptSync(password, salt, 64).toString("hex");
  try {
    return crypto.timingSafeEqual(Buffer.from(hash, "hex"), Buffer.from(check, "hex"));
  } catch {
    return false;
  }
}

function newToken(): string {
  return crypto.randomBytes(32).toString("hex");
}

const TOKEN_SECRET = process.env.SESSION_SECRET || ("devportal-" + ADMIN_EMAIL + "-session-v1");

function signSessionToken(email: string, extra?: { realEmail?: string }): string {
  const payload = {
    e: email,
    r: extra?.realEmail || "",
    exp: Date.now() + SESSION_TTL_MS,
    n: crypto.randomBytes(8).toString("hex"),
  };
  const body = Buffer.from(JSON.stringify(payload)).toString("base64url");
  const sig = crypto.createHmac("sha256", TOKEN_SECRET).update(body).digest("base64url");
  return `${body}.${sig}`;
}

function issueAuthToken(email: string, realEmail?: string): string {
  const token = signSessionToken(email, realEmail ? { realEmail } : undefined);
  const sessions = getSessions();
  sessions[token] = { email, createdAt: Date.now(), realEmail };
  saveSessions(sessions);
  return token;
}

function verifySessionToken(token: string): { email: string; realEmail?: string } | null {
  try {
    const [body, sig] = String(token || "").split(".");
    if (!body || !sig) return null;
    const expect = crypto.createHmac("sha256", TOKEN_SECRET).update(body).digest("base64url");
    const a = Buffer.from(sig);
    const b = Buffer.from(expect);
    if (a.length !== b.length || !crypto.timingSafeEqual(a, b)) return null;
    const payload = JSON.parse(Buffer.from(body, "base64url").toString("utf8")) as {
      e?: string;
      r?: string;
      exp?: number;
    };
    if (!payload.e || !payload.exp || Date.now() > payload.exp) return null;
    return { email: normalizeEmail(payload.e), realEmail: payload.r ? normalizeEmail(payload.r) : undefined };
  } catch {
    return null;
  }
}

function normalizeEmail(email: unknown): string {
  return String(email || "").trim().toLowerCase();
}

function clientIp(req: http.IncomingMessage): string {
  const xf = req.headers["x-forwarded-for"];
  if (typeof xf === "string" && xf.length) return xf.split(",")[0].trim();
  return req.socket.remoteAddress || "unknown";
}

function rateLimit(key: string, max: number): boolean {
  const now = Date.now();
  const bucket = rateLimitMap.get(key);
  if (!bucket || now > bucket.resetAt) {
    rateLimitMap.set(key, { count: 1, resetAt: now + RATE_WINDOW_MS });
    return true;
  }
  bucket.count += 1;
  return bucket.count <= max;
}

function getUsers(): UserRecord[] {
  return readJSON<UserRecord[]>(USERS_FILE, []);
}

function saveUsers(users: UserRecord[]): void {
  writeJSON(USERS_FILE, users);
}

function getSessions(): SessionMap {
  return readJSON<SessionMap>(SESSIONS_FILE, {});
}

function saveSessions(sessions: SessionMap): void {
  writeJSON(SESSIONS_FILE, sessions);
}


interface ChatMessage {
  id: string;
  from: string;
  text: string;
  at: string;
  fileName?: string;
  fileUrl?: string;
  fileMime?: string;
}

interface ChatThread {
  id: string;
  type: "support" | "dm" | "announce";
  memberEmail: string;
  participants: string[];
  subject: string;
  updatedAt: string;
  messages: ChatMessage[];
}

function getChat(): { threads: ChatThread[] } {
  return readJSON<{ threads: ChatThread[] }>(CHAT_FILE, { threads: [] });
}
function saveChat(data: { threads: ChatThread[] }): void {
  writeJSON(CHAT_FILE, data);
}

function getBans(): BanEntry[] {
  return readJSON<BanEntry[]>(BANS_FILE, []);
}
function saveBans(bans: BanEntry[]): void {
  writeJSON(BANS_FILE, bans);
}
function isEmailBanned(email: string): BanEntry | null {
  const e = normalizeEmail(email);
  return getBans().find((b) => b.email === e) || null;
}
function revokeUserSessions(email: string): void {
  const sessions = getSessions();
  let changed = false;
  for (const [token, meta] of Object.entries(sessions)) {
    if (meta?.email === email) {
      delete sessions[token];
      changed = true;
    }
  }
  if (changed) saveSessions(sessions);
}
function isTimedOut(user: UserRecord): boolean {
  if (!user.timeoutUntil) return false;
  const until = Date.parse(user.timeoutUntil);
  if (Number.isNaN(until)) return false;
  if (Date.now() < until) return true;
  user.timeoutUntil = null;
  return false;
}

function getPerms(user: UserRecord): ModPermissions {
  if (user.role === "owner" || user.email === ADMIN_EMAIL) return { ...OWNER_PERMS };
  if (user.role === "moderator") {
    return { ...DEFAULT_MOD_PERMS, ...(user.permissions || {}) };
  }
  return {
    timeout: false,
    ban: false,
    impersonate: false,
    editProfiles: false,
    manageMods: false,
  };
}

function isStaff(user: UserRecord): boolean {
  return user.role === "owner" || user.role === "admin" || user.role === "moderator" || user.email === ADMIN_EMAIL;
}

function requireStaff(req: http.IncomingMessage): UserRecord | null {
  const u = userFromToken(req);
  if (!u || !isStaff(u)) return null;
  const block = assertUserActive(u);
  if (block) return null;
  return u;
}

function requirePerm(user: UserRecord, key: keyof ModPermissions): boolean {
  return Boolean(getPerms(user)[key]);
}

function assertUserActive(user: UserRecord): string | null {
  if (user.banned) return "Esta conta foi banida permanentemente.";
  if (isTimedOut(user)) {
    const until = user.timeoutUntil ? new Date(user.timeoutUntil).toLocaleString("pt-BR") : "";
    return until
      ? `Conta em timeout até ${until}.`
      : "Conta temporariamente suspensa.";
  }
  if (isLocked(user)) return "Conta temporariamente bloqueada por tentativas inválidas.";
  return null;
}


function purgeExpiredSessions(): void {
  const sessions = getSessions();
  const now = Date.now();
  let changed = false;
  for (const [token, meta] of Object.entries(sessions)) {
    if (!meta?.createdAt || now - meta.createdAt > SESSION_TTL_MS) {
      delete sessions[token];
      changed = true;
    }
  }
  if (changed) saveSessions(sessions);
}

function ensureAdminUser(): void {
  const users = getUsers();
  const existing = users.find((u) => u.email === ADMIN_EMAIL);
  if (!existing) {
    users.push({
      id: "admin-1",
      email: ADMIN_EMAIL,
      passwordHash: hashPassword(ADMIN_PASSWORD),
      role: "owner",
      createdAt: new Date().toISOString(),
      favorites: [],
      failedLogins: 0,
      lockedUntil: null,
    });
    saveUsers(users);
    return;
  }
  // Garante papel admin e senha alinhada ao env (útil após troca de ADMIN_PASSWORD)
  let dirty = false;
  if (existing.role !== "owner") {
    existing.role = "owner";
    dirty = true;
  }
  if (!verifyPassword(ADMIN_PASSWORD, existing.passwordHash)) {
    existing.passwordHash = hashPassword(ADMIN_PASSWORD);
    dirty = true;
  }
  if (dirty) saveUsers(users);
}

function securityHeaders(res: http.ServerResponse): void {
  res.setHeader("X-Content-Type-Options", "nosniff");
  res.setHeader("X-Frame-Options", "DENY");
  res.setHeader("Referrer-Policy", "strict-origin-when-cross-origin");
  res.setHeader("Permissions-Policy", "camera=(), microphone=(), geolocation=()");
  res.setHeader(
    "Content-Security-Policy",
    [
      "default-src 'self'",
      "img-src 'self' data: https:",
      "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
      "font-src 'self' https://fonts.gstatic.com data:",
      // Google Identity Services (botão Continuar com Google)
      "script-src 'self' 'unsafe-inline' https://accounts.google.com https://apis.google.com",
      "frame-src 'self' https://accounts.google.com",
      "connect-src 'self' https://accounts.google.com https://oauth2.googleapis.com https://cdn.jsdelivr.net https://universities.hipolabs.com http://localhost:* https://*",
    ].join("; ")
  );
  if (IS_PROD) {
    res.setHeader("Strict-Transport-Security", "max-age=31536000; includeSubDomains");
  }
}

function corsHeaders(req: http.IncomingMessage, res: http.ServerResponse): void {
  const origin = req.headers.origin;
  if (origin && ALLOWED_ORIGINS.length) {
    if (ALLOWED_ORIGINS.includes(origin)) {
      res.setHeader("Access-Control-Allow-Origin", origin);
      res.setHeader("Vary", "Origin");
    }
  } else if (origin) {
    // dev / mesmo deploy: ecoa origem
    res.setHeader("Access-Control-Allow-Origin", origin);
    res.setHeader("Vary", "Origin");
  } else {
    res.setHeader("Access-Control-Allow-Origin", "*");
  }
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, X-Session-Token");
  res.setHeader("Access-Control-Allow-Methods", "GET,POST,OPTIONS");
}

function sendJSON(req: http.IncomingMessage, res: http.ServerResponse, status: number, obj: unknown): void {
  securityHeaders(res);
  corsHeaders(req, res);
  const body = JSON.stringify(obj);
  res.writeHead(status, { "Content-Type": "application/json; charset=utf-8" });
  res.end(body);
}

function readBody(req: http.IncomingMessage): Promise<unknown> {
  return new Promise((resolve, reject) => {
    const chunks: Buffer[] = [];
    let size = 0;
    req.on("data", (c: Buffer) => {
      size += c.length;
      if (size > MAX_BODY) {
        reject(new Error("Payload muito grande"));
        req.destroy();
        return;
      }
      chunks.push(c);
    });
    req.on("end", () => {
      const raw = Buffer.concat(chunks).toString("utf8");
      if (!raw) return resolve({});
      try {
        resolve(JSON.parse(raw));
      } catch (e) {
        reject(e);
      }
    });
    req.on("error", reject);
  });
}

function userFromToken(req: http.IncomingMessage): UserRecord | null {
  const token = req.headers["x-session-token"];
  if (typeof token !== "string" || !token) return null;
  // 1) Token assinado (sobrevive a F5 e reinício do servidor)
  const signed = verifySessionToken(token);
  if (signed?.email) {
    return getUsers().find((u) => u.email === signed.email) || null;
  }
  // 2) Sessão legada em arquivo
  purgeExpiredSessions();
  const sessions = getSessions();
  const meta = sessions[token];
  if (!meta?.email) return null;
  if (Date.now() - meta.createdAt > SESSION_TTL_MS) {
    delete sessions[token];
    saveSessions(sessions);
    return null;
  }
  return getUsers().find((u) => u.email === meta.email) || null;
}

function isLocked(user: UserRecord): boolean {
  if (!user.lockedUntil) return false;
  const until = Date.parse(user.lockedUntil);
  if (Number.isNaN(until)) return false;
  if (Date.now() < until) return true;
  user.lockedUntil = null;
  user.failedLogins = 0;
  return false;
}

function registerFail(user: UserRecord): void {
  user.failedLogins = (user.failedLogins || 0) + 1;
  if ((user.failedLogins || 0) >= LOCK_AFTER_FAILS) {
    user.lockedUntil = new Date(Date.now() + LOCK_MINUTES * 60_000).toISOString();
  }
}

function clearFails(user: UserRecord): void {
  user.failedLogins = 0;
  user.lockedUntil = null;
  user.lastLoginAt = new Date().toISOString();
}

function toPublic(u: UserRecord): PublicUser {
  return {
    id: u.id,
    email: u.email,
    role: u.role,
    createdAt: u.createdAt,
    favoritesCount: (u.favorites || []).length,
    favorites: u.favorites || [],
    lastLoginAt: u.lastLoginAt,
    timeoutUntil: u.timeoutUntil || null,
    banned: Boolean(u.banned),
    bannedAt: u.bannedAt || null,
    banReason: u.banReason || null,
    username: u.username || "",
    displayName: u.displayName || "",
    avatarUrl: u.avatarUrl || "",
    bio: u.bio || "",
    permissions: u.role === "moderator" ? getPerms(u) : u.role === "owner" ? OWNER_PERMS : undefined,
    hasPassword: Boolean(u.passwordHash),
  };
}

// ---------- API ----------
async function handleApi(req: http.IncomingMessage, res: http.ServerResponse, pathname: string): Promise<void> {
  if (req.method === "OPTIONS") {
    securityHeaders(res);
    corsHeaders(req, res);
    res.writeHead(204);
    res.end();
    return;
  }

  const ip = clientIp(req);

  if (pathname === "/api/health" && req.method === "GET") {
    sendJSON(req, res, 200, {
      ok: true,
      service: "devportal-api",
      env: IS_PROD ? "production" : "development",
      ts: true,
    });
    return;
  }

  if ((pathname === "/api/register" || pathname === "/api/login") && req.method === "POST") {
    if (!rateLimit(`auth:${ip}`, RATE_MAX_AUTH)) {
      sendJSON(req, res, 429, { error: "Muitas tentativas. Aguarde um minuto." });
      return;
    }
  }

  if (pathname === "/api/register" && req.method === "POST") {
    const body = (await readBody(req)) as { email?: string; password?: string; favorites?: string[] };
    const email = normalizeEmail(body.email);
    const password = String(body.password || "");

    if (!email || email.length < 3 || email.length > 120) {
      sendJSON(req, res, 400, { error: "E-mail inválido." });
      return;
    }
    // bloqueia registrar o e-mail admin por visitantes
    if (email === ADMIN_EMAIL) {
      sendJSON(req, res, 403, { error: "Este e-mail é reservado." });
      return;
    }
    if (isEmailBanned(email)) {
      sendJSON(req, res, 403, { error: "Este e-mail não pode criar conta." });
      return;
    }
    if (password.length < 6 || password.length > 128) {
      sendJSON(req, res, 400, { error: "Senha deve ter entre 6 e 128 caracteres." });
      return;
    }

    const users = getUsers();
    if (users.some((u) => u.email === email)) {
      sendJSON(req, res, 409, { error: "Já existe conta com este e-mail." });
      return;
    }

    const user: UserRecord = {
      id: crypto.randomBytes(8).toString("hex"),
      email,
      passwordHash: hashPassword(password),
      role: "user",
      createdAt: new Date().toISOString(),
      favorites: Array.isArray(body.favorites) ? body.favorites.map(String).slice(0, 200) : [],
      failedLogins: 0,
      lockedUntil: null,
    };
    users.push(user);
    saveUsers(users);

    const token = issueAuthToken(email);

    sendJSON(req, res, 201, {
      token,
      email: user.email,
      role: user.role,
      favorites: user.favorites,
    });
    return;
  }

  if (pathname === "/api/login" && req.method === "POST") {
    const body = (await readBody(req)) as { email?: string; password?: string };
    const email = normalizeEmail(body.email);
    const password = String(body.password || "");

    ensureAdminUser();
    const users = getUsers();

    // Moderador: valida SEMPRE contra as variáveis de ambiente (não só o hash antigo no disco).
    // Isso evita "senha incorreta" após redeploy no Render quando o data/users.json muda.
    if (email === ADMIN_EMAIL && password === ADMIN_PASSWORD) {
      let admin = users.find((u) => u.email === ADMIN_EMAIL);
      if (!admin) {
        admin = {
          id: "admin-1",
          email: ADMIN_EMAIL,
          passwordHash: hashPassword(ADMIN_PASSWORD),
          role: "owner",
          createdAt: new Date().toISOString(),
          favorites: [],
          failedLogins: 0,
          lockedUntil: null,
        };
        users.push(admin);
      } else {
        admin.role = "owner";
        admin.passwordHash = hashPassword(ADMIN_PASSWORD);
        admin.lockedUntil = null;
        admin.failedLogins = 0;
        admin.lastLoginAt = new Date().toISOString();
      }
      saveUsers(users);

      const token = issueAuthToken(ADMIN_EMAIL);

      sendJSON(req, res, 200, {
        token,
        email: ADMIN_EMAIL,
        role: "owner",
        favorites: admin.favorites || [],
      });
      return;
    }

    const user = users.find((u) => u.email === email);

    if (!user) {
      sendJSON(req, res, 401, { error: "E-mail ou senha incorretos." });
      return;
    }

    if (isLocked(user)) {
      saveUsers(users);
      sendJSON(req, res, 423, { error: "Conta temporariamente bloqueada por tentativas inválidas." });
      return;
    }

    if (!verifyPassword(password, user.passwordHash)) {
      registerFail(user);
      saveUsers(users);
      sendJSON(req, res, 401, { error: "E-mail ou senha incorretos." });
      return;
    }

    if (user.banned) {
      saveUsers(users);
      sendJSON(req, res, 403, {
        error: "Conta banida permanentemente.",
        code: "BANNED",
        reason: user.banReason || "Violação das regras do DevPortal",
        bannedAt: user.bannedAt || null,
      });
      return;
    }
    if (isTimedOut(user)) {
      saveUsers(users);
      sendJSON(req, res, 403, {
        error: "Conta em timeout.",
        code: "TIMEOUT",
        reason: "Um moderador suspendeu temporariamente sua conta.",
        timeoutUntil: user.timeoutUntil || null,
      });
      return;
    }
    if (isLocked(user)) {
      saveUsers(users);
      sendJSON(req, res, 423, {
        error: "Conta bloqueada por tentativas inválidas.",
        code: "LOCKED",
        lockedUntil: user.lockedUntil || null,
      });
      return;
    }

    clearFails(user);
    saveUsers(users);

    const token = issueAuthToken(email);

    sendJSON(req, res, 200, {
      token,
      email: user.email,
      role: user.role,
      favorites: user.favorites || [],
      username: user.username || "",
      displayName: user.displayName || "",
      avatarUrl: user.avatarUrl || "",
    });
    return;
  }

  if (pathname === "/api/me" && req.method === "GET") {
    const user = userFromToken(req);
    if (!user) {
      sendJSON(req, res, 401, { error: "Sessão inválida." });
      return;
    }
    if (user.banned) {
      sendJSON(req, res, 403, {
        error: "Conta banida permanentemente.",
        code: "BANNED",
        reason: user.banReason || "Violação das regras do DevPortal",
        bannedAt: user.bannedAt || null,
      });
      return;
    }
    if (isTimedOut(user)) {
      sendJSON(req, res, 403, {
        error: "Conta em timeout.",
        code: "TIMEOUT",
        reason: "Um moderador suspendeu temporariamente sua conta.",
        timeoutUntil: user.timeoutUntil || null,
      });
      return;
    }
    if (isLocked(user)) {
      sendJSON(req, res, 423, {
        error: "Conta bloqueada por tentativas inválidas.",
        code: "LOCKED",
        lockedUntil: user.lockedUntil || null,
      });
      return;
    }
    const role =
      user.email === ADMIN_EMAIL || user.role === "owner" || user.role === "admin"
        ? "owner"
        : user.role === "moderator"
          ? "moderator"
          : "user";
    sendJSON(req, res, 200, {
      email: user.email,
      role,
      favorites: user.favorites || [],
      createdAt: user.createdAt,
      lastLoginAt: user.lastLoginAt,
      username: user.username || "",
      displayName: user.displayName || "",
      avatarUrl: user.avatarUrl || "",
      bio: user.bio || "",
      permissions: getPerms(user),
    });
    return;
  }

  if (pathname === "/api/favorites" && req.method === "POST") {
    const user = userFromToken(req);
    if (!user) {
      sendJSON(req, res, 401, { error: "Sessão inválida." });
      return;
    }
    const body = (await readBody(req)) as { favorites?: string[] };
    const favorites = Array.isArray(body.favorites)
      ? body.favorites.map(String).slice(0, 200)
      : [];
    const users = getUsers();
    const idx = users.findIndex((u) => u.email === user.email);
    if (idx >= 0) {
      users[idx].favorites = favorites;
      saveUsers(users);
    }
    sendJSON(req, res, 200, { ok: true, favorites });
    return;
  }

  if (pathname === "/api/admin/users" && req.method === "GET") {
    const staff = requireStaff(req);
    if (!staff) {
      sendJSON(req, res, 403, { error: "Acesso restrito à equipe." });
      return;
    }
    const users = getUsers().map(toPublic);
    sendJSON(req, res, 200, {
      total: users.length,
      users,
      storage: IS_PROD ? "[protegido]" : USERS_FILE,
      me: { email: staff.email, role: staff.role === "owner" || staff.email === ADMIN_EMAIL ? "owner" : staff.role, permissions: getPerms(staff) },
    });
    return;
  }

  if (pathname === "/api/logout" && req.method === "POST") {
    const token = req.headers["x-session-token"];
    if (typeof token === "string" && token) {
      const sessions = getSessions();
      delete sessions[token];
      saveSessions(sessions);
    }
    sendJSON(req, res, 200, { ok: true });
    return;
  }


  if (pathname === "/api/config" && req.method === "GET") {
    sendJSON(req, res, 200, {
      googleClientId: GOOGLE_CLIENT_ID || null,
      googleEnabled: Boolean(GOOGLE_CLIENT_ID),
    });
    return;
  }

  if (pathname === "/api/auth/google" && req.method === "POST") {
    if (!rateLimit(`auth:${ip}`, RATE_MAX_AUTH)) {
      sendJSON(req, res, 429, { error: "Muitas tentativas. Aguarde um minuto." });
      return;
    }
    if (!GOOGLE_CLIENT_ID) {
      sendJSON(req, res, 503, { error: "Login com Google não configurado no servidor." });
      return;
    }
    const body = (await readBody(req)) as { credential?: string };
    const credential = String(body.credential || "");
    if (!credential || credential.length < 20) {
      sendJSON(req, res, 400, { error: "Token Google inválido." });
      return;
    }
    try {
      const verifyUrl =
        "https://oauth2.googleapis.com/tokeninfo?id_token=" + encodeURIComponent(credential);
      const gRes = await fetch(verifyUrl);
      if (!gRes.ok) {
        sendJSON(req, res, 401, { error: "Token Google rejeitado." });
        return;
      }
      const g = (await gRes.json()) as {
        aud?: string;
        email?: string;
        email_verified?: string | boolean;
        sub?: string;
      };
      if (g.aud !== GOOGLE_CLIENT_ID) {
        sendJSON(req, res, 401, { error: "Token não pertence a este app." });
        return;
      }
      if (String(g.email_verified) !== "true") {
        sendJSON(req, res, 401, { error: "E-mail Google não verificado." });
        return;
      }
      const email = normalizeEmail(g.email);
      if (!email) {
        sendJSON(req, res, 400, { error: "Google não retornou e-mail." });
        return;
      }
      if (isEmailBanned(email)) {
        sendJSON(req, res, 403, { error: "Este e-mail não pode entrar." });
        return;
      }

      ensureAdminUser();
      const users = getUsers();
      let user = users.find((u) => u.email === email);
      if (!user) {
        user = {
          id: crypto.randomBytes(8).toString("hex"),
          email,
          passwordHash: hashPassword(crypto.randomBytes(24).toString("hex")),
          role: email === ADMIN_EMAIL ? "owner" : "user",
          createdAt: new Date().toISOString(),
          favorites: [],
          failedLogins: 0,
          lockedUntil: null,
        };
        users.push(user);
      } else {
        clearFails(user);
        if (email === ADMIN_EMAIL) user.role = "owner";
      }
      saveUsers(users);

      const token = issueAuthToken(email);

      sendJSON(req, res, 200, {
        token,
        email: user.email,
        role: user.role,
        favorites: user.favorites || [],
      });
    } catch (e) {
      console.error(e);
      sendJSON(req, res, 500, { error: "Falha ao validar Google." });
    }
    return;
  }


  if (pathname === "/api/admin/timeout" && req.method === "POST") {
    const admin = requireStaff(req);
    if (!admin || !requirePerm(admin, "timeout")) {
      sendJSON(req, res, 403, { error: "Sem permissão para timeout." });
      return;
    }
    const body = (await readBody(req)) as { email?: string; minutes?: number; hours?: number; days?: number };
    const target = normalizeEmail(body.email);
    if (!target || target === ADMIN_EMAIL) {
      sendJSON(req, res, 400, { error: "E-mail inválido." });
      return;
    }
    const targetUser = getUsers().find((u) => u.email === target);
    if (targetUser && (targetUser.role === "owner" || targetUser.email === ADMIN_EMAIL)) {
      sendJSON(req, res, 403, { error: "Não é possível aplicar timeout no dono." });
      return;
    }
    if (targetUser && targetUser.role === "moderator" && admin.role !== "owner" && admin.email !== ADMIN_EMAIL) {
      sendJSON(req, res, 403, { error: "Só o dono pode aplicar timeout em moderadores." });
      return;
    }
    const minutes =
      Math.max(0, Number(body.minutes) || 0) +
      Math.max(0, Number(body.hours) || 0) * 60 +
      Math.max(0, Number(body.days) || 0) * 60 * 24;
    if (minutes < 1) {
      sendJSON(req, res, 400, { error: "Informe um tempo (minutos, horas ou dias)." });
      return;
    }
    const users = getUsers();
    const idx = users.findIndex((u) => u.email === target);
    if (idx < 0) {
      sendJSON(req, res, 404, { error: "Conta não encontrada." });
      return;
    }
    users[idx].timeoutUntil = new Date(Date.now() + minutes * 60_000).toISOString();
    saveUsers(users);
    revokeUserSessions(target);
    sendJSON(req, res, 200, {
      ok: true,
      email: target,
      timeoutUntil: users[idx].timeoutUntil,
    });
    return;
  }

  if (pathname === "/api/admin/untimeout" && req.method === "POST") {
    const admin = requireStaff(req);
    if (!admin || !requirePerm(admin, "timeout")) {
      sendJSON(req, res, 403, { error: "Sem permissão para timeout." });
      return;
    }
    const body = (await readBody(req)) as { email?: string };
    const target = normalizeEmail(body.email);
    const users = getUsers();
    const idx = users.findIndex((u) => u.email === target);
    if (idx < 0) {
      sendJSON(req, res, 404, { error: "Conta não encontrada." });
      return;
    }
    users[idx].timeoutUntil = null;
    users[idx].lockedUntil = null;
    users[idx].failedLogins = 0;
    saveUsers(users);
    sendJSON(req, res, 200, { ok: true, email: target });
    return;
  }

  if (pathname === "/api/admin/ban" && req.method === "POST") {
    const admin = requireStaff(req);
    if (!admin || !requirePerm(admin, "ban")) {
      sendJSON(req, res, 403, { error: "Sem permissão para banir." });
      return;
    }
    const body = (await readBody(req)) as { email?: string; reason?: string };
    const target = normalizeEmail(body.email);
    if (!target || target === ADMIN_EMAIL) {
      sendJSON(req, res, 400, { error: "E-mail inválido." });
      return;
    }
    const targetUser = getUsers().find((u) => u.email === target);
    if (targetUser && (targetUser.role === "owner" || targetUser.role === "moderator")) {
      if (admin.role !== "owner" && admin.email !== ADMIN_EMAIL) {
        sendJSON(req, res, 403, { error: "Só o dono pode banir moderadores." });
        return;
      }
      if (targetUser.role === "owner" || targetUser.email === ADMIN_EMAIL) {
        sendJSON(req, res, 403, { error: "Não é possível banir o dono." });
        return;
      }
    }
    const reason = String(body.reason || "Banido pelo moderador").slice(0, 200);
    const users = getUsers();
    const idx = users.findIndex((u) => u.email === target);
    if (idx >= 0) {
      users[idx].banned = true;
      users[idx].bannedAt = new Date().toISOString();
      users[idx].banReason = reason;
      saveUsers(users);
    }
    const bans = getBans().filter((b) => b.email !== target);
    bans.push({ email: target, reason, bannedAt: new Date().toISOString(), by: ADMIN_EMAIL });
    saveBans(bans);
    revokeUserSessions(target);
    sendJSON(req, res, 200, { ok: true, email: target, banned: true });
    return;
  }

  if (pathname === "/api/admin/unban" && req.method === "POST") {
    const admin = requireStaff(req);
    if (!admin || !requirePerm(admin, "ban")) {
      sendJSON(req, res, 403, { error: "Sem permissão para desbanir." });
      return;
    }
    const body = (await readBody(req)) as { email?: string };
    const target = normalizeEmail(body.email);
    const users = getUsers();
    const idx = users.findIndex((u) => u.email === target);
    if (idx >= 0) {
      users[idx].banned = false;
      users[idx].bannedAt = null;
      users[idx].banReason = null;
      saveUsers(users);
    }
    saveBans(getBans().filter((b) => b.email !== target));
    sendJSON(req, res, 200, { ok: true, email: target, banned: false });
    return;
  }

  if (pathname === "/api/admin/bans" && req.method === "GET") {
    const admin = requireStaff(req);
    if (!admin || !requirePerm(admin, "ban")) {
      sendJSON(req, res, 403, { error: "Sem permissão." });
      return;
    }
    sendJSON(req, res, 200, { bans: getBans() });
    return;
  }

  // Perfil do usuário logado
  if (pathname === "/api/profile" && req.method === "POST") {
    const user = userFromToken(req);
    if (!user) {
      sendJSON(req, res, 401, { error: "Sessão inválida." });
      return;
    }
    const blockMsg = assertUserActive(user);
    if (blockMsg) {
      sendJSON(req, res, 403, { error: blockMsg });
      return;
    }
    const body = (await readBody(req)) as {
      username?: string;
      displayName?: string;
      avatarUrl?: string;
      bio?: string;
      targetEmail?: string; // staff edita outro perfil
    };
    let targetEmail = user.email;
    if (body.targetEmail) {
      const te = normalizeEmail(body.targetEmail);
      if (te !== user.email) {
        if (!requirePerm(user, "editProfiles")) {
          sendJSON(req, res, 403, { error: "Sem permissão para editar outros perfis." });
          return;
        }
        targetEmail = te;
      }
    }
    let username = String(body.username || "").trim().toLowerCase().replace(/[^a-z0-9_]/g, "");
    if (username.length > 24) username = username.slice(0, 24);
    const displayName = String(body.displayName || "").trim().slice(0, 40);
    let avatarUrl = String(body.avatarUrl || "").trim().slice(0, 500);
    if (avatarUrl && !/^https?:\/\//i.test(avatarUrl) && !avatarUrl.startsWith("data:image/")) {
      sendJSON(req, res, 400, { error: "Avatar deve ser URL http(s) ou data:image." });
      return;
    }
    // data URL size guard (~100KB)
    if (avatarUrl.startsWith("data:") && avatarUrl.length > 140000) {
      sendJSON(req, res, 400, { error: "Imagem muito grande. Use uma menor." });
      return;
    }
    const users = getUsers();
    if (username) {
      const taken = users.some((u) => u.username === username && u.email !== user.email);
      if (taken) {
        sendJSON(req, res, 409, { error: "Username já em uso." });
        return;
      }
    }
    const idx = users.findIndex((u) => u.email === targetEmail);
    if (idx < 0) {
      sendJSON(req, res, 404, { error: "Usuário não encontrado." });
      return;
    }
    if (username) users[idx].username = username;
    if (body.displayName !== undefined) users[idx].displayName = displayName;
    if (body.avatarUrl !== undefined) users[idx].avatarUrl = avatarUrl;
    if (body.bio !== undefined) users[idx].bio = String(body.bio || "").trim().slice(0, 300);
    saveUsers(users);
    sendJSON(req, res, 200, {
      ok: true,
      username: users[idx].username || "",
      displayName: users[idx].displayName || "",
      avatarUrl: users[idx].avatarUrl || "",
      bio: users[idx].bio || "",
      email: users[idx].email,
    });
    return;
  }


  if (pathname === "/api/admin/impersonate" && req.method === "POST") {
    const staff = requireStaff(req);
    if (!staff || !requirePerm(staff, "impersonate")) {
      sendJSON(req, res, 403, { error: "Sem permissão para acessar como outro usuário." });
      return;
    }
    const body = (await readBody(req)) as { email?: string };
    const target = normalizeEmail(body.email);
    if (!target || target === staff.email) {
      sendJSON(req, res, 400, { error: "E-mail inválido." });
      return;
    }
    const users = getUsers();
    const targetUser = users.find((u) => u.email === target);
    if (!targetUser) {
      sendJSON(req, res, 404, { error: "Conta não encontrada." });
      return;
    }
    if (targetUser.role === "owner" || targetUser.email === ADMIN_EMAIL) {
      sendJSON(req, res, 403, { error: "Não é possível acessar como o dono." });
      return;
    }
    if (targetUser.role === "moderator" && staff.role !== "owner" && staff.email !== ADMIN_EMAIL) {
      sendJSON(req, res, 403, { error: "Só o dono pode acessar como moderador." });
      return;
    }
    const blockMsg = assertUserActive(targetUser);
    // allow impersonating timed-out users? for mod purposes yes, skip ban
    if (targetUser.banned) {
      sendJSON(req, res, 403, { error: "Conta banida — não é possível acessar." });
      return;
    }
    const token = issueAuthToken(target, staff.email);
    sendJSON(req, res, 200, {
      token,
      email: targetUser.email,
      role: targetUser.role,
      favorites: targetUser.favorites || [],
      username: targetUser.username || "",
      displayName: targetUser.displayName || "",
      avatarUrl: targetUser.avatarUrl || "",
      bio: targetUser.bio || "",
      impersonating: true,
      staffEmail: staff.email,
    });
    return;
  }

  if (pathname === "/api/admin/set-role" && req.method === "POST") {
    const staff = requireStaff(req);
    if (!staff || (staff.role !== "owner" && staff.email !== ADMIN_EMAIL)) {
      sendJSON(req, res, 403, { error: "Só o dono pode gerenciar moderadores." });
      return;
    }
    const body = (await readBody(req)) as {
      email?: string;
      role?: string;
      permissions?: Partial<ModPermissions>;
    };
    const target = normalizeEmail(body.email);
    if (!target || target === ADMIN_EMAIL) {
      sendJSON(req, res, 400, { error: "E-mail inválido." });
      return;
    }
    const role = body.role === "moderator" ? "moderator" : "user";
    const users = getUsers();
    const idx = users.findIndex((u) => u.email === target);
    if (idx < 0) {
      sendJSON(req, res, 404, { error: "Conta não encontrada. A pessoa precisa ter se cadastrado antes." });
      return;
    }
    users[idx].role = role;
    if (role === "moderator") {
      users[idx].permissions = {
        ...DEFAULT_MOD_PERMS,
        ...(body.permissions || {}),
        manageMods: false,
      };
    } else {
      users[idx].permissions = undefined;
    }
    saveUsers(users);
    sendJSON(req, res, 200, { ok: true, user: toPublic(users[idx]) });
    return;
  }


  
  // —— Lookup username ——
  if (pathname === "/api/users/lookup" && req.method === "GET") {
    const user = userFromToken(req);
    if (!user) {
      sendJSON(req, res, 401, { error: "Faça login." });
      return;
    }
    const host = req.headers.host || "localhost";
    const url = new URL(req.url || "/", `http://${host}`);
    const q = String(url.searchParams.get("q") || "").trim().toLowerCase();
    if (q.length < 2) {
      sendJSON(req, res, 200, { users: [] });
      return;
    }
    const users = getUsers()
      .filter((u) => {
        const un = (u.username || "").toLowerCase();
        const dn = (u.displayName || "").toLowerCase();
        const em = (u.email || "").toLowerCase();
        return un.includes(q) || dn.includes(q) || em.split("@")[0].includes(q);
      })
      .filter((u) => u.email !== user.email)
      .slice(0, 12)
      .map((u) => ({
        email: u.email,
        username: u.username || "",
        displayName: u.displayName || u.username || u.email.split("@")[0],
        avatarUrl: u.avatarUrl || "",
        role: u.role || "user",
      }));
    sendJSON(req, res, 200, { users });
    return;
  }

  if (pathname === "/api/chat/threads" && req.method === "GET") {
    const user = userFromToken(req);
    if (!user) {
      sendJSON(req, res, 401, { error: "Faça login." });
      return;
    }
    const block = assertUserActive(user);
    if (block) {
      sendJSON(req, res, 403, { error: block });
      return;
    }
    const chat = getChat();
    const staff = isStaff(user);
    const users = getUsers();
    const threads = (chat.threads || [])
      .filter((th) => {
        const type = th.type || "support";
        if (type === "announce") return true;
        if (staff) return true;
        if (type === "support") return th.memberEmail === user.email || (th.participants || []).includes(user.email);
        if (type === "dm") return (th.participants || []).includes(user.email);
        return th.memberEmail === user.email;
      })
      .map((th) => {
        const type = th.type || "support";
        const other =
          type === "dm"
            ? (th.participants || []).find((e) => e !== user.email)
            : th.memberEmail;
        const u = users.find((x) => x.email === other);
        const name =
          type === "announce"
            ? "Anúncios"
            : type === "support"
              ? staff
                ? u?.displayName || u?.username || (other || "").split("@")[0]
                : "Equipe DevPortal"
              : u?.displayName || u?.username || (other || "").split("@")[0] || "DM";
        return {
          id: th.id,
          type,
          memberEmail: th.memberEmail,
          participants: th.participants || [],
          memberName: name,
          memberUsername: u?.username || "",
          memberAvatar: u?.avatarUrl || "",
          subject: th.subject,
          updatedAt: th.updatedAt,
          preview: th.messages.length ? th.messages[th.messages.length - 1].text.slice(0, 80) : "",
          count: th.messages.length,
        };
      })
      .sort((a, b) => String(b.updatedAt).localeCompare(String(a.updatedAt)));
    sendJSON(req, res, 200, { threads, staff, role: user.role });
    return;
  }

  if (pathname === "/api/chat/thread" && req.method === "GET") {
    const user = userFromToken(req);
    if (!user) {
      sendJSON(req, res, 401, { error: "Faça login." });
      return;
    }
    const host = req.headers.host || "localhost";
    const url = new URL(req.url || "/", `http://${host}`);
    const id = url.searchParams.get("id") || "";
    const chat = getChat();
    const th = (chat.threads || []).find((x) => x.id === id);
    if (!th) {
      sendJSON(req, res, 404, { error: "Conversa não encontrada." });
      return;
    }
    const type = th.type || "support";
    const allowed =
      type === "announce" ||
      isStaff(user) ||
      th.memberEmail === user.email ||
      (th.participants || []).includes(user.email);
    if (!allowed) {
      sendJSON(req, res, 403, { error: "Sem acesso a esta conversa." });
      return;
    }
    sendJSON(req, res, 200, { thread: th });
    return;
  }

  if (pathname === "/api/chat/dm" && req.method === "POST") {
    const user = userFromToken(req);
    if (!user) {
      sendJSON(req, res, 401, { error: "Faça login." });
      return;
    }
    const block = assertUserActive(user);
    if (block) {
      sendJSON(req, res, 403, { error: block });
      return;
    }
    const body = (await readBody(req)) as { username?: string; email?: string };
    const users = getUsers();
    let target = body.email
      ? users.find((u) => u.email === normalizeEmail(body.email))
      : users.find(
          (u) =>
            (u.username || "").toLowerCase() === String(body.username || "").toLowerCase().trim() ||
            (u.email || "").split("@")[0].toLowerCase() === String(body.username || "").toLowerCase().trim()
        );
    if (!target) {
      sendJSON(req, res, 404, { error: "Usuário não encontrado. Peça o @username." });
      return;
    }
    if (target.email === user.email) {
      sendJSON(req, res, 400, { error: "Não dá para conversar consigo mesmo." });
      return;
    }
    const chat = getChat();
    chat.threads = chat.threads || [];
    let th = chat.threads.find(
      (x) =>
        (x.type || "") === "dm" &&
        (x.participants || []).includes(user.email) &&
        (x.participants || []).includes(target!.email)
    );
    if (!th) {
      th = {
        id: crypto.randomBytes(8).toString("hex"),
        type: "dm",
        memberEmail: target.email,
        participants: [user.email, target.email].sort(),
        subject: "DM",
        updatedAt: new Date().toISOString(),
        messages: [],
      };
      chat.threads.push(th);
      saveChat(chat);
    }
    sendJSON(req, res, 200, { ok: true, threadId: th.id });
    return;
  }

  if (pathname === "/api/chat/send" && req.method === "POST") {
    const user = userFromToken(req);
    if (!user) {
      sendJSON(req, res, 401, { error: "Faça login." });
      return;
    }
    const block = assertUserActive(user);
    if (block) {
      sendJSON(req, res, 403, { error: block });
      return;
    }
    const body = (await readBody(req)) as {
      text?: string;
      threadId?: string;
      type?: string;
      fileName?: string;
      fileData?: string;
      fileMime?: string;
    };
    const text = String(body.text || "").trim().slice(0, 4000);
    const hasFile = Boolean(body.fileData && body.fileName);
    if (!text && !hasFile) {
      sendJSON(req, res, 400, { error: "Mensagem vazia." });
      return;
    }
    const chat = getChat();
    chat.threads = chat.threads || [];
    let th = body.threadId ? chat.threads.find((x) => x.id === body.threadId) : undefined;

    if (th) {
      const type = th.type || "support";
      if (type === "announce" && !isStaff(user)) {
        sendJSON(req, res, 403, { error: "Só a equipe posta em Anúncios." });
        return;
      }
      const allowed =
        type === "announce" ||
        isStaff(user) ||
        th.memberEmail === user.email ||
        (th.participants || []).includes(user.email);
      if (!allowed) {
        sendJSON(req, res, 403, { error: "Sem acesso." });
        return;
      }
    } else {
      const wantType = body.type === "announce" ? "announce" : "support";
      if (wantType === "announce") {
        if (!isStaff(user)) {
          sendJSON(req, res, 403, { error: "Só equipe posta anúncios." });
          return;
        }
        th = chat.threads.find((x) => (x.type || "") === "announce");
        if (!th) {
          th = {
            id: "announce-global",
            type: "announce",
            memberEmail: "staff",
            participants: [],
            subject: "Anúncios",
            updatedAt: new Date().toISOString(),
            messages: [],
          };
          chat.threads.push(th);
        }
      } else {
        if (isStaff(user) && !body.threadId) {
          sendJSON(req, res, 400, { error: "Equipe: abra uma conversa existente para responder." });
          return;
        }
        th = {
          id: crypto.randomBytes(8).toString("hex"),
          type: "support",
          memberEmail: user.email,
          participants: [user.email],
          subject: (text || body.fileName || "Suporte").slice(0, 60),
          updatedAt: new Date().toISOString(),
          messages: [],
        };
        chat.threads.push(th);
      }
    }

    let fileUrl: string | undefined;
    let fileName: string | undefined;
    let fileMime: string | undefined;
    if (hasFile) {
      const raw = String(body.fileData || "");
      const b64 = raw.includes(",") ? raw.split(",")[1] : raw;
      const buf = Buffer.from(b64, "base64");
      if (buf.length > 2.5 * 1024 * 1024) {
        sendJSON(req, res, 400, { error: "Arquivo máximo 2,5 MB." });
        return;
      }
      const safeName = String(body.fileName || "file")
        .replace(/[^a-zA-Z0-9._-]/g, "_")
        .slice(0, 80);
      const id = crypto.randomBytes(6).toString("hex");
      const stored = `${id}-${safeName}`;
      fs.writeFileSync(path.join(UPLOADS_DIR, stored), buf);
      fileUrl = `/api/uploads/${stored}`;
      fileName = safeName;
      fileMime = String(body.fileMime || "application/octet-stream").slice(0, 80);
    }

    const msg: ChatMessage = {
      id: crypto.randomBytes(6).toString("hex"),
      from: user.email,
      text: text || (fileName ? `📎 ${fileName}` : ""),
      at: new Date().toISOString(),
      fileName,
      fileUrl,
      fileMime,
    };
    th!.messages.push(msg);
    th!.updatedAt = new Date().toISOString();
    saveChat(chat);
    broadcastChat({ type: "chat", threadId: th!.id, message: msg });
    sendJSON(req, res, 200, { ok: true, threadId: th!.id, thread: th, message: msg });
    return;
  }

  if (pathname.startsWith("/api/uploads/") && req.method === "GET") {
    const name = path.basename(pathname.slice("/api/uploads/".length));
    const full = path.join(UPLOADS_DIR, name);
    if (!full.startsWith(UPLOADS_DIR) || !fs.existsSync(full)) {
      sendJSON(req, res, 404, { error: "Arquivo não encontrado." });
      return;
    }
    const data = fs.readFileSync(full);
    const ext = path.extname(name).toLowerCase();
    const mime =
      ext === ".png"
        ? "image/png"
        : ext === ".jpg" || ext === ".jpeg"
          ? "image/jpeg"
          : ext === ".gif"
            ? "image/gif"
            : ext === ".webp"
              ? "image/webp"
              : ext === ".pdf"
                ? "application/pdf"
                : ext === ".txt"
                  ? "text/plain; charset=utf-8"
                  : "application/octet-stream";
    res.writeHead(200, {
      "Content-Type": mime,
      "Cache-Control": "private, max-age=3600",
      "Access-Control-Allow-Origin": "*",
    });
    res.end(data);
    return;
  }

  sendJSON(req, res, 404, { error: "Rota não encontrada." });
}

// ---------- static ----------
function serveStatic(req: http.IncomingMessage, res: http.ServerResponse, pathname: string): void {
  let filePath = pathname === "/" ? "/index.HTML" : pathname;
  if (filePath === "/index.html") filePath = "/index.HTML";

  const safe = path.normalize(filePath).replace(/^(\.\.[/\\])+/, "");
  const full = path.join(ROOT, safe);

  if (!full.startsWith(ROOT)) {
    res.writeHead(403);
    res.end("Forbidden");
    return;
  }

  fs.readFile(full, (err, data) => {
    if (err) {
      securityHeaders(res);
      res.writeHead(404, { "Content-Type": "text/plain; charset=utf-8" });
      res.end("Não encontrado");
      return;
    }
    const ext = path.extname(full).toLowerCase();
    securityHeaders(res);
    res.writeHead(200, { "Content-Type": MIME[ext] || "application/octet-stream" });
    res.end(data);
  });
}


// —— WebSocket (sem dependência) ——
type WsClient = { socket: import("net").Socket };
const wsClients = new Set<WsClient>();

function encodeWsFrame(str: string): Buffer {
  const payload = Buffer.from(str, "utf8");
  const len = payload.length;
  let header: Buffer;
  if (len < 126) {
    header = Buffer.alloc(2);
    header[0] = 0x81;
    header[1] = len;
  } else if (len < 65536) {
    header = Buffer.alloc(4);
    header[0] = 0x81;
    header[1] = 126;
    header.writeUInt16BE(len, 2);
  } else {
    header = Buffer.alloc(10);
    header[0] = 0x81;
    header[1] = 127;
    header.writeUInt32BE(0, 2);
    header.writeUInt32BE(len, 6);
  }
  return Buffer.concat([header, payload]);
}

function broadcastChat(payload: object): void {
  const data = encodeWsFrame(JSON.stringify(payload));
  for (const c of wsClients) {
    try {
      c.socket.write(data);
    } catch {
      /* ignore */
    }
  }
}

function acceptWs(req: http.IncomingMessage, socket: import("net").Socket): void {
  const key = req.headers["sec-websocket-key"];
  if (!key || typeof key !== "string") {
    socket.destroy();
    return;
  }
  const accept = crypto
    .createHash("sha1")
    .update(key + "258EAFA5-E914-47DA-95CA-C5AB0DC85B11")
    .digest("base64");
  socket.write(
    "HTTP/1.1 101 Switching Protocols\r\nUpgrade: websocket\r\nConnection: Upgrade\r\nSec-WebSocket-Accept: " +
      accept +
      "\r\n\r\n"
  );
  const client: WsClient = { socket };
  wsClients.add(client);
  socket.on("close", () => wsClients.delete(client));
  socket.on("error", () => {
    wsClients.delete(client);
    try {
      socket.destroy();
    } catch {
      /* */
    }
  });
}


// ---------- boot ----------
ensureData();
ensureAdminUser();
purgeExpiredSessions();

const server = http.createServer(async (req, res) => {
  try {
    const host = req.headers.host || "localhost";
    const url = new URL(req.url || "/", `http://${host}`);
    const pathname = url.pathname;

    if (pathname.startsWith("/api/")) {
      await handleApi(req, res, pathname);
      return;
    }
    serveStatic(req, res, pathname);
  } catch (e) {
    console.error(e);
    try {
      sendJSON(req, res, 500, { error: "Erro interno." });
    } catch {
      res.end();
    }
  }
});

server.on("upgrade", (req, socket) => {
  try {
    const host = req.headers.host || "localhost";
    const url = new URL(req.url || "/", `http://${host}`);
    if (url.pathname === "/ws") {
      acceptWs(req, socket as import("net").Socket);
      return;
    }
  } catch {
    /* */
  }
  socket.destroy();
});

server.listen(PORT, () => {
  console.log(`DevPortal (TypeScript) em http://localhost:${PORT}`);
  console.log(`Ambiente: ${IS_PROD ? "production" : "development"}`);
  console.log(`Dono: ${ADMIN_EMAIL} (senha via ADMIN_PASSWORD)`);
  if (IS_PROD && ADMIN_PASSWORD === "02022010") {
    console.warn("[segurança] Em produção, defina ADMIN_PASSWORD forte nas variáveis de ambiente.");
  }
});
