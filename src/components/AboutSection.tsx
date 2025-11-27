import viniciusPortrait from '@/assets/vinicius-new-portrait.jpg';
import aboutBackground from '@/assets/about-background-new.png';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { useLanguage } from '@/contexts/LanguageContext';

const AboutSection = () => {
  const { ref, isVisible } = useScrollReveal();
  const { t } = useLanguage();

  return (
    <section id="sobre" className="py-24 px-6 relative overflow-hidden" ref={ref}>
      {/* Background image */}
      <img src={aboutBackground} alt="Background gradient" className="absolute inset-0 w-full h-full object-cover object-center z-0 scale-150" loading="lazy" decoding="async" />
      
      {/* Gradient overlays for fade effect */}
      <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-background to-transparent z-[1]" />
      <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-background to-transparent z-[1]" />
      
      {/* Content overlay */}
      <div className="relative z-10">
        <div className="container mx-auto max-w-6xl">
          <div className={`grid lg:grid-cols-2 gap-16 items-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="space-y-8">
              <h2 className="text-4xl md:text-5xl font-display font-bold text-hero-primary leading-tight">
                {t('about.title')}
              </h2>
              
              <div className="space-y-6 text-lg md:text-xl text-text-secondary leading-relaxed">
                <p className="text-slate-50">
                  {t('about.p1')}
                </p>
                
                <p className="text-slate-50">
                  {t('about.p2')}
                </p>
                
                <p className="text-slate-50">
                  {t('about.p3')}
                </p>
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-gradient-card rounded-2xl p-8 shadow-elevated bg-violet-600/90 backdrop-blur-sm">
                <img src={viniciusPortrait} alt={t('about.imageAlt')} className="w-full h-auto rounded-xl object-cover" loading="lazy" width="448" height="597" decoding="async" sizes="(max-width: 1024px) 100vw, 448px" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
