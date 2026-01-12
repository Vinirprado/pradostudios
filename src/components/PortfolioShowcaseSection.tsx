import { useScrollReveal } from '@/hooks/useScrollReveal';
import { useLanguage } from '@/contexts/LanguageContext';
import portfolioApolocred from '@/assets/portfolio-apolocred.png';
import portfolioComape from '@/assets/portfolio-comape.png';
import portfolioKikibank from '@/assets/portfolio-kikibank.png';
import portfolioVaranda from '@/assets/portfolio-varanda.png';
import portfolioFatec from '@/assets/portfolio-fatec.jpg';
import behanceLogo from '@/assets/behance-logo.png';

const PortfolioShowcaseSection = () => {
  const { ref, isVisible } = useScrollReveal(0.1);
  const { t } = useLanguage();

  const portfolioImages = [
    portfolioApolocred,
    portfolioComape,
    portfolioKikibank,
    portfolioVaranda,
    portfolioFatec,
  ];

  return (
    <section 
      ref={ref as React.RefObject<HTMLElement>}
      className={`py-12 sm:py-20 md:py-32 bg-background relative overflow-hidden transition-all duration-1000 ease-out ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
    >
      <div className="container mx-auto px-3 sm:px-4 overflow-hidden">
        <div className="grid md:grid-cols-2 gap-6 sm:gap-12 items-center">
          {/* Left side - Text content */}
          <div className="space-y-3 sm:space-y-6 order-2 md:order-1">
            <h2 className="text-2xl sm:text-4xl md:text-6xl font-bold text-foreground leading-tight">
              {t('portfolioShowcase.title')}
            </h2>
            
            <p className="text-sm sm:text-lg md:text-xl text-muted-foreground leading-relaxed pr-2">
              {t('portfolioShowcase.description')}
            </p>

            <a
              href="https://www.behance.net/viniciusramosdoprado"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 sm:gap-3 bg-gradient-to-r from-pink-500 via-pink-600 to-fuchsia-600 hover:from-pink-600 hover:via-pink-700 hover:to-fuchsia-700 text-white px-5 sm:px-8 py-2.5 sm:py-4 rounded-xl font-semibold transition-all duration-500 ease-out shadow-[0_0_30px_rgba(236,72,153,0.6)] hover:shadow-[0_0_40px_rgba(236,72,153,0.8)] hover:scale-105 active:scale-95 text-xs sm:text-base"
            >
              {t('portfolioShowcase.cta')}
              <img src={behanceLogo} alt="Behance" className="w-4 h-4 sm:w-6 sm:h-6" />
            </a>
          </div>

          {/* Right side - Scrolling images with fade */}
          <div className="relative h-[300px] sm:h-[500px] md:h-[600px] overflow-hidden order-1 md:order-2">
            {/* Top fade gradient */}
            <div className="absolute top-0 left-0 right-0 h-16 sm:h-32 bg-gradient-to-b from-background to-transparent z-10 pointer-events-none" />
            
            {/* Bottom fade gradient */}
            <div className="absolute bottom-0 left-0 right-0 h-16 sm:h-32 bg-gradient-to-t from-background to-transparent z-10 pointer-events-none" />
            
            {/* Scrolling images container */}
            <div className="animate-scroll-down space-y-3 sm:space-y-6">
              {[...portfolioImages, ...portfolioImages].map((image, index) => (
                <div
                  key={index}
                  className="rounded-lg sm:rounded-2xl overflow-hidden shadow-lg"
                >
                  <img
                    src={image}
                    alt={`Portfolio item ${index + 1}`}
                    className="w-full h-auto object-cover"
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PortfolioShowcaseSection;