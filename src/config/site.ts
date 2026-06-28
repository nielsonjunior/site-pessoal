/**
 * Configuracao central do site (fonte unica de verdade para domnio + NAP).
 * Usado por SEO, canonical, sitemap, JSON-LD e Analytics.
 */
export const SITE = {
  /** Sem barra no final. */
  url: "https://www.npcastilho.eng.br",
  name: "Nielson Pinheiro - Engenheiro Civil",
  shortName: "NP Castilho Engenharia",
  legalName: "Nielson Pinheiro de Castilho Júnior",
  cre021: "CREA 5071806455",
  // Contato (NAP) — manter consistente em todo o site.
  phoneDisplay: "(65) 99694-6861",
  phoneE164: "+5565996946861",
  whatsapp: "5565996946861",
  email: "nielsin.junior@gmail.com",
  instagram: "https://www.instagram.com/npcastilho.eng",
  city: "Cáceres",
  state: "MT",
  region: "BR-MT",
  ogImage: "/images/og-image.jpg",
  /** GA4 Measurement ID (público). Pode ser sobrescrito por VITE_GA_MEASUREMENT_ID. */
  gaMeasurementId: "G-YV10KJ308S",
} as const;

/**
 * Resolve a URL canonica de um caminho. Normaliza barra final e unifica rotas
 * duplicadas (ex.: /contato e /orcamento renderizam a mesma pagina).
 */
const DUPLICATE_CANONICAL: Record<string, string> = {
  "/contato": "/orcamento",
};

export function canonicalUrlFor(pathname: string): string {
  let path = DUPLICATE_CANONICAL[pathname] ?? pathname;
  // remove barra final (exceto raiz)
  if (path.length > 1 && path.endsWith("/")) path = path.slice(0, -1);
  return `${SITE.url}${path}`;
}

/** Garante URL absoluta a partir de um caminho ou URL ja absoluta. */
export function absoluteUrl(pathOrUrl: string): string {
  if (/^https?:\/\//i.test(pathOrUrl)) return pathOrUrl;
  return `${SITE.url}${pathOrUrl.startsWith("/") ? "" : "/"}${pathOrUrl}`;
}
