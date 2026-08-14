# Colocar o DevPortal no ar (grátis)

## Visão geral

| Parte | Tecnologia | Observação |
|--------|------------|------------|
| Frontend | HTML/CSS/JS | Continua no browser (código de interface) |
| Backend | **TypeScript** (`server.ts`) | Auth, sessões, painel moderador |
| Senhas | scrypt | Nunca salvas em texto puro |
| Moderador | `ADMIN_EMAIL` + `ADMIN_PASSWORD` | Só no servidor (variáveis de ambiente) |

O front **não** guarda a senha do admin. Quem valida é só o backend.

---

## 1. Local (TypeScript)

```bash
npm install
npm run dev
```

Abra: http://localhost:3847

Moderador padrão (troque em produção):

- e-mail: `r.guts`
- senha: `02022010`

---

## 2. Deploy grátis no Render.com (recomendado)

1. Crie conta em [https://render.com](https://render.com) (plano free).
2. Suba este projeto no **GitHub** (sem a pasta `node_modules` e sem `.env`).
3. No Render: **New → Web Service** → conecte o repositório.
4. Configure:

| Campo | Valor |
|--------|--------|
| Runtime | Node |
| Build Command | `npm install && npm run build` |
| Start Command | `npm start` |
| Instance | Free |

5. **Environment variables** (Environment):

| Key | Value |
|-----|--------|
| `NODE_ENV` | `production` |
| `ADMIN_EMAIL` | `r.guts` |
| `ADMIN_PASSWORD` | *sua senha forte* (pode manter `02022010` se quiser) |
| `ALLOWED_ORIGINS` | `https://SEU-SERVICO.onrender.com` |

6. Deploy. O link fica parecido com:
   `https://devportal-xxxx.onrender.com`

### Atenção (plano free)

- O serviço **dorme** após ~15 min sem acesso; a primeira visita depois pode demorar ~30–60s.
- O disco do free **não é permanente**: em alguns redeploys o arquivo `data/users.json` pode ser recriado. Para portfólio/demo está ok; para produção séria depois migre para Postgres (Neon grátis + driver `pg`).

---

## 3. Alternativas grátis

- **Railway** / **Koyeb** / **Fly.io** — mesmo app Node; configure as mesmas env vars.
- **Frontend** no Netlify/Pages e API só no Render também funciona se `ALLOWED_ORIGINS` incluir o domínio do front.

---

## 4. Segurança do “banco” e do admin

O que já está no `server.ts`:

- Senhas com **scrypt** + salt
- Comparação em tempo constante
- Rate limit em login/register
- Bloqueio temporário após várias falhas
- Sessão por token opaco (não JWT com dados sensíveis)
- Painel `/api/admin/users` só se `role === admin` **e** e-mail === `ADMIN_EMAIL`
- E-mail `r.guts` **não pode ser registrado** por visitantes
- Headers: `X-Frame-Options`, `CSP`, `HSTS` em produção
- Em produção o caminho do arquivo de usuários **não é exposto** na API

O que **você** deve fazer:

1. Não commitar `.env`
2. Usar HTTPS (Render já entrega)
3. Senha de admin só em variável de ambiente no painel do host
4. Não compartilhar o token de sessão

---

## 5. Por que o front ainda é JavaScript?

TypeScript no **browser** exige etapa de build (Vite/Webpack). O que precisa de tipagem forte e proteção é o **backend** — é lá que vive a autenticação e o “banco”.

Se quiser migrar o `script.js` / `data.js` para TS no futuro, o caminho natural é um Vite + `tsc` gerando a pasta `public/`.
