import { describe, it, expect, vi, beforeEach, afterEach } from "vitest";
import { renderWithProviders, screen, userEvent } from "@/test/test-utils";
import { Analytics } from "./Analytics";

describe("<Analytics /> — rastreio de lead", () => {
  beforeEach(() => {
    (window as unknown as { gtag: unknown }).gtag = vi.fn();
  });
  afterEach(() => {
    delete (window as unknown as { gtag?: unknown }).gtag;
  });

  it("dispara generate_lead ao clicar em link do WhatsApp", async () => {
    renderWithProviders(
      <>
        <Analytics />
        <a href="https://wa.me/5565996946861?text=oi">Falar no WhatsApp</a>
      </>,
    );
    await userEvent.click(screen.getByText("Falar no WhatsApp"));
    expect(window.gtag).toHaveBeenCalledWith(
      "event",
      "generate_lead",
      expect.objectContaining({ method: "whatsapp" }),
    );
  });

  it("dispara generate_lead (phone) ao clicar em link tel:", async () => {
    renderWithProviders(
      <>
        <Analytics />
        <a href="tel:+5565996946861">Ligar</a>
      </>,
    );
    await userEvent.click(screen.getByText("Ligar"));
    expect(window.gtag).toHaveBeenCalledWith(
      "event",
      "generate_lead",
      expect.objectContaining({ method: "phone" }),
    );
  });

  it("não dispara em link interno comum", async () => {
    renderWithProviders(
      <>
        <Analytics />
        <a href="/sobre">Sobre</a>
      </>,
    );
    await userEvent.click(screen.getByText("Sobre"));
    expect(window.gtag).not.toHaveBeenCalled();
  });
});
