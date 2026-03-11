import { SEO } from '@/components/shared';
import { Hero, Services, About, Testimonials, CTA, Cities } from '@/components/sections';

export function Home() {
  return (
    <>
      <SEO
        title="Nielson Pinheiro | Engenheiro Civil em Campinas - Projetos e Regularização"
        description="Engenheiro Civil em Campinas e região. Nielson Pinheiro - especialista em regularização de imóveis, ART, reformas e laudos técnicos. Orçamento grátis!"
        keywords={[
          'Nielson Pinheiro engenheiro',
          'engenheiro civil Campinas',
          'regularização de imóveis Campinas',
          'ART Campinas',
          'laudos técnicos Campinas',
          'projetos de reforma Campinas',
          'engenharia civil região Campinas'
        ]}
      />
      <Hero />
      <Services />
      <About />
      <Testimonials />
      <Cities />
      <CTA />
    </>
  );
}
