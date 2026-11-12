import { timingSafeEqual } from "node:crypto";
import { put } from "@vercel/blob";

/**
 * POST /api/social-upload?name=<arquivo>.jpg
 *
 * Recebe uma imagem JPEG crua no corpo e guarda no Vercel Blob em social/<name>,
 * pública, para o Instagram buscar por URL. Usado por uma rotina automática que
 * não tem acesso ao GitHub.
 *
 * Variáveis de ambiente (só na Vercel, nunca no repositório):
 * - SOCIAL_UPLOAD_TOKEN: segredo exigido em `Authorization: Bearer <token>`.
 * - BLOB_READ_WRITE_TOKEN: criado pela Vercel ao conectar o Blob Store ao projeto.
 */

export const MAX_BYTES = 8 * 1024 * 1024;
const NOME_VALIDO = /^[a-z0-9_.-]+$/;

function json(status: number, body: Record<string, unknown>): Response {
  return new Response(JSON.stringify(body), {
    status,
    headers: {
      "Content-Type": "application/json; charset=utf-8",
      "Cache-Control": "no-store",
    },
  });
}

/** Compara o header Authorization com o segredo em tempo constante. */
export function autorizado(header: string | null, segredo: string | undefined): boolean {
  if (!segredo || !header?.startsWith("Bearer ")) return false;
  const recebido = Buffer.from(header.slice("Bearer ".length));
  const esperado = Buffer.from(segredo);
  return recebido.length === esperado.length && timingSafeEqual(recebido, esperado);
}

export async function POST(request: Request): Promise<Response> {
  if (!autorizado(request.headers.get("authorization"), process.env.SOCIAL_UPLOAD_TOKEN)) {
    return json(401, { error: "Não autorizado." });
  }

  const name = new URL(request.url).searchParams.get("name") ?? "";
  // Só [a-z0-9-_.], sem "..", e terminando em .jpg/.jpeg.
  if (!NOME_VALIDO.test(name) || name.includes("..") || !/\.jpe?g$/.test(name) || name.length > 100) {
    return json(400, { error: "Nome inválido. Use só a-z, 0-9, '-', '_' e '.', terminando em .jpg." });
  }

  const tipo = (request.headers.get("content-type") ?? "").split(";")[0].trim().toLowerCase();
  if (tipo !== "image/jpeg") {
    return json(400, { error: "Só é aceito Content-Type: image/jpeg." });
  }

  const declarado = Number(request.headers.get("content-length") ?? "0");
  if (declarado > MAX_BYTES) {
    return json(400, { error: "Imagem maior que 8 MB." });
  }

  const corpo = Buffer.from(await request.arrayBuffer());
  if (corpo.length === 0) {
    return json(400, { error: "Corpo vazio." });
  }
  if (corpo.length > MAX_BYTES) {
    return json(400, { error: "Imagem maior que 8 MB." });
  }
  // Assinatura JPEG (FF D8 FF): evita guardar outro tipo de arquivo com o header trocado.
  if (corpo[0] !== 0xff || corpo[1] !== 0xd8 || corpo[2] !== 0xff) {
    return json(400, { error: "O arquivo não é um JPEG válido." });
  }

  try {
    const blob = await put(`social/${name}`, corpo, {
      access: "public",
      addRandomSuffix: false,
      allowOverwrite: true,
      contentType: "image/jpeg",
    });
    return json(200, { url: blob.url });
  } catch (error) {
    console.error("social-upload: falha ao gravar no Blob", error);
    return json(500, { error: "Não foi possível salvar a imagem." });
  }
}

/** GET não lista nada. */
export function GET(): Response {
  return json(405, { error: "Método não permitido." });
}
