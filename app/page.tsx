import { Header, Footer } from "@/components/layout";
import {
  HeroSection,
  AboutSection,
  JourneySection,
  ProductsSection,
  ServicesSection,
  PricingPlansSection,
  SolutionsSection,
  TestimonialsSection,
  ContactSection
} from "@/components/sections";
import ClientsSection from "@/components/sections/ClientsSection";


export default function Home() {
  return (
    <>
      <Header />
      <main className="relative overflow-hidden">
        <div aria-hidden="true" className="pointer-events-none absolute inset-0">
          <div className="absolute inset-x-0 top-0 h-[32rem] bg-[radial-gradient(circle_at_top,rgba(138,154,91,0.18),transparent_60%)]" />
          <div className="absolute -left-24 top-[20%] h-72 w-72 rounded-full bg-primary/10 blur-3xl" />
          <div className="absolute -right-24 top-[55%] h-80 w-80 rounded-full bg-white/5 blur-3xl" />
        </div>

        <div className="relative z-10">
          <HeroSection />
          <ClientsSection />
          <AboutSection />
          <JourneySection />
          <ProductsSection />
          <ServicesSection />
          <PricingPlansSection />
          <SolutionsSection />
          <TestimonialsSection />
          <ContactSection />
        </div>
      </main>
      <Footer />
    </>
  );
}
