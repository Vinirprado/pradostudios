import { useScrollReveal } from '@/hooks/useScrollReveal';
import portfolio1 from '@/assets/portfolio-1.jpg';
import portfolio2 from '@/assets/portfolio-2.jpg';
import portfolio3 from '@/assets/portfolio-3.jpg';
import portfolio4 from '@/assets/portfolio-4.jpg';

const PortfolioShowcaseSection = () => {
  const { ref, isVisible } = useScrollReveal(0.1);

  const portfolioImages = [
    portfolio1,
    portfolio2,
    portfolio3,
    portfolio4,
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
              className="inline-block bg-gradient-to-r from-pink-500 via-pink-600 to-fuchsia-600 hover:from-pink-600 hover:via-pink-700 hover:to-fuchsia-700 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
            >
              Ver no Behance
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
