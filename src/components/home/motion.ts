export const clamp = (v: number, a = 0, b = 1) => Math.min(b, Math.max(a, v));
export const ease = (t: number) => 1 - Math.pow(1 - t, 3);
/** No servidor (pré-render) assume "reduzido": o HTML sai parado e legível. */
export const prefersReduced = () =>
  typeof window === "undefined" || matchMedia("(prefers-reduced-motion: reduce)").matches;
