import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { HOME_CASES, HOME_SERVICES, MAPA_CIDADES, MARQUEE, wa } from "@/data/home";
import { clamp, prefersReduced } from "./motion";

const Arrow = ({ dir }: { dir: "prev" | "next" }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.4} aria-hidden="true">
    <path d={dir === "prev" ? "M15 5l-7 7 7 7" : "M9 5l7 7-7 7"} />
  </svg>
);

export function HomeMarquee() {
  return (
    <div className="marquee" aria-label="Serviços">
      <div className="track">
        {MARQUEE.map((s) => <span key={s}>{s}</span>)}
        {MARQUEE.map((s) => <span key={s + "-2"} aria-hidden="true">{s}</span>)}
      </div>
    </div>
  );
}

/** Serviços explicados: lista à esquerda, explicação passo a passo à direita. */
export function HomeServices() {
  const [sel, setSel] = useState(HOME_SERVICES[0].id);
  const [swap, setSwap] = useState(0);
  const panel = useRef<HTMLElement>(null);
  const s = HOME_SERVICES.find((x) => x.id === sel) ?? HOME_SERVICES[0];

  const pick = (id: string) => {
    setSel(id);
    setSwap((n) => n + 1);
    if (matchMedia("(max-width: 820px)").matches)
      requestAnimationFrame(() => panel.current?.scrollIntoView({ behavior: prefersReduced() ? "auto" : "smooth", block: "start" }));
  };

  return (
    <section className="sec svc" id="servicos">
      <div className="wrap">
        <div className="svc-head">
          <span className="eyebrow">Serviços</span>
          <h2>O que eu faço</h2>
        </div>
        <div className="svc-grid">
          <div className="svc-list" role="tablist" aria-label="Serviços">
            {HOME_SERVICES.map((x) => (
              <button key={x.id} type="button" role="tab" id={`tab-${x.id}`} aria-controls="svcPanel" aria-selected={x.id === s.id} onClick={() => pick(x.id)}>
                <b>{x.nome}</b>
                <small>{x.hint}</small>
              </button>
            ))}
          </div>
          <article key={swap} className={"svc-panel" + (swap ? " swap" : "")} id="svcPanel" role="tabpanel" aria-labelledby={`tab-${s.id}`} ref={panel}>
            <h3>{s.nome}</h3>
            <p className="when">{s.quando}</p>
            <h4>O que eu faço</h4>
            <ol>{s.passos.map((p) => <li key={p}>{p}</li>)}</ol>
            <h4>O que você recebe</h4>
            <div className="gets">{s.recebe.map((r) => <span key={r}>{r}</span>)}</div>
            <p className="tip">{s.dica}</p>
            <a className="btn btn-wa" href={wa("Olá! Quero ajuda com: " + s.nome)} target="_blank" rel="noopener noreferrer">Falar sobre isso no WhatsApp</a>
            {s.pagina && <Link className="svc-more" to={s.pagina}>Ver a página do serviço</Link>}
          </article>
        </div>
      </div>
    </section>
  );
}

const GALERIA = [
  { src: "/images/about-engineer-1248.webp", alt: "Engenheiro Nielson em campo" },
  { src: "/images/about-detail-1248.webp", alt: "Nielson em projeto na região de Cáceres" },
  { src: "/images/engineer-office.jpg", alt: "Mesa de projeto com plantas" },
];

export function HomeAbout() {
  const [gi, setGi] = useState(0);
  const go = (d: number) => setGi((i) => (i + d + GALERIA.length) % GALERIA.length);
  return (
    <section className="sec about" id="sobre">
      <div className="wrap">
        <div className="txt">
          <span className="eyebrow" style={{ color: "#B85F12" }}>Sobre</span>
          <h2 className="caps">Nielson Castilho</h2>
          <p>Sou o Nielson Pinheiro de Castilho Júnior, engenheiro civil em Cáceres-MT.</p>
          <p>Faço o projeto da sua obra, tiro o alvará, acompanho a construção e cuido dos papéis do imóvel na prefeitura e no cartório.</p>
          <p>Quem atende, faz o projeto e vai na obra sou eu.</p>
        </div>
        <div className="gallery">
          {GALERIA.map((g, i) => <img key={g.src} className={i === gi ? "on" : undefined} src={g.src} alt={g.alt} loading="lazy" />)}
          <button className="arrow prev" type="button" aria-label="Foto anterior" onClick={() => go(-1)}><Arrow dir="prev" /></button>
          <button className="arrow next" type="button" aria-label="Próxima foto" onClick={() => go(1)}><Arrow dir="next" /></button>
        </div>
      </div>
    </section>
  );
}

