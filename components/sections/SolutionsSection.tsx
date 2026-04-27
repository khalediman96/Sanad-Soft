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

  const partners: { name: string; type: string; icon: IconName }[] = [
    { name: "Visa", type: "Global Payments", icon: "credit-card" },
    { name: "Mastercard", type: "Card Network", icon: "wallet" },
    { name: "MTN", type: "Mobile Services", icon: "phone" },
    { name: "Sudatel", type: "Telecom Partner", icon: "globe" },
    { name: "Bank of Khartoum", type: "Banking Partner", icon: "bank" },
    { name: "Faisal Bank", type: "Financial Institution", icon: "shield" },
  ];

  return (
    <section
      id="solutions"
      className="section-blend py-20 md:py-28 relative overflow-hidden"
    >
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20 md:opacity-30 bg-image-fixed"
        style={{
          backgroundImage: 'url(/pos.jpg)',
        }}
      />

      <div 
        className="absolute inset-0" 
        style={{
          background: 'radial-gradient(ellipse at center, transparent 0%, rgba(15, 23, 42, 0.45) 28%, rgba(15, 23, 42, 0.9) 62%, rgba(15, 23, 42, 0.98) 100%)',
        }}
      />

      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent pointer-events-none" />

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
                
                <div className="card-aurora bg-gradient-to-br from-slate-800/70 to-slate-950/80 border border-primary/20 rounded-[28px] p-8 h-full hover:border-primary/50 transition-all duration-300 backdrop-blur-md group-hover:shadow-2xl group-hover:shadow-primary/20 relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-36 h-36 bg-gradient-to-br from-primary/12 via-fuchsia-500/8 to-sky-400/8 rounded-bl-[32px] group-hover:from-primary/20 group-hover:to-sky-400/15 transition-all duration-300" />
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(96,165,250,0.08),transparent_30%)]" />

                  <div className="relative z-10 flex items-start justify-between gap-4 mb-6">
                    <motion.span 
                      className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/30 text-primary text-xs font-semibold rounded-full"
                      whileHover={{ scale: 1.05 }}
                    >
                      <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                      {solution.industry}
                    </motion.span>

                    <motion.div 
                      className="w-14 h-14 bg-gradient-to-br from-primary to-primary-dark rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-primary/20"
                      whileHover={{ rotate: 12 }}
                      transition={{ duration: 0.35 }}
                    >
                      <HugeIcon name={solution.icon} size={28} className="text-white" />
                    </motion.div>
                  </div>

                  <h3 className="text-xl md:text-2xl font-bold text-white mb-3 text-start relative z-10">
                    {solution.title}
                  </h3>
                  <p className="text-gray-300 mb-8 text-start relative z-10 leading-relaxed">{solution.description}</p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 relative z-10">
                    {solution.benefits.map((benefit, bIndex) => (
                      <motion.div 
                        key={benefit} 
                        className="flex items-start gap-3 rounded-xl border border-white/8 bg-white/3 px-3 py-3 group/benefit"
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: bIndex * 0.05 }}
                        viewport={{ once: true }}
                      >
                        <motion.div 
                          className="w-5 h-5 rounded-full bg-primary/30 flex items-center justify-center flex-shrink-0 mt-0.5"
                          whileHover={{ scale: 1.15, backgroundColor: "rgb(59, 130, 246)" }}
                        >
                          <HugeIcon name="check" size={12} className="text-primary group-hover/benefit:text-white" />
                        </motion.div>
                        <span className="text-xs text-gray-200 text-start">{benefit}</span>
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
          <div className="card-aurora mt-20 rounded-3xl border border-white/10 bg-gradient-to-br from-slate-800/50 to-slate-900/60 p-8 md:p-10 backdrop-blur-sm">
            <div className="mb-8 max-w-2xl text-start">
              <p className="text-gray-200 font-medium text-lg">{t('solutions.partnersText')}</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
              {partners.map((partner, index) => (
                <motion.div
                  key={partner.name}
                  className="card-aurora group relative overflow-hidden rounded-2xl border border-primary/15 bg-slate-950/40 p-5 transition-all duration-300 hover:border-primary/40 hover:shadow-xl hover:shadow-primary/10"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.06, duration: 0.35 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -4 }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/8 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="relative flex items-start gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-primary-dark text-white shadow-lg shadow-primary/20">
                      <HugeIcon name={partner.icon} size={22} />
                    </div>

                    <div className="flex-1 min-w-0">
                      <h4 className="text-base md:text-lg font-semibold text-white text-start leading-snug">
                        {partner.name}
                      </h4>
                      <p className="mt-1 text-sm text-gray-400 text-start">
                        {partner.type}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}

export default SolutionsSection;
