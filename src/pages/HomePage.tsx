import HeroSection from '../sections/HeroSection';
import FeaturesSection from '../sections/FeaturesSection';
import ServicesSection from '../sections/ServicesSection';
import ProcessSection from '../sections/ProcessSection';
import TestimonialsSection from '../sections/TestimonialsSection';
import GallerySection from '../sections/GallerySection';
import FAQSection from '../sections/FAQSection';
import ClientsSection from '../sections/ClientsSection';
import ContactSection from '../sections/ContactSection';

export default function HomePage() {
  return (
    <main className="relative overflow-x-hidden">
      <HeroSection />
      <FeaturesSection />
      <ServicesSection />
      <ProcessSection />
      <TestimonialsSection />
      <GallerySection />
      <FAQSection />
      <ClientsSection />
      <ContactSection />
    </main>
  );
}
