/**
 * Construtores de dados estruturados (JSON-LD / schema.org) para SEO.
 * Fonte de verdade: src/config/site.ts e src/data.
 */
import { SITE, absoluteUrl } from "@/config/site";
import { cities } from "@/data/cities";

export interface BreadcrumbItem {
  name: string;
  path: string;
}

/** Negócio local (engenheiro civil) — vai global em todas as páginas. */
export function localBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": `${SITE.url}/#business`,
    name: SITE.name,
    alternateName: [SITE.shortName, "Engenharia Civil em Cáceres-MT"],
    description:
      "Engenheiro Civil (CREA 5071806455) em Cáceres-MT e região. Engenharia civil, regularização de imóveis (desdobro, usucapião, retificação, instituição de condomínio), ART, AVCB, reformas, ampliações e laudos técnicos.",
    knowsAbout: [
      "Engenharia civil",
      "Regularização de imóveis",
      "Desdobro de lote",
      "Remembramento de lotes",
      "Usucapião",
      "Retificação de área",
      "Instituição de condomínio",
      "ART (Anotação de Responsabilidade Técnica)",
      "AVCB (Corpo de Bombeiros)",
      "Reformas e ampliações",
      "Laudos técnicos",
    ],
    image: absoluteUrl(SITE.ogImage),
    logo: absoluteUrl("/images/logo.png"),
    url: SITE.url,
    telephone: SITE.phoneE164,
    email: SITE.email,
    address: {
      "@type": "PostalAddress",
      addressLocality: SITE.city,
      addressRegion: SITE.state,
      addressCountry: "BR",
    },
    areaServed: cities.map((c) => ({ "@type": "City", name: c.name })),
    founder: { "@type": "Person", name: SITE.legalName },
    sameAs: [SITE.instagram],
    priceRange: "$$",
  };
}

export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: SITE.name,
    url: SITE.url,
    inLanguage: "pt-BR",
  };
}

export function breadcrumbSchema(items: BreadcrumbItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((it, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: it.name,
      item: `${SITE.url}${it.path}`,
    })),
  };
}

export function serviceSchema(args: {
  name: string;
  description: string;
  path: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: args.name,
    description: args.description,
    serviceType: args.name,
    areaServed: `${SITE.city}-${SITE.state}`,
    provider: {
      "@type": "ProfessionalService",
      name: SITE.name,
      telephone: SITE.phoneE164,
    },
    url: `${SITE.url}${args.path}`,
  };
}

export function faqPageSchema(faqs: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: { "@type": "Answer", text: f.answer },
    })),
  };
}
