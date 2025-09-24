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
    }, 4000); // Troca a cada 4 segundos

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
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-hero">
      {/* Background Images Carousel */}
      <div className="absolute inset-0 z-0">
        {heroImages.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Hero background ${index + 1}`}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
              index === currentImageIndex ? 'opacity-30' : 'opacity-0'
            }`}
          />
        ))}
      </div>

      {/* Content Grid */}
      <div className="container mx-auto px-6 relative z-10 grid lg:grid-cols-2 gap-12 items-center min-h-screen py-20">
        {/* Left Content */}
        <div className="space-y-8">
          <div className="space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-display font-bold leading-tight text-hero-primary">
              Design fala quando palavras não são suficientes.
            </h1>
            
            <p className="text-lg md:text-xl text-hero-secondary leading-relaxed max-w-lg">
              As marcas que mais crescem são aquelas que investem em design, especialmente na identidade visual.
            </p>
          </div>

          <Button 
            variant="hero" 
            onClick={scrollToContact} 
            className="inline-flex items-center text-lg px-8 py-4 rounded-full"
          >
            Como trabalhamos?
            <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Button>
        </div>

        {/* Right Content - Visual Space */}
        <div className="lg:flex items-center justify-center hidden">
          <div className="relative">
            {/* Decorative elements similar to the reference */}
            <div className="absolute -top-10 -right-10 w-32 h-32 bg-white/10 rounded-full blur-xl"></div>
            <div className="absolute -bottom-10 -left-10 w-24 h-24 bg-white/5 rounded-full blur-lg"></div>
          </div>
        </div>
      </div>

      {/* Image indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2 z-20">
        {heroImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentImageIndex(index)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              index === currentImageIndex ? 'bg-hero-primary w-8' : 'bg-hero-primary/30'
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroSection;