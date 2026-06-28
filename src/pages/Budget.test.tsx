import { describe, it, expect, vi, beforeEach, afterEach } from "vitest";
import {
  renderWithProviders,
  screen,
  userEvent,
  waitFor,
} from "@/test/test-utils";
import { Budget } from "./Budget";

describe("Budget — envio do orçamento por e-mail", () => {
  beforeEach(() => {
    vi.stubGlobal(
      "fetch",
      vi.fn(async () => ({
        ok: true,
        json: async () => ({ success: "true" }),
      })),
    );
  });
  afterEach(() => {
    vi.restoreAllMocks();
  });

  it("envia para o FormSubmit e mostra tela de sucesso", async () => {
    const user = userEvent.setup();
    renderWithProviders(<Budget />);

    await user.type(screen.getByLabelText(/Nome completo/i), "Juninho Castilho");
    await user.type(screen.getByLabelText(/E-mail/i), "cliente@teste.com");
    await user.type(screen.getByLabelText(/Telefone/i), "65999999999");
    await user.click(screen.getAllByRole("checkbox")[0]); // 1 serviço

    await user.click(screen.getByRole("button", { name: /Enviar por e-mail/i }));

    await waitFor(() =>
      expect(screen.getByText(/Orçamento enviado/i)).toBeInTheDocument(),
    );
    expect(fetch).toHaveBeenCalledWith(
      expect.stringContaining("formsubmit.co/ajax/"),
      expect.objectContaining({ method: "POST" }),
    );
  });

  it("não envia e avisa quando faltam campos obrigatórios", async () => {
    const user = userEvent.setup();
    renderWithProviders(<Budget />);

    await user.click(screen.getAllByRole("checkbox")[0]); // só seleciona serviço
    await user.click(screen.getByRole("button", { name: /Enviar por e-mail/i }));

    expect(
      screen.getByText(/Preencha nome, e-mail, telefone/i),
    ).toBeInTheDocument();
    expect(fetch).not.toHaveBeenCalled();
  });
});
