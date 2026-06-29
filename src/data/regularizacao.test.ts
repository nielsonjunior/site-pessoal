import { describe, it, expect } from "vitest";
import {
  regularizationTypes,
  getRegularizationBySlug,
  getAllRegularizationSlugs,
} from "./regularizacao";

describe("data/regularizacao", () => {
  it("tem os 7 tipos de regularização/compliance", () => {
    expect(regularizationTypes).toHaveLength(7);
  });

  it("inclui os tipos esperados (incluindo AVCB)", () => {
    const slugs = getAllRegularizationSlugs();
    expect(slugs).toEqual(
      expect.arrayContaining([
        "desdobro",
        "remembramento",
        "usucapiao",
        "unificacao-de-lote",
        "retificacao-administrativa",
        "instituicao-de-condominio",
        "avcb",
      ]),
    );
  });

  it("todo tipo tem os campos obrigatórios preenchidos", () => {
    for (const t of regularizationTypes) {
      expect(t.id, "id").toBeTruthy();
      expect(t.slug, "slug").toBeTruthy();
      expect(t.title, `title de ${t.slug}`).toBeTruthy();
      expect(t.leigoTitle, `leigoTitle de ${t.slug}`).toBeTruthy();
      expect(t.painHook, `painHook de ${t.slug}`).toBeTruthy();
      expect(t.whatIsIt.length, `whatIsIt de ${t.slug}`).toBeGreaterThan(20);
      expect(t.ifNotResolved.length, `ifNotResolved de ${t.slug}`).toBeGreaterThan(20);
      expect(t.benefit, `benefit de ${t.slug}`).toBeTruthy();
      expect(t.leigoSituacao, `leigoSituacao de ${t.slug}`).toBeTruthy();
      expect(t.icon, `icon de ${t.slug}`).toBeTruthy();
      expect(t.symptoms.length, `symptoms de ${t.slug}`).toBeGreaterThanOrEqual(2);
      expect(t.howWeSolve.length, `howWeSolve de ${t.slug}`).toBeGreaterThanOrEqual(3);
      expect(t.keywords.length, `keywords de ${t.slug}`).toBeGreaterThan(0);
    }
  });

  it("não tem slugs nem ids duplicados", () => {
    const slugs = regularizationTypes.map((t) => t.slug);
    const ids = regularizationTypes.map((t) => t.id);
    expect(new Set(slugs).size).toBe(slugs.length);
    expect(new Set(ids).size).toBe(ids.length);
  });

  it("getRegularizationBySlug funciona e retorna undefined p/ inexistente", () => {
    expect(getRegularizationBySlug("usucapiao")?.title).toContain("Usucapião");
    expect(getRegularizationBySlug("nao-existe")).toBeUndefined();
  });
});
