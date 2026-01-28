"use client";

import { AnimatedSection, HugeIcon, type IconName } from "@/components/ui";
import { useLanguage } from "@/context/useLanguage";

interface Stat {
  value: string;
  label: string;
  icon: IconName;
}

export function AboutSection() {
    const { language, t } = useLanguage();

  const stats: Stat[] = [
    { value: "500+", label: t('about.stats.businesses'), icon: "users" },
    { value: "$50M+", label: t('about.stats.transactions'), icon: "chart" },
    { value: "99.9%", label: t('about.stats.uptime'), icon: "clock" },
    { value: "15+", label: t('about.stats.countries'), icon: "globe" },
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
                  <div key={index} className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <HugeIcon name="check" size={14} className="text-primary" />
                    </div>
                    <p className="text-gray-200 text-start">{point}</p>
                  </div>
                ))}
              </div>
            </AnimatedSection>
          </div>

          {/* Stats Grid */}
          <div>
            <AnimatedSection animation="fade-left" delay={0.2}>
              <div className="grid grid-cols-2 gap-6">
                {stats.map((stat, index) => (
                  <div
                    key={stat.label}
                    className="bg-card border border-border rounded-2xl p-6 text-start hover:shadow-lg hover:border-primary/30 transition-all group"
                  >
                    <div className="w-14 h-14 me-auto mb-4 bg-primary/10 rounded-xl flex items-center justify-center group-hover:bg-primary group-hover:scale-110 transition-all">
                      <HugeIcon
                        name={stat.icon}
                        size={28}
                        className="text-primary group-hover:text-white transition-colors"
                      />
                    </div>
                    <p className="text-3xl md:text-4xl font-bold text-foreground mb-2">
                      {stat.value}
                    </p>
                    <p className="text-sm text-gray-200">{stat.label}</p>
                  </div>
                ))}
              </div>
            </AnimatedSection>

            {/* Mission Statement */}
            <AnimatedSection animation="fade-up" delay={0.4}>
              <div className="mt-8 bg-gradient-to-r from-primary to-primary-dark rounded-2xl p-8 text-white">
                <h3 className="text-xl font-bold mb-3 text-start">{t('about.missionTitle')}</h3>
                <p className="text-white/90 text-start">
                  {t('about.mission')}
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
