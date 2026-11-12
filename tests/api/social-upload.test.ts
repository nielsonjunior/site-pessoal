// @vitest-environment node
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";

const put = vi.fn();
vi.mock("@vercel/blob", () => ({ put: (...args: unknown[]) => put(...args) }));

const { POST, GET, MAX_BYTES } = await import("../../api/social-upload");

const TOKEN = "token-de-teste";
const JPEG = Buffer.from([0xff, 0xd8, 0xff, 0xe0, 0x00, 0x10, 0x4a, 0x46, 0x49, 0x46]);

function requisicao(opts: {
  name?: string;
  token?: string | null;
  tipo?: string;
  corpo?: Uint8Array;
}): Request {
  const { name = "2026-11-17-drenagem-01.jpg", token = TOKEN, tipo = "image/jpeg", corpo = JPEG } = opts;
  const headers: Record<string, string> = { "Content-Type": tipo };
  if (token !== null) headers.Authorization = `Bearer ${token}`;
  return new Request(`https://www.npcastilho.eng.br/api/social-upload?name=${encodeURIComponent(name)}`, {
    method: "POST",
    headers,
    body: corpo,
  });
}

describe("POST /api/social-upload", () => {
  beforeEach(() => {
    vi.stubEnv("SOCIAL_UPLOAD_TOKEN", TOKEN);
    put.mockReset();
    put.mockResolvedValue({ url: "https://abc.public.blob.vercel-storage.com/social/2026-11-17-drenagem-01.jpg" });
  });
  afterEach(() => vi.unstubAllEnvs());

  it("responde 401 sem o header Authorization", async () => {
    const res = await POST(requisicao({ token: null }));
    expect(res.status).toBe(401);
    expect(put).not.toHaveBeenCalled();
  });

  it("responde 401 com token errado", async () => {
    const res = await POST(requisicao({ token: "errado" }));
    expect(res.status).toBe(401);
    expect(put).not.toHaveBeenCalled();
  });

  it("responde 401 se SOCIAL_UPLOAD_TOKEN não estiver configurado", async () => {
    vi.stubEnv("SOCIAL_UPLOAD_TOKEN", "");
    const res = await POST(requisicao({ token: "" }));
    expect(res.status).toBe(401);
  });

  it("responde 400 para Content-Type diferente de image/jpeg", async () => {
    const res = await POST(requisicao({ tipo: "image/png" }));
    expect(res.status).toBe(400);
    expect(put).not.toHaveBeenCalled();
  });

  it("responde 400 para arquivo que não é JPEG de verdade", async () => {
    const res = await POST(requisicao({ corpo: Buffer.from("<html>nada</html>") }));
    expect(res.status).toBe(400);
  });

  it("responde 400 para imagem maior que 8 MB", async () => {
    const grande = Buffer.alloc(MAX_BYTES + 1);
    JPEG.copy(grande);
    const res = await POST(requisicao({ corpo: grande }));
    expect(res.status).toBe(400);
    expect(put).not.toHaveBeenCalled();
  });

  it("responde 400 para corpo vazio", async () => {
    const res = await POST(requisicao({ corpo: new Uint8Array() }));
    expect(res.status).toBe(400);
  });

  it.each([
    "Maiuscula.jpg",
    "com espaco.jpg",
    "../fora.jpg",
    "pasta/arquivo.jpg",
    "acentuação.jpg",
    "imagem.png",
    "",
  ])("responde 400 para o nome inválido %j", async (name) => {
    const res = await POST(requisicao({ name }));
    expect(res.status).toBe(400);
    expect(put).not.toHaveBeenCalled();
  });

  it("salva em social/<name>, público, sem sufixo, e devolve a URL", async () => {
    const res = await POST(requisicao({}));
    expect(res.status).toBe(200);
    expect(res.headers.get("content-type")).toContain("application/json");
    expect(await res.json()).toEqual({
      url: "https://abc.public.blob.vercel-storage.com/social/2026-11-17-drenagem-01.jpg",
    });
    expect(put).toHaveBeenCalledWith(
      "social/2026-11-17-drenagem-01.jpg",
      expect.any(Buffer),
      expect.objectContaining({
        access: "public",
        addRandomSuffix: false,
        allowOverwrite: true,
        contentType: "image/jpeg",
      }),
    );
  });

  it("aceita image/jpeg com parâmetros no Content-Type", async () => {
    const res = await POST(requisicao({ tipo: "image/jpeg; charset=binary" }));
    expect(res.status).toBe(200);
  });

  it("responde 500 sem vazar detalhes se o Blob falhar", async () => {
    put.mockRejectedValueOnce(new Error("BLOB_READ_WRITE_TOKEN ausente"));
    vi.spyOn(console, "error").mockImplementation(() => {});
    const res = await POST(requisicao({}));
    expect(res.status).toBe(500);
    expect(JSON.stringify(await res.json())).not.toContain("BLOB_READ_WRITE_TOKEN");
  });
});

describe("GET /api/social-upload", () => {
  it("responde 405 e não lista nada", async () => {
    put.mockReset();
    const res = GET();
    expect(res.status).toBe(405);
    expect(put).not.toHaveBeenCalled();
  });
});
