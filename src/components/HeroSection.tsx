import { Button } from '@/components/ui/button';
import heroWallpaper from '@/assets/hero-wallpaper.png';
const HeroSection = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contato');
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth'
      });
    }
  };
  return <section className="min-h-screen flex items-center justify-center px-6 pt-20 relative overflow-hidden bg-gradient-to-b from-black via-black/50 to-background hero-section">
      {/* Wallpaper Background */}
      <img 
        src={heroWallpaper}
        alt="Background gradient"
        className="absolute inset-0 w-full h-full object-cover z-0"
      />
      
      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-black/30 z-10"></div>
      
      <div className="container mx-auto text-center max-w-4xl relative z-20 hero-content">
        <h1 className="text-5xl md:text-7xl font-display font-bold mb-8 tracking-tight leading-none text-white text-center lg:text-8xl drop-shadow-lg hero-title">
          Transformo ideias em identidades visuais que marcam presença.
        </h1>
        
        <p className="text-xl mb-12 max-w-2xl mx-auto leading-relaxed text-white md:text-lg drop-shadow-md hero-subtitle">
          Vinicius Ramos — Designer especializado em Identidade Visual Completa.
        </p>
        
        <Button variant="hero" onClick={scrollToContact} className="inline-flex items-center hero-button">
          Começar meu projeto
          <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </Button>
      </div>
    </section>;
};
export default HeroSection;