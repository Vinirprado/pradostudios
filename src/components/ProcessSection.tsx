import { useScrollReveal } from '@/hooks/useScrollReveal';
import { useLanguage } from '@/contexts/LanguageContext';
import processBackground from '@/assets/process-background.png';

const ProcessSection = () => {
  const { ref, isVisible } = useScrollReveal();
  const { t } = useLanguage();
  
  const processSteps = [
    {
      number: "01",
      titleKey: 'process.step1.title',
      descriptionKey: 'process.step1.description'
    },
    {
      number: "02",
      titleKey: 'process.step2.title',
      descriptionKey: 'process.step2.description'
    },
    {
      number: "03",
      titleKey: 'process.step3.title',
      descriptionKey: 'process.step3.description'
    },
    {
      number: "04",
      titleKey: 'process.step4.title',
      descriptionKey: 'process.step4.description'
    }
  ];

  return (
    <section id="processo" className="relative py-12 sm:py-24 px-3 sm:px-6 overflow-hidden" ref={ref}>
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${processBackground})` }}
      />
      
      {/* Top Gradient Overlay */}
      <div className="absolute top-0 left-0 right-0 h-20 sm:h-32 bg-gradient-to-b from-background to-transparent z-10" />
      
      {/* Bottom Gradient Overlay */}
      <div className="absolute bottom-0 left-0 right-0 h-20 sm:h-32 bg-gradient-to-t from-background to-transparent z-10" />
      
      {/* Content */}
      <div className="relative z-20 overflow-hidden">
        <div className={`container mx-auto max-w-6xl transition-all duration-1000 ease-out ${
          isVisible 
            ? 'opacity-100 translate-y-0' 
            : 'opacity-0 translate-y-10'
        }`}>
          <div className="text-center mb-8 sm:mb-16 px-2">
            <h2 className="text-2xl sm:text-4xl md:text-7xl font-display font-bold text-hero-primary mb-4 sm:mb-8">
              {t('process.title')}
            </h2>
            
            <p className="text-sm sm:text-lg text-text-secondary max-w-4xl mx-auto leading-relaxed">
              {t('process.description')}
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-8">
            {processSteps.map((step, index) => (
              <div key={index} className="text-center group">
                <div className="bg-gradient-card rounded-xl sm:rounded-2xl p-4 sm:p-8 shadow-soft hover:shadow-elevated transition-all duration-500 ease-out hover:scale-[1.02] mb-3 sm:mb-6 h-auto sm:h-[280px] flex flex-col justify-center">
                  <div className="text-xl sm:text-4xl font-display font-bold mb-2 sm:mb-4 bg-gradient-numbers bg-clip-text text-transparent">
                    {step.number}
                  </div>
                  
                  <h3 className="text-sm sm:text-xl font-display font-semibold text-hero-primary mb-2 sm:mb-4 leading-tight">
                    {t(step.titleKey)}
                  </h3>
                  
                  <p className="text-xs sm:text-base text-text-secondary leading-relaxed">
                    {t(step.descriptionKey)}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;