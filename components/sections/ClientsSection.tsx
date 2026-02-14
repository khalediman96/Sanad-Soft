"use client";

import Image from "next/image";
import { AnimatedSection } from "@/components/ui";
import { useLanguage } from "@/context/useLanguage";

// Three featured partners
const logos = [
  { src: "/logos/partner1.svg", name: "Bank of Khartoum" },
  { src: "/logos/nile.svg", name: "Bank of Nile" },
  { src: "/logos/partner2.svg", name: "Sanad Wallet" },
];

export function ClientsSection() {
  const { t } = useLanguage();

  return (
    <section id="clients" className="py-20 md:py-28 bg-background">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-start mb-16">
          <AnimatedSection animation="fade-up">
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">
              {t('clients.subtitle')}
            </span>
          </AnimatedSection>

          <AnimatedSection animation="fade-up" delay={0.1}>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-4 mb-6">
              {t('clients.title')}
            </h2>
          </AnimatedSection>

          <AnimatedSection animation="fade-up" delay={0.2}>
            <p className="text-lg text-gray-200">
              {t('clients.description')}
            </p>
          </AnimatedSection>
        </div>

        <AnimatedSection animation="fade-up" delay={0.3}>
          <div className="clients-carousel">
            <div className="clients-track flex justify-center items-center gap-8">
              {logos.map((logo, idx) => (
                <div key={idx} className="clients-item flex items-center justify-center">
                  <Image src={logo.src} alt={logo.name} width={250} height={100} className="object-contain opacity-90" />
                </div>
              ))}
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}

export default ClientsSection;