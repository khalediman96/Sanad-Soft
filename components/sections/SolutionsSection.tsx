"use client";

import { AnimatedSection, HugeIcon, type IconName } from "@/components/ui";
import { useLanguage } from "@/context/useLanguage";

export function SolutionsSection() {
  const { language, t } = useLanguage();

  interface Solution {
    industry: string;
    icon: IconName;
    title: string;
    description: string;
    benefits: string[];
  }

  type RawSolution = {
    industry: string;
    title: string;
    desc: string;
    benefits: string[];
  };

  const items = (t('solutions.items') as unknown as RawSolution[]) || [];
  const solutions: Solution[] = items.map((item, i) => ({
    industry: item.industry,
    icon: ["bank", "credit-card", "wallet", "phone", "shield", "globe"][i] as IconName,
    title: item.title,
    description: item.desc,
    benefits: item.benefits,
  }));

  return (
    <section
      id="solutions"
      className="py-20 md:py-28 bg-gradient-to-b from-primary/5 to-background"
    >
      <div className="container-custom">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <AnimatedSection animation="fade-up">
            <span className="text-primary font-semibold text-sm uppercase tracking-wider text-start block">
              {t('solutions.subtitle')}
            </span>
          </AnimatedSection>

          <AnimatedSection animation="fade-up" delay={0.1}>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-4 mb-6 text-start">
              {t('solutions.title')}{" "}
              <span className="gradient-text">{t('solutions.titleHighlight')}</span>
            </h2>
          </AnimatedSection>

          <AnimatedSection animation="fade-up" delay={0.2}>
            <p className="text-lg text-gray-200 text-start">
              {t('solutions.description')}
            </p>
          </AnimatedSection>
        </div>

        {/* Solutions Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {solutions.map((solution, index) => (
            <AnimatedSection
              key={solution.title}
              animation="fade-up"
              delay={0.1 * (index % 3)}
            >
              <div className="bg-white dark:bg-card border border-border rounded-2xl p-8 h-full hover:shadow-xl hover:border-primary/30 transition-all group relative overflow-hidden">
                {/* Background Accent */}
                <div className="absolute top-0 right-0 w-24 h-24 bg-primary/5 rounded-bl-full group-hover:bg-primary/10 transition-colors" />

                {/* Industry Tag */}
                <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-xs font-semibold rounded-full mb-4">
                  {solution.industry}
                </span>

                {/* Icon */}
                <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary group-hover:scale-110 transition-all">
                  <HugeIcon
                    name={solution.icon}
                    size={28}
                    className="text-primary group-hover:text-white transition-colors"
                  />
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-foreground mb-3 text-start">
                  {solution.title}
                </h3>
                <p className="text-gray-200 mb-6 text-start">{solution.description}</p>

                {/* Benefits */}
                <div className="grid grid-cols-2 gap-3">
                  {solution.benefits.map((benefit) => (
                    <div key={benefit} className="flex items-center gap-2">
                      <HugeIcon name="check" size={14} className="text-primary flex-shrink-0" />
                      <span className="text-xs text-gray-200 text-start">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>

        {/* Integration Partners */}
        <AnimatedSection animation="fade-up" delay={0.4}>
          <div className="mt-20 text-start">
            <p className="text-gray-200 mb-8">{t('solutions.partnersText')}</p>
            <div className="flex flex-wrap justify-start items-center gap-8 md:gap-12 opacity-60">
              { ["Visa", "Mastercard", "MTN", "Sudatel", "Bank of Khartoum", "Faisal Bank"].map(
                (partner) => (
                  <span
                    key={partner}
                    className="text-lg font-semibold text-gray-200 hover:text-primary transition-colors text-start"
                  >
                    {partner}
                  </span>
                )
              )}
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}

export default SolutionsSection;
