import { useEffect, useState } from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import apolocred from '@/assets/apolocred.png';
import portfolio2 from '@/assets/portfolio-2.jpg';

const ApolocredProject = () => {
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
                  Apolocred
                </h1>
                <p className="text-xl text-text-secondary leading-relaxed mb-8">
                  A Apolocred nasceu com a missão de tornar o acesso à consultoria financeira algo simples, estratégico e de qualidade.
                </p>
                <div className="space-y-4">
                  <div>
                    <span className="text-sm font-medium text-accent uppercase tracking-wide">Cliente</span>
                    <p className="text-text-secondary">Apolocred Consultoria</p>
                  </div>
                  <div>
                    <span className="text-sm font-medium text-accent uppercase tracking-wide">Serviços</span>
                    <p className="text-text-secondary">Identidade Visual, Branding, Consultoria Estratégica</p>
                  </div>
                </div>
              </div>
              
              <div className="relative">
                <img 
                  src={apolocred} 
                  alt="Apolocred - Identidade Visual"
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
                Estratégia
              </h2>
              <p className="text-lg text-text-secondary max-w-3xl mx-auto leading-relaxed">
                Desenvolvemos uma identidade que transmite confiança, expertise e acessibilidade no mundo das finanças.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center p-8 bg-gradient-card rounded-2xl">
                <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl">🎯</span>
                </div>
                <h3 className="text-xl font-display font-semibold text-hero-primary mb-4">
                  Estratégia
                </h3>
                <p className="text-text-secondary">
                  Soluções financeiras pensadas estrategicamente para cada cliente e situação específica.
                </p>
              </div>
              
              <div className="text-center p-8 bg-gradient-card rounded-2xl">
                <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl">🤝</span>
                </div>
                <h3 className="text-xl font-display font-semibold text-hero-primary mb-4">
                  Simplicidade
                </h3>
                <p className="text-text-secondary">
                  Tornar o complexo mundo financeiro acessível através de comunicação clara e direta.
                </p>
              </div>
              
              <div className="text-center p-8 bg-gradient-card rounded-2xl">
                <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl">⭐</span>
                </div>
                <h3 className="text-xl font-display font-semibold text-hero-primary mb-4">
                  Qualidade
                </h3>
                <p className="text-text-secondary">
                  Padrão de excelência em todos os serviços prestados, garantindo resultados superiores.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Visual Elements */}
        <section className="py-24 px-6 bg-secondary/5" data-section="2">
          <div className={`container mx-auto max-w-6xl ${getSectionClasses(2)}`}>
            <h2 className="text-4xl font-display font-bold text-hero-primary mb-16 text-center">
              Identidade Visual
            </h2>
            
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <img 
                  src={portfolio2} 
                  alt="Elementos visuais da marca Apolocred"
                  className="w-full rounded-2xl shadow-elegant"
                />
              </div>
              
              <div className="space-y-8">
                <div>
                  <h3 className="text-2xl font-display font-semibold text-hero-primary mb-4">
                    Logomarca
                  </h3>
                  <p className="text-text-secondary leading-relaxed">
                    Design que combina modernidade e confiabilidade, transmitindo a seriedade necessária para o setor financeiro.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-2xl font-display font-semibold text-hero-primary mb-4">
                    Cores Corporativas
                  </h3>
                  <p className="text-text-secondary leading-relaxed">
                    Paleta que inspira confiança e profissionalismo, utilizando tons que remetem à estabilidade e crescimento.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-2xl font-display font-semibold text-hero-primary mb-4">
                    Aplicações
                  </h3>
                  <p className="text-text-secondary leading-relaxed">
                    Sistema de identidade flexível que funciona em todos os pontos de contato com o cliente.
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
                Impacto
              </h2>
              <p className="text-lg text-text-secondary max-w-3xl mx-auto leading-relaxed mb-16">
                Uma marca que posiciona a Apolocred como referência em consultoria financeira, transmitindo credibilidade e expertise.
              </p>
              
              <div className="grid md:grid-cols-3 gap-8 text-center">
                <div>
                  <div className="text-4xl font-bold text-accent mb-2">250%</div>
                  <p className="text-text-secondary">Aumento na captação</p>
                </div>
                <div>
                  <div className="text-4xl font-bold text-accent mb-2">4</div>
                  <p className="text-text-secondary">Semanas de projeto</p>
                </div>
                <div>
                  <div className="text-4xl font-bold text-accent mb-2">20+</div>
                  <p className="text-text-secondary">Materiais desenvolvidos</p>
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

export default ApolocredProject;