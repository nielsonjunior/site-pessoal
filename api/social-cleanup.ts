import { timingSafeEqual } from "node:crypto";
import { del, list } from "@vercel/blob";

/**
 * GET /api/social-cleanup — chamado pelo Cron da Vercel 1x por semana (vercel.json).
 *
 * Apaga os blobs em social/ com mais de 30 dias. O Instagram copia a imagem na
 * hora do post, então não precisa guardar.
 *
 * A Vercel manda `Authorization: Bearer <CRON_SECRET>` nas chamadas do Cron.
 * Também aceita o SOCIAL_UPLOAD_TOKEN, para rodar a limpeza na mão.
 */

export const DIAS_PARA_APAGAR = 30;

function json(status: number, body: Record<string, unknown>): Response {
  return new Response(JSON.stringify(body), {
    status,
    headers: {
      "Content-Type": "application/json; charset=utf-8",
      "Cache-Control": "no-store",
    },
  });
}

function confere(header: string | null, segredo: string | undefined): boolean {
  if (!segredo || !header?.startsWith("Bearer ")) return false;
  const recebido = Buffer.from(header.slice("Bearer ".length));
  const esperado = Buffer.from(segredo);
  return recebido.length === esperado.length && timingSafeEqual(recebido, esperado);
}

export async function GET(request: Request): Promise<Response> {
  const header = request.headers.get("authorization");
  if (!confere(header, process.env.CRON_SECRET) && !confere(header, process.env.SOCIAL_UPLOAD_TOKEN)) {
    return json(401, { error: "Não autorizado." });
  }

  const limite = Date.now() - DIAS_PARA_APAGAR * 24 * 60 * 60 * 1000;
  let apagados = 0;
  let cursor: string | undefined;

  try {
    do {
      const pagina = await list({ prefix: "social/", cursor, limit: 1000 });
      const velhos = pagina.blobs
        .filter((b) => new Date(b.uploadedAt).getTime() < limite)
        .map((b) => b.url);
      if (velhos.length > 0) {
        await del(velhos);
        apagados += velhos.length;
      }
      cursor = pagina.hasMore ? pagina.cursor : undefined;
    } while (cursor);

    return json(200, { apagados });
  } catch (error) {
    console.error("social-cleanup: falha ao limpar o Blob", error);
    return json(500, { error: "Não foi possível limpar as imagens antigas.", apagados });
  }
}