/** Carrossel de pedidos comuns, com o cartão do meio em destaque. */
export function HomeCases() {
  const [ci, setCi] = useState(0);
  const vp = useRef<HTMLDivElement>(null);
  const rail = useRef<HTMLDivElement>(null);
  const sx = useRef<number | null>(null);
  const n = HOME_CASES.length;
  const go = (i: number) => setCi((i + n) % n);

  useEffect(() => {
    const place = () => {
      const c = rail.current!.children[ci] as HTMLElement;
      const x = vp.current!.clientWidth / 2 - (c.offsetLeft + c.offsetWidth / 2);
      rail.current!.style.transform = `translateX(${x}px)`;
    };
    place();
    addEventListener("resize", place);
    return () => removeEventListener("resize", place);
  }, [ci]);

  return (
    <section className="sec cases" id="situacoes">
      <div className="cases-bg" style={{ backgroundImage: "url('/images/historia/13-1280.webp')" }} />
      <div className="wrap head">
        <span className="eyebrow">Casos</span>
        <h2 className="caps">Pedidos mais comuns</h2>
      </div>
      <div
        className="viewport"
        ref={vp}
        onPointerDown={(e) => (sx.current = e.clientX)}
        onPointerUp={(e) => {
          if (sx.current !== null && Math.abs(e.clientX - sx.current) > 40) go(ci + (e.clientX < sx.current ? 1 : -1));
          sx.current = null;
        }}
      >
        <div className="rail" ref={rail}>
          {HOME_CASES.map((c, i) => (
            <article key={c.quote} className={"card" + (i === ci ? " on" : "")} aria-roledescription="slide" aria-label={`${i + 1} de ${n}`}>
              <div className="body">
                <p className="quote">{c.quote}</p>
                <h3>{c.titulo}</h3>
                <p className="desc">{c.desc}</p>
                <div className="links">
                  <a className="more" href={wa("Olá! Meu caso: " + c.quote)} target="_blank" rel="noopener noreferrer">Falar sobre isso</a>
                  {c.pagina && <Link className="page" to={c.pagina}>Saiba mais</Link>}
                </div>
              </div>
              <div className="pic"><img src={c.img} alt="" loading="lazy" /></div>
            </article>
          ))}
        </div>
        <button className="arrow prev" type="button" aria-label="Caso anterior" onClick={() => go(ci - 1)}><Arrow dir="prev" /></button>
        <button className="arrow next" type="button" aria-label="Próximo caso" onClick={() => go(ci + 1)}><Arrow dir="next" /></button>
      </div>
      <div className="dots" role="tablist" aria-label="Escolher caso">
        {HOME_CASES.map((c, i) => (
          <button key={c.quote} type="button" role="tab" aria-label={`Caso ${i + 1}`} aria-selected={i === ci} className={i === ci ? "on" : undefined} onClick={() => go(i)} />
        ))}
      </div>
    </section>
  );
}

const LON0 = -59.9, LON1 = -56.6, LAT0 = -14.55, LAT1 = -16.75;
const proj = (lon: number, lat: number): [number, number] => [(lon - LON0) / (LON1 - LON0), (lat - LAT0) / (LAT1 - LAT0)];
// Contorno aproximado da região (lon/lat), só para dar forma aos pontos.
const SHAPE = [[-59.8, -14.7], [-58.7, -14.6], [-57.6, -14.75], [-56.8, -15.0], [-56.7, -15.7], [-57.1, -16.5], [-57.9, -16.7], [-58.6, -16.4], [-59.2, -16.0], [-59.85, -15.4]].map(([a, b]) => proj(a, b));
function inside(x: number, y: number) {
  let o = false;
  for (let i = 0, j = SHAPE.length - 1; i < SHAPE.length; j = i++) {
    const [xi, yi] = SHAPE[i], [xj, yj] = SHAPE[j];
    if (yi > y !== yj > y && x < ((xj - xi) * (y - yi)) / (yj - yi) + xi) o = !o;
  }
  return o;
}

