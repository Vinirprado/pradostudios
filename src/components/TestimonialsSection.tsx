import { useEffect } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import { Quote } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const TestimonialsSection = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { 
      loop: true,
      align: 'start',
      skipSnaps: false,
      dragFree: true
    },
    [Autoplay({ delay: 3000, stopOnInteraction: false })]
  );

  const { t } = useLanguage();

  const testimonials = [
    {
      name: "Maria Silva",
      role: "CEO, TechStart",
      contentKey: 'testimonials.t1.content',
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop"
    },
    {
      name: "João Santos",
      role: "Fundador, InovaLab",
      contentKey: 'testimonials.t2.content',
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop"
    },
    {
      name: "Ana Costa",
      role: "Diretora de Marketing, BrandCo",
      contentKey: 'testimonials.t3.content',
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop"
    },
    {
      name: "Pedro Oliveira",
      role: "Proprietário, Café Aroma",
      contentKey: 'testimonials.t4.content',
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop"
    },
    {
      name: "Carla Mendes",
      role: "Co-founder, EcoVida",
      contentKey: 'testimonials.t5.content',
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&h=400&fit=crop"
    },
    {
      name: "Ricardo Almeida",
      role: "Gerente, FitPro Academia",
      contentKey: 'testimonials.t6.content',
      image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=400&fit=crop"
    }
  ];

  useEffect(() => {
    if (emblaApi) {
      // Optional: Add any additional carousel controls here
    }
  }, [emblaApi]);

  return (
    <section className="py-12 sm:py-24 px-3 sm:px-6 bg-background relative overflow-hidden">
      {/* Decorative sidebar with gradient */}
      <div className="absolute left-0 top-0 bottom-0 w-1 sm:w-2 bg-gradient-to-b from-[hsl(300_100%_70%)] via-[hsl(280_100%_90%)] to-[hsl(200_100%_70%)]" />
      
      <div className="container mx-auto max-w-7xl overflow-hidden">
        <div className="text-center mb-8 sm:mb-16 px-2">
          <h2 className="text-2xl sm:text-4xl md:text-7xl font-display font-bold text-hero-primary mb-3 sm:mb-6">
            {t('testimonials.title')}
          </h2>
          <p className="text-sm sm:text-lg text-text-secondary max-w-3xl mx-auto leading-relaxed">
            {t('testimonials.description')}
          </p>
        </div>

        <div className="overflow-hidden mx-1" ref={emblaRef}>
          <div className="flex gap-3 sm:gap-6">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="flex-[0_0_85%] sm:flex-[0_0_45%] lg:flex-[0_0_30%] min-w-0"
              >
                <div className="bg-gradient-card rounded-xl sm:rounded-2xl p-4 sm:p-8 h-full shadow-soft hover:shadow-elevated transition-all duration-500 ease-out cursor-grab active:cursor-grabbing">
                  <Quote className="w-6 h-6 sm:w-10 sm:h-10 text-hero-secondary mb-3 sm:mb-6 opacity-50" />
                  
                  <p className="text-xs sm:text-base text-text-secondary leading-relaxed mb-4 sm:mb-8 min-h-[60px] sm:min-h-[120px] line-clamp-4 sm:line-clamp-none">
                    "{t(testimonial.contentKey)}"
                  </p>
                  
                  <div className="flex items-center gap-2 sm:gap-4 pt-3 sm:pt-6 border-t border-border">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-9 h-9 sm:w-14 sm:h-14 rounded-full object-cover"
                    />
                    <div>
                      <h4 className="font-semibold text-xs sm:text-base text-hero-primary">
                        {testimonial.name}
                      </h4>
                      <p className="text-[10px] sm:text-sm text-text-muted">
                        {testimonial.role}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mt-4 sm:mt-8">
          <p className="text-[10px] sm:text-sm text-text-muted">
            {t('testimonials.drag')}
          </p>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;