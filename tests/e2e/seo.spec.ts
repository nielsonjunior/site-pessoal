import { test, expect } from "@playwright/test";

const SITE_URL = "https://www.npcastilho.eng.br";

/**
 * Garantias de SEO (Fases 0 e 1):
 * idioma, favicon/og, canonical, Open Graph absoluto, robots.txt e sitemap.xml.
 */

test("o documento declara lang=pt-BR", async ({ page }) => {
  await page.goto("/");
  await expect(page.locator("html")).toHaveAttribute("lang", "pt-BR");
});

test("favicon e og-image existem (sem 404)", async ({ request }) => {
  const favicon = await request.get("/images/logo.png");
  expect(favicon.status(), "favicon /images/logo.png").toBe(200);

  const og = await request.get("/images/og-image.jpg");
  expect(og.status(), "og-image /images/og-image.jpg").toBe(200);
  expect(
    Number(og.headers()["content-length"] ?? "0"),
    "og-image nao pode estar vazia",
  ).toBeGreaterThan(1000);
});

test("home expõe Open Graph/Twitter com URLs absolutas", async ({ page }) => {
  await page.goto("/");
  await expect(page.locator('meta[property="og:title"]')).toHaveCount(1);
  await expect(page.locator('meta[property="og:image"]')).toHaveAttribute(
    "content",
    `${SITE_URL}/images/og-image.jpg`,
  );
  await expect(page.locator('meta[property="og:url"]')).toHaveAttribute(
    "content",
    `${SITE_URL}/`,
  );
  await expect(page.locator('meta[name="twitter:card"]')).toHaveAttribute(
    "content",
    "summary_large_image",
  );
});

test("canonical aponta para a URL absoluta da rota", async ({ page }) => {
  await page.goto("/servicos");
  await expect(page.locator('link[rel="canonical"]')).toHaveAttribute(
    "href",
    `${SITE_URL}/servicos`,
  );
});

test("rota duplicada /contato canonicaliza para /orcamento", async ({ page }) => {
  await page.goto("/contato");
  await expect(page.locator('link[rel="canonical"]')).toHaveAttribute(
    "href",
    `${SITE_URL}/orcamento`,
  );
});

test("robots.txt existe e referencia o sitemap", async ({ request }) => {
  const res = await request.get("/robots.txt");
  expect(res.status()).toBe(200);
  const body = await res.text();
  expect(body).toContain("User-agent: *");
  expect(body).toContain(`Sitemap: ${SITE_URL}/sitemap.xml`);
});

test("sitemap.xml e valido e cobre rotas estaticas e dinamicas", async ({
  request,
}) => {
  const res = await request.get("/sitemap.xml");
  expect(res.status()).toBe(200);
  const xml = await res.text();
  expect(xml).toContain("<urlset");
  // home, uma rota estatica, um servico e uma cidade
  expect(xml).toContain(`<loc>${SITE_URL}/</loc>`);
  expect(xml).toContain(`<loc>${SITE_URL}/faq</loc>`);
  expect(xml).toContain(
    `<loc>${SITE_URL}/servicos/art-anotacao-responsabilidade-tecnica</loc>`,
  );
  expect(xml).toContain(`<loc>${SITE_URL}/cidades/caceres</loc>`);
  // nao deve listar a rota duplicada /contato
  expect(xml).not.toContain(`<loc>${SITE_URL}/contato</loc>`);
  const urlCount = (xml.match(/<loc>/g) ?? []).length;
  expect(urlCount).toBeGreaterThan(20);
});

test("a home tem exatamente um <h1>", async ({ page }) => {
  await page.goto("/");
  await expect(page.locator("h1")).toHaveCount(1);
});
