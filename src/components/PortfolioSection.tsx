import { useNavigate } from 'react-router-dom';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import varandaCo from '@/assets/varanda-co.png';
import apolocred from '@/assets/apolocred.png';
import brainstormAcademy from '@/assets/brainstorm-academy.png';
import aquaAmerica from '@/assets/aqua-america.png';

const PortfolioSection = () => {
  const navigate = useNavigate();
  const { ref, isVisible } = useScrollReveal();
  
  const projects = [{
    image: varandaCo,
    title: "Varanda & Co.",
    description: "Identidade visual desenvolvida para cafeteria com intuito de trazer a apreciação real do café e do momento, trazendo sofisticação e proximidade.",
    link: "/projeto/varanda-co"
  }, {
    image: apolocred,
    title: "Apolocred",
    description: "A Apolocred nasceu com a missão de tornar o acesso à consultoria financeira algo simples, estratégico e de qualidade.",
    link: "/projeto/apolocred"
  }, {
    image: brainstormAcademy,
    title: "Brainstorm Academy",
    description: "Abandonamos os clichês e optamos por um visual mais limpo, moderno e inspirador. O objetivo era transmitir uma sensação de inovação e comprometimento com altos padrões no ambiente escolar.",
    link: "/projeto/brainstorm-academy"
  }, {
    image: aquaAmerica,
    title: "Aqua America",
    description: "A essência da marca trás o foco em pureza, revitalização e excelência natural. Os principais atributos estão enraizados em oferecer qualidade imaculada, promover o bem-estar e abraçar o que há de melhor na natureza.",
    link: "/projeto/aqua-america"
  }];
  return <section id="projetos" className="py-24 px-6" ref={ref}>
      <div className={`container mx-auto max-w-6xl transition-all duration-1000 ${
        isVisible 
          ? 'opacity-100 translate-y-0' 
          : 'opacity-0 translate-y-10'
      }`}>
        <div className="text-center mb-16">
          <h2 className="text-4xl font-display font-bold text-hero-primary mb-8 md:text-7xl">
            Projetos
          </h2>
          
          <p className="text-lg text-text-secondary max-w-3xl mx-auto leading-relaxed md:text-lg">
            Algumas identidades que desenvolvi, cada uma com sua história e essência únicas.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className="group bg-gradient-card rounded-2xl overflow-hidden shadow-soft hover:shadow-elevated transition-smooth hover:scale-[1.02] cursor-pointer"
              onClick={() => navigate(project.link)}
            >
              <div className="aspect-video overflow-hidden">
                <img 
                  src={project.image} 
                  alt={`Projeto ${project.title} - Identidade Visual`} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                  width="528"
                  height="297"
                  decoding="async"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 528px"
                />
              </div>
              
              <div className="p-8">
                <h3 className="text-2xl font-display font-semibold text-hero-primary mb-3 group-hover:text-accent transition-colors">
                  {project.title}
                </h3>
                <p className="text-text-secondary leading-relaxed">
                  {project.description}
                </p>
                <div className="mt-4 text-accent text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                  Ver projeto completo →
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>;
};
export default PortfolioSection;