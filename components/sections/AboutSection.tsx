"use client";

import { AnimatedSection, HugeIcon, type IconName } from "@/components/ui";
import { useLanguage } from "@/context/useLanguage";
import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";

interface Stat {
  value: string;
  label: string;
  icon: IconName;
  progress: number;
}

function AnimatedCounter({ target, suffix = "" }: { target: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;
    
    let start = 0;
    const increment = target / 30;
    const interval = setInterval(() => {
      start += increment;
      if (start >= target) {
        setCount(target);
        clearInterval(interval);
      } else {
        setCount(Math.floor(start));
      }
    }, 30);

    return () => clearInterval(interval);
  }, [isInView, target]);

  return <span ref={ref}>{count}{suffix}</span>;
}

export function AboutSection() {
    const { language, t } = useLanguage();

  const stats: Stat[] = [
    { value: "500", label: t('about.stats.businesses'), icon: "users", progress: 85 },
    { value: "50", label: t('about.stats.transactions'), icon: "chart", progress: 92 },
    { value: "99.9", label: t('about.stats.uptime'), icon: "clock", progress: 99 },
    { value: "15", label: t('about.stats.countries'), icon: "globe", progress: 65 },
  ];

  return (
    <section id="about" className="py-20 md:py-28 bg-background">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div>
            <AnimatedSection animation="fade-up">
              <span className="text-primary font-semibold text-sm uppercase tracking-wider">
                {t('about.subtitle')}
              </span>
            </AnimatedSection>

            <AnimatedSection animation="fade-up" delay={0.1}>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-4 mb-6 text-start">
                {t('about.title')}{" "}
                <span className="gradient-text">{t('about.titleHighlight')}</span>
              </h2>
            </AnimatedSection>

            <AnimatedSection animation="fade-up" delay={0.2}>
              <p className="text-lg text-gray-200 mb-6 text-start">
                {t('about.paragraph1')}
              </p>
            </AnimatedSection>

            <AnimatedSection animation="fade-up" delay={0.3}>
              <p className="text-gray-200 mb-8 text-start">
                {t('about.paragraph2')} <strong className="text-primary">{t('about.paragraph2Bold')}</strong>{t('about.paragraph2End')}
              </p>
            </AnimatedSection>

            {/* Key Points */}
            <AnimatedSection animation="fade-up" delay={0.4}>
              <div className="space-y-4">
                {(t('about.points') as unknown as string[]).map((point, index) => (
                  <motion.div 
                    key={index} 
                    className="flex items-start gap-3"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                    viewport={{ once: true }}
                  >
                    <motion.div 
                      className="w-6 h-6 rounded-full bg-gradient-to-br from-primary to-primary-dark flex items-center justify-center flex-shrink-0 mt-0.5"
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      transition={{ delay: index * 0.05 + 0.2 }}
                      viewport={{ once: true }}
                    >
                      <HugeIcon name="check" size={14} className="text-white" />
                    </motion.div>
                    <p className="text-gray-200 text-start">{point}</p>
                  </motion.div>
                ))}
              </div>
            </AnimatedSection>
          </div>

          {/* Stats Grid */}
          <div>
            <AnimatedSection animation="fade-left" delay={0.2}>
              <div className="grid grid-cols-2 gap-6">
                {stats.map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.6 }}
                    viewport={{ once: true }}
                    className="group relative overflow-hidden"
                  >
                    {/* Gradient border effect */}
                    <div className="absolute -inset-0.5 bg-gradient-to-r from-primary/30 to-primary-dark/30 rounded-2xl opacity-0 group-hover:opacity-100 blur transition-all duration-300 -z-10" />
                    
                    <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-primary/20 rounded-2xl p-6 text-start hover:border-primary/40 transition-all duration-300 backdrop-blur-sm h-full group-hover:shadow-xl group-hover:shadow-primary/20">
                      {/* Icon */}
                      <div className="w-14 h-14 mb-4 bg-gradient-to-br from-primary to-primary-dark rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <HugeIcon name={stat.icon} size={28} className="text-white" />
                      </div>

                      {/* Counter Value */}
                      <p className="text-3xl md:text-4xl font-bold text-white mb-2">
                        <AnimatedCounter target={parseInt(stat.value)} suffix={stat.value.includes('50') ? "M+" : stat.value.includes('99') ? "%" : "+"} />
                      </p>
                      
                      {/* Label */}
                      <p className="text-sm text-gray-300 mb-4">{stat.label}</p>

                      {/* Progress Bar */}
                      <div className="w-full h-2 bg-slate-700/30 rounded-full overflow-hidden border border-primary/20">
                        <motion.div
                          className="h-full bg-gradient-to-r from-primary to-primary-dark rounded-full"
                          initial={{ width: 0 }}
                          whileInView={{ width: `${stat.progress}%` }}
                          transition={{ delay: index * 0.1 + 0.3, duration: 1 }}
                          viewport={{ once: true }}
                        />
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </AnimatedSection>

            {/* Mission Statement */}
            <AnimatedSection animation="fade-up" delay={0.4}>
              <motion.div 
                className="mt-8 relative overflow-hidden rounded-2xl"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                {/* Animated background gradient */}
                <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-primary-dark/20 to-primary/20 opacity-0 group-hover:opacity-100 blur transition-all duration-300" />
                
                <div className="relative bg-gradient-to-r from-primary/60 via-primary-dark/60 to-primary/60 border border-primary/40 rounded-2xl p-8 text-white backdrop-blur-sm">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <HugeIcon name="chart" size={24} className="text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-3 text-start">{t('about.missionTitle')}</h3>
                      <p className="text-white/90 text-start leading-relaxed">
                        {t('about.mission')}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatedSection>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
