import { Header, Footer } from "@/components/layout";
import {
  HeroSection,
  AboutSection,
  JourneySection,
  ProductsSection,
  ServicesSection,
  SolutionsSection,
  TestimonialsSection,
  ContactSection
} from "@/components/sections";
import ClientsSection from "@/components/sections/ClientsSection";


export default function Home() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <ClientsSection />
        <AboutSection />
        <JourneySection />
        <ProductsSection />
        <ServicesSection />
        <SolutionsSection />
        <TestimonialsSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
