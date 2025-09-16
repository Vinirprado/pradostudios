import viniciusPortrait from '@/assets/vinicius-portrait.jpg';

const AboutSection = () => {
  return (
    <section id="sobre" className="py-24 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-hero-primary leading-tight">
              Sobre Mim
            </h2>
            
            <div className="space-y-6 text-lg md:text-xl text-text-secondary leading-relaxed">
              <p>
                Sou Vinicius Ramos, designer especializado em criar identidades visuais completas que unem estratégia, estética e propósito.
              </p>
              
              <p>
                Acredito que uma marca forte nasce do equilíbrio entre criatividade e clareza.
              </p>
              
              <p>
                Minha missão é ajudar negócios e pessoas a se destacarem com autenticidade e solidez visual.
              </p>
            </div>
          </div>
          
          <div className="relative">
            <div className="bg-gradient-card rounded-2xl p-8 shadow-elevated">
              <img 
                src={viniciusPortrait} 
                alt="Vinicius Ramos - Designer de Identidade Visual"
                className="w-full h-auto rounded-xl object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;