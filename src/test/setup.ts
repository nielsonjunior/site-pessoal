// Setup global do Vitest, carregado antes de cada arquivo de teste.
// Adiciona os matchers do jest-dom (toBeInTheDocument, toHaveTextContent, etc.)
import "@testing-library/jest-dom/vitest";
import { cleanup } from "@testing-library/react";
import { afterEach } from "vitest";

// Desmonta a arvore renderizada apos cada teste para evitar vazamento de DOM.
afterEach(() => {
  cleanup();
});
