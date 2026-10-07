import Seo from '@/components/Seo';
import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import BrandsSection from '@/components/BrandsSection';
import PortfolioShowcaseSection from '@/components/PortfolioShowcaseSection';
import ServicesSection from '@/components/ServicesSection';
import PortfolioSection from '@/components/PortfolioSection';
import ProcessSection from '@/components/ProcessSection';
import FeaturedWorksCarousel from '@/components/FeaturedWorksCarousel';
import TestimonialsSection from '@/components/TestimonialsSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import BackToTop from '@/components/BackToTop';

const personLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Vinicius Ramos",
  jobTitle: "Designer de Identidade Visual",
  url: "https://pradostudios.lovable.app/",
  worksFor: { "@type": "Organization", name: "Prado Studios" },
  sameAs: [
    "https://www.instagram.com/vrpdesigner/",
    "https://linkedin.com/in/viniciusramosdesign",
    "https://www.behance.net/viniciusramosdoprado",
  ],
};

const Index = () => {
  return (
    <div className="min-h-screen">
      <Seo
        title="Vinicius Ramos | Identidade Visual Completa"
        description="Designer especializado em criar identidades visuais completas que unem estratégia, estética e propósito. Transformo ideias em marcas memoráveis."
        path="/"
        jsonLd={[personLd]}
      />
      <Navigation />
      
      <main>
        <HeroSection />
        <AboutSection />
        <BrandsSection />
        <PortfolioShowcaseSection />
        <ServicesSection />
        <FeaturedWorksCarousel />
        <PortfolioSection />
        <ProcessSection />
        <TestimonialsSection />
        <ContactSection />
      </main>
      
      <Footer />
      <BackToTop />
    </div>
  );
};

export default Index;