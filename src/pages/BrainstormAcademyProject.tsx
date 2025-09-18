import { useEffect, useState } from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import brainstormAcademy from '@/assets/brainstorm-academy.png';
import portfolio3 from '@/assets/portfolio-3.jpg';

const BrainstormAcademyProject = () => {
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
                  Brainstorm Academy
                </h1>
                <p className="text-xl text-text-secondary leading-relaxed mb-8">
                  Abandonamos os clichês e optamos por um visual mais limpo, moderno e inspirador. O objetivo era transmitir uma sensação de inovação e comprometimento com altos padrões no ambiente escolar.
                </p>
                <div className="space-y-4">
                  <div>
                    <span className="text-sm font-medium text-accent uppercase tracking-wide">Cliente</span>
                    <p className="text-text-secondary">Brainstorm Academy</p>
                  </div>
                  <div>
                    <span className="text-sm font-medium text-accent uppercase tracking-wide">Serviços</span>
                    <p className="text-text-secondary">Rebranding, Identidade Visual, Material Educacional</p>
                  </div>
                </div>
              </div>
              
              <div className="relative">
                <img 
                  src={brainstormAcademy} 
                  alt="Brainstorm Academy - Identidade Visual"
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
                Renovação
              </h2>
              <p className="text-lg text-text-secondary max-w-3xl mx-auto leading-relaxed">
                Uma transformação completa que elevou a marca a um novo patamar de modernidade e inspiração educacional.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center p-8 bg-gradient-card rounded-2xl">
                <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl">💡</span>
                </div>
                <h3 className="text-xl font-display font-semibold text-hero-primary mb-4">
                  Inovação
                </h3>
                <p className="text-text-secondary">
                  Rompimento com padrões tradicionais da educação para criar algo verdadeiramente inspirador.
                </p>
              </div>
              
              <div className="text-center p-8 bg-gradient-card rounded-2xl">
                <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl">🎨</span>
                </div>
                <h3 className="text-xl font-display font-semibold text-hero-primary mb-4">
                  Modernidade
                </h3>
                <p className="text-text-secondary">
                  Design contemporâneo que dialoga com as novas gerações sem perder a seriedade educacional.
                </p>
              </div>
              
              <div className="text-center p-8 bg-gradient-card rounded-2xl">
                <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl">🏆</span>
                </div>
                <h3 className="text-xl font-display font-semibold text-hero-primary mb-4">
                  Excelência
                </h3>
                <p className="text-text-secondary">
                  Compromisso com os mais altos padrões de qualidade no ambiente educacional.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Visual Elements */}
        <section className="py-24 px-6 bg-secondary/5" data-section="2">
          <div className={`container mx-auto max-w-6xl ${getSectionClasses(2)}`}>
            <h2 className="text-4xl font-display font-bold text-hero-primary mb-16 text-center">
              Nova Identidade
            </h2>
            
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <img 
                  src={portfolio3} 
                  alt="Nova identidade visual da Brainstorm Academy"
                  className="w-full rounded-2xl shadow-elegant"
                />
              </div>
              
              <div className="space-y-8">
                <div>
                  <h3 className="text-2xl font-display font-semibold text-hero-primary mb-4">
                    Design Limpo
                  </h3>
                  <p className="text-text-secondary leading-relaxed">
                    Abandonamos elementos desnecessários para criar uma comunicação mais direta e impactante.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-2xl font-display font-semibold text-hero-primary mb-4">
                    Paleta Inspiradora
                  </h3>
                  <p className="text-text-secondary leading-relaxed">
                    Cores que estimulam a criatividade e o aprendizado, criando um ambiente visual motivador.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-2xl font-display font-semibold text-hero-primary mb-4">
                    Sistema Flexível
                  </h3>
                  <p className="text-text-secondary leading-relaxed">
                    Identidade adaptável que funciona tanto no ambiente digital quanto nos materiais físicos.
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
                Transformação
              </h2>
              <p className="text-lg text-text-secondary max-w-3xl mx-auto leading-relaxed mb-16">
                O rebranding posicionou a Brainstorm Academy como uma instituição de vanguarda no cenário educacional.
              </p>
              
              <div className="grid md:grid-cols-3 gap-8 text-center">
                <div>
                  <div className="text-4xl font-bold text-accent mb-2">85%</div>
                  <p className="text-text-secondary">Aumento no engajamento</p>
                </div>
                <div>
                  <div className="text-4xl font-bold text-accent mb-2">6</div>
                  <p className="text-text-secondary">Semanas de redesign</p>
                </div>
                <div>
                  <div className="text-4xl font-bold text-accent mb-2">50+</div>
                  <p className="text-text-secondary">Materiais renovados</p>
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

export default BrainstormAcademyProject;