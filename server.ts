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

interface UserWarning {
  id: string;
  reason: string;
  by: string;
  at: string;
}

interface StaffNote {
  id: string;
  text: string;
  by: string;
  at: string;
}

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
  timeoutUntil?: string | null;
  /** Mensagem teatral no timeout (resenha). */
  timeoutMessage?: string | null;
  banned?: boolean;
  bannedAt?: string | null;
  banReason?: string | null;
  username?: string;
  usernameChangedAt?: string | null;
  displayName?: string;
  displayNameChangedAt?: string | null;
  /** Nick temporário de resenha (sobrescreve display). */
  displayNameOverride?: string | null;
  displayNameOverrideUntil?: string | null;
  avatarUrl?: string;
  bio?: string;
  permissions?: ModPermissions;
  /** Avisos oficiais */
  warnings?: UserWarning[];
  /** Mute só de chat */
  mutedUntil?: string | null;
  muteReason?: string | null;
  /** Notas internas da equipe */
  staffNotes?: StaffNote[];
  /** Badges de resenha */
  badges?: string[];
  /** Chapéu de burro até */
  hatUntil?: string | null;
  /** CAPS only até */
  capsUntil?: string | null;
  /** Eco do pato até */
  duckUntil?: string | null;
  /** Título estagiário até */
  internUntil?: string | null;
  /** Modo só leitura (chat bloqueado além do mute, etc.) */
  readOnlyUntil?: string | null;
  readOnlyScope?: "chat" | "all" | null;
  /** Efeitos de susto ativos (só owner aplica) */
  scareEffects?: {
    bsodUntil?: string | null;
    countdownUntil?: string | null;
    cursorUntil?: string | null;
    jumpScare?: boolean;
    ghostTypeUntil?: string | null;
    intrusionUntil?: string | null;
    matrixLagUntil?: string | null;
    ghostChatUntil?: string | null;
    blameDeployUntil?: string | null;
    watchingUntil?: string | null;
  };
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
  timeoutMessage?: string | null;
  banned?: boolean;
  bannedAt?: string | null;
  banReason?: string | null;
  username?: string;
  displayName?: string;
  avatarUrl?: string;
  bio?: string;
  permissions?: ModPermissions;
  hasPassword: boolean;
  warningsCount?: number;
  mutedUntil?: string | null;
  badges?: string[];
  hatUntil?: string | null;
  internUntil?: string | null;
  staffNotesCount?: number;
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
const FRIENDS_FILE = path.join(DATA_DIR, "friends.json");
const AUDIT_FILE = path.join(DATA_DIR, "audit.json");
const REPORTS_FILE = path.join(DATA_DIR, "reports.json");
const SITE_META_FILE = path.join(DATA_DIR, "site-meta.json");
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
  if (!fs.existsSync(CHAT_FILE)) writeJSON(CHAT_FILE, { threads: [] });
  if (!fs.existsSync(FRIENDS_FILE)) writeJSON(FRIENDS_FILE, { requests: [] });
  if (!fs.existsSync(AUDIT_FILE)) writeJSON(AUDIT_FILE, []);
  if (!fs.existsSync(REPORTS_FILE)) writeJSON(REPORTS_FILE, []);
  if (!fs.existsSync(SITE_META_FILE)) writeJSON(SITE_META_FILE, { banner: null, macros: defaultMacros() });
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
  const list = readJSON<UserRecord[]>(USERS_FILE, []);
  let dirty = false;
  for (const u of list) {
    const raw = String(u.role || "user").toLowerCase();
    let n: Role = "user";
    if (u.email === ADMIN_EMAIL || raw === "admin" || raw === "owner") n = "owner";
    else if (raw === "moderator" || raw === "mod") n = "moderator";
    if (u.role !== n) {
      u.role = n;
      dirty = true;
    }
  }
  if (dirty) {
    try { writeJSON(USERS_FILE, list); } catch { /* ignore */ }
  }
  return list;
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


type ChatKind = "support" | "dm" | "announce" | "group";

interface ChatReplyRef {
  id: string;
  text: string;
  from: string;
  fromDisplayName?: string;
}

interface ChatMessage {
  id: string;
  from: string;
  text: string;
  at: string;
  editedAt?: string;
  fileName?: string;
  fileData?: string;
  fileMime?: string;
  replyTo?: ChatReplyRef;
  forwarded?: boolean;
}

interface ChatThread {
  id: string;
  kind: ChatKind;
  /** support: e-mail do membro */
  memberEmail?: string;
  /** dm / group: e-mails dos participantes */
  participants?: string[];
  /** group */
  createdBy?: string;
  groupName?: string;
  subject: string;
  updatedAt: string;
  messages: ChatMessage[];
}

interface FriendRequest {
  id: string;
  from: string;
  to: string;
  at: string;
  status: "pending" | "accepted" | "rejected";
}

interface FriendsData {
  requests: FriendRequest[];
}

const ANNOUNCE_ID = "announce-global";
const MAX_CHAT_FILE_BYTES = 2_500_000;

function getChat(): { threads: ChatThread[] } {
  const data = readJSON<{ threads: ChatThread[] }>(CHAT_FILE, { threads: [] });
  if (!Array.isArray(data.threads)) data.threads = [];
  // migra threads antigas sem kind
  for (const th of data.threads) {
    if (!th.kind) {
      th.kind = th.id === ANNOUNCE_ID ? "announce" : "support";
    }
  }
  // garante canal de anúncios
  if (!data.threads.some((t) => t.id === ANNOUNCE_ID)) {
    data.threads.unshift({
      id: ANNOUNCE_ID,
      kind: "announce",
      subject: "Anúncios da equipe",
      updatedAt: new Date().toISOString(),
      messages: [],
    });
    try { writeJSON(CHAT_FILE, data); } catch { /* ignore */ }
  }
  return data;
}
function saveChat(data: { threads: ChatThread[] }): void {
  writeJSON(CHAT_FILE, data);
}

function getFriendsData(): FriendsData {
  const d = readJSON<FriendsData>(FRIENDS_FILE, { requests: [] });
  if (!Array.isArray(d.requests)) d.requests = [];
  return d;
}
function saveFriendsData(d: FriendsData): void {
  writeJSON(FRIENDS_FILE, d);
}

function areFriends(a: string, b: string): boolean {
  const ea = normalizeEmail(a);
  const eb = normalizeEmail(b);
  if (ea === eb) return false;
  return getFriendsData().requests.some(
    (r) =>
      r.status === "accepted" &&
      ((r.from === ea && r.to === eb) || (r.from === eb && r.to === ea))
  );
}

function listFriendEmails(email: string): string[] {
  const e = normalizeEmail(email);
  const out = new Set<string>();
  for (const r of getFriendsData().requests) {
    if (r.status !== "accepted") continue;
    if (r.from === e) out.add(r.to);
    if (r.to === e) out.add(r.from);
  }
  return [...out];
}

