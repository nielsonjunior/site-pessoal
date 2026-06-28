import { Routes, Route } from "react-router-dom";
import { Header, Footer, WhatsAppButton, Analytics, JsonLd } from "@/components/shared";
import { localBusinessSchema, websiteSchema } from "@/lib/jsonld";
import { Home } from "@/pages/Home";
import { Services } from "@/pages/Services";
import { ServiceDetail } from "@/pages/ServiceDetail";
import { RegularizacaoImoveis } from "@/pages/RegularizacaoImoveis";
import { RegularizacaoDetalhe } from "@/pages/RegularizacaoDetalhe";
import { About } from "@/pages/About";
import { Budget } from "@/pages/Budget";
import { Cities } from "@/pages/Cities";
import { CityDetail } from "@/pages/CityDetail";
import { FAQ } from "@/pages/FAQ";
import { LandingPage } from "@/pages/LandingPage";
import { WhatIsART } from "@/pages/WhatIsART";
import { WhyHireEngineer } from "@/pages/WhyHireEngineer";
import { LegalRequirements } from "@/pages/LegalRequirements";
import { Privacy } from "@/pages/Privacy";
import { Terms } from "@/pages/Terms";
import { NotFound } from "@/pages/NotFound";

/**
 * Conteúdo do app SEM o Router nem o HelmetProvider — para ser reutilizado tanto
 * no cliente (BrowserRouter, em App.tsx) quanto no pré-render/SSR
 * (StaticRouter, em entry-server.tsx).
 */
export function AppShell() {
  return (
    <>
      <Analytics />
      <JsonLd data={localBusinessSchema()} />
      <JsonLd data={websiteSchema()} />
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow">
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
            <Route path="/privacidade" element={<Privacy />} />
            <Route path="/termos" element={<Terms />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
        <WhatsAppButton />
      </div>
    </>
  );
}
