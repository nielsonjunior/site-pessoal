import { test, expect } from "@playwright/test";
import { allRoutes } from "./routes";

/**
 * On-page SEO (Fase 3): cada página deve ter EXATAMENTE um <h1>.
 * Múltiplos h1 (ou nenhum) confundem os buscadores sobre o tema da página.
 */
for (const route of allRoutes) {
  test(`${route.path} tem exatamente um <h1>`, async ({ page }) => {
    await page.goto(route.path, { waitUntil: "networkidle" });
    await expect(page.locator("h1")).toHaveCount(1);
  });
}
