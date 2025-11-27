import { useState, useRef, useEffect } from 'react';
import { Globe } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const LanguageSwitcher = () => {
  const { language, setLanguage } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleLanguageChange = (lang: 'pt' | 'en') => {
    setLanguage(lang);
    setIsOpen(false);
  };

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-center w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 transition-all duration-300"
        aria-label="Select language"
      >
        <Globe className="w-5 h-5 text-white" />
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 rounded-xl bg-[#1a1a1a] border border-white/10 shadow-xl z-50 overflow-hidden animate-in fade-in slide-in-from-top-2 duration-200">
          <button
            onClick={() => handleLanguageChange('en')}
            className={`w-full flex items-center gap-3 px-4 py-3 hover:bg-white/10 transition-colors ${
              language === 'en' ? 'bg-white/5' : ''
            }`}
          >
            {/* USA/Canada Flag */}
            <div className="w-8 h-6 rounded overflow-hidden flex-shrink-0 shadow-sm">
              <svg viewBox="0 0 32 24" className="w-full h-full">
                {/* US Flag */}
                <rect fill="#B22234" width="32" height="24"/>
                <rect fill="#fff" y="1.846" width="32" height="1.846"/>
                <rect fill="#fff" y="5.538" width="32" height="1.846"/>
                <rect fill="#fff" y="9.231" width="32" height="1.846"/>
                <rect fill="#fff" y="12.923" width="32" height="1.846"/>
                <rect fill="#fff" y="16.615" width="32" height="1.846"/>
                <rect fill="#fff" y="20.308" width="32" height="1.846"/>
                <rect fill="#3C3B6E" width="12.8" height="12.923"/>
                {/* Stars (simplified) */}
                <g fill="#fff">
                  <circle cx="2.133" cy="1.385" r="0.6"/>
                  <circle cx="4.267" cy="1.385" r="0.6"/>
                  <circle cx="6.4" cy="1.385" r="0.6"/>
                  <circle cx="8.533" cy="1.385" r="0.6"/>
                  <circle cx="10.667" cy="1.385" r="0.6"/>
                  <circle cx="3.2" cy="2.769" r="0.6"/>
                  <circle cx="5.333" cy="2.769" r="0.6"/>
                  <circle cx="7.467" cy="2.769" r="0.6"/>
                  <circle cx="9.6" cy="2.769" r="0.6"/>
                  <circle cx="2.133" cy="4.154" r="0.6"/>
                  <circle cx="4.267" cy="4.154" r="0.6"/>
                  <circle cx="6.4" cy="4.154" r="0.6"/>
                  <circle cx="8.533" cy="4.154" r="0.6"/>
                  <circle cx="10.667" cy="4.154" r="0.6"/>
                  <circle cx="3.2" cy="5.538" r="0.6"/>
                  <circle cx="5.333" cy="5.538" r="0.6"/>
                  <circle cx="7.467" cy="5.538" r="0.6"/>
                  <circle cx="9.6" cy="5.538" r="0.6"/>
                  <circle cx="2.133" cy="6.923" r="0.6"/>
                  <circle cx="4.267" cy="6.923" r="0.6"/>
                  <circle cx="6.4" cy="6.923" r="0.6"/>
                  <circle cx="8.533" cy="6.923" r="0.6"/>
                  <circle cx="10.667" cy="6.923" r="0.6"/>
                  <circle cx="3.2" cy="8.308" r="0.6"/>
                  <circle cx="5.333" cy="8.308" r="0.6"/>
                  <circle cx="7.467" cy="8.308" r="0.6"/>
                  <circle cx="9.6" cy="8.308" r="0.6"/>
                  <circle cx="2.133" cy="9.692" r="0.6"/>
                  <circle cx="4.267" cy="9.692" r="0.6"/>
                  <circle cx="6.4" cy="9.692" r="0.6"/>
                  <circle cx="8.533" cy="9.692" r="0.6"/>
                  <circle cx="10.667" cy="9.692" r="0.6"/>
                  <circle cx="3.2" cy="11.077" r="0.6"/>
                  <circle cx="5.333" cy="11.077" r="0.6"/>
                  <circle cx="7.467" cy="11.077" r="0.6"/>
                  <circle cx="9.6" cy="11.077" r="0.6"/>
                </g>
              </svg>
            </div>
            <span className="text-white font-medium">English</span>
            {language === 'en' && (
              <span className="ml-auto text-pink-500">✓</span>
            )}
          </button>

          <button
            onClick={() => handleLanguageChange('pt')}
            className={`w-full flex items-center gap-3 px-4 py-3 hover:bg-white/10 transition-colors ${
              language === 'pt' ? 'bg-white/5' : ''
            }`}
          >
            {/* Brazil Flag */}
            <div className="w-8 h-6 rounded overflow-hidden flex-shrink-0 shadow-sm">
              <svg viewBox="0 0 32 24" className="w-full h-full">
                {/* Green background */}
                <rect fill="#009C3B" width="32" height="24"/>
                {/* Yellow diamond */}
                <polygon fill="#FFDF00" points="16,2 30,12 16,22 2,12"/>
                {/* Blue circle */}
                <circle fill="#002776" cx="16" cy="12" r="5.5"/>
                {/* White band (simplified) */}
                <path fill="#fff" d="M10.5,11.5 Q16,9.5 21.5,12.5" strokeWidth="1" stroke="#fff" fillOpacity="0"/>
                <ellipse fill="none" stroke="#fff" strokeWidth="0.7" cx="16" cy="12" rx="5" ry="2" transform="rotate(-10 16 12)"/>
              </svg>
            </div>
            <span className="text-white font-medium">Português</span>
            {language === 'pt' && (
              <span className="ml-auto text-pink-500">✓</span>
            )}
          </button>
        </div>
      )}
    </div>
  );
};

export default LanguageSwitcher;
