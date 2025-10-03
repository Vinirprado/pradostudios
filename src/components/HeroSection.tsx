import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import heroImage1 from '@/assets/hero-carousel-1.png';
import heroImage2 from '@/assets/hero-carousel-2.png';
import heroImage3 from '@/assets/hero-carousel-3.png';

const HeroSection = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  const heroImages = [heroImage1, heroImage2, heroImage3];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        prevIndex === heroImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000); // Troca a cada 5 segundos

    return () => clearInterval(interval);
  }, [heroImages.length]);

  const scrollToContact = () => {
    const element = document.getElementById('contato');
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-background px-6 pt-32 pb-20">
      <div className="container mx-auto max-w-7xl">
        {/* Rounded Rectangle Container */}
        <div className="relative bg-muted/30 rounded-[3rem] overflow-hidden min-h-[600px] md:min-h-[700px]">
          {/* Background Image Carousel - Full Container */}
          <div className="absolute inset-0">
            {heroImages.map((image, index) => (
              <div
                key={index}
                className={`absolute inset-0 transition-opacity duration-1000 ${
                  index === currentImageIndex ? 'opacity-100' : 'opacity-0'
                }`}
              >
                <img
                  src={image}
                  alt={`Showcase de design ${index + 1}`}
                  className="w-full h-full object-cover rounded-[3rem]"
                />
              </div>
            ))}
          </div>

          {/* Content Overlay */}
          <div className="relative z-10 p-12 md:p-16 lg:p-20">
            <div className="max-w-2xl space-y-8">
              <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-display font-bold leading-tight text-foreground drop-shadow-md">
                Design fala quando palavras não são suficientes.
              </h1>
              
              <p className="text-base md:text-lg text-foreground/80 leading-relaxed max-w-md">
                As marcas que mais crescem são aquelas que investem em design, especialmente na identidade visual.
              </p>

              <Button 
                variant="outline" 
                onClick={scrollToContact} 
                className="text-base px-8 py-6 rounded-full border-2 border-foreground hover:bg-foreground hover:text-background transition-all"
              >
                Como trabalhamos?
              </Button>
            </div>
          </div>

          {/* Image Indicators */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2 z-20">
            {heroImages.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentImageIndex(index)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  index === currentImageIndex 
                    ? 'bg-foreground w-8' 
                    : 'bg-foreground/30 w-2'
                }`}
                aria-label={`Ver imagem ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;