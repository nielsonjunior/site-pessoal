import { describe, it, expect } from "vitest";
import { readFileSync, readdirSync, statSync, existsSync } from "node:fs";
import { join } from "node:path";

/**
 * Guarda de regressão: toda imagem `/images/...` referenciada no código-fonte
 * precisa existir em `public/`. Evita imagens quebradas em produção
 * (ex.: map-caceres.jpg que faltava).
 */
function collectSource(dir: string, acc: string[] = []): string[] {
  for (const entry of readdirSync(dir)) {
    const full = join(dir, entry);
    if (statSync(full).isDirectory()) collectSource(full, acc);
    else if (/\.(ts|tsx|css|html)$/.test(entry)) acc.push(full);
  }
  return acc;
}

const IMG_RE = /\/images\/[A-Za-z0-9._-]+\.(?:png|jpe?g|webp|gif|svg|ico|avif)/g;

describe("assets referenciados", () => {
  it("toda imagem /images/* citada no código existe em public/", () => {
    const root = process.cwd();
    const files = [
      ...collectSource(join(root, "src")),
      join(root, "index.html"),
    ];
    const missing = new Set<string>();
    for (const f of files) {
      if (!existsSync(f)) continue;
      const txt = readFileSync(f, "utf8");
      for (const m of txt.matchAll(IMG_RE)) {
        const rel = m[0];
        if (!existsSync(join(root, "public", rel))) {
          missing.add(`${rel}  (em ${f.replace(root, "")})`);
        }
      }
    }
    expect([...missing], `imagens faltando:\n${[...missing].join("\n")}`).toEqual(
      [],
    );
  });
});
