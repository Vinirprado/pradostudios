import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import heroImage1 from '@/assets/hero-carousel-1.png';
import heroImage2 from '@/assets/hero-carousel-2.png';
import heroImage3 from '@/assets/hero-carousel-3.png';
import logo from '@/assets/prado-studio-logo-white.png';

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

          {/* Content Overlay - Centered */}
          <div className="relative z-10 flex flex-col items-center justify-center min-h-[600px] md:min-h-[700px] px-6 md:px-12 text-center">
            {/* Logo */}
            <img 
              src={logo} 
              alt="Prado Studio" 
              className="w-16 h-16 md:w-20 md:h-20 mb-8 md:mb-12 animate-fade-in opacity-0 [animation-delay:200ms] [animation-fill-mode:forwards]"
            />
            
            {/* Main Heading with staggered animation */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-display font-bold leading-tight text-foreground drop-shadow-lg max-w-5xl space-y-2">
              <span className="block animate-fade-in opacity-0 [animation-delay:400ms] [animation-fill-mode:forwards]">
                Design fala quando
              </span>
              <span className="block animate-fade-in opacity-0 [animation-delay:600ms] [animation-fill-mode:forwards]">
                palavras <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-pink-600 to-fuchsia-600">não são</span>
              </span>
              <span className="block animate-fade-in opacity-0 [animation-delay:800ms] [animation-fill-mode:forwards]">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-pink-600 to-fuchsia-600">suficientes.</span>
              </span>
            </h1>
            
            <p className="text-base md:text-lg lg:text-xl text-foreground/90 leading-relaxed max-w-3xl mt-8 md:mt-10 animate-fade-in opacity-0 [animation-delay:1000ms] [animation-fill-mode:forwards]">
              As marcas que mais crescem são aquelas que investem em design, especialmente na identidade visual.
            </p>

            <button
              onClick={scrollToContact}
              className="mt-10 md:mt-12 inline-flex items-center gap-3 bg-gradient-to-r from-pink-500 via-pink-600 to-fuchsia-600 hover:from-pink-600 hover:via-pink-700 hover:to-fuchsia-700 text-white px-10 py-5 rounded-xl font-semibold text-lg transition-all duration-300 shadow-[0_0_30px_rgba(236,72,153,0.6)] hover:shadow-[0_0_40px_rgba(236,72,153,0.8)] hover:scale-105 animate-fade-in opacity-0 [animation-delay:1200ms] [animation-fill-mode:forwards]"
            >
              Como trabalhamos?
            </button>
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