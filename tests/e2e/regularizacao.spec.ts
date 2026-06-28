import { test, expect } from "@playwright/test";
import { regularizationTypes } from "../../src/data/regularizacao";

const URL = "/servicos/regularizacao-imoveis";
const WHATSAPP = "5565996946861";

test.describe("Página-pilar de Regularização", () => {
  test("tem H1 único e mensagem de valorização (30%)", async ({ page }) => {
    await page.goto(URL);
    await expect(page.locator("h1")).toHaveCount(1);
    await expect(page.locator("h1")).toContainText(/Regulariza/i);
    await expect(page.getByText(/at[eé]\s*30%/i).first()).toBeVisible();
  });

  test("lista os 6 tipos de regularização", async ({ page }) => {
    await page.goto(URL);
    for (const titulo of [
      "Desdobro",
      "Remembramento",
      "Usucapião",
      "Unificação de Lote",
      "Retificação Administrativa",
      "Instituição de Condomínio",
    ]) {
      await expect(
        page.getByRole("heading", { name: new RegExp(titulo, "i") }),
      ).toBeVisible();
    }
  });

  test("CTAs da página apontam para o WhatsApp oficial com mensagem", async ({
    page,
  }) => {
    await page.goto(URL);
    // CTAs do conteúdo usam mensagem pré-preenchida (text=); os links do Header
    // (topo) não têm text=, então são naturalmente excluídos.
    const waMsgLinks = page.locator(
      `a[href*="wa.me/${WHATSAPP}"][href*="text="]`,
    );
    // hero + faixa + 6 cards + diagnóstico = 9
    expect(await waMsgLinks.count()).toBeGreaterThanOrEqual(8);
  });

  test("aponta para a regularização a partir da listagem de serviços", async ({
    page,
  }) => {
    await page.goto("/servicos");
    const link = page.locator(`a[href="${URL}"]`).first();
    await expect(link).toBeVisible();
  });

  test("cada card tem link 'Saiba mais' para a página-filha", async ({ page }) => {
    await page.goto(URL);
    for (const t of regularizationTypes) {
      await expect(
        page.locator(`a[href="${URL}/${t.slug}"]`),
      ).toHaveCount(1);
    }
  });
});

test.describe("Páginas-filhas de regularização", () => {
  for (const t of regularizationTypes) {
    test(`${t.slug}: carrega com H1, conteúdo e CTA`, async ({ page }) => {
      await page.goto(`${URL}/${t.slug}`);
      // H1 único com o nome do serviço
      await expect(page.locator("h1")).toHaveCount(1);
      await expect(page.locator("h1")).toContainText(t.title);
      // seções PASPA
      await expect(page.getByText("Você se identifica?")).toBeVisible();
      await expect(
        page.getByText("Como eu resolvo, passo a passo"),
      ).toBeVisible();
      await expect(
        page.getByRole("heading", {
          name: /O que acontece se você não resolver/i,
        }),
      ).toBeVisible();
      // CTA WhatsApp com mensagem
      const wa = page.locator(`a[href*="wa.me/${WHATSAPP}"][href*="text="]`);
      expect(await wa.count()).toBeGreaterThanOrEqual(1);
    });
  }

  test("slug inválido redireciona para a página-pilar", async ({ page }) => {
    await page.goto(`${URL}/nao-existe-xyz`);
    await expect(page).toHaveURL(new RegExp(`${URL}$`));
  });
});

test.describe("Mini-diagnóstico interativo", () => {
  test("aparece no pilar e mostra resultado ao escolher uma situação", async ({
    page,
  }) => {
    await page.goto(URL);
    const diag = page.getByTestId("diagnostico");
    await expect(diag).toBeVisible();
    await expect(
      diag.getByRole("heading", { name: /Descubra o que seu imóvel precisa/i }),
    ).toBeVisible();

    // Escolhe "dividir o terreno" -> Desdobro
    await diag.getByRole("button", { name: /dividir ou separar meu terreno/i }).click();

    await expect(diag.getByRole("heading", { name: "Desdobro de Lote" })).toBeVisible();
    // CTA WhatsApp com mensagem + link para a página completa
    await expect(
      diag.locator(`a[href*="wa.me/${WHATSAPP}"][href*="text="]`).first(),
    ).toBeVisible();
    await expect(
      diag.locator(`a[href="${URL}/desdobro"]`),
    ).toBeVisible();
  });

  test("permite refazer o diagnóstico", async ({ page }) => {
    await page.goto(URL);
    const diag = page.getByTestId("diagnostico");
    await diag.getByRole("button", { name: /não está no meu nome/i }).click();
    await expect(diag.getByRole("heading", { name: /Usucapião/i })).toBeVisible();
    await diag.getByRole("button", { name: /Refazer o diagnóstico/i }).click();
    // volta a mostrar as opções
    await expect(
      diag.getByRole("button", { name: /juntar terrenos vizinhos/i }),
    ).toBeVisible();
  });
});
