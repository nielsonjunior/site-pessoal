import { describe, it, expect } from "vitest";
import {
  services,
  getServiceBySlug,
  getAllServiceSlugs,
} from "./services";

describe("data/services", () => {
  it("possui ao menos um servico cadastrado", () => {
    expect(services.length).toBeGreaterThan(0);
  });

  it("todo servico tem os campos obrigatorios preenchidos", () => {
    for (const s of services) {
      expect(s.id, `id de ${s.slug}`).toBeTruthy();
      expect(s.title, `title de ${s.slug}`).toBeTruthy();
      expect(s.slug, "slug").toBeTruthy();
      expect(s.shortDescription).toBeTruthy();
      expect(s.fullDescription).toBeTruthy();
      expect(s.metaTitle).toBeTruthy();
      expect(s.metaDescription).toBeTruthy();
      expect(Array.isArray(s.benefits)).toBe(true);
      expect(s.benefits.length).toBeGreaterThan(0);
      expect(Array.isArray(s.keywords)).toBe(true);
      expect(s.keywords.length).toBeGreaterThan(0);
    }
  });

  it("nao tem slugs nem ids duplicados", () => {
    const slugs = services.map((s) => s.slug);
    const ids = services.map((s) => s.id);
    expect(new Set(slugs).size).toBe(slugs.length);
    expect(new Set(ids).size).toBe(ids.length);
  });

  it("imagens apontam para /images", () => {
    for (const s of services) {
      expect(s.image.startsWith("/images/")).toBe(true);
    }
  });

  it("getServiceBySlug retorna o servico correto", () => {
    const first = services[0];
    expect(getServiceBySlug(first.slug)?.id).toBe(first.id);
  });

  it("getServiceBySlug retorna undefined para slug inexistente", () => {
    expect(getServiceBySlug("nao-existe-xyz")).toBeUndefined();
  });

  it("getAllServiceSlugs retorna todos os slugs", () => {
    expect(getAllServiceSlugs().sort()).toEqual(
      services.map((s) => s.slug).sort(),
    );
  });
});
