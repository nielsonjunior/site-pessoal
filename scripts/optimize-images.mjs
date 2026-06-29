/**
 * Otimiza imagens em public/images SEM mudar os caminhos (mesmos nomes):
 * - logo.png: redimensiona para no máx. 320px no maior lado (é exibido em ~56px).
 * - .jpg: recomprime em qualidade 0.82 nas mesmas dimensões.
 * Só substitui se o arquivo novo ficar menor. Usa o Chromium (canvas) — sem deps.
 * Uso: `node scripts/optimize-images.mjs`
 */
import { chromium } from "playwright";
import { readFileSync, writeFileSync, statSync, readdirSync } from "node:fs";
import { join, extname } from "node:path";

const dir = join(process.cwd(), "public", "images");
const browser = await chromium.launch();
const page = await browser.newPage();
await page.setContent("<!doctype html><html><body></body></html>");

async function reencode(buf, mime, { maxSide = 0, quality = 0.82 } = {}) {
  const b64 = buf.toString("base64");
  const dataUri = `data:${mime};base64,${b64}`;
  const out = await page.evaluate(
    async ({ dataUri, mime, maxSide, quality }) => {
      const img = new Image();
      img.src = dataUri;
      await img.decode();
      let { naturalWidth: w, naturalHeight: h } = img;
      if (maxSide && Math.max(w, h) > maxSide) {
        const r = maxSide / Math.max(w, h);
        w = Math.round(w * r);
        h = Math.round(h * r);
      }
      const c = document.createElement("canvas");
      c.width = w;
      c.height = h;
      const ctx = c.getContext("2d");
      ctx.clearRect(0, 0, w, h);
      ctx.drawImage(img, 0, 0, w, h);
      return c.toDataURL(mime, quality);
    },
    { dataUri, mime, maxSide, quality },
  );
  return Buffer.from(out.split(",")[1], "base64");
}

let saved = 0;
for (const file of readdirSync(dir)) {
  const ext = extname(file).toLowerCase();
  const full = join(dir, file);
  const before = statSync(full).size;
  let out;
  if (file === "logo.png") {
    out = await reencode(readFileSync(full), "image/png", { maxSide: 320 });
  } else if (ext === ".jpg" || ext === ".jpeg") {
    out = await reencode(readFileSync(full), "image/jpeg", { quality: 0.82 });
  } else {
    continue;
  }
  if (out.length < before) {
    writeFileSync(full, out);
    saved += before - out.length;
    console.log(
      `${file}: ${(before / 1024).toFixed(0)}KB -> ${(out.length / 1024).toFixed(0)}KB`,
    );
  } else {
    console.log(`${file}: mantido (${(before / 1024).toFixed(0)}KB, já otimizado)`);
  }
}
await browser.close();
console.log(`Total economizado: ${(saved / 1024).toFixed(0)}KB`);
