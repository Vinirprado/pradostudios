import { useEffect, useRef, useState } from 'react';

const ServicesSection = () => {
  const [visibleCards, setVisibleCards] = useState<boolean[]>([false, false, false, false]);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  
  const services = [{
    title: "Identidade Visual Completa",
    description: "Desenvolvimento completo da marca, desde o conceito até as aplicações finais."
  }, {
    title: "Criação de Marca & Direção Criativa",
    description: "Estratégia criativa e direcionamento visual para posicionar sua marca no mercado."
  }, {
    title: "Manual de Marca e Aplicações",
    description: "Guias detalhados para manter a consistência visual em todas as aplicações."
  }, {
    title: "Consultoria Visual",
    description: "Análise e orientação para melhorar a presença visual da sua marca."
  }];

  useEffect(() => {
    const observers = cardRefs.current.map((card, index) => {
      if (!card) return null;
      
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setVisibleCards(prev => {
              const newState = [...prev];
              newState[index] = true;
              return newState;
            });
            observer.unobserve(entry.target);
          }
        },
        {
          threshold: 0.2,
          rootMargin: '0px'
        }
      );
      
      observer.observe(card);
      return observer;
    });
    
    return () => {
      observers.forEach(observer => observer?.disconnect());
    };
  }, []);
  
  return <section id="servicos" className="py-24 px-6 bg-surface-subtle">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-display font-bold text-hero-primary mb-8 md:text-7xl">Serviços</h2>
          
          <p className="text-lg text-text-secondary max-w-4xl mx-auto leading-relaxed md:text-lg">
            Cada detalhe importa. Meu processo vai além do design: envolve pesquisa, estratégia e a criação de uma identidade que comunica a essência da sua marca de forma clara e memorável.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              ref={el => cardRefs.current[index] = el}
              className={`bg-gradient-card rounded-2xl p-8 shadow-soft hover:shadow-elevated hover:scale-[1.02] transition-all duration-700 ${
                visibleCards[index]
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-20'
              }`}
            >
              <h3 className="text-2xl font-display font-semibold text-hero-primary mb-4">
                {service.title}
              </h3>
              <p className="text-text-secondary leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>;
};
export default ServicesSection;