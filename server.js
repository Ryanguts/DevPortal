/**
 * Bootstrap: em produção use `npm run build && npm start` (dist/server.js).
 * Em desenvolvimento: `npm run dev` (tsx server.ts).
 * Este arquivo só avisa se alguém rodar `node server.js` sem build.
 */
console.error(`
DevPortal migrou o backend para TypeScript (server.ts).

Local:
  npm install
  npm run dev

Produção:
  npm install
  npm run build
  npm start

Deploy gratuito: veja DEPLOY.md (Render.com)
`);
process.exit(1);
