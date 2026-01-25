"use client";

import { AnimatedSection, HugeIcon, type IconName } from "@/components/ui";
import { useLanguage } from "@/lib/LanguageContext";
import { translations } from "@/lib/translations";

export function ServicesSection() {
  const { language } = useLanguage();
  const t = translations[language].services;

  interface Service {
    icon: IconName;
    title: string;
    description: string;
    features: string[];
  }

  const services: Service[] = t.items.map((item, i) => ({
    icon: ["credit-card", "wallet", "bank", "shield", "chart", "lightning"][i] as IconName,
    title: item.title,
    description: item.desc,
    features: item.features,
  }));

  return (
    <section id="services" className="py-20 md:py-28 bg-background">
      <div className="container-custom">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <AnimatedSection animation="fade-up">
            <span className="text-primary font-semibold text-sm uppercase tracking-wider text-start block">
              {t.subtitle}
            </span>
          </AnimatedSection>

          <AnimatedSection animation="fade-up" delay={0.1}>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-4 mb-6 text-start">
              {t.title}{" "}
              <span className="gradient-text">{t.titleHighlight}</span>
            </h2>
          </AnimatedSection>

          <AnimatedSection animation="fade-up" delay={0.2}>
            <p className="text-lg text-gray-200 text-start">
              {t.description}
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
              <div className="bg-white dark:bg-card border border-border rounded-2xl p-8 h-full hover:shadow-xl hover:border-primary/30 transition-all group">
                {/* Icon */}
                <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary group-hover:scale-110 transition-all">
                  <HugeIcon
                    name={service.icon}
                    size={28}
                    className="text-primary group-hover:text-white transition-colors"
                  />
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-foreground mb-3 text-start">
                  {service.title}
                </h3>
                <p className="text-gray-200 mb-6 text-start">{service.description}</p>

                {/* Features List */}
                <ul className="space-y-3">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-3 text-sm">
                      <HugeIcon name="check" size={16} className="text-primary flex-shrink-0" />
                      <span className="text-gray-200 text-start">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </AnimatedSection>
          ))}
        </div>

        {/* CTA Banner */}
        <AnimatedSection animation="fade-up" delay={0.3}>
          <div className="mt-16 bg-gradient-to-r from-secondary to-secondary/90 rounded-3xl p-8 md:p-12 text-start">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
              {t.ctaTitle}
            </h3>
            <p className="text-white/80 max-w-2xl mb-8">
              {t.ctaDesc}
            </p>
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary text-white font-semibold rounded-full hover:bg-primary-dark transition-all hover:shadow-lg"
            >
              {t.ctaButton}
              <HugeIcon name="arrow-right" size={20} />
            </a>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}

export default ServicesSection;
