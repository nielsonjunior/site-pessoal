import type { ReactElement, ReactNode } from "react";
import { render, type RenderOptions } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";

/**
 * Providers que envolvem TODA a aplicacao (vide src/App.tsx).
 * Componentes que usam react-router (Link, useLocation) ou react-helmet-async
 * (SEO) precisam destes providers para renderizar nos testes.
 */
interface ProvidersProps {
  children: ReactNode;
  initialEntries?: string[];
}

function AllProviders({ children, initialEntries = ["/"] }: ProvidersProps) {
  return (
    <HelmetProvider>
      <MemoryRouter initialEntries={initialEntries}>{children}</MemoryRouter>
    </HelmetProvider>
  );
}

interface CustomRenderOptions extends Omit<RenderOptions, "wrapper"> {
  /** Rota inicial do MemoryRouter, ex.: ["/servicos"] */
  initialEntries?: string[];
}

/**
 * Render customizado: use no lugar do render do Testing Library para que o
 * componente sob teste tenha acesso a Router + Helmet automaticamente.
 */
export function renderWithProviders(
  ui: ReactElement,
  { initialEntries, ...options }: CustomRenderOptions = {},
) {
  return render(ui, {
    wrapper: ({ children }) => (
      <AllProviders initialEntries={initialEntries}>{children}</AllProviders>
    ),
    ...options,
  });
}

// Reexporta tudo do Testing Library para um unico ponto de import.
export * from "@testing-library/react";
export { default as userEvent } from "@testing-library/user-event";
