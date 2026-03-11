import { Link } from "react-router-dom";
import { HardHat, Phone, Mail, MapPin, Clock } from "lucide-react";

const footerLinks = {
  servicos: [
    { name: "ART", href: "/servicos/art-anotacao-responsabilidade-tecnica" },
    { name: "Regularização", href: "/servicos/regularizacao-imoveis" },
    { name: "Projetos de Reforma", href: "/servicos/projetos-reforma" },
    { name: "Ampliação", href: "/servicos/ampliacao-imoveis" },
    { name: "Laudos Técnicos", href: "/servicos/laudos-tecnicos" },
    { name: "Consultoria", href: "/servicos/consultoria-engenharia" },
  ],
  empresa: [
    { name: "Sobre Nós", href: "/sobre" },
    { name: "Cidades Atendidas", href: "/cidades" },
    { name: "Depoimentos", href: "/#depoimentos" },
    { name: "FAQ", href: "/faq" },
    { name: "Orçamento", href: "/orcamento" },
  ],
  recursos: [
    { name: "O que é ART?", href: "/o-que-e-art" },
    { name: "Regularização", href: "/regularizacao-imoveis" },
    { name: "Por Que Contratar?", href: "/por-que-contratar-engenheiro" },
    { name: "Requisitos Legais", href: "/requisitos-legais" },
    { name: "Solicitar Orçamento", href: "/orcamento" },
  ],
};

export function Footer() {
  return (
    <footer className="bg-[#0F1A2E] text-white">
      {/* Main Footer */}
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-[#F4C430] rounded-lg flex items-center justify-center">
                <HardHat className="w-7 h-7 text-[#0F1A2E]" />
              </div>
              <div>
                <h3 className="font-bold text-lg leading-tight">Engenharia</h3>
                <p className="text-sm text-gray-400">Projetos</p>
              </div>
            </Link>
            <p className="text-gray-400 text-sm mb-6 leading-relaxed">
              Engenheiro Civil especializado em projetos, regularização de
              imóveis, ART e laudos técnicos. Atendimento em Campinas e região.
            </p>
            <div className="flex gap-3">
              <span className="text-gray-500 text-sm">
                Redes sociais em breve
              </span>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-lg mb-6">Serviços</h4>
            <ul className="space-y-3">
              {footerLinks.servicos.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-gray-400 hover:text-[#F4C430] transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold text-lg mb-6">Empresa</h4>
            <ul className="space-y-3">
              {footerLinks.empresa.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-gray-400 hover:text-[#F4C430] transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold text-lg mb-6">Contato</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-[#F4C430] flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm text-gray-400">Telefone/WhatsApp</p>
                  <a
                    href="tel:+5516996166997"
                    className="text-white hover:text-[#F4C430] transition-colors"
                  >
                    (16) 99616-6997
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-[#F4C430] flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm text-gray-400">E-mail</p>
                  <a
                    href="mailto:nielsin.junior@gmail.com"
                    className="text-white hover:text-[#F4C430] transition-colors"
                  >
                    nielsin.junior@gmail.com
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#F4C430] flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm text-gray-400">Endereço</p>
                  <p className="text-white">
                    Av. Monte Castelo, 368 - Jardim Proença
                    <br />
                    Campinas - SP, 13026-241
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-[#F4C430] flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm text-gray-400">Atendimento</p>
                  <p className="text-white">
                    Seg - Sex: 8h às 18h
                    <br />
                    <span className="text-[#F4C430]">Emergências: 24h</span>
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="container-custom py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm text-center md:text-left">
              © {new Date().getFullYear()} Engenharia Projetos. Todos os
              direitos reservados.
            </p>
            <div className="flex items-center gap-6">
              <Link
                to="/privacidade"
                className="text-gray-400 hover:text-white text-sm transition-colors"
              >
                Política de Privacidade
              </Link>
              <Link
                to="/termos"
                className="text-gray-400 hover:text-white text-sm transition-colors"
              >
                Termos de Uso
              </Link>
            </div>
          </div>
          <div className="mt-4 pt-4 border-t border-white/5 text-center">
            <p className="text-gray-500 text-xs">
              Engenheiro Civil - CREA-SP: Em análise | Responsável Técnico:
              Nielson Pinheiro de Castilho Junior
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
