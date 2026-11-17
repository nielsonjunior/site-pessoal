import { useEffect, useRef, useState, useSyncExternalStore, type CSSProperties } from "react";
import { CAPITULOS, FASES, wa } from "@/data/home";
import { BLUEPRINT, INSETS, LEGEND } from "./drawings";
import { clamp, prefersReduced } from "./motion";

const noop = () => () => {};
const img = (id: string, w: 640 | 1280) => `/images/historia/${id}-${w}.webp`;

/**
 * A história da casa própria contada pela rolagem: um palco preso na tela e um
 * capítulo por vez. Sem animação (ou no HTML pré-renderizado) os capítulos
 * aparecem um embaixo do outro.
 */
export function HomeStory() {
  const track = useRef<HTMLDivElement>(null);
  const stage = useRef<HTMLDivElement>(null);
  // No pré-render e na hidratação começa parado; no navegador liga a rolagem (se o movimento não estiver reduzido).
  const live = useSyncExternalStore(noop, () => !prefersReduced(), () => false);
  const [cur, setCur] = useState(0);
  const N = CAPITULOS.length;

  useEffect(() => {
    if (!live) return;
    const tr = track.current!, st = stage.current!;
    const chs = [...st.querySelectorAll<HTMLElement>(".ch")];
    let raf = 0, last = -1;
    const frame = () => {
      raf = 0;
      const r = tr.getBoundingClientRect();
      const p = clamp(-r.top / Math.max(1, tr.offsetHeight - st.offsetHeight));
      st.style.setProperty("--p", p.toFixed(4));
      const pos = p * N * 0.9999, i = Math.min(N - 1, Math.floor(pos)), lp = clamp(pos - i);
      if (i !== last) { last = i; setCur(i); }
      const c = chs[i];
      // o desenho termina antes do fim do capítulo, para dar tempo de ver
      const k = clamp(lp / 0.75);
      c.style.setProperty("--lp", k.toFixed(3));
      if (CAPITULOS[i].img === "BP") for (let j = 0; j < 4; j++) c.style.setProperty("--k" + (j + 1), clamp(k * 4 - j).toFixed(3));
      const b = CAPITULOS[i].banco, bn = c.querySelector(".bank b");
      if (b && bn) bn.textContent = Math.round(b[0] + (b[1] - b[0]) * k) + "%";
    };
    const onScroll = () => { if (!raf) raf = requestAnimationFrame(frame); };
    addEventListener("scroll", onScroll, { passive: true });
    addEventListener("resize", onScroll);
    frame();
    return () => { removeEventListener("scroll", onScroll); removeEventListener("resize", onScroll); cancelAnimationFrame(raf); };
  }, [live, N]);

  const fase = CAPITULOS[cur].fase;

  return (
    <section className={"story" + (live ? " live" : "")} id="historia" aria-label="A história da casa própria">
      <div className="wrap story-intro">
        <div>
          <span className="eyebrow">Casa própria</span>
          <h2>Da casa alugada à casa própria</h2>
        </div>
        <figure className="fam" style={{ margin: 0 }}>
          <img src={img("00B", 640)} srcSet={`${img("00B", 640)} 640w, ${img("00B", 1280)} 1280w`} sizes="(max-width: 760px) 100vw, 45vw" alt="Rafael, Juliana e a filha Sofia sorrindo" loading="lazy" width={640} height={427} />
          <figcaption>Rafael, Juliana e Sofia</figcaption>
        </figure>
      </div>
      <div className="story-track" ref={track} style={{ "--n": N } as CSSProperties}>
        <div className="story-stage" ref={stage}>
          <div className="prog" aria-hidden="true"><i /></div>
          <div className="hud" aria-hidden="true">
            {FASES.map((f, k) => (
              <span key={f} className={k === fase ? "now" : k < fase ? "done" : undefined}>{f}</span>
            ))}
          </div>
          {CAPITULOS.map((c, i) => (
            <article
              key={c.titulo}
              className={"ch" + (live && i === cur ? " on" : "")}
              data-side={c.lado}
              style={{ "--pos": `${c.pos}%` } as CSSProperties}
              aria-label={c.titulo}
            >
              <div className="ch-media">
                {c.img === "BP" ? (
                  <div style={{ display: "contents" }} dangerouslySetInnerHTML={{ __html: BLUEPRINT + LEGEND }} />
                ) : (
                  <img src={img(c.img, 1280)} srcSet={`${img(c.img, 640)} 640w, ${img(c.img, 1280)} 1280w`} sizes="100vw" alt="" loading="lazy" width={1280} height={853} />
                )}
              </div>
              {c.x && <div className="ch-x" aria-hidden="true" dangerouslySetInnerHTML={{ __html: INSETS[c.x] }} />}
              {c.carimbo && (
                <div className="ch-stamp" aria-hidden="true"><small>PREFEITURA</small>HABITE-SE</div>
              )}
              <div className="ch-card">
                <span className="ch-num">{String(i + 1).padStart(2, "0")} de {N} · {FASES[c.fase]}</span>
                <h3>{c.titulo}</h3>
                <p>{c.texto}</p>
                {c.lista && <ul className="ch-list">{c.lista.map((l) => <li key={l}>{l}</li>)}</ul>}
                {c.eu && <span className="ch-eu">{c.eu}</span>}
                {c.banco && (
                  <div className="bank" style={{ "--b0": `${c.banco[0]}%`, "--b1": `${c.banco[1]}%` } as CSSProperties}>
                    <div className="bank-top"><span>Liberado pelo banco</span><b>{c.banco[1]}%</b></div>
                    <div className="bank-bar"><i /></div>
                  </div>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
      <div className="wrap story-end">
        <h2>Vai construir</h2>
        <p>Com financiamento ou com dinheiro próprio, eu faço os projetos e acompanho a obra. Também faço reforma, ampliação, regularização e laudos.</p>
        <div className="row">
          <a className="btn btn-lime" href={wa("Olá! Quero construir a minha casa.")} target="_blank" rel="noopener noreferrer">Chamar no WhatsApp</a>
          <a className="btn btn-ghost" href="#servicos">Outros serviços</a>
        </div>
      </div>
    </section>
  );
}
