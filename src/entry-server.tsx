import { prerender } from "react-dom/static";
import { StaticRouter } from "react-router";
import { HelmetProvider, type HelmetServerState } from "react-helmet-async";
import { AppShell } from "@/AppShell";

// react-helmet-async preenche este objeto com `.helmet` durante o render.
interface HelmetCtx {
  helmet?: HelmetServerState;
}

/**
 * Render no servidor (build-time) usado pelo pré-render sem navegador
 * (scripts/prerender.mjs). Retorna o HTML do app e os dados do <head> (Helmet)
 * daquela rota.
 *
 * Usa `prerender` (e não `renderToString`) porque as páginas são
 * carregadas com React.lazy: ele espera cada página resolver antes de gerar o
 * HTML, então o arquivo final já sai com o conteúdo completo.
 */
export async function render(url: string) {
  const helmetContext: HelmetCtx = {};
  const { prelude } = await prerender(
    <HelmetProvider context={helmetContext}>
      <StaticRouter location={url}>
        <AppShell />
      </StaticRouter>
    </HelmetProvider>,
  );
  const html = await new Response(prelude).text();
  return { html, helmet: helmetContext.helmet };
}
