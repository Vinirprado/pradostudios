import { Instagram, Linkedin } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import pradoStudioLogo from '@/assets/prado-studio-logo-color.png';

const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="py-8 sm:py-12 px-4 sm:px-6 border-t border-border/30">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 sm:gap-0 bg-neutral-50 rounded-2xl sm:rounded-3xl p-4 sm:p-6">
          <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4 text-center sm:text-left">
            <img src={pradoStudioLogo} alt="Prado Studio Logo" className="h-10 sm:h-12" width="85" height="48" decoding="async" sizes="85px" />
            <div className="text-text-muted text-xs sm:text-base">© 2025 Prado Studios. {t('footer.rights')}</div>
          </div>
          
          <div className="flex space-x-4 sm:space-x-6">
            <a href="https://www.instagram.com/vrpdesigner/" target="_blank" rel="noopener noreferrer" className="text-text-muted hover:text-hero-primary transition-all duration-300 p-1" aria-label="Instagram">
              <Instagram size={18} className="sm:w-5 sm:h-5" />
            </a>
            <a href="https://linkedin.com/in/viniciusramosdesign" target="_blank" rel="noopener noreferrer" className="text-text-muted hover:text-hero-primary transition-all duration-300 p-1" aria-label="LinkedIn">
              <Linkedin size={18} className="sm:w-5 sm:h-5" />
            </a>
            <a href="https://www.behance.net/viniciusramosdoprado" target="_blank" rel="noopener noreferrer" className="text-text-muted hover:text-hero-primary transition-all duration-300 p-1 text-sm sm:text-base" aria-label="Behance">
              Behance
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;