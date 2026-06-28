/**
 * Gera public/sitemap.xml a partir das rotas estaticas + dados (servicos/cidades/
 * regularizacao). Roda no build (ver package.json) e via `npm run gen:sitemap`.
 * Lê os slugs por texto (scripts/site-routes.mjs) — sem importar .ts, para o
 * build funcionar em qualquer versão de Node (ex.: Vercel).
 */
import { writeFileSync } from "node:fs";
import { join } from "node:path";
import {
  SITE_URL,
  canonicalPath,
  serviceSlugs,
  citySlugs,
  regularizationSlugs,
} from "./site-routes.mjs";

const loc = (p) => `${SITE_URL}${canonicalPath(p)}`;

// Rotas estaticas indexaveis. /contato é canonicalizada para /orcamento.
const staticRoutes = [
  { path: "/", priority: "1.0", changefreq: "weekly" },
  { path: "/servicos", priority: "0.9", changefreq: "monthly" },
  { path: "/orcamento", priority: "0.9", changefreq: "monthly" },
  { path: "/cidades", priority: "0.8", changefreq: "monthly" },
  { path: "/sobre", priority: "0.7", changefreq: "yearly" },
  { path: "/faq", priority: "0.7", changefreq: "monthly" },
  { path: "/o-que-e-art", priority: "0.6", changefreq: "yearly" },
  { path: "/por-que-contratar-engenheiro", priority: "0.6", changefreq: "yearly" },
  { path: "/requisitos-legais", priority: "0.6", changefreq: "yearly" },
  { path: "/privacidade", priority: "0.3", changefreq: "yearly" },
  { path: "/termos", priority: "0.3", changefreq: "yearly" },
];

const dynamicRoutes = [
  ...serviceSlugs.map((s) => ({ path: `/servicos/${s}`, priority: "0.8", changefreq: "monthly" })),
  ...regularizationSlugs.map((s) => ({
    path: `/servicos/regularizacao-imoveis/${s}`,
    priority: "0.8",
    changefreq: "monthly",
  })),
  ...citySlugs.map((s) => ({ path: `/cidades/${s}`, priority: "0.7", changefreq: "monthly" })),
];

const all = [...staticRoutes, ...dynamicRoutes];
const lastmod = new Date().toISOString().split("T")[0];

const body = all
  .map(
    ({ path, priority, changefreq }) => `  <url>
    <loc>${loc(path)}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
  </url>`,
  )
  .join("\n");

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${body}
</urlset>
`;

writeFileSync(join(process.cwd(), "public", "sitemap.xml"), xml, "utf8");
console.log(`sitemap.xml gerado com ${all.length} URLs (dominio: ${SITE_URL})`);
