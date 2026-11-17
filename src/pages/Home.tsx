import { SEO } from '@/components/shared';
import { HomeHero } from '@/components/home/HomeHero';
import { HomeStory } from '@/components/home/HomeStory';
import { HomeMarquee, HomeServices, HomeAbout, HomeCases, HomeMap, HomeContact } from '@/components/home/HomeSections';

export function Home() {
  return (
    <>
      <SEO
        title="Engenheiro Civil em Cáceres-MT: Casa Nova, Regularização e ART"
        description="Engenheiro civil em Cáceres e região. Projeto, alvará e acompanhamento de obra (também com financiamento), reforma, ampliação, regularização de imóveis, laudos e ART."
        keywords={[
          'Nielson Pinheiro engenheiro',
          'engenheiro civil Cáceres',
          'construir casa financiamento Cáceres',
          'regularização de imóveis Cáceres',
          'ART Cáceres',
          'laudos técnicos Cáceres',
          'projetos de reforma Cáceres',
        ]}
      />
      <div className="nh">
        <HomeHero />
        <HomeStory />
        <HomeMarquee />
        <HomeServices />
        <HomeAbout />
        <HomeCases />
        <HomeMap />
        <HomeContact />
      </div>
    </>
  );
}
