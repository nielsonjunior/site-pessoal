import { test, expect } from "@playwright/test";

/**
 * Ao trocar de página por um link, a página nova abre no topo
 * (e não na altura em que o usuário estava na página anterior).
 */
test("link do rodapé abre a página nova no topo", async ({ page }) => {
  await page.goto("/servicos");
  await expect(page.locator("main h1")).toBeVisible();
  await page.locator("footer").scrollIntoViewIfNeeded();
  await page.evaluate(() => scrollTo(0, document.body.scrollHeight));
  await page.locator("footer").getByRole("link", { name: "FAQ", exact: true }).click();
  await expect(page).toHaveURL(/\/faq$/);
  await expect(page.locator("main h1")).toBeVisible();
  await expect.poll(() => page.evaluate(() => scrollY)).toBe(0);
});
