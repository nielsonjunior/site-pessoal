/**
 * Gera a imagem de "área de atendimento" usada na seção Cidades.
 * Uso: `node scripts/gen-map-image.mjs` (requer o Chromium do Playwright).
 * Saída: public/images/map-caceres.jpg
 */
import { chromium } from "playwright";
import { readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const root = process.cwd();
const out = join(root, "public/images/map-caceres.jpg");

// Lê os nomes das cidades de src/data/cities.ts (sem importar .ts).
const citiesTxt = readFileSync(join(root, "src/data/cities.ts"), "utf8");
const names = [...citiesTxt.matchAll(/name:\s*"([^"]+)"/g)].map((m) => m[1]);

const chips = names
  .map((n) => `<div class="chip">${n}</div>`)
  .join("");

const html = `<!doctype html><html><head><meta charset="utf-8">
<style>
  * { margin:0; padding:0; box-sizing:border-box; font-family: Arial, Helvetica, sans-serif; }
  body { width:1000px; height:600px; overflow:hidden; }
  .card { position:relative; width:1000px; height:600px;
    background: linear-gradient(135deg,#1B3B6C 0%,#0F1A2E 100%);
    color:#fff; padding:60px; display:flex; flex-direction:column; justify-content:center; overflow:hidden; }
  /* grade estilo mapa */
  .grid { position:absolute; inset:0; opacity:.12;
    background-image: linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg,#fff 1px, transparent 1px);
    background-size: 48px 48px; }
  .pin { position:absolute; right:70px; top:60px; width:120px; height:120px; background:#F4C430; border-radius:50% 50% 50% 0;
    transform: rotate(-45deg); box-shadow:0 12px 30px rgba(0,0,0,.35); }
  .pin::after { content:""; position:absolute; left:50%; top:50%; transform:translate(-50%,-50%); width:48px; height:48px; background:#0F1A2E; border-radius:50%; }
  .tag { display:inline-block; background:rgba(244,196,48,.2); color:#F4C430; padding:8px 18px; border-radius:999px; font-size:22px; font-weight:600; margin-bottom:18px; }
  h1 { font-size:54px; font-weight:800; line-height:1.05; max-width:760px; margin-bottom:10px; }
  h1 span { color:#F4C430; }
  p.sub { font-size:24px; color:rgba(255,255,255,.8); margin-bottom:28px; }
  .chips { display:flex; flex-wrap:wrap; gap:12px; max-width:820px; position:relative; z-index:2; }
  .chip { background:rgba(255,255,255,.12); border:1px solid rgba(255,255,255,.18); padding:8px 16px; border-radius:999px; font-size:20px; }
  .bar { position:absolute; left:0; top:0; width:14px; height:100%; background:#F4C430; }
</style></head>
<body>
  <div class="card">
    <div class="grid"></div>
    <div class="bar"></div>
    <div class="pin"></div>
    <span class="tag">Área de atendimento</span>
    <h1>Cáceres-MT <span>e região</span></h1>
    <p class="sub">Engenharia civil em ${names.length} cidades</p>
    <div class="chips">${chips}</div>
  </div>
</body></html>`;

const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 1000, height: 600 }, deviceScaleFactor: 1 });
await page.setContent(html, { waitUntil: "networkidle" });
await page.screenshot({ path: out, type: "jpeg", quality: 90, clip: { x: 0, y: 0, width: 1000, height: 600 } });
await browser.close();
console.log(`mapa gerado em ${out} (${names.length} cidades)`);
