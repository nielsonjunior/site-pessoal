/**
 * Gera a imagem Open Graph (1200x630) usada no compartilhamento social.
 * Uso: `node scripts/gen-og-image.mjs` (requer o Chromium do Playwright).
 * Saida: public/images/og-image.jpg
 */
import { chromium } from "playwright";
import { readFileSync } from "node:fs";
import { join } from "node:path";

const root = process.cwd();
const logo = readFileSync(join(root, "public/images/logo.png")).toString("base64");
const out = join(root, "public/images/og-image.jpg");

const html = `<!doctype html><html><head><meta charset="utf-8">
<style>
  * { margin:0; padding:0; box-sizing:border-box; font-family: Arial, Helvetica, sans-serif; }
  body { width:1200px; height:630px; overflow:hidden; }
  .card {
    width:1200px; height:630px;
    background: linear-gradient(135deg,#1B3B6C 0%,#0F1A2E 100%);
    color:#fff; padding:70px 80px; position:relative; display:flex; flex-direction:column; justify-content:space-between;
  }
  .top { display:flex; align-items:center; gap:28px; }
  .logo { width:120px; height:120px; border-radius:50%; object-fit:contain; background:#fff; padding:8px; }
  .brand h1 { font-size:40px; font-weight:800; line-height:1.1; }
  .brand p { font-size:24px; color:#F4C430; margin-top:8px; font-weight:600; }
  .headline { font-size:72px; font-weight:800; line-height:1.05; max-width:1000px; }
  .headline span { color:#F4C430; }
  .services { display:flex; flex-wrap:wrap; gap:14px; }
  .chip { background:rgba(255,255,255,.12); border:1px solid rgba(255,255,255,.18); padding:12px 22px; border-radius:999px; font-size:24px; }
  .footer { display:flex; align-items:center; gap:18px; font-size:26px; }
  .dot { width:10px; height:10px; border-radius:50%; background:#F4C430; }
  .bar { position:absolute; left:0; top:0; width:14px; height:100%; background:#F4C430; }
</style></head>
<body>
  <div class="card">
    <div class="bar"></div>
    <div class="top">
      <img class="logo" src="data:image/png;base64,${logo}" />
      <div class="brand">
        <h1>Nielson P. de Castilho Júnior</h1>
        <p>Engenheiro Civil • CREA 5071806455</p>
      </div>
    </div>
    <div class="headline">Engenharia Civil em <span>Cáceres-MT</span> e região</div>
    <div class="services">
      <div class="chip">ART</div>
      <div class="chip">Regularização de Imóveis</div>
      <div class="chip">Reformas &amp; Ampliações</div>
      <div class="chip">Laudos Técnicos</div>
    </div>
    <div class="footer"><span class="dot"></span> (65) 99694-6861 &nbsp;•&nbsp; Orçamento grátis</div>
  </div>
</body></html>`;

const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 1200, height: 630 }, deviceScaleFactor: 1 });
await page.setContent(html, { waitUntil: "networkidle" });
await page.screenshot({ path: out, type: "jpeg", quality: 90, clip: { x: 0, y: 0, width: 1200, height: 630 } });
await browser.close();
console.log("OG image gerada em", out);
