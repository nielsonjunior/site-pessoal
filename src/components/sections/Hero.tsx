import { ArrowUpRight, Phone } from 'lucide-react';
import { Aurora } from '@/components/shared/Aurora';
import { SITE } from '@/config/site';

const wa = (msg: string) =>
  `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(msg)}`;

const stats = [
  { value: '+12', label: 'Cidades atendidas' },
  { value: 'até 30%', label: 'de valorização possível', accent: true },
  { value: '24h', label: 'Resposta em dias úteis' },
];

/**
 * Hero (tema premium escuro) — headline de dor + fundo aurora.
 * Mantém o termo-chave "Engenheiro Civil em Cáceres" no eyebrow (SEO).
 */
export function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#000000] text-white lg:min-h-[92vh] flex items-center">
      <Aurora />
      {/* borda interna sutil, como um "frame" premium */}
      <div className="pointer-events-none absolute inset-3 sm:inset-4 rounded-3xl border border-white/10" />

      <div className="relative z-10 container-custom pt-32 pb-16 lg:pt-40 lg:pb-24">
        <div className="max-w-3xl mx-auto text-center">
          <span
            className="hero-in inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-xs sm:text-sm font-medium text-[#E4E6EA] backdrop-blur-sm"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-[#F28A2E] shadow-[0_0_10px_#F28A2E]" />
            Engenheiro Civil em Cáceres-MT e região
          </span>

          <h1
            className="hero-in mt-6 font-display font-semibold leading-[1.05] text-white text-[34px] sm:text-5xl lg:text-6xl"
            style={{ animationDelay: "0.1s" }}
          >
            Seu imóvel é seu.{' '}
            <span className="text-[#F28A2E] [text-shadow:0_0_34px_rgba(242,138,46,.35)]">
              O papel comprova isso?
            </span>
          </h1>

          <p
            className="hero-in mx-auto mt-5 max-w-xl text-base sm:text-lg leading-relaxed text-[#C9CCD2]"
            style={{ animationDelay: "0.2s" }}
          >
            Sem a documentação em dia, não dá pra{' '}
            <b className="font-semibold text-white">vender, financiar nem deixar de herança</b>{' '}
            — e você pode estar perdendo até 30% do valor. Eu resolvo a papelada.
            Você fala direto comigo.
          </p>

          <div
            className="hero-in mt-8 flex flex-col sm:flex-row items-center justify-center gap-3"
            style={{ animationDelay: "0.3s" }}
          >
            <a
              href="#situacoes"
              className="group inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-full bg-[#F28A2E] px-7 py-4 text-[15px] font-semibold text-[#0F141B] font-display shadow-[0_14px_40px_-10px_rgba(242,138,46,.6)] transition-transform hover:-translate-y-0.5"
            >
              Descobrir o meu caso
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-black/10">
                <ArrowUpRight className="h-3.5 w-3.5" />
              </span>
            </a>
            <a
              href={wa('Olá! Preciso resolver a documentação do meu imóvel. Pode me ajudar?')}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-full border border-white/15 bg-white/5 px-7 py-4 text-[15px] font-medium text-white backdrop-blur-sm transition-colors hover:bg-white/10"
            >
              <Phone className="h-4 w-4" />
              Falar no WhatsApp
            </a>
          </div>

          <p
            className="hero-in mt-4 text-xs sm:text-sm text-[#9AA0A8]"
            style={{ animationDelay: "0.5s" }}
          >
            Análise gratuita · resposta em até 24h úteis · CREA 5071806455
          </p>

          {/* stats */}
          <div
            className="hero-in relative mx-auto mt-12 grid max-w-2xl grid-cols-3 gap-3 border-t border-white/10 pt-8"
            style={{ animationDelay: "0.6s" }}
          >
            {stats.map((s, i) => (
              <div key={i} className="text-center">
                <p className="font-display text-xl sm:text-3xl font-semibold text-white leading-none">
                  {s.accent ? (
                    <>até <span className="text-[#F28A2E]">30%</span></>
                  ) : (
                    s.value
                  )}
                </p>
                <p className="mt-2 text-[11px] sm:text-sm text-[#A7ABB2] leading-tight">
                  {s.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
