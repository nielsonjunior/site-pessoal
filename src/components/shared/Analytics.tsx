import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { SITE } from "@/config/site";

/**
 * Integracao com Google Analytics 4.
 * Usa o ID de `VITE_GA_MEASUREMENT_ID` (se definido) ou o padrao em `SITE`.
 * Ativa SOMENTE em build de producao (`import.meta.env.PROD`), para nao poluir
 * o GA com trafego de dev nem carregar o gtag durante os testes E2E.
 *
 * SPA: o page_view automatico fica desligado (`send_page_view: false`) e
 * disparamos um page_view a cada mudanca de rota.
 */
const GA_ID = import.meta.env.VITE_GA_MEASUREMENT_ID || SITE.gaMeasurementId;
const GA_ENABLED = import.meta.env.PROD && !!GA_ID;

export function Analytics() {
  const { pathname, search } = useLocation();

  useEffect(() => {
    if (!GA_ENABLED || typeof window === "undefined" || !window.gtag) return;
    window.gtag("event", "page_view", {
      page_path: pathname + search,
      page_location: window.location.href,
      page_title: document.title,
    });
  }, [pathname, search]);

  // Rastreio de lead: qualquer clique em link de WhatsApp ou telefone dispara o
  // evento `generate_lead` (delegação global, pega todos os CTAs do site).
  // Marque `generate_lead` como conversão no GA4. No-op se o gtag não existir.
  useEffect(() => {
    function onClick(e: MouseEvent) {
      const el = e.target as HTMLElement | null;
      const link = el?.closest?.("a") as HTMLAnchorElement | null;
      if (!link) return;
      const href = link.href || "";
      let method: string | null = null;
      if (/wa\.me|api\.whatsapp\.com/i.test(href)) method = "whatsapp";
      else if (href.startsWith("tel:")) method = "phone";
      if (!method) return;
      if (typeof window !== "undefined" && typeof window.gtag === "function") {
        window.gtag("event", "generate_lead", {
          method,
          link_url: href,
          page_path: window.location.pathname,
        });
      }
    }
    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);

  if (!GA_ENABLED) return null;

  return (
    <Helmet>
      <script
        async
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
      />
      <script>{`
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        window.gtag = gtag;
        gtag('js', new Date());
        gtag('config', '${GA_ID}', { send_page_view: false });
      `}</script>
    </Helmet>
  );
}
