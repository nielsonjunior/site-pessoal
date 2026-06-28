import { test, expect, type Page } from "@playwright/test";

/** Lê e faz parse de todos os blocos JSON-LD da página; falha se algum for inválido. */
async function getTypes(page: Page): Promise<string[]> {
  const blocks = await page
    .locator('script[type="application/ld+json"]')
    .allTextContents();
  const types: string[] = [];
  for (const b of blocks) {
    const parsed = JSON.parse(b); // lança se inválido
    types.push(parsed["@type"]);
  }
  return types;
}

test("LocalBusiness e WebSite presentes globalmente (home)", async ({ page }) => {
  await page.goto("/");
  const types = await getTypes(page);
  expect(types).toContain("ProfessionalService");
  expect(types).toContain("WebSite");
});

test("página-pilar de regularização tem Service e BreadcrumbList", async ({
  page,
}) => {
  await page.goto("/servicos/regularizacao-imoveis");
  const types = await getTypes(page);
  expect(types).toContain("Service");
  expect(types).toContain("BreadcrumbList");
});

test("página-filha tem Service e BreadcrumbList", async ({ page }) => {
  await page.goto("/servicos/regularizacao-imoveis/usucapiao");
  const types = await getTypes(page);
  expect(types).toContain("Service");
  expect(types).toContain("BreadcrumbList");
});

test("página de FAQ expõe FAQPage com perguntas", async ({ page }) => {
  await page.goto("/faq");
  const blocks = await page
    .locator('script[type="application/ld+json"]')
    .allTextContents();
  const faq = blocks
    .map((b) => JSON.parse(b))
    .find((d) => d["@type"] === "FAQPage");
  expect(faq, "deve existir um FAQPage").toBeTruthy();
  expect(Array.isArray(faq.mainEntity)).toBe(true);
  expect(faq.mainEntity.length).toBeGreaterThan(0);
  expect(faq.mainEntity[0]["@type"]).toBe("Question");
});
