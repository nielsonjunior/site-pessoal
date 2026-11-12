// @vitest-environment node
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";

const list = vi.fn();
const del = vi.fn();
vi.mock("@vercel/blob", () => ({
  list: (...args: unknown[]) => list(...args),
  del: (...args: unknown[]) => del(...args),
}));

const { GET } = await import("../../api/social-cleanup");

const DIA = 24 * 60 * 60 * 1000;
const agora = Date.now();
const blob = (nome: string, dias: number) => ({
  url: `https://abc.public.blob.vercel-storage.com/social/${nome}`,
  pathname: `social/${nome}`,
  uploadedAt: new Date(agora - dias * DIA),
});

function chamada(token?: string): Request {
  return new Request("https://www.npcastilho.eng.br/api/social-cleanup", {
    headers: token ? { Authorization: `Bearer ${token}` } : {},
  });
}

describe("GET /api/social-cleanup", () => {
  beforeEach(() => {
    vi.stubEnv("CRON_SECRET", "segredo-do-cron");
    vi.stubEnv("SOCIAL_UPLOAD_TOKEN", "token-de-upload");
    list.mockReset();
    del.mockReset();
  });
  afterEach(() => vi.unstubAllEnvs());

  it("responde 401 sem token e não apaga nada", async () => {
    const res = await GET(chamada());
    expect(res.status).toBe(401);
    expect(list).not.toHaveBeenCalled();
    expect(del).not.toHaveBeenCalled();
  });

  it("responde 401 com token errado", async () => {
    const res = await GET(chamada("errado"));
    expect(res.status).toBe(401);
  });

  it("apaga só os blobs de social/ com mais de 30 dias, em todas as páginas", async () => {
    list
      .mockResolvedValueOnce({ blobs: [blob("velho-1.jpg", 45), blob("novo-1.jpg", 2)], hasMore: true, cursor: "c2" })
      .mockResolvedValueOnce({ blobs: [blob("velho-2.jpg", 31), blob("novo-2.jpg", 29)], hasMore: false });

    const res = await GET(chamada("segredo-do-cron"));

    expect(res.status).toBe(200);
    expect(await res.json()).toEqual({ apagados: 2 });
    expect(list).toHaveBeenNthCalledWith(1, expect.objectContaining({ prefix: "social/", cursor: undefined }));
    expect(list).toHaveBeenNthCalledWith(2, expect.objectContaining({ prefix: "social/", cursor: "c2" }));
    expect(del).toHaveBeenCalledTimes(2);
    expect(del).toHaveBeenNthCalledWith(1, [blob("velho-1.jpg", 45).url]);
    expect(del).toHaveBeenNthCalledWith(2, [blob("velho-2.jpg", 31).url]);
  });

  it("aceita o SOCIAL_UPLOAD_TOKEN para rodar na mão", async () => {
    list.mockResolvedValueOnce({ blobs: [blob("novo.jpg", 1)], hasMore: false });
    const res = await GET(chamada("token-de-upload"));
    expect(res.status).toBe(200);
    expect(await res.json()).toEqual({ apagados: 0 });
    expect(del).not.toHaveBeenCalled();
  });
});
