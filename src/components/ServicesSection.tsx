import { useEffect, useRef, useState } from 'react';
import { Card } from '@/components/ui/card';
import { useLanguage } from '@/contexts/LanguageContext';

const ServicesSection = () => {
  const [visibleCards, setVisibleCards] = useState<boolean[]>([false, false, false, false]);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const { t } = useLanguage();
  
  const services = [
    {
      titleKey: 'services.service1.title',
      descriptionKey: 'services.service1.description'
    },
    {
      titleKey: 'services.service2.title',
      descriptionKey: 'services.service2.description'
    },
    {
      titleKey: 'services.service3.title',
      descriptionKey: 'services.service3.description'
    },
    {
      titleKey: 'services.service4.title',
      descriptionKey: 'services.service4.description'
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
            {t('services.title')}
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed md:text-xl">
            {t('services.description')}
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
                {t(service.titleKey)}
              </h3>
              <p className="text-muted-foreground leading-relaxed text-base md:text-lg">
                {t(service.descriptionKey)}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
