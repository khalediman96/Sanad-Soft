import { Header, Footer } from "@/components/layout";
import {
  HeroSection,
  AboutSection,
  JourneySection,
  ProductsSection,
  ServicesSection,
  SolutionsSection,
  TestimonialsSection,
  ContactSection,
} from "@/components/sections";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
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
