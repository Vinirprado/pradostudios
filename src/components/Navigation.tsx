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
      <div className="container mx-auto px-6 py-4 rounded-sm bg-[#fcfcfc]/0">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Link to="/">
              <img src={pradoStudioLogo} alt="Prado Studio Logo" className="h-14 hover:opacity-90 transition-smooth cursor-pointer" width="100" height="56" decoding="async" sizes="100px" />
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <button onClick={() => scrollToSection('sobre')} className="transition-smooth bg-[#000a0e]/0 rounded-none text-base text-zinc-50">{t('nav.about')}</button>
            <button onClick={() => scrollToSection('servicos')} className="text-text-secondary hover:text-hero-primary transition-smooth">{t('nav.services')}</button>
            <button onClick={() => scrollToSection('projetos')} className="text-text-secondary hover:text-hero-primary transition-smooth">{t('nav.projects')}</button>
            <button onClick={() => scrollToSection('processo')} className="text-text-secondary hover:text-hero-primary transition-smooth">{t('nav.process')}</button>
            <button onClick={() => scrollToSection('contato')} className="text-text-secondary hover:text-hero-primary transition-smooth">{t('nav.contact')}</button>
            <LanguageSwitcher />
            <button 
              onClick={() => scrollToSection('contato')} 
              className="bg-gradient-to-r from-pink-500 via-pink-600 to-fuchsia-600 hover:from-pink-600 hover:via-pink-700 hover:to-fuchsia-700 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
            >
              {t('nav.startProject')}
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-4">
            <LanguageSwitcher />
            <button className="text-hero-primary" onClick={() => setIsOpen(!isOpen)} aria-label="Menu de navegação">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-3">
            <button onClick={() => scrollToSection('sobre')} className="block text-text-secondary hover:text-hero-primary transition-smooth">
              {t('nav.about')}
            </button>
            <button onClick={() => scrollToSection('servicos')} className="block text-text-secondary hover:text-hero-primary transition-smooth">
              {t('nav.services')}
            </button>
            <button onClick={() => scrollToSection('projetos')} className="block text-text-secondary hover:text-hero-primary transition-smooth">
              {t('nav.projects')}
            </button>
            <button onClick={() => scrollToSection('processo')} className="block text-text-secondary hover:text-hero-primary transition-smooth">
              {t('nav.process')}
            </button>
            <button onClick={() => scrollToSection('contato')} className="block text-text-secondary hover:text-hero-primary transition-smooth">
              {t('nav.contact')}
            </button>
            <button 
              onClick={() => scrollToSection('contato')} 
              className="block w-full bg-gradient-to-r from-pink-500 via-pink-600 to-fuchsia-600 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 shadow-lg text-center mt-4"
            >
              {t('nav.startProject')}
            </button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
