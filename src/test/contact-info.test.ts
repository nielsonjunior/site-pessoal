import { describe, it, expect } from "vitest";
import { readFileSync, readdirSync, statSync } from "node:fs";
import { join } from "node:path";

/**
 * Guarda de regressao de NAP (Name/Address/Phone): o numero oficial do
 * WhatsApp/telefone deve ser o de Caceres-MT. Um placeholder de SP
 * (5511999999999) ja vazou para varias paginas e quebra conversao + SEO local.
 */
const OFFICIAL_PHONE = "5565996946861";
const PLACEHOLDER_PHONE = "5511999999999";

function collectSourceFiles(dir: string, acc: string[] = []): string[] {
  for (const entry of readdirSync(dir)) {
    const full = join(dir, entry);
    const st = statSync(full);
    if (st.isDirectory()) {
      collectSourceFiles(full, acc);
    } else if (/\.(ts|tsx)$/.test(entry) && !/\.test\.(ts|tsx)$/.test(entry)) {
      acc.push(full);
    }
  }
  return acc;
}

describe("informacoes de contato (NAP)", () => {
  const files = collectSourceFiles(join(process.cwd(), "src"));

  it("nenhum arquivo usa o numero placeholder de SP", () => {
    const offenders = files.filter((f) =>
      readFileSync(f, "utf8").includes(PLACEHOLDER_PHONE),
    );
    expect(
      offenders,
      `arquivos com numero errado:\n${offenders.join("\n")}`,
    ).toEqual([]);
  });

  it("o numero oficial de Caceres-MT aparece no codigo", () => {
    const usesOfficial = files.some((f) =>
      readFileSync(f, "utf8").includes(OFFICIAL_PHONE),
    );
    expect(usesOfficial).toBe(true);
  });
});
