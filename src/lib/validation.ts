import type { ZodType } from "zod";
import { z } from "zod";

/**
 * Schemas de validação dos formulários de lead (orçamento e landing).
 * Usados para validar/sanear a entrada antes de enviar (WhatsApp / FormSubmit),
 * dando mensagens claras e evitando envios malformados.
 */

const name = z.string().trim().min(2, "Informe seu nome.");
const email = z
  .string()
  .trim()
  .regex(/^[^\s@]+@[^\s@]+\.[^\s@]+$/, "Informe um e-mail válido.");
const phone = z
  .string()
  .trim()
  .refine(
    (v) => v.replace(/\D/g, "").length >= 10,
    "Informe um telefone válido com DDD.",
  );

/** Envio por WhatsApp: nome + telefone bastam. */
export const leadWhatsappSchema = z.object({ name, phone });

/** Envio por e-mail: exige também um e-mail válido. */
export const leadEmailSchema = z.object({ name, email, phone });

/**
 * Valida `data` contra `schema` e retorna a 1ª mensagem de erro (ou null se OK).
 */
export function validate(schema: ZodType, data: unknown): string | null {
  const result = schema.safeParse(data);
  if (result.success) return null;
  return result.error.issues[0]?.message ?? "Verifique os campos preenchidos.";
}
