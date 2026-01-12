import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { useLanguage } from '@/contexts/LanguageContext';
import { MessageCircle } from 'lucide-react';
import drawingTablet from '@/assets/drawing-tablet.webp';
import workspace from '@/assets/workspace.png';

const ContactSection = () => {
  const { ref, isVisible } = useScrollReveal();
  const { t, language } = useLanguage();

  const handleWhatsAppContact = () => {
    const message = language === 'en' 
      ? 'Hello! I would like to know more about your visual identity services.'
      : 'Olá! Gostaria de saber mais sobre seus serviços de identidade visual.';
    window.open(`https://wa.me/5511993912083?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <section id="contato" className="py-12 sm:py-24 px-3 sm:px-6 bg-gradient-to-b from-black/30 via-background to-background overflow-hidden" ref={ref}>
      <div className={`container mx-auto max-w-6xl transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="grid grid-cols-2 gap-2 sm:gap-4 h-auto">
          {/* Card 1 - Main CTA */}
          <Card className="bg-hero-primary text-white border-0 flex items-center justify-center aspect-square h-[140px] sm:h-[300px] md:h-[400px]">
            <CardContent className="p-3 sm:p-8 text-center">
              <h2 className="text-sm sm:text-xl md:text-5xl font-display font-bold leading-tight text-gray-950">
                {t('contact.title')}
              </h2>
            </CardContent>
          </Card>

          {/* Card 2 - Process Image Placeholder */}
          <Card className="bg-gradient-to-br from-muted/50 to-muted/30 border border-border/20 flex items-center justify-center aspect-square overflow-hidden h-[140px] sm:h-[300px] md:h-[400px]">
            <img src={drawingTablet} alt={t('contact.tablet')} className="w-full h-full object-cover" />
          </Card>

          {/* Card 3 - Services Image Placeholder */}
          <Card className="bg-gradient-to-br from-card to-card/80 border border-border/20 flex items-center justify-center aspect-square overflow-hidden h-[140px] sm:h-[300px] md:h-[400px]">
            <img src={workspace} alt={t('contact.workspace')} className="w-full h-full object-cover" />
          </Card>

          {/* Card 4 - Philosophy */}
          <Card className="border border-border/20 flex items-center justify-center aspect-square bg-rose-900 h-[140px] sm:h-[300px] md:h-[400px]">
            <CardContent className="p-3 sm:p-8 text-center">
              <p className="text-[10px] sm:text-base md:text-4xl text-text-primary font-medium leading-relaxed">
                {t('contact.quote')}
              </p>
            </CardContent>
          </Card>
        </div>

        {/* WhatsApp Contact Button */}
        <div className="text-center mt-8 sm:mt-16">
          <Button 
            onClick={handleWhatsAppContact} 
            className="bg-gradient-whatsapp text-white border-0 px-5 sm:px-8 py-3 sm:py-4 text-sm sm:text-lg font-semibold rounded-xl sm:rounded-2xl shadow-soft hover:shadow-elevated transition-all duration-500 ease-out hover:scale-[1.02] active:scale-95" 
            size="lg"
          >
            <MessageCircle className="mr-2" size={20} />
            {t('contact.cta')}
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;