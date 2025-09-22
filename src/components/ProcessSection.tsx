import { useScrollReveal } from '@/hooks/useScrollReveal';
import { Button } from '@/components/ui/button';
import { MessageCircle } from 'lucide-react';

const ProcessSection = () => {
  const { ref, isVisible } = useScrollReveal();
  
  const processSteps = [{
    number: "01",
    title: "Descoberta & Pesquisa",
    description: "Entendendo a essência e propósito da marca."
  }, {
    number: "02",
    title: "Estratégia Visual",
    description: "Definindo caminhos estéticos e posicionamento."
  }, {
    number: "03",
    title: "Criação & Refinamento",
    description: "Construindo a identidade com atenção a cada detalhe."
  }, {
    number: "04",
    title: "Entrega & Manual de Marca",
    description: "Aplicações claras e guia para consistência visual."
  }];

  const handleWhatsAppContact = () => {
    window.open('https://wa.me/5511993912083?text=Olá! Gostaria de saber mais sobre seus serviços de identidade visual.', '_blank');
  };
  return <section id="processo" className="py-24 px-6 bg-surface-subtle" ref={ref}>
      <div className={`container mx-auto max-w-6xl transition-all duration-1000 ${
        isVisible 
          ? 'opacity-100 translate-y-0' 
          : 'opacity-0 translate-y-10'
      }`}>
        <div className="text-center mb-16">
          <h2 className="text-4xl font-display font-bold text-hero-primary mb-8 md:text-7xl">
            Meu Processo Criativo
          </h2>
          
          <p className="text-lg text-text-secondary max-w-4xl mx-auto leading-relaxed md:text-lg">
            Um processo claro, transparente e colaborativo, para que cada identidade seja única e funcional.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {processSteps.map((step, index) => <div key={index} className="text-center group">
              <div className="bg-gradient-card rounded-2xl p-8 shadow-soft hover:shadow-elevated transition-smooth hover:scale-[1.02] mb-6">
                <div className="text-4xl font-display font-bold text-hero-primary mb-4 opacity-50">
                  {step.number}
                </div>
                
                <h3 className="text-xl font-display font-semibold text-hero-primary mb-4 leading-tight">
                  {step.title}
                </h3>
                
                <p className="text-text-secondary leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>)}
        </div>

        {/* WhatsApp Contact Button */}
        <div className="text-center mt-16">
          <Button 
            onClick={handleWhatsAppContact}
            className="bg-white text-green-600 hover:bg-green-50 border border-green-600 px-8 py-4 text-lg font-semibold rounded-2xl shadow-soft hover:shadow-elevated transition-smooth hover:scale-[1.02]"
            size="lg"
          >
            <MessageCircle className="mr-2" size={24} />
            Fale Comigo no WhatsApp
          </Button>
        </div>
      </div>
    </section>;
};
export default ProcessSection;