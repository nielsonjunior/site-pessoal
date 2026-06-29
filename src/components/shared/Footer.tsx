import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Clock, Instagram } from "lucide-react";

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
    { name: "Regularização de Imóveis", href: "/servicos/regularizacao-imoveis" },
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
              <img
                src="/images/logo.png"
                alt="NP Castilho Engenharia"
                className="w-14 h-14 object-cover rounded-full"
                width={56}
                height={56}
                loading="lazy"
                decoding="async"
              />
              <div>
                <h3 className="font-bold text-lg leading-tight">Nielson P. de Castilho Júnior</h3>
                <p className="text-sm text-gray-400">Engenheiro Civil | CREA 5071806455</p>
              </div>
            </Link>
            <p className="text-gray-400 text-sm mb-6 leading-relaxed">
              Engenheiro Civil especializado em projetos, regularização de
              imóveis, ART e laudos técnicos. Atendimento em Cáceres e toda
              a região de Mato Grosso.
            </p>
            <div className="flex gap-3">
              <a
                href="https://www.instagram.com/npcastilho.eng"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram @npcastilho.eng"
                className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-[#F4C430] transition-colors group"
              >
                <Instagram className="w-5 h-5 text-white group-hover:text-[#0F1A2E]" />
              </a>
            </div>
            <p className="text-gray-500 text-xs mt-3">@npcastilho.eng</p>
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
                    href="https://wa.me/5565996946861" target="_blank" rel="noopener noreferrer"
                    className="text-white hover:text-[#F4C430] transition-colors"
                  >
                    (65) 99694-6861
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
                  <p className="text-sm text-gray-400">Localização</p>
                  <p className="text-white">
                    Cáceres - MT
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
              © {new Date().getFullYear()} Nielson Pinheiro - Engenheiro Civil. Todos os direitos reservados.
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
              Engenheiro Civil - CREA 5071806455 | Responsável Técnico: Nielson Pinheiro de Castilho Junior | Cáceres-MT
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
