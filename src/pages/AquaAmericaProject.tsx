import { useEffect, useState } from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import aquaAmerica from '@/assets/aqua-america.png';
import portfolio4 from '@/assets/portfolio-4.jpg';

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
    <div className="min-h-screen bg-gradient-subtle">
      <Navigation />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-16 px-6" data-section="0">
          <div className={`container mx-auto max-w-6xl ${getSectionClasses(0)}`}>
            <Button 
              variant="ghost" 
              onClick={() => navigate('/')}
              className="mb-8 text-text-secondary hover:text-hero-primary"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Voltar para Portfolio
            </Button>
            
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="text-5xl font-display font-bold text-hero-primary mb-6 md:text-7xl">
                  Aqua America
                </h1>
                <p className="text-xl text-text-secondary leading-relaxed mb-8">
                  A essência da marca trás o foco em pureza, revitalização e excelência natural. Os principais atributos estão enraizados em oferecer qualidade imaculada, promover o bem-estar e abraçar o que há de melhor na natureza.
                </p>
                <div className="space-y-4">
                  <div>
                    <span className="text-sm font-medium text-accent uppercase tracking-wide">Cliente</span>
                    <p className="text-text-secondary">Aqua America</p>
                  </div>
                  <div>
                    <span className="text-sm font-medium text-accent uppercase tracking-wide">Serviços</span>
                    <p className="text-text-secondary">Identidade Visual, Branding Natural, Packaging</p>
                  </div>
                </div>
              </div>
              
              <div className="relative">
                <img 
                  src={aquaAmerica} 
                  alt="Aqua America - Identidade Visual"
                  className="w-full rounded-2xl shadow-elegant"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Concept Section */}
        <section className="py-24 px-6" data-section="1">
          <div className={`container mx-auto max-w-6xl ${getSectionClasses(1)}`}>
            <div className="text-center mb-16">
              <h2 className="text-4xl font-display font-bold text-hero-primary mb-8">
                Essência Natural
              </h2>
              <p className="text-lg text-text-secondary max-w-3xl mx-auto leading-relaxed">
                Uma marca que celebra a pureza da natureza e conecta as pessoas com o que há de mais essencial: a água pura.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center p-8 bg-gradient-card rounded-2xl">
                <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl">💧</span>
                </div>
                <h3 className="text-xl font-display font-semibold text-hero-primary mb-4">
                  Pureza
                </h3>
                <p className="text-text-secondary">
                  Compromisso absoluto com a qualidade imaculada em cada gota, respeitando os processos naturais.
                </p>
              </div>
              
              <div className="text-center p-8 bg-gradient-card rounded-2xl">
                <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl">🌿</span>
                </div>
                <h3 className="text-xl font-display font-semibold text-hero-primary mb-4">
                  Revitalização
                </h3>
                <p className="text-text-secondary">
                  Promover o bem-estar através da conexão genuína com os elementos naturais mais puros.
                </p>
              </div>
              
              <div className="text-center p-8 bg-gradient-card rounded-2xl">
                <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl">⭐</span>
                </div>
                <h3 className="text-xl font-display font-semibold text-hero-primary mb-4">
                  Excelência
                </h3>
                <p className="text-text-secondary">
                  Abraçar o que há de melhor na natureza para oferecer uma experiência superior e autêntica.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Visual Elements */}
        <section className="py-24 px-6 bg-secondary/5" data-section="2">
          <div className={`container mx-auto max-w-6xl ${getSectionClasses(2)}`}>
            <h2 className="text-4xl font-display font-bold text-hero-primary mb-16 text-center">
              Design Natural
            </h2>
            
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <img 
                  src={portfolio4} 
                  alt="Design natural da marca Aqua America"
                  className="w-full rounded-2xl shadow-elegant"
                />
              </div>
              
              <div className="space-y-8">
                <div>
                  <h3 className="text-2xl font-display font-semibold text-hero-primary mb-4">
                    Formas Orgânicas
                  </h3>
                  <p className="text-text-secondary leading-relaxed">
                    Elementos visuais inspirados na fluidez e movimento natural da água, criando harmonia visual.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-2xl font-display font-semibold text-hero-primary mb-4">
                    Paleta Aquática
                  </h3>
                  <p className="text-text-secondary leading-relaxed">
                    Tons que remetem à pureza da água cristalina e à serenidade dos ambientes naturais.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-2xl font-display font-semibold text-hero-primary mb-4">
                    Sustentabilidade
                  </h3>
                  <p className="text-text-secondary leading-relaxed">
                    Design que reflete o compromisso com práticas sustentáveis e responsabilidade ambiental.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Results Section */}
        <section className="py-24 px-6" data-section="3">
          <div className={`container mx-auto max-w-6xl ${getSectionClasses(3)}`}>
            <div className="text-center">
              <h2 className="text-4xl font-display font-bold text-hero-primary mb-8">
                Conexão Natural
              </h2>
              <p className="text-lg text-text-secondary max-w-3xl mx-auto leading-relaxed mb-16">
                Uma marca que consegue transmitir a essência da natureza e conectar genuinamente com seu público.
              </p>
              
              <div className="grid md:grid-cols-3 gap-8 text-center">
                <div>
                  <div className="text-4xl font-bold text-accent mb-2">300%</div>
                  <p className="text-text-secondary">Crescimento nas vendas</p>
                </div>
                <div>
                  <div className="text-4xl font-bold text-accent mb-2">5</div>
                  <p className="text-text-secondary">Semanas de desenvolvimento</p>
                </div>
                <div>
                  <div className="text-4xl font-bold text-accent mb-2">25+</div>
                  <p className="text-text-secondary">Aplicações da marca</p>
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