import { test, expect } from "@playwright/test";

/**
 * Testa a navegacao real do usuario pelo Header (desktop e mobile).
 */

test.describe("navegacao desktop", () => {
  // Garante viewport larga (o menu desktop usa breakpoint lg).
  test.use({ viewport: { width: 1280, height: 800 } });

  test("navega pelos links principais do header", async ({ page }) => {
    await page.goto("/");

    await page.getByRole("link", { name: "Sobre", exact: true }).first().click();
    await expect(page).toHaveURL(/\/sobre$/);

    await page.getByRole("link", { name: "FAQ", exact: true }).first().click();
    await expect(page).toHaveURL(/\/faq$/);

    await page.getByRole("link", { name: "Cidades", exact: true }).first().click();
    await expect(page).toHaveURL(/\/cidades$/);
  });

  test("CTA 'Solicitar Orçamento' leva para /orcamento", async ({ page }) => {
    await page.goto("/");
    await page
      .getByRole("link", { name: /Solicitar Orçamento/i })
      .first()
      .click();
    await expect(page).toHaveURL(/\/orcamento$/);
  });

  test("header tem fundo opaco no topo (legibilidade em pagina escura)", async ({
    page,
  }) => {
    await page.goto("/orcamento");
    // No topo (sem rolar), o header NAO pode ser transparente, senao o menu
    // some sobre fundos escuros (regressao corrigida).
    const bg = await page
      .locator("header")
      .evaluate((el) => getComputedStyle(el).backgroundColor);
    expect(bg).not.toBe("rgba(0, 0, 0, 0)");
    expect(bg).not.toBe("transparent");
  });

  test("logo retorna para a home", async ({ page }) => {
    await page.goto("/sobre");
    // O alt do logo tambem aparece no rodape; escopo no header.
    await page
      .locator("header")
      .getByRole("link", { name: /NP Castilho Engenharia/i })
      .first()
      .click();
    await expect(page).toHaveURL(/\/$/);
  });
});

test.describe("navegacao mobile", () => {
  test.use({ viewport: { width: 390, height: 844 } });

  test("abre o menu mobile e navega", async ({ page }) => {
    await page.goto("/");

    // O header e fixed e tem um listener de scroll que mostra/esconde a barra
    // superior. Rolar um pouco fixa o estado "scrolled" (barra escondida),
    // evitando o layout-shift que cobre o botao durante o clique.
    await page.mouse.wheel(0, 200);

    // Botao do menu (hamburguer), so visivel abaixo do breakpoint lg.
    const menuButton = page.getByRole("button", { name: "Abrir menu" });
    await expect(menuButton).toBeVisible();
    // O header fixed/animado (framer-motion) confunde o hit-test do Playwright
    // na emulacao de device touch, embora o botao esteja visivel e no topo.
    // force: o clique e real; mantemos as assercoes abaixo provando que abriu.
    await menuButton.click({ force: true });

    // Apos abrir, o aria-label muda para "Fechar menu".
    await expect(
      page.getByRole("button", { name: "Fechar menu" }),
    ).toBeVisible();

    const aboutLink = page.getByRole("link", { name: "Sobre", exact: true });
    await aboutLink.first().click();
    await expect(page).toHaveURL(/\/sobre$/);
  });
});
