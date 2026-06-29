import type { Variants } from "framer-motion";

/**
 * Variants reutilizáveis de animação (framer-motion).
 * Compatíveis com o SSG/renderToString: renderizam o estado inicial no servidor
 * e animam no cliente. Use com `initial="hidden"` + `whileInView="show"`.
 */
export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  },
};

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 0.5 } },
};

/** Container que escalona a entrada dos filhos. */
export const stagger: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08, delayChildren: 0.05 } },
};

/** Viewport padrão para `whileInView` (anima uma vez, um pouco antes de entrar). */
export const inView = { once: true, margin: "0px 0px -80px 0px" } as const;
