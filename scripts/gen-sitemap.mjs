/**
 * Gera public/sitemap.xml a partir das rotas estaticas + dados (servicos/cidades).
 * Roda no build (ver package.json) e tambem via `npm run gen:sitemap`.
 * Importa os .ts de dados diretamente (type-stripping nativo do Node >= 22.6).
 */
import { writeFileSync } from "node:fs";
import { join } from "node:path";
import { SITE, canonicalUrlFor } from "../src/config/site.ts";
import { services } from "../src/data/services.ts";
import { cities } from "../src/data/cities.ts";
import { regularizationTypes } from "../src/data/regularizacao.ts";

// Rotas estaticas indexaveis. /contato e omitida (canonical -> /orcamento).
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
  ...services.map((s) => ({ path: `/servicos/${s.slug}`, priority: "0.8", changefreq: "monthly" })),
  ...regularizationTypes.map((t) => ({
    path: `/servicos/regularizacao-imoveis/${t.slug}`,
    priority: "0.8",
    changefreq: "monthly",
  })),
  ...cities.map((c) => ({ path: `/cidades/${c.slug}`, priority: "0.7", changefreq: "monthly" })),
];

const all = [...staticRoutes, ...dynamicRoutes];
const lastmod = new Date().toISOString().split("T")[0];

const body = all
  .map(
    ({ path, priority, changefreq }) => `  <url>
    <loc>${canonicalUrlFor(path)}</loc>
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

const out = join(process.cwd(), "public", "sitemap.xml");
writeFileSync(out, xml, "utf8");
console.log(`sitemap.xml gerado com ${all.length} URLs (dominio: ${SITE.url})`);
