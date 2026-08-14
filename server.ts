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
type Role = "admin" | "user";

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
}

interface PublicUser {
  id: string;
  email: string;
  role: Role;
  createdAt: string;
  favoritesCount: number;
  favorites: string[];
  lastLoginAt?: string;
}

interface SessionMap {
  [token: string]: { email: string; createdAt: number };
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
const NODE_ENV = process.env.NODE_ENV || "development";
const IS_PROD = NODE_ENV === "production";

const ADMIN_EMAIL = (process.env.ADMIN_EMAIL || "r.guts").trim().toLowerCase();
const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || "02022010";

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
      role: "admin",
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
  if (existing.role !== "admin") {
    existing.role = "admin";
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
    "default-src 'self'; img-src 'self' data: https:; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; font-src 'self' https://fonts.gstatic.com data:; script-src 'self' 'unsafe-inline'; connect-src 'self' https://cdn.jsdelivr.net https://universities.hipolabs.com http://localhost:* https://*;"
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

    const token = newToken();
    const sessions = getSessions();
    sessions[token] = { email, createdAt: Date.now() };
    saveSessions(sessions);

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
    const user = users.find((u) => u.email === email);

    if (!user) {
      // resposta genérica (não revela se o e-mail existe)
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

    // admin só se e-mail admin + senha correta (já validada) e role admin
    if (user.email === ADMIN_EMAIL) {
      user.role = "admin";
    }

    clearFails(user);
    saveUsers(users);

    const token = newToken();
    const sessions = getSessions();
    sessions[token] = { email, createdAt: Date.now() };
    saveSessions(sessions);

    sendJSON(req, res, 200, {
      token,
      email: user.email,
      role: user.role,
      favorites: user.favorites || [],
    });
    return;
  }

  if (pathname === "/api/me" && req.method === "GET") {
    const user = userFromToken(req);
    if (!user) {
      sendJSON(req, res, 401, { error: "Sessão inválida." });
      return;
    }
    sendJSON(req, res, 200, {
      email: user.email,
      role: user.role,
      favorites: user.favorites || [],
      createdAt: user.createdAt,
      lastLoginAt: user.lastLoginAt,
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
    const user = userFromToken(req);
    if (!user || user.role !== "admin" || user.email !== ADMIN_EMAIL) {
      sendJSON(req, res, 403, { error: "Acesso restrito ao moderador." });
      return;
    }
    const users = getUsers().map(toPublic);
    sendJSON(req, res, 200, {
      total: users.length,
      users,
      storage: IS_PROD ? "[protegido]" : USERS_FILE,
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

server.listen(PORT, () => {
  console.log(`DevPortal (TypeScript) em http://localhost:${PORT}`);
  console.log(`Ambiente: ${IS_PROD ? "production" : "development"}`);
  console.log(`Moderador: ${ADMIN_EMAIL} (senha via ADMIN_PASSWORD / padrão local)`);
  if (IS_PROD && ADMIN_PASSWORD === "02022010") {
    console.warn("[segurança] Em produção, defina ADMIN_PASSWORD forte nas variáveis de ambiente.");
  }
});
