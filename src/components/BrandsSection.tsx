import { useScrollReveal } from '@/hooks/useScrollReveal';
import { useLanguage } from '@/contexts/LanguageContext';
import brandIdeia from '@/assets/brand-ideia.png';
import brandVaranda from '@/assets/brand-varanda.png';
import brandAqua from '@/assets/brand-aqua.png';
import brandGadgets from '@/assets/brand-gadgets.png';
import brandBrainstorm from '@/assets/brand-brainstorm.png';
import brandAmerClean from '@/assets/brand-amerclean.png';

const BrandsSection = () => {
  const { ref, isVisible } = useScrollReveal(0.1);
  const { t } = useLanguage();

  // Array de logos das marcas
  const brands = [
    { name: 'Ideia', logo: brandIdeia },
    { name: 'Varanda & Co', logo: brandVaranda },
    { name: 'Aqua America', logo: brandAqua },
    { name: 'Gadgets Centre', logo: brandGadgets },
    { name: 'Brainstorm Academy', logo: brandBrainstorm },
    { name: 'Amer Clean', logo: brandAmerClean },
  ];

  // Duplicar as marcas para criar o efeito de loop infinito
  const duplicatedBrands = [...brands, ...brands, ...brands];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      ref={ref as React.RefObject<HTMLElement>}
      className={`py-16 sm:py-20 md:py-32 bg-background relative overflow-hidden transition-all duration-1000 ease-out ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
    >
      <div className="container mx-auto px-4">
        {/* Título */}
        <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-center mb-10 sm:mb-16 text-foreground">
          {t('brands.title')}
        </h2>

        {/* Container das logos com fade */}
        <div className="relative mb-10 sm:mb-12">
          {/* Fade gradient nas laterais */}
          <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-32 md:w-48 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-32 md:w-48 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />
          
          {/* Container com overflow para a animação */}
          <div className="overflow-hidden">
            <div className="flex animate-scroll-left">
              {duplicatedBrands.map((brand, index) => (
                <div
                  key={`${brand.name}-${index}`}
                  className="flex-shrink-0 mx-4 sm:mx-8 md:mx-12 flex items-center justify-center"
                >
                  <img
                    src={brand.logo}
                    alt={brand.name}
                    className="h-16 sm:h-24 md:h-32 w-auto object-contain opacity-60 hover:opacity-100 transition-opacity duration-500 grayscale hover:grayscale-0"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Botão CTA */}
        <div className="flex justify-center">
          <button
            onClick={() => scrollToSection('contato')}
            className="bg-gradient-to-r from-pink-500 via-pink-600 to-fuchsia-600 hover:from-pink-600 hover:via-pink-700 hover:to-fuchsia-700 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-semibold transition-all duration-500 ease-out shadow-lg hover:shadow-xl hover:scale-105 active:scale-95 text-sm sm:text-base"
          >
            {t('brands.cta')}
          </button>
        </div>
      </div>
    </section>
  );
};

export default BrandsSection;