import { useLayoutEffect } from "react";
import { useLocation, useNavigationType } from "react-router-dom";

/**
 * Ao abrir uma página nova por um link, sobe para o topo. Sem isto o SPA mantém a
 * altura da página anterior (ex.: clicou no rodapé e a página nova abria no rodapé).
 * Links com âncora (#secao) e o botão Voltar do navegador (POP) ficam como estão.
 */
export function ScrollToTop() {
  const { pathname, hash } = useLocation();
  const nav = useNavigationType();
  useLayoutEffect(() => {
    if (hash || nav === "POP") return;
    // "instant": o html tem scroll-behavior: smooth e a subida não deve ser animada
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, [pathname, hash, nav]);
  return null;
}
