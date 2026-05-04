import { useState, useEffect, forwardRef } from 'react';
import { ArrowUp } from 'lucide-react';
import { Button } from '@/components/ui/button';

const BackToTop = forwardRef<HTMLButtonElement>((_props, ref) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.pageYOffset > 300);
    };

    window.addEventListener('scroll', toggleVisibility, { passive: true });
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  if (!isVisible) {
    return null;
  }

  return (
    <Button
      ref={ref}
      onClick={scrollToTop}
      className="fixed right-6 bottom-6 z-50 bg-hero-primary text-black hover:bg-hero-primary/90 p-3 rounded-full shadow-elevated transition-smooth hover:scale-110"
      size="icon"
      aria-label="Voltar ao topo"
    >
      <ArrowUp size={24} />
    </Button>
  );
});

BackToTop.displayName = 'BackToTop';

export default BackToTop;
