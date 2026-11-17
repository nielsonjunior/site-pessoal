import { Link } from 'react-router-dom';
import { SEO } from '@/components/shared';

const FACO = [
  { label: 'Projeto e acompanhamento de casa nova, também com financiamento', to: '/' },
  { label: 'Projeto de reforma e de ampliação', to: '/servicos/projetos-reforma' },
  { label: 'Regularização do imóvel na prefeitura e no cartório', to: '/servicos/regularizacao-imoveis' },
  { label: 'Laudo de rachadura, infiltração e avaliação', to: '/servicos/laudos-tecnicos' },
  { label: 'Alvará dos Bombeiros para comércio', to: '/servicos/regularizacao-imoveis/avcb' },
  { label: 'ART', to: '/servicos/art-anotacao-responsabilidade-tecnica' },
];

export function About() {
  return (
    <div className="bg-[#000000] text-white">
      <SEO
        title="Sobre - Nielson Pinheiro | Engenheiro Civil em Cáceres-MT"
        description="Nielson Pinheiro de Castilho Júnior, engenheiro civil em Cáceres-MT, CREA 5071806455. Projeto, obra, reforma, regularização de imóveis, laudos e ART."
        keywords={['Nielson Pinheiro engenheiro', 'engenheiro civil Cáceres', 'engenheiro Nielson', 'engenharia Cáceres']}
      />

      <section className="pt-32 pb-12 bg-gradient-to-br from-[#1A1D22] to-[#000000]">
        <div className="container-custom hero-in text-center max-w-3xl mx-auto">
          <h1 className="font-display text-4xl md:text-5xl font-bold text-white">
            Nielson Pinheiro de Castilho Júnior
          </h1>
        </div>
      </section>

      <section className="section-padding bg-[#000000]">
        <div className="container-custom grid lg:grid-cols-2 gap-12 items-center">
          <div className="rounded-[4px] overflow-hidden">
            <img
              src="/images/about-detail-1248.webp"
              srcSet="/images/about-detail-640.webp 640w, /images/about-detail-1248.webp 1248w"
              sizes="(min-width: 1024px) 50vw, 100vw"
              alt="Engenheiro civil Nielson Pinheiro em projeto na região de Cáceres-MT"
              className="w-full h-[420px] object-cover"
              width={800}
              height={500}
              loading="lazy"
              decoding="async"
            />
          </div>
          <div className="space-y-4 text-[#C9CCD2] text-lg">
            <p>Sou engenheiro civil e trabalho em Cáceres e nas cidades vizinhas.</p>
            <p>
              Faço o projeto da obra, tiro o alvará, acompanho a construção e cuido dos papéis
              do imóvel na prefeitura e no cartório.
            </p>
            <p>Quem atende, faz o projeto e vai na obra sou eu.</p>
          </div>
        </div>
      </section>

      <section className="section-padding bg-[#0B0C0F]">
        <div className="container-custom">
          <div>
            <h2 className="font-display text-3xl font-bold text-white mb-6">O que eu faço</h2>
            <ul className="space-y-3">
              {FACO.map((f) => (
                <li key={f.label}>
                  <Link to={f.to} className="text-[#D9DBDF] hover:text-[#F28A2E] transition-colors">
                    {f.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}
