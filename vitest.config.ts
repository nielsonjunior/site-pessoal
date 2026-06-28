import { defineConfig, mergeConfig } from "vitest/config";
import viteConfig from "./vite.config";

// Reaproveita a config do Vite (inclui o alias "@" -> ./src) e adiciona o
// bloco de testes. Mantemos o vite.config.ts intocado para nao arriscar o
// build de producao.
export default mergeConfig(
  viteConfig,
  defineConfig({
    test: {
      globals: true,
      environment: "jsdom",
      setupFiles: ["./src/test/setup.ts"],
      css: true,
      // Apenas testes unitarios/de componente. Os E2E ficam em tests/e2e e
      // rodam no Playwright.
      include: ["src/**/*.{test,spec}.{ts,tsx}"],
      exclude: ["tests/e2e/**", "node_modules/**", "dist/**"],
      coverage: {
        provider: "v8",
        reportsDirectory: "./coverage",
        include: ["src/**/*.{ts,tsx}"],
        exclude: [
          "src/components/ui/**", // componentes shadcn (terceiros)
          "src/**/*.{test,spec}.{ts,tsx}",
          "src/test/**",
          "src/main.tsx",
          "src/**/index.ts",
          "src/**/*.d.ts",
        ],
      },
    },
  }),
);
