import { SEO } from '@/components/shared';
import { Hero, Services, About, Testimonials, CTA, Cities, SituacoesRegularizacao } from '@/components/sections';

export function Home() {
  return (
    <>
      <SEO
        title="Nielson Pinheiro | Engenheiro Civil em Cáceres - Projetos e Regularização"
        description="Engenheiro Civil em Cáceres e região. Nielson Pinheiro - especialista em regularização de imóveis, ART, reformas e laudos técnicos. Orçamento grátis!"
        keywords={[
          'Nielson Pinheiro engenheiro',
          'engenheiro civil Cáceres',
          'regularização de imóveis Cáceres',
          'ART Cáceres',
          'laudos técnicos Cáceres',
          'projetos de reforma Cáceres',
          'engenharia civil região Cáceres'
        ]}
      />
      <Hero />
      <SituacoesRegularizacao />
      <Services />
      <About />
      <Testimonials />
      <Cities />
      <CTA />
    </>
  );
}