function defaultMacros(): { id: string; title: string; body: string; fun?: boolean }[] {
  return [
    { id: "m1", title: "Erro completo", body: "Por favor, envie a mensagem de erro completa (texto, não só print cortado) e o trecho do código." },
    { id: "m2", title: "Formatar código", body: "Cole o código entre crases triplas (``` ) pra ficar legível. Diz também o que você esperava vs o que aconteceu." },
    { id: "m3", title: "Trilha Web", body: "Sugestão: comece pela Trilha Web no menu Trilhas — HTML/CSS → JS → um framework. Qualquer dúvida, manda aqui." },
    { id: "f1", title: "Lê o erro", body: "Interessante. E se você tentasse *ler o erro*? 👀", fun: true },
    { id: "f2", title: "Na minha máquina", body: "Funciona na minha máquina 😎. Brincadeira — vamos achar o bug juntos. Manda o trecho.", fun: true },
    { id: "f3", title: "VS Code", body: "Já tentou desligar e ligar o VS Code? (Sério, resolve 30% dos fantasmas.)", fun: true },
  ];
}

interface AuditEntry {
  id: string;
  at: string;
  by: string;
  action: string;
  target?: string;
  detail?: string;
}

function appendAudit(by: string, action: string, target?: string, detail?: string): void {
  const list = readJSON<AuditEntry[]>(AUDIT_FILE, []);
  list.unshift({
    id: crypto.randomBytes(6).toString("hex"),
    at: new Date().toISOString(),
    by,
    action,
    target,
    detail: detail ? String(detail).slice(0, 300) : undefined,
  });
  writeJSON(AUDIT_FILE, list.slice(0, 2000));
}

function untilFromMinutes(minutes: number): string {
  return new Date(Date.now() + Math.max(1, minutes) * 60 * 1000).toISOString();
}

function isStillActive(iso?: string | null): boolean {
  if (!iso) return false;
  const t = Date.parse(iso);
  return !Number.isNaN(t) && Date.now() < t;
}

function effectiveDisplayName(u: UserRecord): string {
  if (isStillActive(u.displayNameOverrideUntil) && u.displayNameOverride) {
    return u.displayNameOverride;
  }
  return (u.displayName || u.username || u.email.split("@")[0] || u.email).trim();
}

function getSiteMeta(): {
  banner: { text: string; until: string; by: string } | null;
  macros: { id: string; title: string; body: string; fun?: boolean }[];
} {
  const meta = readJSON<{
    banner?: { text: string; until: string; by: string } | null;
    macros?: { id: string; title: string; body: string; fun?: boolean }[];
  }>(SITE_META_FILE, { banner: null, macros: defaultMacros() });
  if (!meta.macros || !meta.macros.length) meta.macros = defaultMacros();
  if (meta.banner && !isStillActive(meta.banner.until)) meta.banner = null;
  return { banner: meta.banner || null, macros: meta.macros };
}

function saveSiteMeta(meta: ReturnType<typeof getSiteMeta>): void {
  writeJSON(SITE_META_FILE, meta);
}

function buildClientEffects(user: UserRecord) {
  const sc = user.scareEffects || {};
  return {
    hat: isStillActive(user.hatUntil),
    caps: isStillActive(user.capsUntil),
    duck: isStillActive(user.duckUntil),
    intern: isStillActive(user.internUntil),
    muted: isStillActive(user.mutedUntil),
    muteReason: user.muteReason || null,
    mutedUntil: user.mutedUntil || null,
    readOnly: isStillActive(user.readOnlyUntil),
    readOnlyScope: user.readOnlyScope || null,
    badges: user.badges || [],
    warnings: user.warnings || [],
    displayName: effectiveDisplayName(user),
    timeoutMessage: user.timeoutMessage || null,
    scare: {
      bsod: isStillActive(sc.bsodUntil),
      countdown: isStillActive(sc.countdownUntil),
      cursor: isStillActive(sc.cursorUntil),
      jumpScare: Boolean(sc.jumpScare),
      ghostType: isStillActive(sc.ghostTypeUntil),
      intrusion: isStillActive(sc.intrusionUntil),
      matrixLag: isStillActive(sc.matrixLagUntil),
      ghostChat: isStillActive(sc.ghostChatUntil),
      blameDeploy: isStillActive(sc.blameDeployUntil),
      watching: isStillActive(sc.watchingUntil),
    },
  };
}


function displayNameOf(u: UserRecord | undefined, email: string): string {
  if (!u) return email.split("@")[0] || email;
  return (u.displayName || u.username || email.split("@")[0] || email).trim();
}

function canAccessThread(user: UserRecord, th: ChatThread): boolean {
  if (isStaff(user) && (th.kind === "support" || th.kind === "announce")) return true;
  if (th.kind === "announce") return true;
  if (th.kind === "support") return isStaff(user) || th.memberEmail === user.email;
  if (th.kind === "dm" || th.kind === "group") {
    return (th.participants || []).includes(user.email);
  }
  return false;
}

const EDIT_OWN_MS = 10 * 60 * 1000;
const EDIT_STAFF_OTHER_MS = 5 * 60 * 1000;

function findMessage(
  chat: { threads: ChatThread[] },
  threadId: string,
  messageId: string
): { th: ChatThread; msg: ChatMessage; index: number } | null {
  const th = (chat.threads || []).find((t) => t.id === threadId);
  if (!th) return null;
  const index = th.messages.findIndex((m) => m.id === messageId);
  if (index < 0) return null;
  return { th, msg: th.messages[index], index };
}

function enrichMessages(messages: ChatMessage[], users: UserRecord[]) {
  return messages.map((m) => {
    const u = users.find((x) => x.email === m.from);
    return {
      ...m,
      // nunca expor e-mail/username na UI — só nome de exibição
      fromDisplayName: displayNameOf(u, m.from),
    };
  });
}

function canEditMessage(actor: UserRecord, msg: ChatMessage): boolean {
  const age = Date.now() - Date.parse(msg.at);
  if (Number.isNaN(age)) return false;
  if (msg.from === actor.email) return age <= EDIT_OWN_MS;
  if (isStaff(actor)) return age <= EDIT_STAFF_OTHER_MS;
  return false;
}

