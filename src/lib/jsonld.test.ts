import { describe, it, expect } from "vitest";
import {
  localBusinessSchema,
  websiteSchema,
  breadcrumbSchema,
  serviceSchema,
  faqPageSchema,
} from "./jsonld";
import { cities } from "@/data/cities";

describe("jsonld", () => {
  it("localBusiness: tipo, contato e áreas atendidas (cidades)", () => {
    const s = localBusinessSchema() as Record<string, unknown>;
    expect(s["@type"]).toBe("ProfessionalService");
    expect(s.telephone).toBe("+5565996946861");
    expect(Array.isArray(s.areaServed)).toBe(true);
    expect((s.areaServed as unknown[]).length).toBe(cities.length);
    expect(s.url).toContain("npcastilho.eng.br");
  });

  it("website: tipo e url", () => {
    const s = websiteSchema() as Record<string, unknown>;
    expect(s["@type"]).toBe("WebSite");
    expect(s.url).toContain("npcastilho.eng.br");
  });

  it("breadcrumb: posições sequenciais e URLs absolutas", () => {
    const s = breadcrumbSchema([
      { name: "Início", path: "/" },
      { name: "Serviços", path: "/servicos" },
    ]) as { itemListElement: { position: number; item: string }[] };
    expect(s.itemListElement).toHaveLength(2);
    expect(s.itemListElement[0].position).toBe(1);
    expect(s.itemListElement[1].position).toBe(2);
    expect(s.itemListElement[1].item).toBe(
      "https://www.npcastilho.eng.br/servicos",
    );
  });

  it("service: nome, provider e url absoluta", () => {
    const s = serviceSchema({
      name: "Desdobro de Lote",
      description: "x",
      path: "/servicos/regularizacao-imoveis/desdobro",
    }) as Record<string, any>;
    expect(s["@type"]).toBe("Service");
    expect(s.name).toBe("Desdobro de Lote");
    expect(s.provider["@type"]).toBe("ProfessionalService");
    expect(s.url).toContain("/servicos/regularizacao-imoveis/desdobro");
  });

  it("faqPage: mapeia perguntas e respostas", () => {
    const s = faqPageSchema([
      { question: "P1?", answer: "R1" },
      { question: "P2?", answer: "R2" },
    ]) as { mainEntity: { "@type": string; name: string; acceptedAnswer: { text: string } }[] };
    expect(s["@type"] as unknown).toBe("FAQPage");
    expect(s.mainEntity).toHaveLength(2);
    expect(s.mainEntity[0].name).toBe("P1?");
    expect(s.mainEntity[0].acceptedAnswer.text).toBe("R1");
  });
});
