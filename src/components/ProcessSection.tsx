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
    <section id="processo" className="relative py-24 px-6 overflow-hidden" ref={ref}>
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${processBackground})` }}
      />
      
      {/* Top Gradient Overlay */}
      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-background to-transparent z-10" />
      
      {/* Bottom Gradient Overlay */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent z-10" />
      
      {/* Content */}
      <div className="relative z-20">
        <div className={`container mx-auto max-w-6xl transition-all duration-1000 ${
          isVisible 
            ? 'opacity-100 translate-y-0' 
            : 'opacity-0 translate-y-10'
        }`}>
          <div className="text-center mb-16">
            <h2 className="text-4xl font-display font-bold text-hero-primary mb-8 md:text-7xl">
              {t('process.title')}
            </h2>
            
            <p className="text-lg text-text-secondary max-w-4xl mx-auto leading-relaxed md:text-lg">
              {t('process.description')}
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <div key={index} className="text-center group">
                <div className="bg-gradient-card rounded-2xl p-8 shadow-soft hover:shadow-elevated transition-smooth hover:scale-[1.02] mb-6 h-[280px] flex flex-col justify-center">
                  <div className="text-4xl font-display font-bold mb-4 bg-gradient-numbers bg-clip-text text-transparent">
                    {step.number}
                  </div>
                  
                  <h3 className="text-xl font-display font-semibold text-hero-primary mb-4 leading-tight">
                    {t(step.titleKey)}
                  </h3>
                  
                  <p className="text-text-secondary leading-relaxed">
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
