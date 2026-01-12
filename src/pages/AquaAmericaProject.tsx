import { useEffect, useState } from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import aquaAmerica from '@/assets/aqua-america.png';
import aquaBottles from '@/assets/aqua-bottles.png';
import aquaBusinessCards from '@/assets/aqua-business-cards.png';
import aquaVehicles from '@/assets/aqua-vehicles.png';
import aquaLogoConcept from '@/assets/aqua-logo-concept.png';
import aquaBranding from '@/assets/aqua-branding.png';

const AquaAmericaProject = () => {
  const navigate = useNavigate();
  const [visibleSections, setVisibleSections] = useState<number[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const sectionIndex = parseInt(entry.target.getAttribute('data-section') || '0');
          if (entry.isIntersecting) {
            setVisibleSections(prev => [...new Set([...prev, sectionIndex])]);
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -100px 0px' }
    );

    const sections = document.querySelectorAll('[data-section]');
    sections.forEach(section => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  const getSectionClasses = (index: number) => {
    return `transform transition-all duration-1000 ease-out ${
      visibleSections.includes(index) 
        ? 'translate-y-0 opacity-100' 
        : 'translate-y-20 opacity-0'
    }`;
  };

  return (
    <div className="min-h-screen bg-gradient-subtle overflow-x-hidden">
      <Navigation />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-10 sm:py-16 px-3 sm:px-6" data-section="0">
          <div className={`container mx-auto max-w-6xl ${getSectionClasses(0)}`}>
            <Button 
              variant="ghost" 
              onClick={() => navigate('/')}
              className="mb-6 sm:mb-8 text-text-secondary hover:text-hero-primary text-sm"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Voltar para Portfolio
            </Button>
            
            <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-center">
              <div>
                <h1 className="text-3xl sm:text-5xl md:text-7xl font-display font-bold text-hero-primary mb-4 sm:mb-6">
                  Aqua America
                </h1>
                <p className="text-sm sm:text-xl text-text-secondary leading-relaxed mb-6 sm:mb-8">
                  A essência da marca trás o foco em pureza, revitalização e excelência natural. Os principais atributos estão enraizados em oferecer qualidade imaculada, promover o bem-estar e abraçar o que há de melhor na natureza.
                </p>
                <div className="space-y-3 sm:space-y-4">
                  <div>
                    <span className="text-xs sm:text-sm font-medium text-accent uppercase tracking-wide">Cliente</span>
                    <p className="text-text-secondary text-sm sm:text-base">Aqua America</p>
                  </div>
                  <div>
                    <span className="text-xs sm:text-sm font-medium text-accent uppercase tracking-wide">Serviços</span>
                    <p className="text-text-secondary text-sm sm:text-base">Identidade Visual, Branding Natural, Packaging</p>
                  </div>
                </div>
              </div>
              
              <div className="relative">
                <img 
                  src={aquaAmerica} 
                  alt="Aqua America - Identidade Visual"
                  className="w-full rounded-xl sm:rounded-2xl shadow-elegant"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Concept Section */}
        <section className="py-12 sm:py-24 px-3 sm:px-6" data-section="1">
          <div className={`container mx-auto max-w-6xl ${getSectionClasses(1)}`}>
            <div className="text-center mb-10 sm:mb-16">
              <h2 className="text-2xl sm:text-4xl font-display font-bold text-hero-primary mb-4 sm:mb-8">
                Essência Natural
              </h2>
              <p className="text-sm sm:text-lg text-text-secondary max-w-3xl mx-auto leading-relaxed px-2">
                Uma marca que celebra a pureza da natureza e conecta as pessoas com o que há de mais essencial: a água pura.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-4 sm:gap-8">
              <div className="text-center p-5 sm:p-8 bg-gradient-card rounded-xl sm:rounded-2xl">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
                  <span className="text-xl sm:text-2xl">💧</span>
                </div>
                <h3 className="text-lg sm:text-xl font-display font-semibold text-hero-primary mb-2 sm:mb-4">
                  Pureza
                </h3>
                <p className="text-text-secondary text-xs sm:text-base">
                  Compromisso absoluto com a qualidade imaculada em cada gota, respeitando os processos naturais.
                </p>
              </div>
              
              <div className="text-center p-5 sm:p-8 bg-gradient-card rounded-xl sm:rounded-2xl">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
                  <span className="text-xl sm:text-2xl">🌿</span>
                </div>
                <h3 className="text-lg sm:text-xl font-display font-semibold text-hero-primary mb-2 sm:mb-4">
                  Revitalização
                </h3>
                <p className="text-text-secondary text-xs sm:text-base">
                  Promover o bem-estar através da conexão genuína com os elementos naturais mais puros.
                </p>
              </div>
              
              <div className="text-center p-5 sm:p-8 bg-gradient-card rounded-xl sm:rounded-2xl">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
                  <span className="text-xl sm:text-2xl">⭐</span>
                </div>
                <h3 className="text-lg sm:text-xl font-display font-semibold text-hero-primary mb-2 sm:mb-4">
                  Excelência
                </h3>
                <p className="text-text-secondary text-xs sm:text-base">
                  Abraçar o que há de melhor na natureza para oferecer uma experiência superior e autêntica.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Visual Elements */}
        <section className="py-12 sm:py-24 px-3 sm:px-6 bg-secondary/5" data-section="2">
          <div className={`container mx-auto max-w-7xl ${getSectionClasses(2)}`}>
            <h2 className="text-2xl sm:text-4xl font-display font-bold text-hero-primary mb-10 sm:mb-16 text-center">
              Design Natural
            </h2>
            
            {/* Bottles Design */}
            <div className="mb-6 sm:mb-12">
              <img 
                src={aquaBottles} 
                alt="Design de garrafas Aqua America"
                className="w-full rounded-xl sm:rounded-2xl shadow-elegant"
              />
            </div>

            {/* Business Cards */}
            <div className="mb-6 sm:mb-12">
              <img 
                src={aquaBusinessCards} 
                alt="Cartões de visita Aqua America"
                className="w-full rounded-xl sm:rounded-2xl shadow-elegant"
              />
            </div>

            {/* Vehicle Branding */}
            <div className="mb-6 sm:mb-12">
              <img 
                src={aquaVehicles} 
                alt="Frota de veículos Aqua America"
                className="w-full rounded-xl sm:rounded-2xl shadow-elegant"
              />
            </div>

            {/* Logo Concept */}
            <div className="mb-6 sm:mb-12">
              <img 
                src={aquaLogoConcept} 
                alt="Conceito do logo Aqua America"
                className="w-full rounded-xl sm:rounded-2xl shadow-elegant"
              />
            </div>

            {/* Final Branding */}
            <div>
              <img 
                src={aquaBranding} 
                alt="Branding completo Aqua America"
                className="w-full rounded-xl sm:rounded-2xl shadow-elegant"
              />
            </div>
          </div>
        </section>

        {/* Results Section */}
        <section className="py-12 sm:py-24 px-3 sm:px-6" data-section="3">
          <div className={`container mx-auto max-w-6xl ${getSectionClasses(3)}`}>
            <div className="text-center">
              <h2 className="text-2xl sm:text-4xl font-display font-bold text-hero-primary mb-4 sm:mb-8">
                Conexão Natural
              </h2>
              <p className="text-sm sm:text-lg text-text-secondary max-w-3xl mx-auto leading-relaxed mb-10 sm:mb-16 px-2">
                Uma marca que consegue transmitir a essência da natureza e conectar genuinamente com seu público.
              </p>
              
              <div className="grid grid-cols-3 gap-4 sm:gap-8 text-center">
                <div>
                  <div className="text-2xl sm:text-4xl font-bold bg-gradient-to-r from-[hsl(300,100%,85%)] to-[hsl(200,100%,85%)] bg-clip-text text-transparent mb-1 sm:mb-2">300%</div>
                  <p className="text-text-secondary text-xs sm:text-base">Crescimento nas vendas</p>
                </div>
                <div>
                  <div className="text-2xl sm:text-4xl font-bold bg-gradient-to-r from-[hsl(300,100%,85%)] to-[hsl(200,100%,85%)] bg-clip-text text-transparent mb-1 sm:mb-2">5</div>
                  <p className="text-text-secondary text-xs sm:text-base">Semanas de desenvolvimento</p>
                </div>
                <div>
                  <div className="text-2xl sm:text-4xl font-bold bg-gradient-to-r from-[hsl(300,100%,85%)] to-[hsl(200,100%,85%)] bg-clip-text text-transparent mb-1 sm:mb-2">25+</div>
                  <p className="text-text-secondary text-xs sm:text-base">Aplicações da marca</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default AquaAmericaProject;