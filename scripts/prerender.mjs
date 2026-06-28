/**
 * Pre-renderiza cada rota para HTML estatico (SSG via Playwright).
 * Roda DEPOIS do `vite build`. Serve o dist com o preview do Vite, visita cada
 * rota no Chromium, deixa o React + Helmet renderizarem e salva o HTML completo
 * (com title/meta/canonical/conteudo) em dist/<rota>/index.html.
 *
 * Resultado: crawlers e previews sociais recebem HTML pronto; o JS hidrata/
 * re-renderiza normalmente no cliente.
 *
 * Uso: `npm run build:static` (build + prerender).
 */
import { preview } from "vite";
import { chromium } from "playwright";
import { mkdirSync, writeFileSync, existsSync } from "node:fs";
import { join, dirname } from "node:path";
import {
  serviceSlugs,
  citySlugs,
  regularizationSlugs,
} from "./site-routes.mjs";

const distDir = join(process.cwd(), "dist");
if (!existsSync(join(distDir, "index.html"))) {
  console.error("[prerender] dist/ nao encontrado. Rode `npm run build` antes.");
  process.exit(1);
}

// Todas as rotas navegaveis (espelha src/App.tsx).
const staticPaths = [
  "/",
  "/servicos",
  "/sobre",
  "/contato",
  "/orcamento",
  "/cidades",
  "/faq",
  "/landing",
  "/o-que-e-art",
  "/por-que-contratar-engenheiro",
  "/requisitos-legais",
  "/privacidade",
  "/termos",
];
const dynamicPaths = [
  ...serviceSlugs.map((s) => `/servicos/${s}`),
  ...regularizationSlugs.map((s) => `/servicos/regularizacao-imoveis/${s}`),
  ...citySlugs.map((s) => `/cidades/${s}`),
];
const paths = [...staticPaths, ...dynamicPaths];

const server = await preview({ preview: { port: 4173, strictPort: true } });
const base = server.resolvedUrls.local[0].replace(/\/$/, "");

const browser = await chromium.launch();
const page = await browser.newPage();
page.setDefaultNavigationTimeout(30_000);

// IMPORTANTE: capturamos TODAS as rotas primeiro e so depois escrevemos os
// arquivos. Se escrevessemos durante o loop, sobrescrever dist/index.html
// contaminaria as proximas rotas (servidas via fallback SPA do preview).
const captured = [];
for (const p of paths) {
  await page.goto(base + p, { waitUntil: "networkidle" });
  // Dispara as animacoes whileInView (framer-motion, once:true) para o conteudo
  // ficar visivel/presente no snapshot estatico.
  await page.evaluate(async () => {
    window.scrollTo(0, document.body.scrollHeight);
    await new Promise((r) => setTimeout(r, 250));
    window.scrollTo(0, 0);
    await new Promise((r) => setTimeout(r, 150));
    document.documentElement.setAttribute("data-prerendered", "true");
  });
  const html =
    "<!DOCTYPE html>\n" +
    (await page.evaluate(() => document.documentElement.outerHTML));
  const outPath =
    p === "/" ? join(distDir, "index.html") : join(distDir, p, "index.html");
  captured.push({ outPath, html });
}

await browser.close();
await server.httpServer.close();

for (const { outPath, html } of captured) {
  mkdirSync(dirname(outPath), { recursive: true });
  writeFileSync(outPath, html, "utf8");
}
console.log(`[prerender] ${captured.length} rotas geradas em dist/`);
