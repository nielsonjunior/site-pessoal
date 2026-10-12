import { describe, it, expect } from "vitest";
import { blogPosts, getBlogPostBySlug, casos } from "@/data";

describe("blog", () => {
  it("tem artigos com slugs únicos e válidos", () => {
    expect(blogPosts.length).toBeGreaterThanOrEqual(4);
    const slugs = blogPosts.map((p) => p.slug);
    expect(new Set(slugs).size).toBe(slugs.length);
    for (const s of slugs) expect(s).toMatch(/^[a-z0-9]+(-[a-z0-9]+)*$/);
  });

  it("cada artigo tem SEO e conteúdo", () => {
    for (const p of blogPosts) {
      expect(p.title.length).toBeGreaterThan(20);
      expect(p.metaDescription.length).toBeLessThanOrEqual(170);
      expect(p.keywords.length).toBeGreaterThan(0);
      expect(p.sections.length).toBeGreaterThanOrEqual(3);
      expect(p.date).toMatch(/^\d{4}-\d{2}-\d{2}$/);
    }
  });

  it("busca por slug", () => {
    expect(getBlogPostBySlug("plano-de-reforma-nbr-16280")?.title).toMatch(/NBR 16280/);
    expect(getBlogPostBySlug("nao-existe")).toBeUndefined();
  });

  it("home tem o caso 'síndico pediu plano de reforma' apontando para a página", () => {
    const c = casos.find((x) => x.id === "plano-reforma");
    expect(c?.href).toBe("/plano-de-reforma");
  });
});
