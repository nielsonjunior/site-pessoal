import { test, expect } from "@playwright/test";

const WHATSAPP = "5565996946861";

test.describe("Home — história da casa própria", () => {
  test("topo com um h1 claro e o WhatsApp, sem botões por cima da foto", async ({ page }) => {
    await page.goto("/");
    await expect(page.locator("main h1")).toContainText(/cuido da sua obra/i);
    await expect(page.locator(".nh .hero .needs")).toHaveCount(0);
    expect(await page.locator(`.nh .hero a[href*="wa.me/${WHATSAPP}"]`).count()).toBe(1);
  });

  test("a história tem os 17 capítulos, do aluguel até a chave", async ({ page }) => {
    await page.goto("/");
    const ch = page.locator("#historia .ch");
    await expect(ch).toHaveCount(17);
    await expect(ch.first()).toContainText(/aluguel/i);
    await expect(ch.last()).toContainText(/habite-se/i);
    // o projeto elétrico é feito por ele
    await expect(page.locator("#historia")).toContainText(/elétrico eu mesmo faço/i);
  });

  test("a rolagem troca o capítulo visível", async ({ page }) => {
    await page.setViewportSize({ width: 1280, height: 800 });
    await page.goto("/");
    await expect(page.locator("#historia.live")).toHaveCount(1);
    const track = page.locator(".story-track");
    const { top, h } = await track.evaluate((el) => ({
      top: el.getBoundingClientRect().top + scrollY,
      h: (el as HTMLElement).offsetHeight,
    }));
    await page.evaluate((y) => scrollTo(0, y), top + (h - 800) * (10.5 / 17));
    await expect(page.locator("#historia .ch.on")).toContainText(/Fundação/);
  });

  test("sem animação, os capítulos aparecem um embaixo do outro", async ({ browser }) => {
    const ctx = await browser.newContext({ reducedMotion: "reduce" });
    const page = await ctx.newPage();
    await page.goto("/");
    await expect(page.locator("main h1")).toBeVisible();
    await expect(page.locator("#historia.live")).toHaveCount(0);
    await expect(page.locator("#historia .ch").nth(8)).toBeVisible();
    await ctx.close();
  });

  test("serviços explicados trocam ao tocar e levam ao WhatsApp com mensagem", async ({ page }) => {
    await page.goto("/");
    await page.getByRole("tab", { name: /Rachadura, infiltração e laudos/i }).click();
    await expect(page.locator("#svcPanel h3")).toHaveText(/Rachadura/);
    expect(
      await page.locator(`#svcPanel a[href*="wa.me/${WHATSAPP}"][href*="text="]`).count(),
    ).toBe(1);
  });

  test("casos levam às páginas do site (regularização, AVCB, plano de reforma)", async ({ page }) => {
    await page.goto("/");
    for (const href of [
      "/servicos/regularizacao-imoveis/desdobro",
      "/servicos/regularizacao-imoveis/avcb",
      "/plano-de-reforma",
    ])
      await expect(page.locator(`#situacoes a[href="${href}"]`).first()).toBeAttached();
  });

  test("sem números de enfeite, instruções óbvias nem repetição", async ({ page }) => {
    await page.goto("/");
    await expect(page.locator("main h1")).toBeVisible();
    const body = await page.locator(".nh").innerText();
    expect(body).not.toContain("500+");
    expect(body).not.toMatch(/\+12|24 ?h/);
    expect(body).not.toMatch(/Role para|Role a tela|Toque numa/i);
    // o CREA aparece uma vez no cabeçalho, não repetido na página
    expect(await page.locator("body").innerText()).toContain("CREA 5071806455");
    expect(body).not.toContain("CREA 5071806455");
    // o topo não repete a região (já está no mapa)
    expect(await page.locator(".nh .hero-copy").innerText()).not.toMatch(/região/i);
  });
});
