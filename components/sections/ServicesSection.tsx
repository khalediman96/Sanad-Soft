"use client";

import { AnimatedSection, HugeIcon, type IconName } from "@/components/ui";
import { useLanguage } from "@/context/useLanguage";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

export function ServicesSection() {
  const { language, isRTL, t } = useLanguage();

  interface Service {
    icon: IconName;
    title: string;
    description: string;
    features: string[];
  }

  // t(...) may be typed as string; ensure we have an array before mapping
  const rawItems = t('services.items') as unknown;
  const items = Array.isArray(rawItems)
    ? (rawItems as { title: string; desc: string; features: string[] }[])
    : [];

  const services: Service[] = items.map((item, i) => ({
    icon: ["credit-card", "wallet", "bank", "shield", "chart", "lightning"][i] as IconName,
    title: item.title,
    description: item.desc,
    features: item.features,
  }));

  return (
    <section id="services" className="py-20 md:py-28 bg-background relative overflow-hidden">
      {/* Background image with vignette */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20 md:opacity-30 bg-image-fixed"
        style={{
          backgroundImage: 'url(/services-img.png)',
        }}
      />
      
      {/* Circular vignette overlay - adjusted for mobile */}
      <div 
        className="absolute inset-0" 
        style={{
          background: 'radial-gradient(ellipse at center, transparent 0%, rgba(15, 23, 42, 0.5) 30%, rgba(15, 23, 42, 0.9) 60%, rgba(15, 23, 42, 0.98) 100%)',
        }}
      />
      
      {/* Top gradient decoration */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent pointer-events-none" />
      
      <div className="container-custom relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <AnimatedSection animation="fade-up">
            <span className="text-primary font-semibold text-sm uppercase tracking-wider text-start block">
              {t('services.subtitle')}
            </span>
          </AnimatedSection>

          <AnimatedSection animation="fade-up" delay={0.1}>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-4 mb-6 text-start">
              {t('services.title')}{" "}
              <span className="gradient-text">{t('services.titleHighlight')}</span>
            </h2>
          </AnimatedSection>

          <AnimatedSection animation="fade-up" delay={0.2}>
            <p className="text-lg text-gray-200 text-start">
              {t('services.description')}
            </p>
          </AnimatedSection>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <AnimatedSection
              key={service.title}
              animation="fade-up"
              delay={0.1 * (index % 3)}
            >
              <motion.div 
                className="group relative h-full"
                whileHover={{ y: -8 }}
                transition={{ duration: 0.3 }}
              >
                {/* Gradient border effect */}
                <div className="absolute -inset-0.5 bg-gradient-to-r from-primary/20 to-primary-dark/20 rounded-3xl opacity-0 group-hover:opacity-100 blur transition-all duration-300 -z-10" />
                
                <div className="bg-gradient-to-br from-slate-800/60 to-slate-900/60 border border-primary/20 rounded-3xl p-8 h-full hover:border-primary/50 transition-all duration-300 backdrop-blur-sm group-hover:shadow-2xl group-hover:shadow-primary/20">
                  {/* Icon with rotation animation */}
                  <motion.div 
                    className="w-16 h-16 bg-gradient-to-br from-primary to-primary-dark rounded-2xl flex items-center justify-center mb-6 group-hover:scale-125 transition-transform duration-300"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <HugeIcon name={service.icon} size={32} className="text-white" />
                  </motion.div>

                  {/* Badge */}
                  <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary/10 border border-primary/30 rounded-full mb-4">
                    <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                    <span className="text-primary text-xs font-semibold">{index + 1} of {services.length}</span>
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-bold text-white mb-3 text-start">
                    {service.title}
                  </h3>
                  <p className="text-gray-300 mb-6 text-start leading-relaxed">{service.description}</p>

                  {/* Features List with stagger */}
                  <ul className="space-y-3">
                    {service.features.map((feature, fIndex) => (
                      <motion.li 
                        key={feature} 
                        className="flex items-center gap-3 text-sm"
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: fIndex * 0.05 }}
                        viewport={{ once: true }}
                      >
                        <motion.div 
                          className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0"
                          whileHover={{ scale: 1.2 }}
                        >
                          <HugeIcon name="check" size={14} className="text-primary" />
                        </motion.div>
                        <span className="text-gray-300 text-start">{feature}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>

        {/* CTA Banner */}
        <AnimatedSection animation="fade-up" delay={0.3}>
          <motion.div 
            className="mt-16 relative group overflow-hidden rounded-3xl"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            {/* Animated border */}
            <div className="absolute -inset-0.5 bg-gradient-to-r from-primary via-primary-dark to-primary rounded-3xl opacity-0 group-hover:opacity-100 blur transition-all duration-300 -z-10" />
            
            <div className="relative bg-gradient-to-r from-secondary/60 via-secondary-dark/60 to-secondary/60 border border-primary/30 rounded-3xl p-8 md:p-12 text-start backdrop-blur-sm">
              <div className="flex items-start gap-6">
                <div className="w-16 h-16 bg-primary/20 rounded-2xl flex items-center justify-center flex-shrink-0">
                  <HugeIcon name="star" size={32} className="text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                    {t('services.ctaTitle')}
                  </h3>
                  <p className="text-white/80 max-w-2xl mb-8">
                    {t('services.ctaDesc')}
                  </p>
                  <motion.a
                    href="#contact"
                    className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-primary to-primary-dark text-white font-semibold rounded-full hover:shadow-lg hover:shadow-primary/50 transition-all"
                    whileHover={{ scale: 1.05 }}
                  >
                    {t('services.ctaButton')}
                    <HugeIcon name="arrow-right" size={20} className={cn(isRTL && "rotate-180")} />
                  </motion.a>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatedSection>
      </div>
    </section>
  );
}

export default ServicesSection;
