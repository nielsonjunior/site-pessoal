import { SEO } from '@/components/shared';
import { Hero, Services, About, Testimonials, CTA, Cities, SituacoesRegularizacao, VoceSabia } from '@/components/sections';

export function Home() {
  return (
    <>
      <SEO
        title="Engenheiro Civil em Cáceres-MT: Regularização, ART e Projetos"
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
      <VoceSabia />
      <Services />
      <About />
      <Testimonials />
      <Cities />
      <CTA />
    </>
  );
}
