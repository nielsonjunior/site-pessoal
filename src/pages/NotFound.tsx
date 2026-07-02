import { Link } from "react-router-dom";
import { Home, ArrowLeft, Search } from "lucide-react";
import { motion } from "framer-motion";
import { SEO } from "@/components/shared";

export function NotFound() {
  return (
    <div className="bg-[#060D1E] text-white">
      <SEO
        title="Página Não Encontrada - 404"
        description="A página que você procura não foi encontrada. Volte para a página inicial ou entre em contato conosco."
        noIndex
      />

      <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#12294A] to-[#060D1E] pt-20">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-2xl mx-auto"
          >
            {/* 404 Graphic */}
            <div className="relative mb-8">
              <div className="font-display text-9xl font-bold text-white/10">404</div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-24 h-24 bg-[#B9F227]/15 rounded-full flex items-center justify-center">
                  <Search className="w-12 h-12 text-[#B9F227]" />
                </div>
              </div>
            </div>

            <h1 className="font-display text-3xl md:text-4xl font-bold text-white mb-4">
              Página Não Encontrada
            </h1>

            <p className="text-[#b9c8e0] text-lg mb-8">
              Desculpe, a página que você está procurando não existe ou foi
              movida. Verifique o endereço digitado ou retorne para a página
              inicial.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[#B9F227] px-7 py-3.5 font-semibold text-[#0a1706] transition-transform hover:-translate-y-0.5"
              >
                <Home className="w-5 h-5" />
                Voltar para o Início
              </Link>
              <button
                onClick={() => window.history.back()}
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 bg-white/5 px-7 py-3.5 font-medium text-white transition-colors hover:bg-white/10"
              >
                <ArrowLeft className="w-5 h-5" />
                Voltar Anterior
              </button>
            </div>

            {/* Quick Links */}
            <div className="mt-12 pt-8 border-t border-white/10">
              <p className="text-[#93a7c6] text-sm mb-4">
                Ou acesse uma das páginas abaixo:
              </p>
              <div className="flex flex-wrap justify-center gap-3">
                <Link
                  to="/servicos"
                  className="px-4 py-2 rounded-full border border-white/10 bg-white/[0.04] text-[#cbd7e8] text-sm hover:bg-white/10 transition-colors"
                >
                  Serviços
                </Link>
                <Link
                  to="/sobre"
                  className="px-4 py-2 rounded-full border border-white/10 bg-white/[0.04] text-[#cbd7e8] text-sm hover:bg-white/10 transition-colors"
                >
                  Sobre
                </Link>
                <Link
                  to="/orcamento"
                  className="px-4 py-2 rounded-full border border-white/10 bg-white/[0.04] text-[#cbd7e8] text-sm hover:bg-white/10 transition-colors"
                >
                  Orçamento
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
