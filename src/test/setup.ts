// Setup global do Vitest, carregado antes de cada arquivo de teste.
// Adiciona os matchers do jest-dom (toBeInTheDocument, toHaveTextContent, etc.)
import "@testing-library/jest-dom/vitest";
import { cleanup } from "@testing-library/react";
import { afterEach } from "vitest";

// Desmonta a arvore renderizada apos cada teste para evitar vazamento de DOM.
afterEach(() => {
  cleanup();
});

// Polyfills que o jsdom nao implementa, usados por libs (framer-motion
// whileInView -> IntersectionObserver; Radix -> ResizeObserver; etc.).
// Atribuidos direto no globalThis (nao via stubGlobal) para sobreviverem a
// `vi.unstubAllGlobals()` chamado por testes individuais.
class IObserverMock {
  observe() {}
  unobserve() {}
  disconnect() {}
  takeRecords() {
    return [];
  }
}
// eslint-disable-next-line @typescript-eslint/no-explicit-any
(globalThis as any).IntersectionObserver = IObserverMock;
// eslint-disable-next-line @typescript-eslint/no-explicit-any
(globalThis as any).ResizeObserver = IObserverMock;

if (typeof window !== "undefined" && !window.matchMedia) {
  window.matchMedia = (query: string) =>
    ({
      matches: false,
      media: query,
      onchange: null,
      addListener: () => {},
      removeListener: () => {},
      addEventListener: () => {},
      removeEventListener: () => {},
      dispatchEvent: () => false,
    }) as MediaQueryList;
}

// jsdom nao implementa scrollTo (usado por alguns componentes).
if (typeof window !== "undefined" && !window.scrollTo) {
  window.scrollTo = () => {};
}
