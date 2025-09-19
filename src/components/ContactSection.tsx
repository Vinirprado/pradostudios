import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { useScrollReveal } from '@/hooks/useScrollReveal';

const ContactSection = () => {
  const { ref, isVisible } = useScrollReveal();
  
  const handleContact = () => {
    window.open('https://wa.me/5511993912083?text=Olá! Gostaria de saber mais sobre seus serviços de identidade visual.', '_blank');
  };

  return (
    <section id="contato" className="py-24 px-6" ref={ref}>
      <div className={`container mx-auto max-w-6xl transition-all duration-1000 ${
        isVisible 
          ? 'opacity-100 translate-y-0' 
          : 'opacity-0 translate-y-10'
      }`}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 h-auto">
          {/* Card 1 - Main CTA */}
          <Card className="bg-hero-primary text-white border-0 flex items-center justify-center min-h-[300px]">
            <CardContent className="p-8 text-center">
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-6 leading-tight">
                Pronto para transformar sua marca em uma identidade inesquecível?
              </h2>
              <Button 
                variant="outline" 
                onClick={handleContact} 
                className="bg-white/10 border-white/30 text-white hover:bg-white hover:text-hero-primary transition-smooth"
              >
                Fale comigo
              </Button>
            </CardContent>
          </Card>

          {/* Card 2 - Philosophy */}
          <Card className="bg-background border border-border/20 flex items-center justify-center min-h-[300px]">
            <CardContent className="p-8 text-center">
              <p className="text-xl md:text-2xl text-text-primary font-medium leading-relaxed">
                Design fala quando palavras não são suficientes. Quem investe em design, economiza explicações.
              </p>
            </CardContent>
          </Card>

          {/* Card 3 - Services Image Placeholder */}
          <Card className="bg-gradient-to-br from-card to-card/80 border border-border/20 flex items-center justify-center min-h-[300px]">
            <CardContent className="p-8 text-center">
              <div className="w-full h-40 bg-gradient-subtle rounded-lg mb-4 flex items-center justify-center">
                <div className="text-4xl text-text-muted">🎨</div>
              </div>
              <h3 className="text-lg font-semibold text-text-primary">Identidade Visual</h3>
              <p className="text-text-secondary mt-2">Criamos marcas que conectam e convertem</p>
            </CardContent>
          </Card>

          {/* Card 4 - Process Image Placeholder */}
          <Card className="bg-gradient-to-br from-muted/50 to-muted/30 border border-border/20 flex items-center justify-center min-h-[300px]">
            <CardContent className="p-8 text-center">
              <div className="w-full h-40 bg-gradient-subtle rounded-lg mb-4 flex items-center justify-center">
                <div className="text-4xl text-text-muted">✨</div>
              </div>
              <h3 className="text-lg font-semibold text-text-primary">Processo Criativo</h3>
              <p className="text-text-secondary mt-2">Metodologia própria para resultados únicos</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
export default ContactSection;