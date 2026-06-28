/**
 * Lê rotas/slugs e o domínio a partir dos arquivos-fonte SEM importar .ts
 * (evita depender de type-stripping do Node, que varia por versão — importante
 * para o build na Vercel). Extrai por leitura de texto.
 */
import { readFileSync } from "node:fs";
import { join } from "node:path";

const root = process.cwd();

function slugsFrom(relPath) {
  const txt = readFileSync(join(root, relPath), "utf8");
  const re = /slug:\s*["'`]([^"'`]+)["'`]/g;
  const out = [];
  let m;
  while ((m = re.exec(txt))) out.push(m[1]);
  return out;
}

function readSiteUrl() {
  const txt = readFileSync(join(root, "src/config/site.ts"), "utf8");
  const m = txt.match(/url:\s*["'`]([^"'`]+)["'`]/);
  return (m ? m[1] : "https://www.npcastilho.eng.br").replace(/\/$/, "");
}

export const SITE_URL = readSiteUrl();
export const serviceSlugs = slugsFrom("src/data/services.ts");
export const citySlugs = slugsFrom("src/data/cities.ts");
export const regularizationSlugs = slugsFrom("src/data/regularizacao.ts");

// Espelha canonicalUrlFor de src/config/site.ts (rota duplicada + barra final).
const DUPLICATE = { "/contato": "/orcamento" };
export function canonicalPath(p) {
  let path = DUPLICATE[p] ?? p;
  if (path.length > 1 && path.endsWith("/")) path = path.slice(0, -1);
  return path;
}
