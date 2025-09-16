import portfolio1 from '@/assets/portfolio-1.jpg';
import portfolio2 from '@/assets/portfolio-2.jpg';
import portfolio3 from '@/assets/portfolio-3.jpg';
import portfolio4 from '@/assets/portfolio-4.jpg';

const PortfolioSection = () => {
  const projects = [
    {
      image: portfolio1,
      title: "TechFlow",
      description: "Identidade desenvolvida para startup de tecnologia, transmitindo sofisticação e proximidade."
    },
    {
      image: portfolio2,
      title: "Verde Gourmet",
      description: "Sistema visual criado para restaurante premium, destacando autenticidade e modernidade."
    },
    {
      image: portfolio3,
      title: "Moda Essence",
      description: "Branding completo para marca de moda, equilibrando elegância e contemporaneidade."
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