import { Instagram, Linkedin } from 'lucide-react';
import pradoStudioLogo from '@/assets/prado-studio-logo-color.png';
const Footer = () => {
  return <footer className="py-12 px-6 border-t border-border/30">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-row justify-between items-center bg-neutral-50 rounded-3xl p-6">
          <div className="flex items-center space-x-4">
            <img 
              src={pradoStudioLogo} 
              alt="Prado Studio Logo" 
              className="h-12"
              width="85"
              height="48"
              decoding="async"
              sizes="85px"
            />
            <div className="text-text-muted">
              © 2024 Prado Studio. Todos os direitos reservados.
            </div>
          </div>
          
          <div className="flex space-x-6">
            <a href="https://www.instagram.com/vrpdesigner/" target="_blank" rel="noopener noreferrer" className="text-text-muted hover:text-hero-primary transition-smooth" aria-label="Instagram">
              <Instagram size={20} />
            </a>
            <a href="https://linkedin.com/in/viniciusramosdesign" target="_blank" rel="noopener noreferrer" className="text-text-muted hover:text-hero-primary transition-smooth" aria-label="LinkedIn">
              <Linkedin size={20} />
            </a>
            <a href="https://www.behance.net/viniciusramosdoprado" target="_blank" rel="noopener noreferrer" className="text-text-muted hover:text-hero-primary transition-smooth" aria-label="Behance">
              Behance
            </a>
          </div>
        </div>
      </div>
    </footer>;
};
export default Footer;