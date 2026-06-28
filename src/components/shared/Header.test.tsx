import { describe, it, expect } from "vitest";
import { renderWithProviders, screen } from "@/test/test-utils";
import { Header } from "./Header";

describe("<Header />", () => {
  it("renderiza o logo com texto alternativo", () => {
    renderWithProviders(<Header />);
    expect(screen.getByAltText(/NP Castilho Engenharia/i)).toBeInTheDocument();
  });

  it("exibe os links principais de navegacao", () => {
    renderWithProviders(<Header />);
    // getAllByRole pois "Serviços"/"Orçamento" aparecem em desktop e mobile
    expect(screen.getAllByRole("link", { name: "Início" }).length).toBeGreaterThan(0);
    expect(screen.getAllByRole("link", { name: /Serviços/ }).length).toBeGreaterThan(0);
    expect(screen.getAllByRole("link", { name: "Sobre" }).length).toBeGreaterThan(0);
    expect(screen.getAllByRole("link", { name: "FAQ" }).length).toBeGreaterThan(0);
  });

  it("tem CTA de Solicitar Orçamento apontando para /orcamento", () => {
    renderWithProviders(<Header />);
    const cta = screen.getAllByRole("link", { name: /Solicitar Orçamento/i })[0];
    expect(cta).toHaveAttribute("href", "/orcamento");
  });
});
