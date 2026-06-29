import { test, expect } from "@playwright/test";

const WHATSAPP = "5565996946861";

test.describe("Home — foco em regularização", () => {
  test("seção 'Qual é o seu caso?' com situações leigas e links", async ({
    page,
  }) => {
    await page.goto("/");
    await expect(
      page.getByRole("heading", { name: /qual é o seu caso/i }),
    ).toBeVisible();
    // situações na voz do cliente
    await expect(page.getByText(/Quero dividir meu terreno/i)).toBeVisible();
    await expect(page.getByText(/alvará do Bombeiro/i)).toBeVisible();
    // links para as páginas detalhadas (incluindo o AVCB)
    await expect(
      page.locator('a[href="/servicos/regularizacao-imoveis/desdobro"]').first(),
    ).toBeVisible();
    await expect(
      page.locator('a[href="/servicos/regularizacao-imoveis/avcb"]').first(),
    ).toBeVisible();
    // CTA WhatsApp com mensagem
    expect(
      await page
        .locator(`a[href*="wa.me/${WHATSAPP}"][href*="text="]`)
        .count(),
    ).toBeGreaterThanOrEqual(1);
  });

  test("seção 'Você sabia?' + faixa de valorização (até 30%)", async ({
    page,
  }) => {
    await page.goto("/");
    await expect(
      page.getByRole("heading", { name: /você sabia/i }),
    ).toBeVisible();
    await expect(page.getByText(/sem escritura/i).first()).toBeVisible();
    await expect(page.getByText(/AVCB|Bombeiro/i).first()).toBeVisible();
    // faixa de valorização
    await expect(page.getByText(/valoriza at[eé]\s*30%/i).first()).toBeVisible();
  });
});
