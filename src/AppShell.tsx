import { lazy, Suspense } from "react";
import "@/components/home/home.css";
import { Routes, Route } from "react-router-dom";
import { Header, Footer, WhatsAppButton, Analytics, JsonLd, ScrollToTop } from "@/components/shared";
import { localBusinessSchema, websiteSchema } from "@/lib/jsonld";

// Cada página vira um arquivo JS próprio, baixado só quando a rota é aberta.
// O HTML continua vindo pronto do pré-render (entry-server espera o lazy resolver).
const Home = lazy(() => import("@/pages/Home").then((m) => ({ default: m.Home })));
const Services = lazy(() => import("@/pages/Services").then((m) => ({ default: m.Services })));
const ServiceDetail = lazy(() => import("@/pages/ServiceDetail").then((m) => ({ default: m.ServiceDetail })));
const RegularizacaoImoveis = lazy(() => import("@/pages/RegularizacaoImoveis").then((m) => ({ default: m.RegularizacaoImoveis })));
const RegularizacaoDetalhe = lazy(() => import("@/pages/RegularizacaoDetalhe").then((m) => ({ default: m.RegularizacaoDetalhe })));
const About = lazy(() => import("@/pages/About").then((m) => ({ default: m.About })));
const Budget = lazy(() => import("@/pages/Budget").then((m) => ({ default: m.Budget })));
const Cities = lazy(() => import("@/pages/Cities").then((m) => ({ default: m.Cities })));
const CityDetail = lazy(() => import("@/pages/CityDetail").then((m) => ({ default: m.CityDetail })));
const FAQ = lazy(() => import("@/pages/FAQ").then((m) => ({ default: m.FAQ })));
const LandingPage = lazy(() => import("@/pages/LandingPage").then((m) => ({ default: m.LandingPage })));
const WhatIsART = lazy(() => import("@/pages/WhatIsART").then((m) => ({ default: m.WhatIsART })));
const WhyHireEngineer = lazy(() => import("@/pages/WhyHireEngineer").then((m) => ({ default: m.WhyHireEngineer })));
const LegalRequirements = lazy(() => import("@/pages/LegalRequirements").then((m) => ({ default: m.LegalRequirements })));
const Privacy = lazy(() => import("@/pages/Privacy").then((m) => ({ default: m.Privacy })));
const Terms = lazy(() => import("@/pages/Terms").then((m) => ({ default: m.Terms })));
const NotFound = lazy(() => import("@/pages/NotFound").then((m) => ({ default: m.NotFound })));
const PlanoReforma = lazy(() => import("@/pages/PlanoReforma").then((m) => ({ default: m.PlanoReforma })));
const Blog = lazy(() => import("@/pages/Blog").then((m) => ({ default: m.Blog })));
const BlogPost = lazy(() => import("@/pages/BlogPost").then((m) => ({ default: m.BlogPost })));

/**
 * Conteúdo do app SEM o Router nem o HelmetProvider — para ser reutilizado tanto
 * no cliente (BrowserRouter, em App.tsx) quanto no pré-render/SSR
 * (StaticRouter, em entry-server.tsx).
 */
export function AppShell() {
  return (
    <>
      <ScrollToTop />
      <Analytics />
      <JsonLd data={localBusinessSchema()} />
      <JsonLd data={websiteSchema()} />
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow">
          <Suspense fallback={null}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/servicos" element={<Services />} />
              <Route
                path="/servicos/regularizacao-imoveis"
                element={<RegularizacaoImoveis />}
              />
              <Route
                path="/servicos/regularizacao-imoveis/:tipo"
                element={<RegularizacaoDetalhe />}
              />
              <Route path="/servicos/:slug" element={<ServiceDetail />} />
              <Route path="/sobre" element={<About />} />
              <Route path="/contato" element={<Budget />} />
              <Route path="/orcamento" element={<Budget />} />
              <Route path="/cidades" element={<Cities />} />
              <Route path="/cidades/:slug" element={<CityDetail />} />
              <Route path="/faq" element={<FAQ />} />
              <Route path="/landing" element={<LandingPage />} />
              <Route path="/o-que-e-art" element={<WhatIsART />} />
              <Route
                path="/por-que-contratar-engenheiro"
                element={<WhyHireEngineer />}
              />
              <Route path="/requisitos-legais" element={<LegalRequirements />} />
              <Route path="/plano-de-reforma" element={<PlanoReforma />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/blog/:slug" element={<BlogPost />} />
              <Route path="/privacidade" element={<Privacy />} />
              <Route path="/termos" element={<Terms />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
        </main>
        <Footer />
        <WhatsAppButton />
      </div>
    </>
  );
}
