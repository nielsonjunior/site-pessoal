/**
 * Pré-render SEM navegador (SSG): usa o bundle SSR (dist-server/entry-server.js)
 * para renderizar cada rota com react-dom/server e injeta o HTML + as meta do
 * Helmet no template do cliente (dist/index.html), salvando dist/<rota>/index.html.
 *
 * Roda só em Node (confiável na Vercel — sem Chromium). Uso: `npm run build:static`.
 */
import { readFileSync, writeFileSync, mkdirSync, existsSync } from "node:fs";
import { join, dirname } from "node:path";
import { pathToFileURL } from "node:url";
import {
  serviceSlugs,
  citySlugs,
  regularizationSlugs,
} from "./site-routes.mjs";

const distDir = join(process.cwd(), "dist");
const serverEntry = join(process.cwd(), "dist-server", "entry-server.js");

if (!existsSync(join(distDir, "index.html"))) {
  console.error("[prerender] dist/index.html não encontrado. Rode o build antes.");
  process.exit(1);
}
if (!existsSync(serverEntry)) {
  console.error("[prerender] dist-server/entry-server.js não encontrado. Rode o build:server antes.");
  process.exit(1);
}

const template = readFileSync(join(distDir, "index.html"), "utf8");
const { render } = await import(pathToFileURL(serverEntry).href);

// Todas as rotas navegáveis (espelha src/AppShell.tsx).
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

let count = 0;
let failed = 0;
for (const p of paths) {
  try {
    const { html, helmet } = render(p);
    const head = [
      helmet?.title?.toString() ?? "",
      helmet?.meta?.toString() ?? "",
      helmet?.link?.toString() ?? "",
      helmet?.script?.toString() ?? "",
    ].join("");

    const page = template
      .replace("<html", '<html data-prerendered="true"')
      .replace("</head>", `${head}</head>`)
      .replace('<div id="root"></div>', `<div id="root">${html}</div>`);

    const outPath =
      p === "/" ? join(distDir, "index.html") : join(distDir, p, "index.html");
    mkdirSync(dirname(outPath), { recursive: true });
    writeFileSync(outPath, page, "utf8");
    count++;
  } catch (e) {
    console.warn(`[prerender] FALHOU ${p}: ${e?.message ?? e}`);
    failed++;
  }
}

console.log(`[prerender] ${count} rotas geradas, ${failed} falha(s)`);
if (count === 0) process.exit(1);
