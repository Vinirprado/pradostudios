import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import heroImage1 from '@/assets/hero-image-1.jpg';
import heroImage2 from '@/assets/hero-image-2.jpg';
import heroImage3 from '@/assets/hero-image-3.jpg';
import heroImage4 from '@/assets/hero-image-4.jpg';

const HeroSection = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  const heroImages = [heroImage1, heroImage2, heroImage3, heroImage4];

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
    <section className="min-h-screen flex items-center justify-center bg-background px-6 py-20">
      <div className="container mx-auto max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content - Text */}
          <div className="space-y-8">
            <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-display font-bold leading-tight text-foreground">
              Design fala quando palavras não são suficientes.
            </h1>
            
            <p className="text-lg md:text-xl lg:text-2xl text-muted-foreground leading-relaxed">
              As marcas que mais crescem são aquelas que investem em design, especialmente na identidade visual.
            </p>

            <Button 
              variant="outline" 
              onClick={scrollToContact} 
              className="text-base md:text-lg px-8 py-6 rounded-full border-2 hover:bg-foreground hover:text-background transition-all"
            >
              Como trabalhamos?
            </Button>
          </div>

          {/* Right Content - Image Carousel */}
          <div className="relative h-[500px] lg:h-[600px]">
            <div className="relative h-full rounded-3xl overflow-hidden shadow-elevated">
              {heroImages.map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt={`Showcase de design ${index + 1}`}
                  className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
                    index === currentImageIndex ? 'opacity-100' : 'opacity-0'
                  }`}
                />
              ))}
            </div>

            {/* Image Indicators */}
            <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2">
              {heroImages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImageIndex(index)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    index === currentImageIndex 
                      ? 'bg-foreground w-8' 
                      : 'bg-muted-foreground/30 w-2'
                  }`}
                  aria-label={`Ver imagem ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;