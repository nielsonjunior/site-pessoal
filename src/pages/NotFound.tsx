import { Link } from "react-router-dom";
import { Home, ArrowLeft, Search } from "lucide-react";
import { motion } from "framer-motion";
import { SEO } from "@/components/shared";

export function NotFound() {
  return (
    <>
      <SEO
        title="Página Não Encontrada - 404"
        description="A página que você procura não foi encontrada. Volte para a página inicial ou entre em contato conosco."
        noIndex
      />

      <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#F8F9FA] to-white pt-20">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-2xl mx-auto"
          >
            {/* 404 Graphic */}
            <div className="relative mb-8">
              <div className="text-9xl font-bold text-[#1B3B6C]/10">404</div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-24 h-24 bg-[#1B3B6C]/10 rounded-full flex items-center justify-center">
                  <Search className="w-12 h-12 text-[#1B3B6C]" />
                </div>
              </div>
            </div>

            <h1 className="text-3xl md:text-4xl font-bold text-[#0F1A2E] mb-4">
              Página Não Encontrada
            </h1>

            <p className="text-gray-600 text-lg mb-8">
              Desculpe, a página que você está procurando não existe ou foi
              movida. Verifique o endereço digitado ou retorne para a página
              inicial.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/"
                className="btn-primary inline-flex items-center justify-center gap-2"
              >
                <Home className="w-5 h-5" />
                Voltar para o Início
              </Link>
              <button
                onClick={() => window.history.back()}
                className="bg-white text-[#1B3B6C] border-2 border-[#1B3B6C] px-6 py-3 rounded-lg font-medium hover:bg-[#1B3B6C] hover:text-white transition-all inline-flex items-center justify-center gap-2"
              >
                <ArrowLeft className="w-5 h-5" />
                Voltar Anterior
              </button>
            </div>

            {/* Quick Links */}
            <div className="mt-12 pt-8 border-t border-gray-100">
              <p className="text-gray-500 text-sm mb-4">
                Ou acesse uma das páginas abaixo:
              </p>
              <div className="flex flex-wrap justify-center gap-3">
                <Link
                  to="/servicos"
                  className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm hover:bg-gray-200 transition-colors"
                >
                  Serviços
                </Link>
                <Link
                  to="/sobre"
                  className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm hover:bg-gray-200 transition-colors"
                >
                  Sobre Nós
                </Link>
                <Link
                  to="/orcamento"
                  className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm hover:bg-gray-200 transition-colors"
                >
                  Orçamento
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
