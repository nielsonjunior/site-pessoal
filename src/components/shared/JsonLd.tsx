import { Helmet } from "react-helmet-async";

/**
 * Injeta um bloco de dados estruturados (JSON-LD) no <head>.
 * Use um por schema. Os construtores ficam em src/lib/jsonld.ts.
 */
export function JsonLd({ data }: { data: object }) {
  return (
    <Helmet>
      <script type="application/ld+json">{JSON.stringify(data)}</script>
    </Helmet>
  );
}
