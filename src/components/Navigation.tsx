import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import LanguageSwitcher from './LanguageSwitcher';
import pradoStudioLogo from '@/assets/prado-studio-logo-white.png';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { t } = useLanguage();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth'
      });
    }
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/40 backdrop-blur-xl border-b border-border/30 rounded-3xl">
      <div className="container mx-auto px-4 sm:px-6 py-3 sm:py-4 rounded-sm bg-[#fcfcfc]/0">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Link to="/">
              <img src={pradoStudioLogo} alt="Prado Studio Logo" className="h-10 sm:h-14 hover:opacity-90 transition-all duration-300 cursor-pointer" width="100" height="56" decoding="async" sizes="100px" />
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <button onClick={() => scrollToSection('sobre')} className="transition-all duration-300 bg-[#000a0e]/0 rounded-none text-base text-zinc-50">{t('nav.about')}</button>
            <button onClick={() => scrollToSection('servicos')} className="text-text-secondary hover:text-hero-primary transition-all duration-300">{t('nav.services')}</button>
            <button onClick={() => scrollToSection('projetos')} className="text-text-secondary hover:text-hero-primary transition-all duration-300">{t('nav.projects')}</button>
            <button onClick={() => scrollToSection('processo')} className="text-text-secondary hover:text-hero-primary transition-all duration-300">{t('nav.process')}</button>
            <button onClick={() => scrollToSection('contato')} className="text-text-secondary hover:text-hero-primary transition-all duration-300">{t('nav.contact')}</button>
            <LanguageSwitcher />
            <button 
              onClick={() => scrollToSection('contato')} 
              className="bg-gradient-to-r from-pink-500 via-pink-600 to-fuchsia-600 hover:from-pink-600 hover:via-pink-700 hover:to-fuchsia-700 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
            >
              {t('nav.startProject')}
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-3">
            <LanguageSwitcher />
            <button 
              className="text-hero-primary p-2 -mr-2 transition-all duration-300 active:scale-95" 
              onClick={() => setIsOpen(!isOpen)} 
              aria-label="Menu de navegação"
            >
              <svg 
                className={`w-6 h-6 transition-transform duration-300 ${isOpen ? 'rotate-90' : ''}`} 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div 
          className={`md:hidden overflow-hidden transition-all duration-500 ease-out ${
            isOpen ? 'max-h-96 opacity-100 mt-4 pb-4' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="space-y-1">
            <button 
              onClick={() => scrollToSection('sobre')} 
              className="block w-full text-left py-3 px-2 text-text-secondary hover:text-hero-primary hover:bg-white/5 rounded-lg transition-all duration-300"
            >
              {t('nav.about')}
            </button>
            <button 
              onClick={() => scrollToSection('servicos')} 
              className="block w-full text-left py-3 px-2 text-text-secondary hover:text-hero-primary hover:bg-white/5 rounded-lg transition-all duration-300"
            >
              {t('nav.services')}
            </button>
            <button 
              onClick={() => scrollToSection('projetos')} 
              className="block w-full text-left py-3 px-2 text-text-secondary hover:text-hero-primary hover:bg-white/5 rounded-lg transition-all duration-300"
            >
              {t('nav.projects')}
            </button>
            <button 
              onClick={() => scrollToSection('processo')} 
              className="block w-full text-left py-3 px-2 text-text-secondary hover:text-hero-primary hover:bg-white/5 rounded-lg transition-all duration-300"
            >
              {t('nav.process')}
            </button>
            <button 
              onClick={() => scrollToSection('contato')} 
              className="block w-full text-left py-3 px-2 text-text-secondary hover:text-hero-primary hover:bg-white/5 rounded-lg transition-all duration-300"
            >
              {t('nav.contact')}
            </button>
            <button 
              onClick={() => scrollToSection('contato')} 
              className="block w-full bg-gradient-to-r from-pink-500 via-pink-600 to-fuchsia-600 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 shadow-lg text-center mt-3"
            >
              {t('nav.startProject')}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;