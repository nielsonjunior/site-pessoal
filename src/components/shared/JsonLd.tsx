import { Helmet } from "react-helmet-async";

/**
 * Injeta um bloco de dados estruturados (JSON-LD) no <head>.
 * Use um por schema. Os construtores ficam em src/lib/jsonld.ts.
 *
 * Segurança: mesmo os dados sendo internos (sem input do usuário), escapamos
 * `<`, `>` e `&` para impedir qualquer quebra do contexto <script> (defesa em
 * profundidade contra XSS caso algum dado passe a vir de fonte externa).
 */
function safeJsonLd(data: object): string {
  return JSON.stringify(data)
    .replace(/</g, "\\u003c")
    .replace(/>/g, "\\u003e")
    .replace(/&/g, "\\u0026");
}

export function JsonLd({ data }: { data: object }) {
  return (
    <Helmet>
      <script type="application/ld+json">{safeJsonLd(data)}</script>
    </Helmet>
  );
}
