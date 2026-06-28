import { test, expect } from "@playwright/test";
import { allRoutes, staticRoutes } from "./routes";

/**
 * Smoke test: cada rota carrega sem quebrar.
 * Garante que nenhuma pagina dispara erro de console critico nem fica em branco
 * (evita "shipar" uma pagina quebrada).
 */
for (const route of allRoutes) {
  test(`carrega ${route.path} sem erros`, async ({ page }) => {
    const consoleErrors: string[] = [];
    page.on("console", (msg) => {
      if (msg.type() === "error") consoleErrors.push(msg.text());
    });
    const pageErrors: string[] = [];
    page.on("pageerror", (err) => pageErrors.push(err.message));

    const response = await page.goto(route.path, { waitUntil: "networkidle" });

    // O servidor (SPA) deve responder 200 para qualquer rota.
    expect(response?.status(), `HTTP status de ${route.path}`).toBeLessThan(400);

    // Header e Footer fazem parte do layout em todas as paginas.
    await expect(page.locator("header")).toBeVisible();
    await expect(page.locator("footer")).toBeVisible();
    await expect(page.locator("main")).toBeVisible();

    // Sem erros de runtime (pageerror) nem assets 404 derrubando a pagina.
    expect(pageErrors, `erros de runtime em ${route.path}`).toEqual([]);

    // Ignora ruidos conhecidos (ex.: avisos de DevTools); falha em erros reais.
    const realErrors = consoleErrors.filter(
      (e) => !/Download the React DevTools/i.test(e),
    );
    expect(realErrors, `erros de console em ${route.path}`).toEqual([]);
  });
}

test.describe("titulos (SEO via react-helmet)", () => {
  for (const route of staticRoutes.filter((r) => r.titleContains)) {
    test(`${route.path} tem <title> com "${route.titleContains}"`, async ({
      page,
    }) => {
      await page.goto(route.path);
      await expect(page).toHaveTitle(
        new RegExp(route.titleContains!, "i"),
      );
    });
  }

  test("toda pagina tem um <title> nao vazio", async ({ page }) => {
    for (const route of staticRoutes) {
      await page.goto(route.path);
      const title = await page.title();
      expect(title.trim().length, `title de ${route.path}`).toBeGreaterThan(0);
    }
  });
});

test("rota inexistente cai na pagina 404 (NotFound)", async ({ page }) => {
  await page.goto("/rota-que-nao-existe-123");
  await expect(page.locator("main")).toBeVisible();
  // A SPA responde 200 e renderiza o componente NotFound no client.
  await expect(page.getByText(/404|nao encontrad|não encontrad/i).first()).toBeVisible();
});
