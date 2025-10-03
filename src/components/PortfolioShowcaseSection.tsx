import { useScrollReveal } from '@/hooks/useScrollReveal';
import portfolioApolocred from '@/assets/portfolio-apolocred.png';
import portfolioComape from '@/assets/portfolio-comape.png';
import portfolioKikibank from '@/assets/portfolio-kikibank.png';
import portfolioVaranda from '@/assets/portfolio-varanda.png';
import portfolioFatec from '@/assets/portfolio-fatec.jpg';
import behanceLogo from '@/assets/behance-logo.png';

const PortfolioShowcaseSection = () => {
  const { ref, isVisible } = useScrollReveal(0.1);

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
      className={`py-20 md:py-32 bg-background relative overflow-hidden transition-all duration-1000 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left side - Text content */}
          <div className="space-y-6">
            <h2 className="text-4xl md:text-6xl font-bold text-foreground leading-tight">
              Confira meu portfólio completo
            </h2>
            
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              Explore todos os meus projetos de design, branding e identidade visual. 
              Cada trabalho conta uma história única de criatividade e estratégia.
            </p>

            <a
              href="https://www.behance.net/seu-perfil"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-gradient-to-r from-pink-500 via-pink-600 to-fuchsia-600 hover:from-pink-600 hover:via-pink-700 hover:to-fuchsia-700 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 shadow-[0_0_30px_rgba(236,72,153,0.6)] hover:shadow-[0_0_40px_rgba(236,72,153,0.8)] hover:scale-105"
            >
              Ver no Behance
              <img src={behanceLogo} alt="Behance" className="w-6 h-6" />
            </a>
          </div>

          {/* Right side - Scrolling images with fade */}
          <div className="relative h-[600px] overflow-hidden">
            {/* Top fade gradient */}
            <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-background to-transparent z-10 pointer-events-none" />
            
            {/* Bottom fade gradient */}
            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent z-10 pointer-events-none" />
            
            {/* Scrolling images container */}
            <div className="animate-scroll-down space-y-6">
              {[...portfolioImages, ...portfolioImages].map((image, index) => (
                <div
                  key={index}
                  className="rounded-2xl overflow-hidden shadow-lg"
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
