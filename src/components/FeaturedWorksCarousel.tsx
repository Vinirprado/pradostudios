import { useEffect } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const FeaturedWorksCarousel = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { 
      loop: true,
      align: 'start',
      skipSnaps: false,
      dragFree: false
    },
    [Autoplay({ delay: 4000, stopOnInteraction: true })]
  );

  const works = [
    {
      etapa: "Etapa 01",
      title: "Alinhamento Estratégico",
      description: "Começamos com uma conversa profunda para entender suas metas, desafios e objetivos. Com base nisso, construímos um briefing completo e organizamos todo o planejamento de forma clara, com prazos e entregas bem definidos desde o início."
    },
    {
      etapa: "Etapa 02",
      title: "Pesquisa & Conceito",
      description: "Mergulhamos no universo da sua marca. Analisamos concorrentes, público-alvo e tendências do mercado. A partir disso, desenvolvemos conceitos criativos que traduzem a essência do seu negócio de forma única e autêntica."
    },
    {
      etapa: "Etapa 03",
      title: "Criação & Refinamento",
      description: "Aqui a mágica acontece! Desenvolvemos as propostas visuais, explorando cores, formas e tipografias. Apresentamos as opções, coletamos seu feedback e refinamos até alcançar a identidade visual perfeita para sua marca."
    },
    {
      etapa: "Etapa 04",
      title: "Entrega Final & Suporte",
      description: "Tudo aprovado? Você recebe os arquivos finais de forma organizada, em alta qualidade e prontos para uso. E o melhor: seguimos disponíveis para suporte, melhorias, implementações ou novos ciclos. O projeto finaliza, mas o acompanhamento continua."
    }
  ];

  const scrollPrev = () => emblaApi?.scrollPrev();
  const scrollNext = () => emblaApi?.scrollNext();

  useEffect(() => {
    if (emblaApi) {
      // Optional: Add any additional carousel controls here
    }
  }, [emblaApi]);

  return (
    <section className="py-24 px-6 bg-[#e8e8e8] relative overflow-hidden">
      <div className="container mx-auto max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left side - Title and description */}
          <div className="space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-black text-white px-6 py-3 rounded-full">
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2L2 7v10c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-10-5zm0 2.18l8 3.6v7.22c0 4.52-3.13 8.77-8 9.8-4.87-1.03-8-5.28-8-9.8V7.78l8-3.6z" fill="#ff0080"/>
              </svg>
              <span className="font-semibold">Workflow</span>
            </div>

            {/* Main title */}
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-display font-bold leading-tight">
              <span className="text-[#ff0080]">Do plano</span>
              <br />
              <span className="text-black">à execução</span>
              <br />
              <span className="text-black">e entrega<span className="text-[#ff0080]">.</span></span>
            </h2>

            {/* Description */}
            <p className="text-lg text-[#6b6b6b] leading-relaxed max-w-lg">
              Trabalhamos com processos ágeis e bem definidos para garantir que cada projeto saia com qualidade, no prazo e sem complicação.
            </p>
          </div>

          {/* Right side - Carousel */}
          <div className="relative">
            {/* Navigation buttons */}
            <div className="absolute -left-6 top-1/2 -translate-y-1/2 z-20">
              <button
                onClick={scrollPrev}
                className="w-12 h-12 rounded-full bg-[#666] hover:bg-[#555] text-white flex items-center justify-center transition-colors shadow-lg"
                aria-label="Previous slide"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
            </div>
            
            <div className="absolute -right-6 top-1/2 -translate-y-1/2 z-20">
              <button
                onClick={scrollNext}
                className="w-12 h-12 rounded-full bg-[#666] hover:bg-[#555] text-white flex items-center justify-center transition-colors shadow-lg"
                aria-label="Next slide"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>

            {/* Left fade overlay */}
            <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-[#e8e8e8] to-transparent z-10 pointer-events-none" />
            
            {/* Right fade overlay */}
            <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-[#e8e8e8] to-transparent z-10 pointer-events-none" />
            
            <div className="overflow-hidden" ref={emblaRef}>
              <div className="flex gap-6">
                {works.map((work, index) => (
                  <div
                    key={index}
                    className="flex-[0_0_100%] min-w-0"
                  >
                    <div className="bg-white/60 backdrop-blur-sm rounded-3xl p-8 h-[400px] flex flex-col shadow-lg hover:shadow-xl transition-all duration-500 cursor-grab active:cursor-grabbing border border-[#d0d0d0]">
                      {/* Badge */}
                      <div className="inline-flex items-center gap-2 bg-white border border-[#d0d0d0] px-5 py-2 rounded-full w-fit mb-8">
                        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="#ff0080">
                          <path d="M12 2L2 7v10c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-10-5z"/>
                        </svg>
                        <span className="font-semibold text-black text-sm">{work.etapa}</span>
                      </div>
                      
                      {/* Title */}
                      <h3 className="text-3xl font-display font-bold text-black mb-6 leading-tight">
                        {work.title}
                      </h3>
                      
                      {/* Description */}
                      <p className="text-[#6b6b6b] leading-relaxed text-base">
                        {work.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedWorksCarousel;
