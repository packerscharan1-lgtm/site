import HeroSection from '../sections/HeroSection';
import FeaturesSection from '../sections/FeaturesSection';
import ServicesSection from '../sections/ServicesSection';
import ProcessSection from '../sections/ProcessSection';
import TestimonialsSection from '../sections/TestimonialsSection';
import GallerySection from '../sections/GallerySection';
import FAQSection from '../sections/FAQSection';
import ClientsSection from '../sections/ClientsSection';
import ContactSection from '../sections/ContactSection';

interface HomePageProps {
  onPageChange: (page: string) => void;
}

export default function HomePage({ onPageChange }: HomePageProps) {
  return (
    <main className="relative overflow-x-hidden">
      <HeroSection onPageChange={onPageChange} />
      <FeaturesSection />
      <ServicesSection onPageChange={onPageChange} />
      <ProcessSection />
      <TestimonialsSection />
      <GallerySection onPageChange={onPageChange} />
      <FAQSection />
      <ClientsSection />
      <ContactSection />
    </main>
  );
}
