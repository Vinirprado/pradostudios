import Seo, { projectBreadcrumb, projectWork } from '@/components/Seo';
import { useEffect, useState } from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import varandaCo from '@/assets/varanda-co.png';
import varandaDetails1 from '@/assets/varanda-details-1.png';
import varandaDetails2 from '@/assets/varanda-details-2.png';
import varandaDetails3 from '@/assets/varanda-details-3.png';
import varandaTypography from '@/assets/varanda-typography.png';

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
    <div className="min-h-screen bg-gradient-subtle overflow-x-hidden">
      <Seo title="Varanda Co — Identidade Visual | Vinicius Ramos" description="Case de identidade visual da Varanda Co: conceito, tipografia e aplicações de marca por Vinicius Ramos." path="/projeto/varanda-co" jsonLd={[projectBreadcrumb("Varanda Co", "/projeto/varanda-co"), projectWork("Varanda Co", "Case de identidade visual da Varanda Co: conceito, tipografia e aplicações de marca por Vinicius Ramos.", "/projeto/varanda-co")]} />
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
                  Varanda & Co.
                </h1>
                <p className="text-sm sm:text-xl text-text-secondary leading-relaxed mb-6 sm:mb-8">
                  Identidade visual desenvolvida para cafeteria com intuito de trazer a apreciação real do café e do momento, trazendo sofisticação e proximidade.
                </p>
                <div className="space-y-3 sm:space-y-4">
                  <div>
                    <span className="text-xs sm:text-sm font-medium text-accent uppercase tracking-wide">Cliente</span>
                    <p className="text-text-secondary text-sm sm:text-base">Varanda & Co. Cafeteria</p>
                  </div>
                  <div>
                    <span className="text-xs sm:text-sm font-medium text-accent uppercase tracking-wide">Serviços</span>
                    <p className="text-text-secondary text-sm sm:text-base">Identidade Visual, Branding, Material Gráfico</p>
                  </div>
                </div>
              </div>
              
              <div className="relative">
                <img 
                  src={varandaCo} 
                  alt="Varanda & Co. - Identidade Visual"
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
                Conceito
              </h2>
              <p className="text-sm sm:text-lg text-text-secondary max-w-3xl mx-auto leading-relaxed px-2">
                A identidade visual da Varanda & Co. foi pensada para transmitir a experiência única de apreciar um café de qualidade em um ambiente acolhedor e sofisticado.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-4 sm:gap-8">
              <div className="text-center p-5 sm:p-8 bg-gradient-card rounded-xl sm:rounded-2xl">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
                  <span className="text-xl sm:text-2xl">☕</span>
                </div>
                <h3 className="text-lg sm:text-xl font-display font-semibold text-hero-primary mb-2 sm:mb-4">
                  Qualidade
                </h3>
                <p className="text-text-secondary text-xs sm:text-base">
                  Foco na excelência do produto e na experiência sensorial única do café especial.
                </p>
              </div>
              
              <div className="text-center p-5 sm:p-8 bg-gradient-card rounded-xl sm:rounded-2xl">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
                  <span className="text-xl sm:text-2xl">🏡</span>
                </div>
                <h3 className="text-lg sm:text-xl font-display font-semibold text-hero-primary mb-2 sm:mb-4">
                  Acolhimento
                </h3>
                <p className="text-text-secondary text-xs sm:text-base">
                  Ambiente que convida à pausa, ao encontro e à apreciação do momento presente.
                </p>
              </div>
              
              <div className="text-center p-5 sm:p-8 bg-gradient-card rounded-xl sm:rounded-2xl">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
                  <span className="text-xl sm:text-2xl">✨</span>
                </div>
                <h3 className="text-lg sm:text-xl font-display font-semibold text-hero-primary mb-2 sm:mb-4">
                  Sofisticação
                </h3>
                <p className="text-text-secondary text-xs sm:text-base">
                  Design elegante que eleva a experiência sem perder a proximidade e autenticidade.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Visual Elements */}
        <section className="py-12 sm:py-24 px-3 sm:px-6 bg-secondary/5" data-section="2">
          <div className={`container mx-auto max-w-7xl ${getSectionClasses(2)}`}>
            <h2 className="text-2xl sm:text-4xl font-display font-bold text-hero-primary mb-10 sm:mb-16 text-center">
              Elementos Visuais
            </h2>
            
            {/* Main Product Showcase */}
            <div className="mb-6 sm:mb-12">
              <img 
                src={varandaDetails1} 
                alt="Embalagem e produtos Varanda & Co."
                className="w-full rounded-xl sm:rounded-2xl shadow-elegant"
              />
            </div>

            {/* Storefront and Products Grid */}
            <div className="mb-6 sm:mb-12">
              <img 
                src={varandaDetails2} 
                alt="Fachada da loja e produtos Varanda & Co."
                className="w-full rounded-xl sm:rounded-2xl shadow-elegant"
              />
            </div>

            {/* Details Grid */}
            <div className="mb-6 sm:mb-12">
              <img 
                src={varandaDetails3} 
                alt="Detalhes visuais e aplicações da marca"
                className="w-full rounded-xl sm:rounded-2xl shadow-elegant"
              />
            </div>

            {/* Typography Section */}
            <div>
              <img 
                src={varandaTypography} 
                alt="Tipografia e elementos da marca Varanda & Co."
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
                Resultado
              </h2>
              <p className="text-sm sm:text-lg text-text-secondary max-w-3xl mx-auto leading-relaxed mb-10 sm:mb-16 px-2">
                Uma identidade visual que consegue transmitir a essência da Varanda & Co.: um lugar onde cada xícara de café é uma experiência especial.
              </p>
              
              <div className="grid grid-cols-3 gap-4 sm:gap-8 text-center">
                <div>
                  <div className="text-2xl sm:text-4xl font-bold bg-gradient-to-r from-[hsl(300,100%,85%)] to-[hsl(200,100%,85%)] bg-clip-text text-transparent mb-1 sm:mb-2">100%</div>
                  <p className="text-text-secondary text-xs sm:text-base">Aprovação do cliente</p>
                </div>
                <div>
                  <div className="text-2xl sm:text-4xl font-bold bg-gradient-to-r from-[hsl(300,100%,85%)] to-[hsl(200,100%,85%)] bg-clip-text text-transparent mb-1 sm:mb-2">3</div>
                  <p className="text-text-secondary text-xs sm:text-base">Semanas de desenvolvimento</p>
                </div>
                <div>
                  <div className="text-2xl sm:text-4xl font-bold bg-gradient-to-r from-[hsl(300,100%,85%)] to-[hsl(200,100%,85%)] bg-clip-text text-transparent mb-1 sm:mb-2">15+</div>
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

export default VarandaCoProject;