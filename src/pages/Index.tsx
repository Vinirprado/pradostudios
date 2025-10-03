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

const Index = () => {
  return (
    <div className="min-h-screen">
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