/** Mapa de pontos da região com as cidades atendidas. */
export function HomeMap() {
  const [sel, setSel] = useState(0);
  const box = useRef<HTMLDivElement>(null);
  const cv = useRef<HTMLCanvasElement>(null);
  const t0 = useRef(0);

  useEffect(() => {
    const b = box.current!, c = cv.current!, ctx = c.getContext("2d");
    if (!ctx) return;
    const reduce = prefersReduced();
    const draw = (now: number) => {
      const W = b.clientWidth, H = b.clientHeight, dpr = Math.min(2, devicePixelRatio || 1);
      if (c.width !== Math.round(W * dpr)) { c.width = Math.round(W * dpr); c.height = Math.round(H * dpr); }
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      ctx.clearRect(0, 0, W, H);
      const step = W < 520 ? 11 : 15, r = W < 520 ? 2.4 : 3.2;
      const reveal = reduce || !t0.current ? 1 : clamp((now - t0.current) / 1400);
      const [sx, sy] = proj(MAPA_CIDADES[sel][1], MAPA_CIDADES[sel][2]);
      const pts = MAPA_CIDADES.map(([, lo, la]) => proj(lo, la));
      for (let y = step / 2; y < H; y += step)
        for (let x = step / 2; x < W; x += step) {
          const u = x / W, v = y / H;
          if (!inside(u, v)) continue;
          const near = Math.max(...pts.map(([a, bb]) => 1 - clamp(Math.hypot((a - u) * W, (bb - v) * H) / 70)));
          const selNear = 1 - clamp(Math.hypot((sx - u) * W, (sy - v) * H) / 120);
          const wave = reveal < 1 ? clamp((reveal * 1.3 - u) * 4) : 1;
          const a = (0.18 + near * 0.55 + selNear * 0.3) * wave;
          ctx.fillStyle = near > 0.05 || selNear > 0.05 ? `rgba(242,138,46,${a.toFixed(3)})` : `rgba(90,95,104,${(0.55 * wave).toFixed(3)})`;
          ctx.beginPath(); ctx.arc(x, y, r, 0, Math.PI * 2); ctx.fill();
        }
      return reveal < 1;
    };
    let raf = 0;
    const io = new IntersectionObserver(([e]) => {
      if (e.isIntersecting && !t0.current && !reduce) {
        t0.current = performance.now();
        const tick = (n: number) => { if (draw(n)) raf = requestAnimationFrame(tick); };
        raf = requestAnimationFrame(tick);
      }
    }, { threshold: 0.25 });
    io.observe(b);
    const redraw = () => draw(performance.now() + 1e6);
    addEventListener("resize", redraw);
    redraw();
    return () => { io.disconnect(); removeEventListener("resize", redraw); cancelAnimationFrame(raf); };
  }, [sel]);

  const [nome, lo, la, sub, slug] = MAPA_CIDADES[sel];
  const [u, v] = proj(lo, la);
  return (
    <section className="sec map" id="cidades">
      <div className="wrap">
        <span className="eyebrow">Área de atendimento</span>
        <h2 style={{ marginTop: 12 }}>Atendo Cáceres e mais {MAPA_CIDADES.length - 1} cidades da região</h2>
        <div className="map-box" ref={box}>
          <canvas ref={cv} aria-hidden="true" />
          {MAPA_CIDADES.map(([n, plo, pla], i) => {
            const [pu, pv] = proj(plo, pla);
            return (
              <button key={n} type="button" className={"pin" + (i === 0 ? " home" : "")} aria-label={n} onClick={() => setSel(i)}
                style={{ left: `${pu * 100}%`, top: `${pv * 100}%`, ["--delay" as string]: `${(i * 0.23).toFixed(2)}s` }} />
            );
          })}
          <div className="city-card" style={{ left: `${clamp(u, 0.2, 0.8) * 100}%`, top: `${v * 100}%` }}>
            <b>{nome}</b>
            {sub && <small>{sub}</small>}
            <Link to={`/cidades/${slug}`}>Ver página da cidade</Link>
          </div>
        </div>
        <div className="chips">
          {MAPA_CIDADES.map(([n], i) => (
            <button key={n} type="button" className={i === sel ? "on" : undefined} onClick={() => setSel(i)}>{n}</button>
          ))}
        </div>
      </div>
    </section>
  );
}

export function HomeContact() {
  return (
    <section className="sec contact" id="contato">
      <div className="wrap">
        <div>
          <span className="eyebrow">Contato</span>
          <h2 style={{ marginTop: 10 }}>Me conte o que você precisa</h2>
          <p className="phone">WhatsApp (65) 99694-6861 · <a href="mailto:contato@npcastilho.eng.br?subject=Contato%20pelo%20site">contato@npcastilho.eng.br</a></p>
        </div>
        <a className="btn btn-wa" href={wa("Olá! Quero uma análise do meu imóvel.")} target="_blank" rel="noopener noreferrer">Chamar no WhatsApp</a>
      </div>
    </section>
  );
}
