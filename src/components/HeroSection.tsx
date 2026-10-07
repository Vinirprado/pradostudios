import { useEffect, useCallback } from 'react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import heroImage1 from '@/assets/hero-carousel-1.png';
import heroImage2 from '@/assets/hero-carousel-2.png';
import heroImage3 from '@/assets/hero-carousel-3.png';

const HeroSection = () => {
  const { t } = useLanguage();
  
  const heroImages = [heroImage1, heroImage2, heroImage3];

  const [emblaRef, emblaApi] = useEmblaCarousel(
    { 
      loop: true,
      skipSnaps: false,
      dragFree: false
    },
    [Autoplay({ delay: 5000, stopOnInteraction: true })]
  );

  const scrollToContact = () => {
    const element = document.getElementById('contato');
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth'
      });
    }
  };

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    emblaApi.on('select', onSelect);
    return () => {
      emblaApi.off('select', onSelect);
    };
  }, [emblaApi, onSelect]);

  const scrollTo = useCallback(
    (index: number) => emblaApi && emblaApi.scrollTo(index),
    [emblaApi]
  );

  const selectedIndex = emblaApi?.selectedScrollSnap() ?? 0;

  return (
    <section className="min-h-screen flex items-center justify-center bg-background px-4 sm:px-6 pt-24 sm:pt-32 pb-12 sm:pb-20">
      <div className="container mx-auto max-w-7xl">
        {/* Rounded Rectangle Container */}
        <div className="relative bg-muted/30 rounded-[2rem] sm:rounded-[3rem] overflow-hidden min-h-[500px] sm:min-h-[600px] md:min-h-[700px]">
          {/* Background Image Carousel - Full Container with Embla */}
          <div className="absolute inset-0 cursor-grab active:cursor-grabbing" ref={emblaRef}>
            <div className="flex h-full">
              {heroImages.map((image, index) => (
                <div
                  key={index}
                  className="flex-[0_0_100%] min-w-0 h-full"
                >
                  <img
                    src={image}
                    alt={`${t('hero.imageAlt')} ${index + 1}`}
                    className="w-full h-full object-cover"
                    draggable="false"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Floating Glassmorphism Card with Title, Subtitle and CTA */}
          <div className="absolute bottom-4 sm:bottom-8 left-4 right-4 sm:left-8 sm:right-auto sm:max-w-xl md:max-w-2xl z-10 pointer-events-none">
            <div className="backdrop-blur-2xl bg-background/20 border border-foreground/15 rounded-2xl sm:rounded-3xl shadow-elevated p-5 sm:p-7 md:p-8 pointer-events-auto">
              <div className="space-y-3 sm:space-y-4">
                <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-display font-bold leading-tight text-foreground drop-shadow-md">
                  <span className="sr-only">Prado Studio — Vinicius Ramos, Designer de Identidade Visual: </span>
                  {t('hero.title')}
                </h1>
                
                <p className="text-xs sm:text-sm md:text-base text-foreground/80 leading-relaxed max-w-md">
                  {t('hero.description')}
                </p>

                <Button 
                  variant="outline" 
                  onClick={scrollToContact} 
                  className="text-xs sm:text-sm px-5 sm:px-6 py-4 sm:py-5 rounded-full border-2 border-foreground hover:bg-foreground hover:text-background transition-all duration-300 active:scale-95"
                >
                  {t('hero.cta')}
                </Button>
              </div>
            </div>
          </div>

          {/* Image Indicators */}
          <div className="absolute bottom-4 sm:bottom-6 right-4 sm:right-8 flex space-x-2 z-20">
            {heroImages.map((_, index) => (
              <button
                key={index}
                onClick={() => scrollTo(index)}
                className={`h-2 rounded-full transition-all duration-500 ease-out ${
                  index === selectedIndex 
                    ? 'bg-foreground w-6 sm:w-8' 
                    : 'bg-foreground/30 w-2'
                }`}
                aria-label={`${t('hero.viewImage')} ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