function canDeleteMessage(actor: UserRecord, msg: ChatMessage): boolean {
  if (msg.from === actor.email) return true;
  if (isStaff(actor)) {
    // staff apaga mensagens de membros sempre; de outros staff só a própria
    const author = getUsers().find((u) => u.email === msg.from);
    if (!author) return true;
    return !isStaff(author);
  }
  return false;
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

/** Converte legado "admin" → "owner". Nunca devolve "admin". */
function normalizeRole(user: UserRecord | null | undefined): Role {
  if (!user) return "user";
  if (user.email === ADMIN_EMAIL) return "owner";
  const r = String(user.role || "user").toLowerCase();
  if (r === "admin" || r === "owner") return "owner";
  if (r === "moderator" || r === "mod") return "moderator";
  return "user";
}

function isStaff(user: UserRecord): boolean {
  const role = normalizeRole(user);
  return role === "owner" || role === "moderator" || user.email === ADMIN_EMAIL;
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
  const role: Role =
    u.role === "owner" || u.email === ADMIN_EMAIL
      ? "owner"
      : u.role === "moderator"
        ? "moderator"
        : "user";
  return {
    id: u.id,
    email: u.email,
    role,
    createdAt: u.createdAt,
    favoritesCount: (u.favorites || []).length,
    favorites: u.favorites || [],
    lastLoginAt: u.lastLoginAt,
    timeoutUntil: u.timeoutUntil || null,
    timeoutMessage: u.timeoutMessage || null,
    banned: Boolean(u.banned),
    bannedAt: u.bannedAt || null,
    banReason: u.banReason || null,
    username: u.username || "",
    displayName: effectiveDisplayName(u),
    avatarUrl: u.avatarUrl || "",
    bio: u.bio || "",
    permissions: role === "moderator" ? getPerms(u) : role === "owner" ? OWNER_PERMS : undefined,
    hasPassword: Boolean(u.passwordHash),
    warningsCount: (u.warnings || []).length,
    mutedUntil: u.mutedUntil || null,
    badges: u.badges || [],
    hatUntil: u.hatUntil || null,
    internUntil: u.internUntil || null,
    staffNotesCount: (u.staffNotes || []).length,
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
        reason: user.timeoutMessage || "Um moderador suspendeu temporariamente sua conta.",
        timeoutUntil: user.timeoutUntil || null,
        timeoutMessage: user.timeoutMessage || null,
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
      user.email === ADMIN_EMAIL || user.role === "owner"
        ? "owner"
        : user.role === "moderator"
          ? "moderator"
          : "user";
    // limpa jumpScare one-shot após entregar
    const effects = buildClientEffects(user);
    if (user.scareEffects?.jumpScare) {
      user.scareEffects.jumpScare = false;
      const users = getUsers();
      const idx = users.findIndex((x) => x.email === user.email);
      if (idx >= 0) {
        users[idx].scareEffects = user.scareEffects;
        saveUsers(users);
      }
    }
    const meta = getSiteMeta();
    sendJSON(req, res, 200, {
      email: user.email,
      role,
      favorites: user.favorites || [],
      createdAt: user.createdAt,
      lastLoginAt: user.lastLoginAt,
      username: user.username || "",
      displayName: effects.displayName,
      avatarUrl: user.avatarUrl || "",
      bio: user.bio || "",
      permissions: getPerms(user),
      effects,
      siteBanner: meta.banner,
      macros: isStaff(user) ? meta.macros : [],
      usernameChangedAt: user.usernameChangedAt || null,
      displayNameChangedAt: user.displayNameChangedAt || null,
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
    const usernameRaw =
      body.username !== undefined
        ? String(body.username || "").trim().toLowerCase().replace(/[^a-z0-9_]/g, "").slice(0, 24)
        : null;
    if (usernameRaw !== null && usernameRaw.length > 0 && usernameRaw.length < 3) {
      sendJSON(req, res, 400, { error: "Username deve ter entre 3 e 24 caracteres (a-z, 0-9, _)." });
      return;
    }
    const displayName =
      body.displayName !== undefined ? String(body.displayName || "").trim().slice(0, 40) : null;
    let avatarUrl = body.avatarUrl !== undefined ? String(body.avatarUrl || "").trim() : null;
    if (avatarUrl !== null && avatarUrl) {
      if (!/^https?:\/\//i.test(avatarUrl) && !avatarUrl.startsWith("data:image/")) {
        sendJSON(req, res, 400, { error: "Avatar deve ser URL http(s) ou data:image." });
        return;
      }
      if (avatarUrl.startsWith("data:") && avatarUrl.length > 2_100_000) {
        sendJSON(req, res, 400, { error: "Imagem muito grande (máx. ~1,5 MB)." });
        return;
      }
      if (!avatarUrl.startsWith("data:") && avatarUrl.length > 500) {
        avatarUrl = avatarUrl.slice(0, 500);
      }
    }

    const users = getUsers();
    const idx = users.findIndex((u) => u.email === targetEmail);
    if (idx < 0) {
      sendJSON(req, res, 404, { error: "Usuário não encontrado." });
      return;
    }
    const target = users[idx];
    const now = Date.now();
    const staffBypass = targetEmail !== user.email;

    // Username independente do nome de exibição — nunca pré-preenche
    if (usernameRaw !== null && usernameRaw.length > 0) {
      const current = (target.username || "").toLowerCase();
      if (usernameRaw !== current) {
        const taken = users.some(
          (u) => (u.username || "").toLowerCase() === usernameRaw && u.email !== targetEmail
        );
        if (taken) {
          sendJSON(req, res, 409, { error: "Este @username já está em uso. Escolha outro." });
          return;
        }
        if (!staffBypass && target.usernameChangedAt) {
          const elapsed = now - Date.parse(target.usernameChangedAt);
          const wait = 60 * 60 * 1000;
          if (!Number.isNaN(elapsed) && elapsed < wait) {
            const mins = Math.ceil((wait - elapsed) / 60000);
            sendJSON(req, res, 429, {
              error: `Username só pode ser alterado 1x por hora. Tente de novo em ~${mins} min.`,
              code: "USERNAME_COOLDOWN",
              retryMinutes: mins,
            });
            return;
          }
        }
        target.username = usernameRaw;
        target.usernameChangedAt = new Date().toISOString();
      }
    }

    if (displayName !== null) {
      const currentDn = target.displayName || "";
      if (displayName !== currentDn) {
        if (!staffBypass && target.displayNameChangedAt) {
          const elapsed = now - Date.parse(target.displayNameChangedAt);
          const wait = 5 * 60 * 1000;
          if (!Number.isNaN(elapsed) && elapsed < wait) {
            const secs = Math.ceil((wait - elapsed) / 1000);
            sendJSON(req, res, 429, {
              error: `Aguarde ${secs}s para alterar o nome de exibição de novo.`,
              code: "DISPLAY_COOLDOWN",
              retrySeconds: secs,
            });
            return;
          }
        }
        target.displayName = displayName;
        target.displayNameChangedAt = new Date().toISOString();
      }
    }

    // Se ainda não tem username e tem nome de exibição, deriva um @ uma vez (sem apagar contas)
    if (!(target.username || "").trim()) {
      const base = (target.displayName || displayName || "")
        .toLowerCase()
        .replace(/[^a-z0-9_]/g, "")
        .slice(0, 24);
      if (base.length >= 3) {
        let candidate = base;
        let n = 0;
        while (
          users.some(
            (u) => (u.username || "").toLowerCase() === candidate && u.email !== targetEmail
          )
        ) {
          n += 1;
          candidate = (base.slice(0, 20) + String(n)).slice(0, 24);
          if (n > 99) break;
        }
        if (candidate.length >= 3) {
          target.username = candidate;
          target.usernameChangedAt = new Date().toISOString();
        }
      }
    }

    if (avatarUrl !== null) target.avatarUrl = avatarUrl;
    if (body.bio !== undefined) target.bio = String(body.bio || "").trim().slice(0, 300);
    saveUsers(users);
    sendJSON(req, res, 200, {
      ok: true,
      username: target.username || "",
      displayName: target.displayName || "",
      avatarUrl: target.avatarUrl || "",
      bio: target.bio || "",
      email: target.email,
      usernameChangedAt: target.usernameChangedAt || null,
      displayNameChangedAt: target.displayNameChangedAt || null,
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
    const host = req.headers.host || "localhost";
    const url = new URL(req.url || "/", `http://${host}`);
    const tab = (url.searchParams.get("tab") || "all").toLowerCase();

    const chat = getChat();
    const staff = isStaff(user);
    const users = getUsers();

    let list = (chat.threads || []).filter((th) => canAccessThread(user, th));
    if (tab === "support") list = list.filter((t) => t.kind === "support");
    else if (tab === "dm") list = list.filter((t) => t.kind === "dm");
    else if (tab === "announce") list = list.filter((t) => t.kind === "announce");

    const threads = list
      .map((th) => {
        const peerEmail =
          th.kind === "support"
            ? th.memberEmail || ""
            : th.kind === "dm"
              ? (th.participants || []).find((e) => e !== user.email) || ""
              : "";
        const peer = users.find((x) => x.email === peerEmail);
        const title =
          th.kind === "announce"
            ? "📢 Anúncios"
            : th.kind === "support"
              ? staff
                ? displayNameOf(peer, peerEmail)
                : "Equipe DevPortal"
              : th.kind === "group"
                ? "👥 " + (th.groupName || th.subject || "Grupo")
                : displayNameOf(peer, peerEmail);
        const last = th.messages.length ? th.messages[th.messages.length - 1] : null;
        return {
          id: th.id,
          kind: th.kind,
          subject: th.subject,
          title,
          memberEmail: th.memberEmail || peerEmail,
          memberName: title,
          memberUsername: peer?.username || "",
          memberAvatar: peer?.avatarUrl || "",
          updatedAt: th.updatedAt,
          preview: last
            ? (last.fileName ? "📎 " + last.fileName : last.text).slice(0, 80)
            : "",
          count: th.messages.length,
        };
      })
      .sort((a, b) => String(b.updatedAt).localeCompare(String(a.updatedAt)));

    sendJSON(req, res, 200, { threads, staff, tab });
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
    if (!canAccessThread(user, th)) {
      sendJSON(req, res, 403, { error: "Sem acesso a esta conversa." });
      return;
    }
    const users = getUsers();
    sendJSON(req, res, 200, {
      thread: {
        ...th,
        messages: enrichMessages(th.messages || [], users),
      },
    });
    return;
  }

  if (pathname === "/api/chat/lookup" && req.method === "GET") {
    const user = userFromToken(req);
    if (!user) {
      sendJSON(req, res, 401, { error: "Faça login." });
      return;
    }
    const host = req.headers.host || "localhost";
    const url = new URL(req.url || "/", `http://${host}`);
    const q = (url.searchParams.get("q") || "").trim().replace(/^@/, "").toLowerCase();
    if (q.length < 2) {
      sendJSON(req, res, 200, { users: [] });
      return;
    }
    const found = getUsers()
      .filter((u) => {
        if (u.email === user.email) return false;
        if (u.banned) return false;
        const un = (u.username || "").toLowerCase();
        const dn = (u.displayName || "").toLowerCase();
        return un.includes(q) || dn.includes(q) || u.email.toLowerCase().startsWith(q);
      })
      .slice(0, 8)
      .map((u) => ({
        email: u.email,
        username: u.username || "",
        displayName: u.displayName || "",
        avatarUrl: u.avatarUrl || "",
        role: normalizeRole(u),
      }));
    sendJSON(req, res, 200, { users: found });
    return;
  }

  if (pathname === "/api/friends" && req.method === "GET") {
    const user = userFromToken(req);
    if (!user) {
      sendJSON(req, res, 401, { error: "Faça login." });
      return;
    }
    const data = getFriendsData();
    const users = getUsers();
    const incoming = data.requests
      .filter((r) => r.to === user.email && r.status === "pending")
      .map((r) => {
        const u = users.find((x) => x.email === r.from);
        return {
          id: r.id,
          from: r.from,
          at: r.at,
          username: u?.username || "",
          displayName: displayNameOf(u, r.from),
          avatarUrl: u?.avatarUrl || "",
        };
      });
    const outgoing = data.requests
      .filter((r) => r.from === user.email && r.status === "pending")
      .map((r) => {
        const u = users.find((x) => x.email === r.to);
        return {
          id: r.id,
          to: r.to,
          at: r.at,
          username: u?.username || "",
          displayName: displayNameOf(u, r.to),
        };
      });
    const friends = listFriendEmails(user.email).map((email) => {
      const u = users.find((x) => x.email === email);
      return {
        email,
        username: u?.username || "",
        displayName: displayNameOf(u, email),
        avatarUrl: u?.avatarUrl || "",
      };
    });
    sendJSON(req, res, 200, { friends, incoming, outgoing });
    return;
  }

  if (pathname === "/api/friends/request" && req.method === "POST") {
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
    let target: UserRecord | undefined;
    if (body.email) target = users.find((u) => u.email === normalizeEmail(body.email));
    else {
      const un = String(body.username || "").trim().replace(/^@/, "").toLowerCase();
      if (!un) {
        sendJSON(req, res, 400, { error: "Informe @username." });
        return;
      }
      target = users.find((u) => (u.username || "").toLowerCase() === un);
    }
    if (!target) {
      sendJSON(req, res, 404, { error: "Usuário não encontrado. A pessoa precisa ter @username no perfil." });
      return;
    }
    if (target.email === user.email) {
      sendJSON(req, res, 400, { error: "Não dá para adicionar a si mesmo." });
      return;
    }
    if (areFriends(user.email, target.email)) {
      sendJSON(req, res, 200, { ok: true, alreadyFriends: true });
      return;
    }
    const data = getFriendsData();
    const existing = data.requests.find(
      (r) =>
        r.status === "pending" &&
        ((r.from === user.email && r.to === target!.email) ||
          (r.from === target!.email && r.to === user.email))
    );
    if (existing) {
      // se o outro já te pediu, aceita automaticamente
      if (existing.from === target.email && existing.to === user.email) {
        existing.status = "accepted";
        saveFriendsData(data);
        sendJSON(req, res, 200, { ok: true, accepted: true, requestId: existing.id });
        return;
      }
      sendJSON(req, res, 200, { ok: true, pending: true, requestId: existing.id });
      return;
    }
    const reqRow: FriendRequest = {
      id: crypto.randomBytes(6).toString("hex"),
      from: user.email,
      to: target.email,
      at: new Date().toISOString(),
      status: "pending",
    };
    data.requests.push(reqRow);
    saveFriendsData(data);
    sendJSON(req, res, 200, { ok: true, pending: true, requestId: reqRow.id });
    return;
  }

  if (pathname === "/api/friends/respond" && req.method === "POST") {
    const user = userFromToken(req);
    if (!user) {
      sendJSON(req, res, 401, { error: "Faça login." });
      return;
    }
    const body = (await readBody(req)) as { requestId?: string; accept?: boolean };
    const data = getFriendsData();
    const reqRow = data.requests.find((r) => r.id === body.requestId);
    if (!reqRow || reqRow.to !== user.email || reqRow.status !== "pending") {
      sendJSON(req, res, 404, { error: "Pedido não encontrado." });
      return;
    }
    reqRow.status = body.accept ? "accepted" : "rejected";
    saveFriendsData(data);
    sendJSON(req, res, 200, { ok: true, status: reqRow.status });
    return;
  }

  /** Abre DM só se já forem amigos */
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
    let target: UserRecord | undefined;
    if (body.email) {
      target = users.find((u) => u.email === normalizeEmail(body.email));
    } else {
      const un = String(body.username || "").trim().replace(/^@/, "").toLowerCase();
      if (!un) {
        sendJSON(req, res, 400, { error: "Informe @username." });
        return;
      }
      target = users.find((u) => (u.username || "").toLowerCase() === un);
    }
    if (!target) {
      sendJSON(req, res, 404, { error: "Usuário não encontrado." });
      return;
    }
    if (target.email === user.email) {
      sendJSON(req, res, 400, { error: "Não dá para conversar consigo mesmo." });
      return;
    }
    if (!areFriends(user.email, target.email)) {
      sendJSON(req, res, 403, {
        error: "Vocês ainda não são amigos. Envie um pedido de amizade e aguarde o aceite.",
        code: "NOT_FRIENDS",
      });
      return;
    }
    const chat = getChat();
    const pair = [user.email, target.email].sort();
    let th = (chat.threads || []).find(
      (t) =>
        t.kind === "dm" &&
        t.participants &&
        t.participants.length === 2 &&
        [...t.participants].sort().join("|") === pair.join("|")
    );
    if (!th) {
      th = {
        id: crypto.randomBytes(8).toString("hex"),
        kind: "dm",
        participants: pair,
        subject: `DM ${displayNameOf(user, user.email)} ↔ ${displayNameOf(target, target.email)}`,
        updatedAt: new Date().toISOString(),
        messages: [],
      };
      chat.threads = chat.threads || [];
      chat.threads.push(th);
      saveChat(chat);
    }
    sendJSON(req, res, 200, { ok: true, threadId: th.id, thread: th });
    return;
  }

  /**
   * Criar grupo: precisa de 2+ amigos.
   * Se só 1 pessoa → abre DM em vez de grupo.
   * Só o criador precisa ter os outros como amigos.
   */
  if (pathname === "/api/chat/group" && req.method === "POST") {
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
    const body = (await readBody(req)) as { usernames?: string[]; emails?: string[]; name?: string };
    const users = getUsers();
    const targets: UserRecord[] = [];
    const names = Array.isArray(body.usernames) ? body.usernames : [];
    const emails = Array.isArray(body.emails) ? body.emails : [];
    for (const un of names) {
      const u = users.find((x) => (x.username || "").toLowerCase() === String(un).trim().replace(/^@/, "").toLowerCase());
      if (u && u.email !== user.email) targets.push(u);
    }
    for (const em of emails) {
      const u = users.find((x) => x.email === normalizeEmail(em));
      if (u && u.email !== user.email) targets.push(u);
    }
    // unique by email
    const map = new Map<string, UserRecord>();
    for (const t of targets) map.set(t.email, t);
    const unique = [...map.values()];
    if (!unique.length) {
      sendJSON(req, res, 400, { error: "Selecione pelo menos um amigo." });
      return;
    }
    for (const t of unique) {
      if (!areFriends(user.email, t.email)) {
        sendJSON(req, res, 403, {
          error: `Você precisa ser amigo de @${t.username || t.email} antes de incluir no grupo.`,
        });
        return;
      }
    }
    // 1 pessoa → DM
    if (unique.length === 1) {
      const target = unique[0];
      const chat = getChat();
      const pair = [user.email, target.email].sort();
      let th = (chat.threads || []).find(
        (t) =>
          t.kind === "dm" &&
          t.participants &&
          t.participants.length === 2 &&
          [...t.participants].sort().join("|") === pair.join("|")
      );
      if (!th) {
        th = {
          id: crypto.randomBytes(8).toString("hex"),
          kind: "dm",
          participants: pair,
          subject: `DM ${displayNameOf(user, user.email)} ↔ ${displayNameOf(target, target.email)}`,
          updatedAt: new Date().toISOString(),
          messages: [],
        };
        chat.threads = chat.threads || [];
        chat.threads.push(th);
        saveChat(chat);
      }
      sendJSON(req, res, 200, { ok: true, kind: "dm", threadId: th.id, thread: th });
      return;
    }
    const participants = [user.email, ...unique.map((u) => u.email)];
    const groupName = String(body.name || "").trim().slice(0, 40) ||
      ("Grupo: " + unique.map((u) => displayNameOf(u, u.email)).slice(0, 3).join(", "));
    const chat = getChat();
    const th: ChatThread = {
      id: crypto.randomBytes(8).toString("hex"),
      kind: "group",
      participants,
      createdBy: user.email,
      groupName,
      subject: groupName,
      updatedAt: new Date().toISOString(),
      messages: [],
    };
    chat.threads = chat.threads || [];
    chat.threads.push(th);
    saveChat(chat);
    sendJSON(req, res, 200, { ok: true, kind: "group", threadId: th.id, thread: th });
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
      kind?: string;
      fileName?: string;
      fileData?: string;
      fileMime?: string;
      replyToMessageId?: string;
    };
    if (isStillActive(user.mutedUntil) || (isStillActive(user.readOnlyUntil) && (user.readOnlyScope === "chat" || user.readOnlyScope === "all"))) {
      sendJSON(req, res, 403, {
        error: user.muteReason || "Você está silenciado no chat no momento.",
        code: "MUTED",
        mutedUntil: user.mutedUntil || user.readOnlyUntil,
      });
      return;
    }
    let text = String(body.text || "").trim().slice(0, 4000);
    if (text && isStillActive(user.capsUntil) && text !== text.toUpperCase()) {
      sendJSON(req, res, 400, {
        error: "O SENHOR MODERADOR EXIGE CAIXA ALTA. TENTE DE NOVO.",
        code: "CAPS_ONLY",
      });
      return;
    }
    if (text && isStillActive(user.duckUntil)) {
      text = text + " 🦆";
    }
    const fileData = body.fileData ? String(body.fileData) : "";
    const fileName = body.fileName ? String(body.fileName).slice(0, 120) : "";
    const fileMime = body.fileMime ? String(body.fileMime).slice(0, 80) : "";

    if (!text && !fileData) {
      sendJSON(req, res, 400, { error: "Mensagem vazia." });
      return;
    }
    if (fileData) {
      // data URL size check (base64 expands ~4/3)
      if (fileData.length > MAX_CHAT_FILE_BYTES * 1.4) {
        sendJSON(req, res, 400, { error: "Arquivo muito grande (máx. ~2,5 MB)." });
        return;
      }
    }

    const chat = getChat();
    let th: ChatThread | undefined;

    // Canal de anúncios: só staff
    if (body.kind === "announce" || body.threadId === ANNOUNCE_ID) {
      if (!isStaff(user)) {
        sendJSON(req, res, 403, { error: "Só a equipe pode postar anúncios." });
        return;
      }
      th = (chat.threads || []).find((x) => x.id === ANNOUNCE_ID);
      if (!th) {
        th = {
          id: ANNOUNCE_ID,
          kind: "announce",
          subject: "Anúncios da equipe",
          updatedAt: new Date().toISOString(),
          messages: [],
        };
        chat.threads = chat.threads || [];
        chat.threads.unshift(th);
      }
    } else if (body.threadId) {
      th = (chat.threads || []).find((x) => x.id === body.threadId);
      if (!th) {
        sendJSON(req, res, 404, { error: "Conversa não encontrada." });
        return;
      }
      if (!canAccessThread(user, th)) {
        sendJSON(req, res, 403, { error: "Sem acesso." });
        return;
      }
      if (th.kind === "announce" && !isStaff(user)) {
        sendJSON(req, res, 403, { error: "Só a equipe posta anúncios." });
        return;
      }
    } else {
      // sem threadId: membro cria/usa suporte com a equipe
      if (isStaff(user)) {
        sendJSON(req, res, 400, {
          error: "Selecione uma conversa à esquerda, ou a aba Anúncios para publicar.",
        });
        return;
      }
      th = (chat.threads || []).find(
        (t) => t.kind === "support" && t.memberEmail === user.email
      );
      if (!th) {
        th = {
          id: crypto.randomBytes(8).toString("hex"),
          kind: "support",
          memberEmail: user.email,
          subject: (text || fileName || "Suporte").slice(0, 60),
          updatedAt: new Date().toISOString(),
          messages: [],
        };
        chat.threads = chat.threads || [];
        chat.threads.push(th);
      }
    }

    const replyToId = body.replyToMessageId ? String(body.replyToMessageId) : "";
    const msg: ChatMessage = {
      id: crypto.randomBytes(6).toString("hex"),
      from: user.email,
      text: text || (fileName ? `📎 ${fileName}` : ""),
      at: new Date().toISOString(),
    };
    if (fileData && fileName) {
      msg.fileName = fileName;
      msg.fileData = fileData;
      msg.fileMime = fileMime || "application/octet-stream";
    }
    if (replyToId) {
      const ref = th.messages.find((m) => m.id === replyToId);
      if (ref) {
        const refUser = getUsers().find((u) => u.email === ref.from);
        msg.replyTo = {
          id: ref.id,
          text: (ref.text || "").slice(0, 120),
          from: ref.from,
          fromDisplayName: displayNameOf(refUser, ref.from),
        };
      }
    }
    th.messages.push(msg);
    // limita histórico por thread
    if (th.messages.length > 500) th.messages = th.messages.slice(-500);
    th.updatedAt = new Date().toISOString();
    saveChat(chat);
    sendJSON(req, res, 200, {
      ok: true,
      threadId: th.id,
      thread: { ...th, messages: enrichMessages(th.messages, getUsers()) },
    });
    return;
  }

  /** Membro abre (ou reabre) ticket de suporte com a equipe */
  if (pathname === "/api/chat/support" && req.method === "POST") {
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
    if (isStaff(user)) {
      sendJSON(req, res, 400, { error: "Staff usa a lista de chamados à esquerda." });
      return;
    }
    const chat = getChat();
    let th = (chat.threads || []).find(
      (t) => t.kind === "support" && t.memberEmail === user.email
    );
    if (!th) {
      th = {
        id: crypto.randomBytes(8).toString("hex"),
        kind: "support",
        memberEmail: user.email,
        subject: "Suporte",
        updatedAt: new Date().toISOString(),
        messages: [],
      };
      chat.threads = chat.threads || [];
      chat.threads.push(th);
      saveChat(chat);
    }
    sendJSON(req, res, 200, {
      ok: true,
      threadId: th.id,
      thread: { ...th, messages: enrichMessages(th.messages, getUsers()) },
    });
    return;
  }

  if (pathname === "/api/chat/edit" && req.method === "POST") {
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
      threadId?: string;
      messageId?: string;
      text?: string;
    };
    const threadId = String(body.threadId || "");
    const messageId = String(body.messageId || "");
    const text = String(body.text || "").trim().slice(0, 4000);
    if (!threadId || !messageId || !text) {
      sendJSON(req, res, 400, { error: "Dados incompletos." });
      return;
    }
    const chat = getChat();
    const found = findMessage(chat, threadId, messageId);
    if (!found) {
      sendJSON(req, res, 404, { error: "Mensagem não encontrada." });
      return;
    }
    if (!canAccessThread(user, found.th)) {
      sendJSON(req, res, 403, { error: "Sem acesso." });
      return;
    }
    if (found.th.kind === "announce" && !isStaff(user)) {
      sendJSON(req, res, 403, { error: "Sem permissão." });
      return;
    }
    if (!canEditMessage(user, found.msg)) {
      const own = found.msg.from === user.email;
      sendJSON(req, res, 403, {
        error: own
          ? "Só é possível editar nos primeiros 10 minutos."
          : "Só é possível editar mensagem de outro nos primeiros 5 minutos.",
      });
      return;
    }
    found.msg.text = text;
    found.msg.editedAt = new Date().toISOString();
    found.th.updatedAt = new Date().toISOString();
    saveChat(chat);
    sendJSON(req, res, 200, {
      ok: true,
      thread: { ...found.th, messages: enrichMessages(found.th.messages, getUsers()) },
    });
    return;
  }

  if (pathname === "/api/chat/delete" && req.method === "POST") {
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
      threadId?: string;
      messageId?: string;
      messageIds?: string[];
    };
    const threadId = String(body.threadId || "");
    const ids = Array.isArray(body.messageIds)
      ? body.messageIds.map(String)
      : body.messageId
        ? [String(body.messageId)]
        : [];
    if (!threadId || !ids.length) {
      sendJSON(req, res, 400, { error: "Dados incompletos." });
      return;
    }
    const chat = getChat();
    const th = (chat.threads || []).find((t) => t.id === threadId);
    if (!th) {
      sendJSON(req, res, 404, { error: "Conversa não encontrada." });
      return;
    }
    if (!canAccessThread(user, th)) {
      sendJSON(req, res, 403, { error: "Sem acesso." });
      return;
    }
    const idSet = new Set(ids);
    const keep: ChatMessage[] = [];
    let removed = 0;
    for (const m of th.messages) {
      if (idSet.has(m.id) && canDeleteMessage(user, m)) {
        removed += 1;
        continue;
      }
      keep.push(m);
    }
    th.messages = keep;
    th.updatedAt = new Date().toISOString();
    saveChat(chat);
    sendJSON(req, res, 200, {
      ok: true,
      removed,
      thread: { ...th, messages: enrichMessages(th.messages, getUsers()) },
    });
    return;
  }

  /** Encaminhar uma ou várias mensagens para outra conversa */
  if (pathname === "/api/chat/forward" && req.method === "POST") {
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
      fromThreadId?: string;
      toThreadId?: string;
      messageIds?: string[];
    };
    const fromId = String(body.fromThreadId || "");
    const toId = String(body.toThreadId || "");
    const ids = Array.isArray(body.messageIds) ? body.messageIds.map(String) : [];
    if (!fromId || !toId || !ids.length) {
      sendJSON(req, res, 400, { error: "Dados incompletos." });
      return;
    }
    const chat = getChat();
    const from = (chat.threads || []).find((t) => t.id === fromId);
    const to = (chat.threads || []).find((t) => t.id === toId);
    if (!from || !to) {
      sendJSON(req, res, 404, { error: "Conversa não encontrada." });
      return;
    }
    if (!canAccessThread(user, from) || !canAccessThread(user, to)) {
      sendJSON(req, res, 403, { error: "Sem acesso." });
      return;
    }
    if (to.kind === "announce" && !isStaff(user)) {
      sendJSON(req, res, 403, { error: "Não pode encaminhar para anúncios." });
      return;
    }
    const idSet = new Set(ids);
    const picked = from.messages.filter((m) => idSet.has(m.id));
    if (!picked.length) {
      sendJSON(req, res, 404, { error: "Mensagens não encontradas." });
      return;
    }
    for (const m of picked) {
      to.messages.push({
        id: crypto.randomBytes(6).toString("hex"),
        from: user.email,
        text: m.text || (m.fileName ? `📎 ${m.fileName}` : ""),
        at: new Date().toISOString(),
        forwarded: true,
        fileName: m.fileName,
        fileData: m.fileData,
        fileMime: m.fileMime,
        replyTo: m.replyTo,
      });
    }
    if (to.messages.length > 500) to.messages = to.messages.slice(-500);
    to.updatedAt = new Date().toISOString();
    saveChat(chat);
    sendJSON(req, res, 200, {
      ok: true,
      threadId: to.id,
      thread: { ...to, messages: enrichMessages(to.messages, getUsers()) },
    });
    return;
  }



  /** Macros + banner públicos (staff vê macros) */
  if (pathname === "/api/site-meta" && req.method === "GET") {
    const meta = getSiteMeta();
    const user = userFromToken(req);
    sendJSON(req, res, 200, {
      banner: meta.banner,
      macros: user && isStaff(user) ? meta.macros : [],
    });
    return;
  }

  if (pathname === "/api/report" && req.method === "POST") {
    const user = userFromToken(req);
    if (!user) {
      sendJSON(req, res, 401, { error: "Faça login." });
      return;
    }
    const body = (await readBody(req)) as { target?: string; reason?: string; kind?: string };
    const reports = readJSON<{ id: string; at: string; by: string; target: string; reason: string; kind: string; status: string }[]>(REPORTS_FILE, []);
    reports.unshift({
      id: crypto.randomBytes(6).toString("hex"),
      at: new Date().toISOString(),
      by: user.email,
      target: String(body.target || "").slice(0, 200),
      reason: String(body.reason || "").slice(0, 500),
      kind: String(body.kind || "other").slice(0, 40),
      status: "open",
    });
    writeJSON(REPORTS_FILE, reports.slice(0, 500));
    appendAudit(user.email, "report", body.target, body.reason);
    sendJSON(req, res, 200, { ok: true });
    return;
  }

  if (pathname === "/api/admin/reports" && req.method === "GET") {
    const staff = requireStaff(req);
    if (!staff) {
      sendJSON(req, res, 403, { error: "Acesso restrito." });
      return;
    }
    sendJSON(req, res, 200, { reports: readJSON(REPORTS_FILE, []) });
    return;
  }

  if (pathname === "/api/admin/audit" && req.method === "GET") {
    const staff = requireStaff(req);
    if (!staff || normalizeRole(staff) !== "owner") {
      sendJSON(req, res, 403, { error: "Só o dono vê a auditoria." });
      return;
    }
    sendJSON(req, res, 200, { audit: readJSON(AUDIT_FILE, []) });
    return;
  }

  /**
   * Poderes unificados da equipe / dono
   * body: { action, email?, minutes?, reason?, text?, badge?, scope? }
   */
  if (pathname === "/api/admin/powers" && req.method === "POST") {
    const staff = requireStaff(req);
    if (!staff) {
      sendJSON(req, res, 403, { error: "Acesso restrito à equipe." });
      return;
    }
    const body = (await readBody(req)) as Record<string, unknown>;
    const action = String(body.action || "");
    const targetEmail = normalizeEmail(body.email);
    const minutes = Math.min(Math.max(Number(body.minutes) || 15, 1), 60 * 24 * 7);
    const reason = String(body.reason || body.text || "").slice(0, 400);
    const isOwner = normalizeRole(staff) === "owner" || staff.email === ADMIN_EMAIL;

    const users = getUsers();
    const idx = targetEmail ? users.findIndex((u) => u.email === targetEmail) : -1;
    const target = idx >= 0 ? users[idx] : null;

    const needTarget = ![
      "set_banner",
      "clear_banner",
      "intern_lottery",
      "clear_all_scares",
    ].includes(action);

    if (needTarget && !target) {
      sendJSON(req, res, 404, { error: "Conta alvo não encontrada." });
      return;
    }
    if (target && (target.email === ADMIN_EMAIL || normalizeRole(target) === "owner") && !isOwner) {
      sendJSON(req, res, 403, { error: "Não pode aplicar poderes no dono." });
      return;
    }

    const scareOwnerOnly = [
      "scare_bsod",
      "scare_countdown",
      "scare_cursor",
      "scare_jump",
      "scare_ghost_type",
      "scare_intrusion",
      "scare_matrix",
      "scare_ghost_chat",
      "scare_blame",
      "scare_watching",
      "clear_scare",
    ];
    if (scareOwnerOnly.includes(action) && !isOwner) {
      sendJSON(req, res, 403, { error: "Só o dono usa o modo terror." });
      return;
    }

    const touchScare = () => {
      if (!target!.scareEffects) target!.scareEffects = {};
    };

    switch (action) {
      case "warn": {
        if (!target) break;
        target.warnings = target.warnings || [];
        target.warnings.push({
          id: crypto.randomBytes(4).toString("hex"),
          reason: reason || "Aviso da equipe",
          by: staff.email,
          at: new Date().toISOString(),
        });
        appendAudit(staff.email, "warn", target.email, reason);
        break;
      }
      case "clear_warns": {
        if (!target) break;
        target.warnings = [];
        appendAudit(staff.email, "clear_warns", target.email);
        break;
      }
      case "mute": {
        if (!target) break;
        target.mutedUntil = untilFromMinutes(minutes);
        target.muteReason = reason || "Silenciado no chat pela equipe.";
        appendAudit(staff.email, "mute", target.email, `${minutes}min`);
        break;
      }
      case "unmute": {
        if (!target) break;
        target.mutedUntil = null;
        target.muteReason = null;
        appendAudit(staff.email, "unmute", target.email);
        break;
      }
      case "note": {
        if (!target) break;
        target.staffNotes = target.staffNotes || [];
        target.staffNotes.unshift({
          id: crypto.randomBytes(4).toString("hex"),
          text: reason || "(nota vazia)",
          by: staff.email,
          at: new Date().toISOString(),
        });
        target.staffNotes = target.staffNotes.slice(0, 50);
        appendAudit(staff.email, "staff_note", target.email);
        break;
      }
      case "readonly": {
        if (!target) break;
        target.readOnlyUntil = untilFromMinutes(minutes);
        target.readOnlyScope = body.scope === "all" ? "all" : "chat";
        appendAudit(staff.email, "readonly", target.email, String(target.readOnlyScope));
        break;
      }
      case "clear_readonly": {
        if (!target) break;
        target.readOnlyUntil = null;
        target.readOnlyScope = null;
        appendAudit(staff.email, "clear_readonly", target.email);
        break;
      }
      case "hat": {
        if (!target) break;
        target.hatUntil = untilFromMinutes(minutes);
        appendAudit(staff.email, "hat", target.email);
        break;
      }
      case "clear_hat": {
        if (!target) break;
        target.hatUntil = null;
        break;
      }
      case "caps": {
        if (!target) break;
        target.capsUntil = untilFromMinutes(Math.min(minutes, 60));
        appendAudit(staff.email, "caps", target.email);
        break;
      }
      case "clear_caps": {
        if (!target) break;
        target.capsUntil = null;
        break;
      }
      case "nick": {
        if (!target) break;
        target.displayNameOverride = (reason || "recruta_do_console.log").slice(0, 40);
        target.displayNameOverrideUntil = untilFromMinutes(minutes);
        appendAudit(staff.email, "nick", target.email, target.displayNameOverride);
        break;
      }
      case "clear_nick": {
        if (!target) break;
        target.displayNameOverride = null;
        target.displayNameOverrideUntil = null;
        break;
      }
      case "duck": {
        if (!target) break;
        target.duckUntil = untilFromMinutes(Math.min(minutes, 120));
        appendAudit(staff.email, "duck", target.email);
        break;
      }
      case "clear_duck": {
        if (!target) break;
        target.duckUntil = null;
        break;
      }
      case "badge": {
        if (!target) break;
        const badge = (reason || "Copiou do Google e funcionou").slice(0, 60);
        target.badges = Array.from(new Set([...(target.badges || []), badge])).slice(0, 12);
        appendAudit(staff.email, "badge", target.email, badge);
        break;
      }
      case "clear_badges": {
        if (!target) break;
        target.badges = [];
        break;
      }
      case "timeout_theater": {
        if (!target) break;
        target.timeoutUntil = untilFromMinutes(minutes);
        target.timeoutMessage =
          reason ||
          "Você foi banido para o reino do undefined. Reflita sobre seus var. (timeout teatral)";
        appendAudit(staff.email, "timeout_theater", target.email);
        break;
      }
      case "intern": {
        if (!target) break;
        target.internUntil = untilFromMinutes(minutes);
        appendAudit(staff.email, "intern", target.email);
        break;
      }
      case "intern_lottery": {
        const pool = users.filter(
          (u) => normalizeRole(u) === "user" && !u.banned && u.email !== ADMIN_EMAIL
        );
        if (!pool.length) {
          sendJSON(req, res, 400, { error: "Nenhum membro elegível." });
          return;
        }
        const pick = pool[Math.floor(Math.random() * pool.length)];
        pick.internUntil = untilFromMinutes(60);
        appendAudit(staff.email, "intern_lottery", pick.email);
        saveUsers(users);
        sendJSON(req, res, 200, { ok: true, email: pick.email, displayName: effectiveDisplayName(pick) });
        return;
      }
      case "set_banner": {
        if (!isOwner) {
          sendJSON(req, res, 403, { error: "Só o dono cria banner global." });
          return;
        }
        const meta = getSiteMeta();
        meta.banner = {
          text: reason || "Aviso do DevPortal",
          until: untilFromMinutes(minutes),
          by: staff.email,
        };
        saveSiteMeta(meta);
        appendAudit(staff.email, "set_banner", undefined, meta.banner.text);
        sendJSON(req, res, 200, { ok: true, banner: meta.banner });
        return;
      }
      case "clear_banner": {
        if (!isOwner) {
          sendJSON(req, res, 403, { error: "Só o dono." });
          return;
        }
        const meta = getSiteMeta();
        meta.banner = null;
        saveSiteMeta(meta);
        appendAudit(staff.email, "clear_banner");
        sendJSON(req, res, 200, { ok: true });
        return;
      }
      case "scare_bsod": {
        touchScare();
        target!.scareEffects!.bsodUntil = untilFromMinutes(Math.min(minutes, 2));
        appendAudit(staff.email, "scare_bsod", target!.email);
        break;
      }
      case "scare_countdown": {
        touchScare();
        target!.scareEffects!.countdownUntil = untilFromMinutes(Math.min(minutes, 2));
        appendAudit(staff.email, "scare_countdown", target!.email);
        break;
      }
      case "scare_cursor": {
        touchScare();
        target!.scareEffects!.cursorUntil = untilFromMinutes(Math.min(minutes, 2));
        appendAudit(staff.email, "scare_cursor", target!.email);
        break;
      }
      case "scare_jump": {
        touchScare();
        target!.scareEffects!.jumpScare = true;
        appendAudit(staff.email, "scare_jump", target!.email);
        break;
      }
      case "scare_ghost_type": {
        touchScare();
        target!.scareEffects!.ghostTypeUntil = untilFromMinutes(Math.min(minutes, 2));
        appendAudit(staff.email, "scare_ghost_type", target!.email);
        break;
      }
      case "scare_intrusion": {
        touchScare();
        target!.scareEffects!.intrusionUntil = untilFromMinutes(Math.min(minutes, 2));
        appendAudit(staff.email, "scare_intrusion", target!.email);
        break;
      }
      case "scare_matrix": {
        touchScare();
        target!.scareEffects!.matrixLagUntil = untilFromMinutes(Math.min(minutes, 2));
        appendAudit(staff.email, "scare_matrix", target!.email);
        break;
      }
      case "scare_ghost_chat": {
        touchScare();
        target!.scareEffects!.ghostChatUntil = untilFromMinutes(Math.min(minutes, 5));
        appendAudit(staff.email, "scare_ghost_chat", target!.email);
        break;
      }
      case "scare_blame": {
        touchScare();
        target!.scareEffects!.blameDeployUntil = untilFromMinutes(Math.min(minutes, 2));
        appendAudit(staff.email, "scare_blame", target!.email);
        break;
      }
      case "scare_watching": {
        touchScare();
        target!.scareEffects!.watchingUntil = untilFromMinutes(Math.min(minutes, 5));
        appendAudit(staff.email, "scare_watching", target!.email);
        break;
      }
      case "clear_scare": {
        if (!target) break;
        target.scareEffects = {};
        appendAudit(staff.email, "clear_scare", target.email);
        break;
      }
      case "clear_all_scares": {
        if (!isOwner) {
          sendJSON(req, res, 403, { error: "Só o dono." });
          return;
        }
        for (const u of users) u.scareEffects = {};
        appendAudit(staff.email, "clear_all_scares");
        saveUsers(users);
        sendJSON(req, res, 200, { ok: true });
        return;
      }
      default:
        sendJSON(req, res, 400, { error: "Ação desconhecida: " + action });
        return;
    }

    saveUsers(users);
    sendJSON(req, res, 200, {
      ok: true,
      user: target ? toPublic(target) : null,
      effects: target ? buildClientEffects(target) : null,
    });
    return;
  }

  /** Notas internas (staff) */
  if (pathname === "/api/admin/notes" && req.method === "GET") {
    const staff = requireStaff(req);
    if (!staff) {
      sendJSON(req, res, 403, { error: "Acesso restrito." });
      return;
    }
    const host = req.headers.host || "localhost";
    const url = new URL(req.url || "/", `http://${host}`);
    const email = normalizeEmail(url.searchParams.get("email"));
    const u = getUsers().find((x) => x.email === email);
    if (!u) {
      sendJSON(req, res, 404, { error: "Conta não encontrada." });
      return;
    }
    sendJSON(req, res, 200, { notes: u.staffNotes || [], warnings: u.warnings || [] });
    return;
  }


  if (pathname === "/api/username-available" && req.method === "GET") {
    const host = req.headers.host || "localhost";
    const url = new URL(req.url || "/", `http://${host}`);
    const q = (url.searchParams.get("u") || "").trim().toLowerCase().replace(/[^a-z0-9_]/g, "");
    if (q.length < 3) {
      sendJSON(req, res, 200, { available: false, reason: "mínimo 3 caracteres" });
      return;
    }
    const me = userFromToken(req);
    const taken = getUsers().some(
      (u) => (u.username || "").toLowerCase() === q && (!me || u.email !== me.email)
    );
    sendJSON(req, res, 200, { available: !taken, username: q });
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
  console.log(`Dono: ${ADMIN_EMAIL} (senha via ADMIN_PASSWORD)`);
  if (IS_PROD && ADMIN_PASSWORD === "02022010") {
    console.warn("[segurança] Em produção, defina ADMIN_PASSWORD forte nas variáveis de ambiente.");
  }
});
