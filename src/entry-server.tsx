import { renderToString } from "react-dom/server";
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
 */
export function render(url: string) {
  const helmetContext: HelmetCtx = {};
  const html = renderToString(
    <HelmetProvider context={helmetContext}>
      <StaticRouter location={url}>
        <AppShell />
      </StaticRouter>
    </HelmetProvider>,
  );
  return { html, helmet: helmetContext.helmet };
}
