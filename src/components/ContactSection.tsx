import { Button } from '@/components/ui/button';
const ContactSection = () => {
  const handleContact = () => {
    window.open('https://wa.me/5511993912083?text=Olá! Gostaria de saber mais sobre seus serviços de identidade visual.', '_blank');
  };
  return <section id="contato" className="py-24 px-6">
      <div className="container mx-auto max-w-4xl text-center">
        <h2 className="text-4xl md:text-6xl font-display font-bold text-hero-primary mb-8 leading-tight">
          Pronto para transformar sua marca em uma identidade inesquecível?
        </h2>
        
        <p className="text-lg md:text-xl text-text-secondary mb-12 leading-relaxed">Design fala quando palavras não são suficientes.
Quem investe em design, economiza explicações.</p>
        
        <Button variant="hero" onClick={handleContact} className="inline-flex items-center">
          Fale comigo
          <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
          </svg>
        </Button>
      </div>
    </section>;
};
export default ContactSection;