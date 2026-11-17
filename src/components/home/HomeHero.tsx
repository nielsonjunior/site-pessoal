import { useEffect, useRef } from "react";
import { wa } from "@/data/home";
import { clamp, ease, prefersReduced } from "./motion";

// Casa (telhado + corpo) centrada em (cx, cy) com largura w, em px da tela.
function housePoly(cx: number, cy: number, w: number, W: number, H: number) {
  const h = w * 0.86, roof = w * 0.42;
  const x0 = cx - w / 2, x1 = cx + w / 2, yb = cy + h / 2, yr = cy - h / 2 + roof, yt = cy - h / 2;
  const pt = (x: number, y: number) => `${((x / W) * 100).toFixed(2)}% ${((y / H) * 100).toFixed(2)}%`;
  return `polygon(${pt(x0, yb)}, ${pt(x0, yr)}, ${pt(cx, yt)}, ${pt(x1, yr)}, ${pt(x1, yb)})`;
}

/** Topo preso: a foto da casa e, rolando, um painel laranja em forma de casa que cresce. */
export function HomeHero() {
  const hero = useRef<HTMLElement>(null);
  const stage = useRef<HTMLDivElement>(null);
  const take = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (prefersReduced()) return;
    const h = hero.current!, st = stage.current!, tk = take.current!;
    let raf = 0;
    const frame = () => {
      raf = 0;
      const r = h.getBoundingClientRect();
      const p = clamp(-r.top / Math.max(1, h.offsetHeight - st.offsetHeight));
      h.style.setProperty("--p", p.toFixed(4));
      const W = st.clientWidth, H = st.clientHeight;
      // 0.12 → 0.62: a casa nasce no canto de baixo à direita e cresce até cobrir tudo
      const t = ease(clamp((p - 0.12) / 0.5));
      if (t <= 0) tk.style.setProperty("--clip", "polygon(100% 100%, 100% 100%, 100% 100%, 100% 100%, 100% 100%)");
      else {
        const cx = W * (0.86 - 0.36 * t), cy = H * (0.86 - 0.36 * t);
        tk.style.setProperty("--clip", housePoly(cx, cy, 60 + t * Math.hypot(W, H) * 2.6, W, H));
      }
      tk.style.setProperty("--d", clamp((p - 0.45) / 0.45).toFixed(3));
    };
    const onScroll = () => { if (!raf) raf = requestAnimationFrame(frame); };
    addEventListener("scroll", onScroll, { passive: true });
    addEventListener("resize", onScroll);
    frame();
    return () => { removeEventListener("scroll", onScroll); removeEventListener("resize", onScroll); cancelAnimationFrame(raf); };
  }, []);

  return (
    <section className="hero" id="topo" aria-label="Apresentação" ref={hero}>
      <div className="stage" ref={stage}>
        <div className="layer">
          <img
            className="photo"
            src="/images/historia/00A-1280.webp"
            srcSet="/images/historia/00A-640.webp 640w, /images/historia/00A-1280.webp 1280w"
            sizes="100vw"
            alt=""
            fetchPriority="high"
          />
          <div className="shade" />
          <div className="hero-copy wrap">
            <span className="eyebrow">Engenheiro civil em Cáceres-MT e região</span>
            <h1>
              Eu cuido da sua obra
              <br />e dos papéis do seu imóvel
            </h1>
            <p>Projeto, alvará, obra e regularização em Cáceres e região</p>
            <div className="hero-ctas">
              <a className="btn btn-lime" href={wa()} target="_blank" rel="noopener noreferrer">
                Falar no WhatsApp
              </a>
            </div>
          </div>
        </div>
        <div className="layer takeover" ref={take}>
          <svg className="plan" viewBox="0 0 1200 800" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
            <path className="draw" pathLength={1} d="M140 120H1060V680H140Z" />
            <path className="draw" pathLength={1} d="M520 120V460" />
            <path className="draw" pathLength={1} d="M140 460H760" />
            <path className="draw" pathLength={1} d="M760 300V680" />
            <path className="draw" pathLength={1} d="M760 300H1060" />
            <path className="draw" pathLength={1} d="M520 400A60 60 0 0 1 580 460" />
            <path className="draw" pathLength={1} d="M760 520A60 60 0 0 0 700 460" />
            <path className="draw" pathLength={1} d="M140 740H1060" />
            <path className="draw" pathLength={1} d="M90 120V680" />
          </svg>
          <div className="take-copy wrap">
            <span className="eyebrow" style={{ color: "var(--ink-on-lime)" }}>
              Engenheiro civil · CREA 5071806455
            </span>
            <h2>Do projeto ao habite-se</h2>
            <p className="source" style={{ fontSize: 16, opacity: 1 }}>
              Todo serviço sai com ART no CREA
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
