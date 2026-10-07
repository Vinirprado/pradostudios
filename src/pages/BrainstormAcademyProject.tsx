import Seo, { projectBreadcrumb, projectWork } from '@/components/Seo';
import { useEffect, useState } from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import brainstormAcademy from '@/assets/brainstorm-academy.png';
import brainstormProducts from '@/assets/brainstorm-products.png';
import brainstormOutdoor from '@/assets/brainstorm-outdoor.png';
import brainstormColors from '@/assets/brainstorm-colors.png';
import brainstormLogoConcept from '@/assets/brainstorm-logo-concept.png';
import brainstormMerch from '@/assets/brainstorm-merch.png';

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
    <div className="min-h-screen bg-gradient-subtle overflow-x-hidden">
      <Seo title="Brainstorm Academy — Identidade Visual | Vinicius Ramos" description="Case de identidade visual da Brainstorm Academy: logotipo, paleta de cores e materiais criados por Vinicius Ramos." path="/projeto/brainstorm-academy" jsonLd={[projectBreadcrumb("Brainstorm Academy", "/projeto/brainstorm-academy"), projectWork("Brainstorm Academy", "Case de identidade visual da Brainstorm Academy: logotipo, paleta de cores e materiais criados por Vinicius Ramos.", "/projeto/brainstorm-academy")]} />
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
                  Brainstorm Academy
                </h1>
                <p className="text-sm sm:text-xl text-text-secondary leading-relaxed mb-6 sm:mb-8">
                  Abandonamos os clichês e optamos por um visual mais limpo, moderno e inspirador. O objetivo era transmitir uma sensação de inovação e comprometimento com altos padrões no ambiente escolar.
                </p>
                <div className="space-y-3 sm:space-y-4">
                  <div>
                    <span className="text-xs sm:text-sm font-medium text-accent uppercase tracking-wide">Cliente</span>
                    <p className="text-text-secondary text-sm sm:text-base">Brainstorm Academy</p>
                  </div>
                  <div>
                    <span className="text-xs sm:text-sm font-medium text-accent uppercase tracking-wide">Serviços</span>
                    <p className="text-text-secondary text-sm sm:text-base">Rebranding, Identidade Visual, Material Educacional</p>
                  </div>
                </div>
              </div>
              
              <div className="relative">
                <img 
                  src={brainstormAcademy} 
                  alt="Brainstorm Academy - Identidade Visual"
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
                Renovação
              </h2>
              <p className="text-sm sm:text-lg text-text-secondary max-w-3xl mx-auto leading-relaxed px-2">
                Uma transformação completa que elevou a marca a um novo patamar de modernidade e inspiração educacional.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-4 sm:gap-8">
              <div className="text-center p-5 sm:p-8 bg-gradient-card rounded-xl sm:rounded-2xl">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
                  <span className="text-xl sm:text-2xl">💡</span>
                </div>
                <h3 className="text-lg sm:text-xl font-display font-semibold text-hero-primary mb-2 sm:mb-4">
                  Inovação
                </h3>
                <p className="text-text-secondary text-xs sm:text-base">
                  Rompimento com padrões tradicionais da educação para criar algo verdadeiramente inspirador.
                </p>
              </div>
              
              <div className="text-center p-5 sm:p-8 bg-gradient-card rounded-xl sm:rounded-2xl">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
                  <span className="text-xl sm:text-2xl">🎨</span>
                </div>
                <h3 className="text-lg sm:text-xl font-display font-semibold text-hero-primary mb-2 sm:mb-4">
                  Modernidade
                </h3>
                <p className="text-text-secondary text-xs sm:text-base">
                  Design contemporâneo que dialoga com as novas gerações sem perder a seriedade educacional.
                </p>
              </div>
              
              <div className="text-center p-5 sm:p-8 bg-gradient-card rounded-xl sm:rounded-2xl">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
                  <span className="text-xl sm:text-2xl">🏆</span>
                </div>
                <h3 className="text-lg sm:text-xl font-display font-semibold text-hero-primary mb-2 sm:mb-4">
                  Excelência
                </h3>
                <p className="text-text-secondary text-xs sm:text-base">
                  Compromisso com os mais altos padrões de qualidade no ambiente educacional.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Visual Elements */}
        <section className="py-12 sm:py-24 px-3 sm:px-6 bg-secondary/5" data-section="2">
          <div className={`container mx-auto max-w-7xl ${getSectionClasses(2)}`}>
            <h2 className="text-2xl sm:text-4xl font-display font-bold text-hero-primary mb-10 sm:mb-16 text-center">
              Nova Identidade
            </h2>
            
            {/* Brand Products */}
            <div className="mb-6 sm:mb-12">
              <img 
                src={brainstormProducts} 
                alt="Produtos e materiais Brainstorm Academy"
                className="w-full rounded-xl sm:rounded-2xl shadow-elegant"
              />
            </div>

            {/* Outdoor Campaign */}
            <div className="mb-6 sm:mb-12">
              <img 
                src={brainstormOutdoor} 
                alt="Campanhas outdoor Brainstorm Academy"
                className="w-full rounded-xl sm:rounded-2xl shadow-elegant"
              />
            </div>

            {/* Color Palette */}
            <div className="mb-6 sm:mb-12">
              <img 
                src={brainstormColors} 
                alt="Paleta de cores Brainstorm Academy"
                className="w-full rounded-xl sm:rounded-2xl shadow-elegant"
              />
            </div>

            {/* Logo Concept */}
            <div className="mb-6 sm:mb-12">
              <img 
                src={brainstormLogoConcept} 
                alt="Conceito do logo Brainstorm Academy"
                className="w-full rounded-xl sm:rounded-2xl shadow-elegant"
              />
            </div>

            {/* Merchandise */}
            <div>
              <img 
                src={brainstormMerch} 
                alt="Merchandise e brindes Brainstorm Academy"
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
                Transformação
              </h2>
              <p className="text-sm sm:text-lg text-text-secondary max-w-3xl mx-auto leading-relaxed mb-10 sm:mb-16 px-2">
                O rebranding posicionou a Brainstorm Academy como uma instituição de vanguarda no cenário educacional.
              </p>
              
              <div className="grid grid-cols-3 gap-4 sm:gap-8 text-center">
                <div>
                  <div className="text-2xl sm:text-4xl font-bold bg-gradient-to-r from-[hsl(300,100%,85%)] to-[hsl(200,100%,85%)] bg-clip-text text-transparent mb-1 sm:mb-2">85%</div>
                  <p className="text-text-secondary text-xs sm:text-base">Aumento no engajamento</p>
                </div>
                <div>
                  <div className="text-2xl sm:text-4xl font-bold bg-gradient-to-r from-[hsl(300,100%,85%)] to-[hsl(200,100%,85%)] bg-clip-text text-transparent mb-1 sm:mb-2">6</div>
                  <p className="text-text-secondary text-xs sm:text-base">Semanas de redesign</p>
                </div>
                <div>
                  <div className="text-2xl sm:text-4xl font-bold bg-gradient-to-r from-[hsl(300,100%,85%)] to-[hsl(200,100%,85%)] bg-clip-text text-transparent mb-1 sm:mb-2">50+</div>
                  <p className="text-text-secondary text-xs sm:text-base">Materiais renovados</p>
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