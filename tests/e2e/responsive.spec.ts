import { test, expect } from "@playwright/test";
import { allRoutes } from "./routes";

/**
 * Guarda de responsividade: nenhuma rota pode ter rolagem/transbordo horizontal
 * em tela de celular. Pega seções animadas que entram deslocadas, imagens/
 * elementos largos demais, etc.
 */
test.describe("responsivo — sem overflow horizontal no mobile", () => {
  test.use({ viewport: { width: 360, height: 780 } });

  for (const route of allRoutes) {
    test(`${route.path} cabe na largura (360px)`, async ({ page }) => {
      await page.goto(route.path, { waitUntil: "networkidle" });
      const { docW, winW } = await page.evaluate(() => ({
        docW: document.documentElement.scrollWidth,
        winW: window.innerWidth,
      }));
      // tolerância de 1px para arredondamentos
      expect(docW, `overflow horizontal em ${route.path}`).toBeLessThanOrEqual(
        winW + 1,
      );
    });
  }
});
