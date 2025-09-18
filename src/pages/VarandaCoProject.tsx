import { useEffect, useState } from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import varandaCo from '@/assets/varanda-co.png';
import portfolio1 from '@/assets/portfolio-1.jpg';

const VarandaCoProject = () => {
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
                  Varanda & Co.
                </h1>
                <p className="text-xl text-text-secondary leading-relaxed mb-8">
                  Identidade visual desenvolvida para cafeteria com intuito de trazer a apreciação real do café e do momento, trazendo sofisticação e proximidade.
                </p>
                <div className="space-y-4">
                  <div>
                    <span className="text-sm font-medium text-accent uppercase tracking-wide">Cliente</span>
                    <p className="text-text-secondary">Varanda & Co. Cafeteria</p>
                  </div>
                  <div>
                    <span className="text-sm font-medium text-accent uppercase tracking-wide">Serviços</span>
                    <p className="text-text-secondary">Identidade Visual, Branding, Material Gráfico</p>
                  </div>
                </div>
              </div>
              
              <div className="relative">
                <img 
                  src={varandaCo} 
                  alt="Varanda & Co. - Identidade Visual"
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
                Conceito
              </h2>
              <p className="text-lg text-text-secondary max-w-3xl mx-auto leading-relaxed">
                A identidade visual da Varanda & Co. foi pensada para transmitir a experiência única de apreciar um café de qualidade em um ambiente acolhedor e sofisticado.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center p-8 bg-gradient-card rounded-2xl">
                <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl">☕</span>
                </div>
                <h3 className="text-xl font-display font-semibold text-hero-primary mb-4">
                  Qualidade
                </h3>
                <p className="text-text-secondary">
                  Foco na excelência do produto e na experiência sensorial única do café especial.
                </p>
              </div>
              
              <div className="text-center p-8 bg-gradient-card rounded-2xl">
                <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl">🏡</span>
                </div>
                <h3 className="text-xl font-display font-semibold text-hero-primary mb-4">
                  Acolhimento
                </h3>
                <p className="text-text-secondary">
                  Ambiente que convida à pausa, ao encontro e à apreciação do momento presente.
                </p>
              </div>
              
              <div className="text-center p-8 bg-gradient-card rounded-2xl">
                <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl">✨</span>
                </div>
                <h3 className="text-xl font-display font-semibold text-hero-primary mb-4">
                  Sofisticação
                </h3>
                <p className="text-text-secondary">
                  Design elegante que eleva a experiência sem perder a proximidade e autenticidade.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Visual Elements */}
        <section className="py-24 px-6 bg-secondary/5" data-section="2">
          <div className={`container mx-auto max-w-6xl ${getSectionClasses(2)}`}>
            <h2 className="text-4xl font-display font-bold text-hero-primary mb-16 text-center">
              Elementos Visuais
            </h2>
            
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <img 
                  src={portfolio1} 
                  alt="Elementos visuais da marca Varanda & Co."
                  className="w-full rounded-2xl shadow-elegant"
                />
              </div>
              
              <div className="space-y-8">
                <div>
                  <h3 className="text-2xl font-display font-semibold text-hero-primary mb-4">
                    Tipografia
                  </h3>
                  <p className="text-text-secondary leading-relaxed">
                    Escolha tipográfica que combina elegância e legibilidade, refletindo o equilíbrio entre sofisticação e acessibilidade da marca.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-2xl font-display font-semibold text-hero-primary mb-4">
                    Paleta de Cores
                  </h3>
                  <p className="text-text-secondary leading-relaxed">
                    Tons terrosos e aconchegantes que remetem ao café e criam uma atmosfera calorosa e convidativa.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-2xl font-display font-semibold text-hero-primary mb-4">
                    Iconografia
                  </h3>
                  <p className="text-text-secondary leading-relaxed">
                    Elementos gráficos minimalistas que complementam a identidade sem competir com o protagonismo do produto.
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
                Resultado
              </h2>
              <p className="text-lg text-text-secondary max-w-3xl mx-auto leading-relaxed mb-16">
                Uma identidade visual que consegue transmitir a essência da Varanda & Co.: um lugar onde cada xícara de café é uma experiência especial.
              </p>
              
              <div className="grid md:grid-cols-3 gap-8 text-center">
                <div>
                  <div className="text-4xl font-bold text-accent mb-2">100%</div>
                  <p className="text-text-secondary">Aprovação do cliente</p>
                </div>
                <div>
                  <div className="text-4xl font-bold text-accent mb-2">3</div>
                  <p className="text-text-secondary">Semanas de desenvolvimento</p>
                </div>
                <div>
                  <div className="text-4xl font-bold text-accent mb-2">15+</div>
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

export default VarandaCoProject;