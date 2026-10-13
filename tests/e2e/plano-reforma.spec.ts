import { test, expect } from "@playwright/test";

const WHATSAPP = "5565996946861";

test.describe("Plano de Reforma NBR 16280", () => {
  test("página de vendas com H1, pacotes e CTA WhatsApp", async ({ page }) => {
    await page.goto("/plano-de-reforma");
    await expect(page.locator("h1")).toHaveCount(1);
    await expect(page.locator("h1")).toContainText(/documento de engenheiro/i);
    await expect(page.getByRole("heading", { name: "Reforma Simples" })).toBeVisible();
    await expect(page.getByRole("heading", { name: "Reforma com Vistoria" })).toBeVisible();
    await expect(page.getByText(/São Paulo e Mato Grosso/i).first()).toBeVisible();
    expect(
      await page.locator(`a[href*="wa.me/${WHATSAPP}"][href*="text="]`).count(),
    ).toBeGreaterThanOrEqual(3);
  });

  test("home leva ao plano de reforma pelo card do síndico", async ({ page }) => {
    await page.goto("/");
    await expect(page.getByText(/condomínio pediu documento de engenheiro/i)).toBeVisible();
    await expect(page.locator('a[href="/plano-de-reforma"]').first()).toBeAttached();
  });

  test("blog lista artigos e abre um artigo", async ({ page }) => {
    await page.goto("/blog");
    await expect(page.locator("h1")).toHaveText("Blog");
    await page.getByRole("link", { name: /^O condomínio pediu um plano de reforma/i }).first().click();
    await expect(page).toHaveURL(/\/blog\/plano-de-reforma-nbr-16280$/);
    await expect(page.locator("h1")).toContainText(/plano de reforma/i);
    await expect(page.locator('a[href="/plano-de-reforma"]').first()).toBeVisible();
  });

  test("artigo inexistente cai no 404", async ({ page }) => {
    await page.goto("/blog/nao-existe");
    await expect(page.getByText(/404|não encontrada/i).first()).toBeVisible();
  });
});

test("mostra os preços dos pacotes", async ({ page }) => {
  await page.goto("/plano-de-reforma");
  await expect(page.getByText("R$ 350").first()).toBeVisible();
  await expect(page.getByText("R$ 650").first()).toBeAttached();
});
