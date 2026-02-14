"use client";

import Image from "next/image";
import { AnimatedSection } from "@/components/ui";
import { useLanguage } from "@/context/useLanguage";
import { motion } from "framer-motion";

// Three featured partners
const logos = [
  { src: "/logos/bankofkhartoum.svg", name: "Bank of Khartoum" },
  { src: "/logos/ElNileinBank.svg", name: "Bank of Nile" },
  { src: "/logos/sanadPay.svg", name: "Sanad Wallet" },
];

export function ClientsSection() {
  const { t } = useLanguage();

  return (
    <section id="clients" className="py-20 md:py-28 bg-background relative overflow-hidden">
      {/* Animated background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl opacity-20 animate-pulse" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl opacity-20 animate-pulse" style={{ animationDelay: '1s' }} />
      </div>

      <div className="container-custom relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
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
            <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
              {logos.map((logo, idx) => (
                <motion.div 
                  key={idx} 
                  className="group relative"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: idx * 0.1, duration: 0.5 }}
                  viewport={{ once: true }}
                >
                  {/* Glow effect on hover */}
                  <div className="absolute -inset-6 bg-gradient-to-r from-primary/30 to-primary-dark/30 rounded-3xl opacity-0 group-hover:opacity-100 blur-2xl transition-all duration-300 -z-10" />
                  
                  {/* Glass card background */}
                  <div className="bg-gradient-to-br from-slate-800/40 to-slate-900/40 border border-primary/20 rounded-3xl p-8 group-hover:border-primary/50 group-hover:bg-slate-800/60 transition-all duration-300 backdrop-blur-sm">
                    <motion.div 
                      className="flex items-center justify-center h-32 w-64 md:w-72"
                      whileHover={{ scale: 1.05, filter: "brightness(1.2)" }}
                      transition={{ duration: 0.3 }}
                    >
                      <Image 
                        src={logo.src} 
                        alt={logo.name} 
                        width={250} 
                        height={100} 
                        className="object-contain opacity-90 group-hover:opacity-100 transition-opacity duration-300"
                      />
                    </motion.div>
                  </div>

                  {/* Label on hover */}
                  <motion.div
                    className="mt-4 text-center opacity-0 group-hover:opacity-100 transition-opacity"
                    initial={{ y: 10 }}
                    whileHover={{ y: 0 }}
                  >
                    <p className="text-sm font-semibold text-primary">{logo.name}</p>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}

export default ClientsSection;