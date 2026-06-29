import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { name: "Início", href: "/" },
  {
    name: "Serviços",
    href: "/servicos",
    dropdown: [
      { name: "Todos os Serviços", href: "/servicos" },
      { name: "ART", href: "/servicos/art-anotacao-responsabilidade-tecnica" },
      { name: "Regularização", href: "/servicos/regularizacao-imoveis" },
      { name: "Reformas", href: "/servicos/projetos-reforma" },
      { name: "Ampliação", href: "/servicos/ampliacao-imoveis" },
      { name: "Laudos", href: "/servicos/laudos-tecnicos" },
      { name: "Consultoria", href: "/servicos/consultoria-engenharia" },
    ],
  },
  { name: "Sobre", href: "/sobre" },
  { name: "Cidades", href: "/cidades" },
  { name: "FAQ", href: "/faq" },
  { name: "Orçamento", href: "/orcamento" },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
    setActiveDropdown(null);
  }, [location.pathname]);

  const isActive = (href: string) => {
    if (href === "/") {
      return location.pathname === "/";
    }
    return location.pathname.startsWith(href);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md transition-shadow duration-300 ${
        isScrolled ? "shadow-lg" : "shadow-sm"
      }`}
    >
      {/* Top Bar */}
      <div
        className={`bg-[#1B3B6C] text-white text-sm py-2 transition-all duration-300 ${
          isScrolled ? "hidden" : "block"
        }`}
      >
        <div className="container-custom flex justify-between items-center">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1">
              <Phone className="w-4 h-4" />
              <a
                href="https://wa.me/5565996946861" target="_blank" rel="noopener noreferrer"
                className="hover:text-[#F4C430] transition-colors"
              >
                (65) 99694-6861
              </a>
            </span>
            <span className="hidden sm:inline">|</span>
            <span className="hidden sm:inline">CREA 5071806455</span>
          </div>
          <div className="flex items-center gap-4">
            <span className="hidden md:inline">
              Atendimento em Cáceres e região
            </span>
            <a
              href="https://wa.me/5565996946861"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#25D366] text-white px-3 py-1 rounded-full text-xs font-medium hover:bg-[#128C7E] transition-colors"
            >
              WhatsApp
            </a>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <nav
        className={`transition-all duration-300 ${isScrolled ? "py-2" : "py-4"}`}
      >
        <div className="container-custom">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-2">
              <img
                src="/images/logo.png"
                alt="NP Castilho Engenharia"
                className="w-12 h-12 object-cover rounded-full"
                width={48}
                height={48}
                decoding="async"
              />
              <div className="hidden sm:block">
                <span className="block font-bold text-lg leading-tight text-[#1B3B6C]">
                  Nielson P. de Castilho Júnior
                </span>
                <span className="block text-xs text-gray-600">
                  Engenheiro Civil | CREA 5071806455
                </span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                <div
                  key={link.name}
                  className="relative"
                  onMouseEnter={() =>
                    link.dropdown && setActiveDropdown(link.name)
                  }
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <Link
                    to={link.href}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-all flex items-center gap-1 ${
                      isActive(link.href)
                        ? "text-[#1B3B6C] bg-[#1B3B6C]/10"
                        : "text-gray-700 hover:text-[#1B3B6C] hover:bg-gray-100"
                    }`}
                  >
                    {link.name}
                    {link.dropdown && <ChevronDown className="w-4 h-4" />}
                  </Link>

                  {/* Dropdown Menu */}
                  <AnimatePresence>
                    {link.dropdown && activeDropdown === link.name && (
                      <motion.div
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 8 }}
                        transition={{ duration: 0.15, ease: "easeOut" }}
                        /* pt-2 cria uma "ponte" sobre o vão, sem fechar o menu ao mover o mouse */
                        className="absolute top-full left-0 pt-2 w-56 z-[60]"
                      >
                        <div className="bg-white rounded-xl shadow-2xl ring-1 ring-black/5 border border-gray-100 overflow-hidden">
                          {link.dropdown.map((item) => (
                            <Link
                              key={item.name}
                              to={item.href}
                              className={`block px-4 py-3 text-sm transition-colors ${
                                isActive(item.href)
                                  ? "bg-[#1B3B6C]/10 text-[#1B3B6C]"
                                  : "text-gray-700 hover:bg-gray-50 hover:text-[#1B3B6C]"
                              }`}
                            >
                              {item.name}
                            </Link>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="hidden lg:flex items-center gap-3">
              <Link to="/orcamento" className="btn-accent text-sm">
                Solicitar Orçamento
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label={isMobileMenuOpen ? "Fechar menu" : "Abrir menu"}
              aria-expanded={isMobileMenuOpen}
              className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6 text-gray-700" />
              ) : (
                <Menu className="w-6 h-6 text-gray-700" />
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-white border-t border-gray-100 shadow-lg overflow-hidden"
          >
            <div className="container-custom py-4">
              <div className="flex flex-col gap-2">
                {navLinks.map((link) => (
                  <div key={link.name}>
                    <Link
                      to={link.href}
                      className={`block px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                        isActive(link.href)
                          ? "bg-[#1B3B6C] text-white"
                          : "text-gray-700 hover:bg-gray-100"
                      }`}
                    >
                      {link.name}
                    </Link>
                    {link.dropdown && (
                      <div className="ml-4 mt-1 border-l-2 border-gray-200 pl-4">
                        {link.dropdown.slice(1).map((item) => (
                          <Link
                            key={item.name}
                            to={item.href}
                            className={`block px-4 py-2 rounded-lg text-sm transition-colors ${
                              isActive(item.href)
                                ? "text-[#1B3B6C] font-medium"
                                : "text-gray-600 hover:text-[#1B3B6C]"
                            }`}
                          >
                            {item.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
                <div className="mt-4 pt-4 border-t border-gray-100">
                  <Link
                    to="/orcamento"
                    className="btn-accent w-full text-center block"
                  >
                    Solicitar Orçamento
                  </Link>
                  <a
                    href="https://wa.me/5565996946861"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-2 bg-[#25D366] text-white px-6 py-3 rounded-lg font-medium text-center block hover:bg-[#128C7E] transition-colors"
                  >
                    Falar no WhatsApp
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
