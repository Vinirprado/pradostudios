import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { MessageCircle } from 'lucide-react';
import drawingTablet from '@/assets/drawing-tablet.webp';
import workspace from '@/assets/workspace.png';
const ContactSection = () => {
  const {
    ref,
    isVisible
  } = useScrollReveal();
  const handleContact = () => {
    window.open('https://wa.me/5511993912083?text=Olá! Gostaria de saber mais sobre seus serviços de identidade visual.', '_blank');
  };
  const handleWhatsAppContact = () => {
    window.open('https://wa.me/5511993912083?text=Olá! Gostaria de saber mais sobre seus serviços de identidade visual.', '_blank');
  };
  return <section id="contato" className="py-24 px-6 bg-gradient-to-b from-black/30 via-background to-background" ref={ref}>
      <div className={`container mx-auto max-w-6xl transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 h-auto">
          {/* Card 1 - Main CTA */}
          <Card className="bg-hero-primary text-white border-0 flex items-center justify-center aspect-square h-[400px]">
            <CardContent className="p-8 text-center">
              <h2 className="text-xl font-display font-bold mb-6 leading-tight text-gray-950 my-0 md:text-5xl">
                Pronto para transformar sua marca em uma identidade inesquecível?
              </h2>
              
            </CardContent>
          </Card>

          {/* Card 2 - Process Image Placeholder */}
          <Card className="bg-gradient-to-br from-muted/50 to-muted/30 border border-border/20 flex items-center justify-center aspect-square overflow-hidden h-[400px]">
            <img src={drawingTablet} alt="Mesa digitalizadora" className="w-full h-full object-cover" />
          </Card>

          {/* Card 3 - Services Image Placeholder */}
          <Card className="bg-gradient-to-br from-card to-card/80 border border-border/20 flex items-center justify-center aspect-square overflow-hidden h-[400px]">
            <img src={workspace} alt="Workspace criativo" className="w-full h-full object-cover" />
          </Card>

          {/* Card 4 - Philosophy */}
          <Card className="border border-border/20 flex items-center justify-center aspect-square bg-rose-900 h-[400px]">
            <CardContent className="p-8 text-center">
              <p className="text-base text-text-primary font-medium leading-relaxed md:text-4xl">
                Design fala quando palavras não são suficientes. Quem investe em design, economiza explicações.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* WhatsApp Contact Button */}
        <div className="text-center mt-16">
          <Button onClick={handleWhatsAppContact} className="bg-gradient-whatsapp text-white border-0 px-8 py-4 text-lg font-semibold rounded-2xl shadow-soft hover:shadow-elevated transition-smooth hover:scale-[1.02]" size="lg">
            <MessageCircle className="mr-2" size={24} />
            Começar meu projeto
          </Button>
        </div>
      </div>
    </section>;
};
export default ContactSection;