import { useEffect } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';

const FeaturedWorksCarousel = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { 
      loop: true,
      align: 'start',
      skipSnaps: false,
      dragFree: false
    },
    [Autoplay({ delay: 3000, stopOnInteraction: true })]
  );

  const works = [
    {
      title: "ApoloCred",
      category: "Identidade Visual Completa",
      description: "Desenvolvimento de marca para fintech com foco em credibilidade e inovação.",
      image: "/placeholder.svg"
    },
    {
      title: "Aqua America",
      category: "Branding & Aplicações",
      description: "Criação de identidade visual para empresa de purificação de água.",
      image: "/placeholder.svg"
    },
    {
      title: "Brainstorm Academy",
      category: "Design Educacional",
      description: "Identidade visual moderna para plataforma de educação online.",
      image: "/placeholder.svg"
    },
    {
      title: "Varanda & Co",
      category: "Branding Premium",
      description: "Marca sofisticada para cafeteria conceito premium.",
      image: "/placeholder.svg"
    },
    {
      title: "Gadgets Store",
      category: "E-commerce Design",
      description: "Identidade visual tech para loja de eletrônicos.",
      image: "/placeholder.svg"
    },
    {
      title: "Ideia Criativa",
      category: "Agência Criativa",
      description: "Branding para agência de marketing digital.",
      image: "/placeholder.svg"
    }
  ];

  useEffect(() => {
    if (emblaApi) {
      // Optional: Add any additional carousel controls here
    }
  }, [emblaApi]);

  return (
    <section className="py-24 px-6 bg-[#1a1a1a] relative overflow-hidden">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-display font-bold text-white mb-6 md:text-7xl">
            Trabalhos em Destaque
          </h2>
          <p className="text-lg text-white/70 max-w-3xl mx-auto leading-relaxed">
            Uma seleção dos projetos mais recentes, onde criatividade e estratégia se encontram para criar marcas memoráveis.
          </p>
        </div>

        {/* Carousel with fade effect on edges */}
        <div className="relative">
          {/* Left fade overlay */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[#1a1a1a] to-transparent z-10 pointer-events-none" />
          
          {/* Right fade overlay */}
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#1a1a1a] to-transparent z-10 pointer-events-none" />
          
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex gap-6">
              {works.map((work, index) => (
                <div
                  key={index}
                  className="flex-[0_0_85%] md:flex-[0_0_42%] lg:flex-[0_0_28%] min-w-0"
                >
                  <div className="bg-white/5 backdrop-blur-sm rounded-2xl overflow-hidden h-full shadow-2xl hover:shadow-[0_20px_60px_rgba(255,255,255,0.1)] transition-all duration-500 cursor-grab active:cursor-grabbing border border-white/10 hover:border-white/20">
                    {/* Image placeholder */}
                    <div className="aspect-[4/3] bg-gradient-to-br from-white/10 to-white/5 relative overflow-hidden group">
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-20 h-20 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center">
                          <svg className="w-10 h-10 text-white/80" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                          </svg>
                        </div>
                      </div>
                    </div>
                    
                    {/* Content */}
                    <div className="p-6">
                      <span className="text-xs font-semibold text-white/50 uppercase tracking-wider mb-2 block">
                        {work.category}
                      </span>
                      <h3 className="text-2xl font-display font-bold text-white mb-3">
                        {work.title}
                      </h3>
                      <p className="text-white/60 leading-relaxed text-sm">
                        {work.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="text-center mt-8">
          <p className="text-sm text-white/40">
            ← Arraste para ver mais projetos →
          </p>
        </div>
      </div>
    </section>
  );
};

export default FeaturedWorksCarousel;
