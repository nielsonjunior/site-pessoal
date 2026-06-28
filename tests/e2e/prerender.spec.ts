import { test, expect } from "@playwright/test";
import { readFileSync, existsSync } from "node:fs";
import { join } from "node:path";

const SITE_URL = "https://www.npcastilho.eng.br";
const dist = join(process.cwd(), "dist");

function read(rel: string): string | null {
  const f = join(dist, rel);
  return existsSync(f) ? readFileSync(f, "utf8") : null;
}

/**
 * Valida o HTML estatico gerado pelo prerender (sem depender de JS).
 * Pula automaticamente se o dist ainda nao foi pre-renderizado
 * (rode `npm run build:static`).
 */
const home = read("index.html");
const isPrerendered = !!home && home.includes('data-prerendered="true"');

test.describe("HTML pre-renderizado (SSG)", () => {
  test.skip(
    !isPrerendered,
    "dist nao pre-renderizado — rode `npm run build:static`",
  );

  test("home: title, canonical e og absolutos no HTML estatico", () => {
    const html = read("index.html")!;
    expect(html).toMatch(/<title>[^<]*Engenheiro Civil/i);
    expect(html).toContain(`<link rel="canonical" href="${SITE_URL}/"`);
    expect(html).toContain(`${SITE_URL}/images/og-image.jpg`);
  });

  test("servico: pagina propria pre-renderizada com meta especifica", () => {
    const html = read(
      "servicos/art-anotacao-responsabilidade-tecnica/index.html",
    );
    expect(html, "arquivo de servico deve existir").toBeTruthy();
    expect(html!).toContain(
      `${SITE_URL}/servicos/art-anotacao-responsabilidade-tecnica`,
    );
    expect(html!).toMatch(/Responsabilidade T[eé]cnica/i);
  });

  test("cidade: pagina propria pre-renderizada", () => {
    const html = read("cidades/caceres/index.html");
    expect(html, "arquivo de cidade deve existir").toBeTruthy();
    expect(html!).toContain(`${SITE_URL}/cidades/caceres`);
  });

  test("conteudo do body presente sem JS (ex.: CTA de orcamento)", () => {
    const html = read("index.html")!;
    expect(html).toMatch(/Solicitar Or[çc]amento/i);
  });
});
