import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { Header, Footer, WhatsAppButton } from "@/components/shared";
import { Home } from "@/pages/Home";
import { Services } from "@/pages/Services";
import { ServiceDetail } from "@/pages/ServiceDetail";
import { About } from "@/pages/About";
import { Budget } from "@/pages/Budget";
import { Cities } from "@/pages/Cities";
import { CityDetail } from "@/pages/CityDetail";
import { FAQ } from "@/pages/FAQ";
import { LandingPage } from "@/pages/LandingPage";
import { WhatIsART } from "@/pages/WhatIsART";
import { WhyHireEngineer } from "@/pages/WhyHireEngineer";
import { LegalRequirements } from "@/pages/LegalRequirements";
import { NotFound } from "@/pages/NotFound";

function App() {
  return (
    <HelmetProvider>
      <Router>
        <div className="min-h-screen flex flex-col">
          <Header />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/servicos" element={<Services />} />
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
              <Route
                path="/requisitos-legais"
                element={<LegalRequirements />}
              />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
          <Footer />
          <WhatsAppButton />
        </div>
      </Router>
    </HelmetProvider>
  );
}

export default App;
