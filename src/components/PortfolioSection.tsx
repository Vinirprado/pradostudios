import { useNavigate } from 'react-router-dom';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { useLanguage } from '@/contexts/LanguageContext';
import varandaCo from '@/assets/varanda-co.png';
import apolocred from '@/assets/apolocred.png';
import brainstormAcademy from '@/assets/brainstorm-academy.png';
import aquaAmerica from '@/assets/aqua-america.png';

const PortfolioSection = () => {
  const navigate = useNavigate();
  const { ref, isVisible } = useScrollReveal();
  const { t } = useLanguage();
  
  const projects = [
    {
      image: varandaCo,
      title: "Varanda & Co.",
      descriptionKey: 'portfolio.varanda.description',
      link: "/projeto/varanda-co"
    },
    {
      image: apolocred,
      title: "Apolocred",
      descriptionKey: 'portfolio.apolocred.description',
      link: "/projeto/apolocred"
    },
    {
      image: brainstormAcademy,
      title: "Brainstorm Academy",
      descriptionKey: 'portfolio.brainstorm.description',
      link: "/projeto/brainstorm-academy"
    },
    {
      image: aquaAmerica,
      title: "Aqua America",
      descriptionKey: 'portfolio.aqua.description',
      link: "/projeto/aqua-america"
    }
  ];

  return (
    <section id="projetos" className="py-12 sm:py-24 px-3 sm:px-6 overflow-hidden" ref={ref}>
      <div className={`container mx-auto max-w-6xl transition-all duration-1000 ease-out ${
        isVisible 
          ? 'opacity-100 translate-y-0' 
          : 'opacity-0 translate-y-10'
      }`}>
        <div className="text-center mb-8 sm:mb-16 px-2">
          <h2 className="text-2xl sm:text-4xl md:text-7xl font-display font-bold text-hero-primary mb-4 sm:mb-8">
            {t('portfolio.title')}
          </h2>
          
          <p className="text-sm sm:text-lg text-text-secondary max-w-3xl mx-auto leading-relaxed">
            {t('portfolio.description')}
          </p>
        </div>
        
        <div className="grid sm:grid-cols-2 gap-3 sm:gap-8">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className="group bg-gradient-card rounded-xl sm:rounded-2xl overflow-hidden shadow-soft hover:shadow-elevated transition-all duration-500 ease-out hover:scale-[1.02] cursor-pointer active:scale-[0.98]"
              onClick={() => navigate(project.link)}
            >
              <div className="aspect-video overflow-hidden">
                <img 
                  src={project.image} 
                  alt={`Projeto ${project.title} - Identidade Visual`} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  loading="lazy"
                  width="528"
                  height="297"
                  decoding="async"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 528px"
                />
              </div>
              
              <div className="p-4 sm:p-8">
                <h3 className="text-lg sm:text-2xl font-display font-semibold text-hero-primary mb-1.5 sm:mb-3 group-hover:text-accent transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-xs sm:text-base text-text-secondary leading-relaxed line-clamp-2 sm:line-clamp-none">
                  {t(project.descriptionKey)}
                </p>
                <div className="mt-2 sm:mt-4 text-accent text-xs sm:text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {t('portfolio.viewProject')}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;