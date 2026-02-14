"use client";

import { AnimatedSection, HugeIcon, type IconName } from "@/components/ui";
import { useLanguage } from "@/context/useLanguage";
import { motion } from "framer-motion";

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
              <motion.div 
                className="group relative h-full"
                whileHover={{ y: -8, scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                {/* Gradient border effect */}
                <div className="absolute -inset-0.5 bg-gradient-to-r from-primary/20 to-primary-dark/20 rounded-3xl opacity-0 group-hover:opacity-100 blur transition-all duration-300 -z-10" />
                
                <div className="bg-gradient-to-br from-slate-800/60 to-slate-900/60 border border-primary/20 rounded-3xl p-8 h-full hover:border-primary/50 transition-all duration-300 backdrop-blur-sm group-hover:shadow-2xl group-hover:shadow-primary/20 relative overflow-hidden">
                  {/* Background Accent */}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary/10 to-primary-dark/10 rounded-bl-3xl group-hover:from-primary/20 group-hover:to-primary-dark/20 transition-all duration-300" />

                  {/* Industry Tag */}
                  <motion.span 
                    className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/30 text-primary text-xs font-semibold rounded-full mb-6"
                    whileHover={{ scale: 1.1 }}
                  >
                    <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                    {solution.industry}
                  </motion.span>

                  {/* Icon */}
                  <motion.div 
                    className="w-16 h-16 bg-gradient-to-br from-primary to-primary-dark rounded-2xl flex items-center justify-center mb-6 group-hover:scale-125 transition-transform duration-300"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <HugeIcon name={solution.icon} size={32} className="text-white" />
                  </motion.div>

                  {/* Content */}
                  <h3 className="text-xl font-bold text-white mb-3 text-start relative z-10">
                    {solution.title}
                  </h3>
                  <p className="text-gray-300 mb-8 text-start relative z-10 leading-relaxed">{solution.description}</p>

                  {/* Benefits with animations */}
                  <div className="grid grid-cols-2 gap-4 relative z-10">
                    {solution.benefits.map((benefit, bIndex) => (
                      <motion.div 
                        key={benefit} 
                        className="flex items-start gap-3 group/benefit"
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: bIndex * 0.05 }}
                        viewport={{ once: true }}
                      >
                        <motion.div 
                          className="w-5 h-5 rounded-full bg-primary/30 flex items-center justify-center flex-shrink-0 mt-0.5"
                          whileHover={{ scale: 1.2, backgroundColor: "rgb(59, 130, 246)" }}
                        >
                          <HugeIcon name="check" size={12} className="text-primary group-hover/benefit:text-white" />
                        </motion.div>
                        <span className="text-xs text-gray-300 text-start">{benefit}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>

        {/* Integration Partners */}
        <AnimatedSection animation="fade-up" delay={0.4}>
          <div className="mt-20 text-start">
            <p className="text-gray-200 mb-8 font-medium">{t('solutions.partnersText')}</p>
            <div className="flex flex-wrap justify-start items-center gap-8 md:gap-12">
              { ["Visa", "Mastercard", "MTN", "Sudatel", "Bank of Khartoum", "Faisal Bank"].map(
                (partner, index) => (
                  <motion.span
                    key={partner}
                    className="text-lg font-semibold text-gray-300 hover:text-primary transition-colors text-start cursor-pointer"
                    initial={{ opacity: 0.5 }}
                    whileHover={{ opacity: 1, scale: 1.1 }}
                    transition={{ duration: 0.3 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                  >
                    {partner}
                  </motion.span>
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
