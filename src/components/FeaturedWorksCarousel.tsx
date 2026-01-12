import { useEffect } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import { ChevronLeft, ChevronRight, Check } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

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

  const { t } = useLanguage();

  const works = [
    {
      stepKey: 'workflow.step',
      number: '01',
      titleKey: 'workflow.step1.title',
      descriptionKey: 'workflow.step1.description'
    },
    {
      stepKey: 'workflow.step',
      number: '02',
      titleKey: 'workflow.step2.title',
      descriptionKey: 'workflow.step2.description'
    },
    {
      stepKey: 'workflow.step',
      number: '03',
      titleKey: 'workflow.step3.title',
      descriptionKey: 'workflow.step3.description'
    },
    {
      stepKey: 'workflow.step',
      number: '04',
      titleKey: 'workflow.step4.title',
      descriptionKey: 'workflow.step4.description'
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
    <section className="py-12 sm:py-24 px-4 sm:px-6 bg-[#e8e8e8] relative overflow-hidden">
      <div className="container mx-auto max-w-7xl overflow-hidden">
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-16 items-center">
          {/* Left side - Title and description */}
          <div className="space-y-4 sm:space-y-8 overflow-hidden">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-black text-white px-3 sm:px-6 py-2 sm:py-3 rounded-full">
              <Check className="w-4 h-4 sm:w-5 sm:h-5 text-[#ff0080]" />
              <span className="font-semibold text-xs sm:text-base">{t('workflow.badge')}</span>
            </div>

            {/* Main title */}
            <h2 className="text-2xl sm:text-4xl md:text-5xl lg:text-7xl font-display font-bold leading-tight">
              <span className="text-[#ff0080]">{t('workflow.title1')}</span>
              <br />
              <span className="text-black">{t('workflow.title2')}</span>
              <br />
              <span className="text-black">{t('workflow.title3')}<span className="text-[#ff0080]">.</span></span>
            </h2>

            {/* Description */}
            <p className="text-sm sm:text-lg text-[#6b6b6b] leading-relaxed max-w-lg pr-2">
              {t('workflow.description')}
            </p>
          </div>

          {/* Right side - Carousel */}
          <div className="relative w-full overflow-hidden">
            {/* Navigation buttons - hidden on mobile, show on larger screens */}
            <div className="hidden sm:block absolute -left-4 top-1/2 -translate-y-1/2 z-20">
              <button
                onClick={scrollPrev}
                className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#666] hover:bg-[#555] text-white flex items-center justify-center transition-all duration-300 shadow-lg active:scale-95"
                aria-label="Previous slide"
              >
                <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
              </button>
            </div>
            
            <div className="hidden sm:block absolute -right-4 top-1/2 -translate-y-1/2 z-20">
              <button
                onClick={scrollNext}
                className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#666] hover:bg-[#555] text-white flex items-center justify-center transition-all duration-300 shadow-lg active:scale-95"
                aria-label="Next slide"
              >
                <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
              </button>
            </div>

            {/* Left fade overlay */}
            <div className="absolute left-0 top-0 bottom-0 w-6 sm:w-16 bg-gradient-to-r from-[#e8e8e8] to-transparent z-10 pointer-events-none" />
            
            {/* Right fade overlay */}
            <div className="absolute right-0 top-0 bottom-0 w-6 sm:w-16 bg-gradient-to-l from-[#e8e8e8] to-transparent z-10 pointer-events-none" />
            
            <div className="overflow-hidden mx-1" ref={emblaRef}>
              <div className="flex gap-3 sm:gap-6">
                {works.map((work, index) => (
                  <div
                    key={index}
                    className="flex-[0_0_100%] min-w-0"
                  >
                    <div className="bg-white/60 backdrop-blur-sm rounded-xl sm:rounded-3xl p-5 sm:p-8 min-h-[280px] sm:h-[400px] flex flex-col shadow-lg hover:shadow-xl transition-all duration-500 ease-out cursor-grab active:cursor-grabbing border border-[#d0d0d0]">
                      {/* Badge */}
                      <div className="inline-flex items-center gap-2 bg-white border border-[#d0d0d0] px-3 sm:px-5 py-1.5 sm:py-2 rounded-full w-fit mb-4 sm:mb-8">
                        <Check className="w-3 h-3 sm:w-4 sm:h-4 text-[#ff0080]" />
                        <span className="font-semibold text-black text-xs sm:text-sm">{t(work.stepKey)} {work.number}</span>
                      </div>
                      
                      {/* Title */}
                      <h3 className="text-lg sm:text-3xl font-display font-bold text-black mb-3 sm:mb-6 leading-tight">
                        {t(work.titleKey)}
                      </h3>
                      
                      {/* Description */}
                      <p className="text-[#6b6b6b] leading-relaxed text-xs sm:text-base line-clamp-6 sm:line-clamp-none">
                        {t(work.descriptionKey)}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Mobile navigation dots */}
            <div className="flex justify-center gap-3 mt-4 sm:hidden">
              <button
                onClick={scrollPrev}
                className="w-9 h-9 rounded-full bg-[#666] hover:bg-[#555] text-white flex items-center justify-center transition-all duration-300 active:scale-95"
                aria-label="Previous slide"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                onClick={scrollNext}
                className="w-9 h-9 rounded-full bg-[#666] hover:bg-[#555] text-white flex items-center justify-center transition-all duration-300 active:scale-95"
                aria-label="Next slide"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedWorksCarousel;