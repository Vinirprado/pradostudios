import { useState } from 'react';
import pradoStudioLogo from '@/assets/prado-studio-logo.png';
const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth'
      });
    }
    setIsOpen(false);
  };
  return <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
      <div className="container mx-auto px-6 py-4 rounded-sm bg-[#fcfcfc]/0">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <img 
              src={pradoStudioLogo} 
              alt="Prado Studio Logo" 
              className="h-8"
            />
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <button onClick={() => scrollToSection('sobre')} className="transition-smooth text-base text-slate-50 rounded-none bg-[#000a0e]/0">
              Sobre
            </button>
            <button onClick={() => scrollToSection('servicos')} className="text-text-secondary hover:text-hero-primary transition-smooth">
              Serviços
            </button>
            <button onClick={() => scrollToSection('projetos')} className="text-text-secondary hover:text-hero-primary transition-smooth">
              Projetos
            </button>
            <button onClick={() => scrollToSection('processo')} className="text-text-secondary hover:text-hero-primary transition-smooth">
              Processo
            </button>
            <button onClick={() => scrollToSection('contato')} className="text-text-secondary hover:text-hero-primary transition-smooth">
              Contato
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-hero-primary" onClick={() => setIsOpen(!isOpen)}>
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && <div className="md:hidden mt-4 pb-4 space-y-3">
            <button onClick={() => scrollToSection('sobre')} className="block text-text-secondary hover:text-hero-primary transition-smooth">
              Sobre
            </button>
            <button onClick={() => scrollToSection('servicos')} className="block text-text-secondary hover:text-hero-primary transition-smooth">
              Serviços
            </button>
            <button onClick={() => scrollToSection('projetos')} className="block text-text-secondary hover:text-hero-primary transition-smooth">
              Projetos
            </button>
            <button onClick={() => scrollToSection('processo')} className="block text-text-secondary hover:text-hero-primary transition-smooth">
              Processo
            </button>
            <button onClick={() => scrollToSection('contato')} className="block text-text-secondary hover:text-hero-primary transition-smooth">
              Contato
            </button>
          </div>}
      </div>
    </nav>;
};
export default Navigation;