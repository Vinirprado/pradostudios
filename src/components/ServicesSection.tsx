import { useEffect, useRef, useState } from 'react';
import { Card } from '@/components/ui/card';

const ServicesSection = () => {
  const [visibleCards, setVisibleCards] = useState<boolean[]>([false, false, false, false]);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  
  const services = [
    {
      title: "Identidade Visual Completa",
      description: "Desenvolvimento completo da marca, desde o conceito até as aplicações finais."
    },
    {
      title: "Criação de Marca & Direção Criativa",
      description: "Estratégia criativa e direcionamento visual para posicionar sua marca no mercado."
    },
    {
      title: "Manual de Marca e Aplicações",
      description: "Guias detalhados para manter a consistência visual em todas as aplicações."
    },
    {
      title: "Consultoria Visual",
      description: "Análise e orientação para melhorar a presença visual da sua marca."
    }
  ];

  useEffect(() => {
    const observers = cardRefs.current.map((card, index) => {
      if (!card) return null;
      
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              setVisibleCards(prev => {
                const newState = [...prev];
                newState[index] = true;
                return newState;
              });
            }, index * 150);
            observer.unobserve(entry.target);
          }
        },
        {
          threshold: 0.1,
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
  
  return (
    <section id="servicos" className="py-24 px-6 bg-background">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-20">
          <h2 className="text-5xl font-display font-bold text-foreground mb-6 md:text-6xl lg:text-7xl">
            Soluções que Ofereço
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed md:text-xl">
            Cada detalhe importa. Meu processo vai além do design: envolve pesquisa, estratégia e a criação de uma identidade que comunica a essência da sua marca de forma clara e memorável.
          </p>
        </div>
        
        <div className="grid gap-8 md:grid-cols-2 lg:gap-10">
          {services.map((service, index) => (
            <Card 
              key={index}
              ref={el => cardRefs.current[index] = el}
              className={`p-8 md:p-10 bg-card border-border hover:border-primary/50 transition-all duration-700 hover:shadow-xl ${
                visibleCards[index]
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-24'
              }`}
            >
              <h3 className="text-2xl md:text-3xl font-display font-bold text-foreground mb-4 leading-tight">
                {service.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed text-base md:text-lg">
                {service.description}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;