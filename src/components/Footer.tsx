import { Instagram, Linkedin, Mail, Phone, ArrowUp } from 'lucide-react';
import pradoStudioLogo from '@/assets/prado-studio-logo-color.png';
import behanceLogo from '@/assets/behance-logo.png';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#1a1a1a] py-16 px-6 relative">
      <div className="container mx-auto max-w-7xl">
        {/* Main footer content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
          {/* Logo section */}
          <div className="flex items-start">
            <div className="bg-[#e8e8e8] rounded-2xl p-8 w-full max-w-sm">
              <img 
                src={pradoStudioLogo} 
                alt="Prado Studio Logo" 
                className="h-16 w-auto" 
                width="113" 
                height="64" 
                decoding="async" 
              />
            </div>
          </div>

          {/* Navigation section */}
          <div>
            <h3 className="text-[#ff0080] font-bold text-lg mb-6">
              Navegação rápida:
            </h3>
            <nav className="flex flex-col space-y-3">
              <a 
                href="#home" 
                className="text-white hover:text-[#ff0080] transition-colors text-base"
              >
                Início
              </a>
              <a 
                href="#services" 
                className="text-white hover:text-[#ff0080] transition-colors text-base"
              >
                Serviços
              </a>
              <a 
                href="#portfolio" 
                className="text-white hover:text-[#ff0080] transition-colors text-base"
              >
                Portfólio
              </a>
              <a 
                href="#about" 
                className="text-white hover:text-[#ff0080] transition-colors text-base"
              >
                Sobre
              </a>
              <a 
                href="#contact" 
                className="text-white hover:text-[#ff0080] transition-colors text-base"
              >
                Contato
              </a>
            </nav>
          </div>

          {/* Social media section */}
          <div className="flex justify-end">
            <div className="bg-[#2a2a2a] border border-[#3a3a3a] rounded-2xl p-6 w-fit">
              <div className="flex gap-4">
                <a 
                  href="https://wa.me/5583999999999" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-[#3a3a3a] hover:bg-[#4a4a4a] rounded-lg flex items-center justify-center transition-colors"
                  aria-label="WhatsApp"
                >
                  <Phone className="w-5 h-5 text-white" />
                </a>
                <a 
                  href="https://www.instagram.com/vrpdesigner/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-[#3a3a3a] hover:bg-[#4a4a4a] rounded-lg flex items-center justify-center transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram className="w-5 h-5 text-white" />
                </a>
                <a 
                  href="mailto:contato@pradostudio.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-[#3a3a3a] hover:bg-[#4a4a4a] rounded-lg flex items-center justify-center transition-colors"
                  aria-label="Email"
                >
                  <Mail className="w-5 h-5 text-white" />
                </a>
                <a 
                  href="https://www.behance.net/viniciusramosdoprado" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-[#3a3a3a] hover:bg-[#4a4a4a] rounded-lg flex items-center justify-center transition-colors"
                  aria-label="Behance"
                >
                  <img src={behanceLogo} alt="Behance" className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Contact information */}
        <div className="mb-12 space-y-2">
          <div className="flex items-center gap-2">
            <span className="text-[#ff0080] font-semibold">E-mail:</span>
            <a 
              href="mailto:contato@pradostudio.com" 
              className="text-white hover:text-[#ff0080] transition-colors"
            >
              contato@pradostudio.com
            </a>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-[#ff0080] font-semibold">Telefone:</span>
            <a 
              href="tel:+5583999999999" 
              className="text-white hover:text-[#ff0080] transition-colors"
            >
              (83) 99999-9999
            </a>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-[#3a3a3a] pt-8">
          <p className="text-[#888] text-center text-sm">
            © 2025 Prado Studio | Todos os direitos reservados.
          </p>
        </div>
      </div>

      {/* Back to top button */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 w-14 h-14 bg-[#ff0080] hover:bg-[#e0006d] rounded-xl flex items-center justify-center transition-colors shadow-lg z-50"
        aria-label="Voltar ao topo"
      >
        <ArrowUp className="w-6 h-6 text-white" />
      </button>
    </footer>
  );
};

export default Footer;