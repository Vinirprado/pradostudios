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
            }, index * 100);
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
    <section id="servicos" className="py-12 sm:py-24 px-3 sm:px-6 bg-background overflow-hidden">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-8 sm:mb-20 px-2">
          <h2 className="text-2xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-bold text-foreground mb-3 sm:mb-6">
            {t('services.title')}
          </h2>
          <p className="text-sm sm:text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            {t('services.description')}
          </p>
        </div>
        
        <div className="grid gap-3 sm:gap-8 md:grid-cols-2 lg:gap-10">
          {services.map((service, index) => (
            <Card 
              key={index}
              ref={el => cardRefs.current[index] = el}
              className={`p-4 sm:p-8 md:p-10 bg-card border-border hover:border-primary/50 transition-all duration-700 ease-out hover:shadow-xl ${
                visibleCards[index]
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-16'
              }`}
            >
              <h3 className="text-lg sm:text-2xl md:text-3xl font-display font-bold text-foreground mb-2 sm:mb-4 leading-tight">
                {t(service.titleKey)}
              </h3>
              <p className="text-muted-foreground leading-relaxed text-xs sm:text-base md:text-lg">
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