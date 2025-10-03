import { useEffect } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import { Quote } from 'lucide-react';

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

  const testimonials = [
    {
      name: "Maria Silva",
      role: "CEO, TechStart",
      content: "O trabalho do Vinícius superou todas as minhas expectativas. A identidade visual criada para nossa empresa é simplesmente perfeita e representa exatamente o que queríamos comunicar.",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop"
    },
    {
      name: "João Santos",
      role: "Fundador, InovaLab",
      content: "Profissional extremamente competente e criativo. Todo o processo foi conduzido com muito profissionalismo, desde o briefing até a entrega final. Recomendo muito!",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop"
    },
    {
      name: "Ana Costa",
      role: "Diretora de Marketing, BrandCo",
      content: "A atenção aos detalhes e o cuidado com cada elemento da marca foram impressionantes. O resultado foi uma identidade visual coesa e impactante que elevou nossa presença no mercado.",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop"
    },
    {
      name: "Pedro Oliveira",
      role: "Proprietário, Café Aroma",
      content: "Vinícius entendeu perfeitamente a essência do nosso negócio e transformou isso em uma identidade visual única. Nossos clientes adoraram a nova marca!",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop"
    },
    {
      name: "Carla Mendes",
      role: "Co-founder, EcoVida",
      content: "A experiência de trabalhar com o Vinícius foi excepcional. Ele é dedicado, criativo e sempre disposto a ajustar até alcançar a perfeição. O resultado superou nossas expectativas!",
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&h=400&fit=crop"
    },
    {
      name: "Ricardo Almeida",
      role: "Gerente, FitPro Academia",
      content: "Profissionalismo e criatividade definem bem o trabalho dele. A nova identidade visual trouxe muito mais credibilidade para nosso negócio e atraiu novos clientes.",
      image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=400&fit=crop"
    }
  ];

  useEffect(() => {
    if (emblaApi) {
      // Optional: Add any additional carousel controls here
    }
  }, [emblaApi]);

  return (
    <section className="py-24 px-6 bg-background relative overflow-hidden">
      {/* Decorative sidebar with gradient */}
      <div className="absolute left-0 top-0 bottom-0 w-2 bg-gradient-to-b from-[hsl(300_100%_85%)] via-[hsl(280_100%_85%)] to-[hsl(200_100%_85%)]" />
      
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-display font-bold text-hero-primary mb-6 md:text-7xl">
            O que dizem sobre mim
          </h2>
          <p className="text-lg text-text-secondary max-w-3xl mx-auto leading-relaxed">
            A satisfação dos meus clientes é minha maior recompensa. Veja o que eles têm a dizer sobre nosso trabalho juntos.
          </p>
        </div>

        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex gap-6">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="flex-[0_0_90%] md:flex-[0_0_45%] lg:flex-[0_0_30%] min-w-0"
              >
                <div className="bg-gradient-card rounded-2xl p-8 h-full shadow-soft hover:shadow-elevated transition-smooth cursor-grab active:cursor-grabbing">
                  <Quote className="w-10 h-10 text-hero-secondary mb-6 opacity-50" />
                  
                  <p className="text-text-secondary leading-relaxed mb-8 min-h-[120px]">
                    "{testimonial.content}"
                  </p>
                  
                  <div className="flex items-center gap-4 pt-6 border-t border-border">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-14 h-14 rounded-full object-cover"
                    />
                    <div>
                      <h4 className="font-semibold text-hero-primary">
                        {testimonial.name}
                      </h4>
                      <p className="text-sm text-text-muted">
                        {testimonial.role}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mt-8">
          <p className="text-sm text-text-muted">
            ← Arraste para ver mais depoimentos →
          </p>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
