import { Header, Footer } from "@/components/layout";
import {
  HeroSection,
  AboutSection,
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
