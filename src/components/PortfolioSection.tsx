import varandaCo from '@/assets/varanda-co.png';
import apolocred from '@/assets/apolocred.png';
import brainstormAcademy from '@/assets/brainstorm-academy.png';
import portfolio4 from '@/assets/portfolio-4.jpg';

const PortfolioSection = () => {
  const projects = [
    {
      image: varandaCo,
      title: "Varanda & Co.",
      description: "Identidade visual desenvolvida para cafeteria com intuito de trazer a apreciação real do café e do momento, trazendo sofisticação e proximidade."
    },
    {
      image: apolocred,
      title: "Apolocred",
      description: "A Apolocred nasceu com a missão de tornar o acesso à consultoria financeira algo simples, estratégico e de qualidade."
    },
    {
      image: brainstormAcademy,
      title: "Brainstorm Academy",
      description: "Abandonamos os clichês e optamos por um visual mais limpo, moderno e inspirador. O objetivo era transmitir uma sensação de inovação e comprometimento com altos padrões no ambiente escolar."
    },
    {
      image: portfolio4,
      title: "Creative Hub",
      description: "Identidade visual para agência criativa, expressando inovação e personalidade única."
    }
  ];

  return (
    <section id="projetos" className="py-24 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-hero-primary mb-8">
            Projetos
          </h2>
          
          <p className="text-lg md:text-xl text-text-secondary max-w-3xl mx-auto leading-relaxed">
            Algumas identidades que desenvolvi, cada uma com sua história e essência únicas.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="group bg-gradient-card rounded-2xl overflow-hidden shadow-soft hover:shadow-elevated transition-smooth hover:scale-[1.02]"
            >
              <div className="aspect-video overflow-hidden">
                <img 
                  src={project.image} 
                  alt={`Projeto ${project.title} - Identidade Visual`}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              
              <div className="p-8">
                <h3 className="text-2xl font-display font-semibold text-hero-primary mb-3">
                  {project.title}
                </h3>
                <p className="text-text-secondary leading-relaxed">
                  {project.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;