/**
 * Gera versões WebP das imagens exibidas no site, no tamanho em que aparecem
 * (com variante menor para celular). Os originais (.jpg/.png) ficam: são usados
 * no favicon, no og:image e no JSON-LD.
 *
 * Usa o Chromium do Playwright (canvas) — sem dependência nova.
 * Uso: `node scripts/gen-webp.mjs`
 */
import { chromium } from "playwright";
import { readFileSync, writeFileSync, statSync } from "node:fs";
import { join } from "node:path";

const dir = join(process.cwd(), "public", "images");

// origem → saídas { arquivo, largura, altura? (corta no centro, como object-cover) }
const JOBS = [
  // Exibido como círculo de 48px (header) e 56px (footer): 2x = 112px de altura.
  { src: "logo.png", out: [{ file: "logo-112.webp", w: 112, h: 112 }] },
  {
    src: "about-engineer.jpg",
    out: [
      { file: "about-engineer-640.webp", w: 640 },
      { file: "about-engineer-1248.webp", w: 1248 },
    ],
  },
  {
    src: "about-detail.jpg",
    out: [
      { file: "about-detail-640.webp", w: 640 },
      { file: "about-detail-1248.webp", w: 1248 },
    ],
  },
  {
    src: "map-caceres.jpg",
    out: [
      { file: "map-caceres-640.webp", w: 640 },
      { file: "map-caceres-1000.webp", w: 1000 },
    ],
  },
];

const QUALITY = 0.8;
const mime = (f) => (f.endsWith(".png") ? "image/png" : "image/jpeg");

const browser = await chromium.launch();
const page = await browser.newPage();
await page.setContent("<!doctype html><html><body></body></html>");

for (const job of JOBS) {
  const buf = readFileSync(join(dir, job.src));
  const dataUri = `data:${mime(job.src)};base64,${buf.toString("base64")}`;
  for (const o of job.out) {
    const out = await page.evaluate(
      async ({ dataUri, w, h, q }) => {
        const img = new Image();
        img.src = dataUri;
        await img.decode();
        const iw = img.naturalWidth;
        const ih = img.naturalHeight;
        const W = w;
        const H = h ?? Math.round((ih * w) / iw);
        // object-cover: escala para cobrir W×H e corta o excesso no centro
        const s = Math.max(W / iw, H / ih);
        const dw = iw * s;
        const dh = ih * s;
        const c = document.createElement("canvas");
        c.width = W;
        c.height = H;
        const ctx = c.getContext("2d");
        ctx.imageSmoothingQuality = "high";
        ctx.drawImage(img, (W - dw) / 2, (H - dh) / 2, dw, dh);
        return { url: c.toDataURL("image/webp", q), W, H };
      },
      { dataUri, w: o.w, h: o.h, q: QUALITY },
    );
    if (!out.url.startsWith("data:image/webp")) throw new Error("navegador sem suporte a WebP");
    const bytes = Buffer.from(out.url.split(",")[1], "base64");
    writeFileSync(join(dir, o.file), bytes);
    console.log(
      `${job.src} (${statSync(join(dir, job.src)).size} B) → ${o.file} ${out.W}x${out.H} (${bytes.length} B)`,
    );
  }
}

await browser.close();
