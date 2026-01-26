"use client";

import { AnimatedSection, HugeIcon } from "@/components/ui";
import { useLanguage } from "@/context/useLanguage";

export function JourneySection() {
  const { language, t } = useLanguage();
  const items = (t('journey.items') as unknown as { year: string; title: string; desc: string }[]) ?? [];

  return (
    <section id="journey" className="py-20 md:py-28 bg-background">
      <div className="container-custom">
        <div className="max-w-3xl mb-12">
          <AnimatedSection animation="fade-up">
            <span className="text-primary font-semibold text-sm uppercase tracking-wider text-start block">
              {t('journey.subtitle')}
            </span>
          </AnimatedSection>

          <AnimatedSection animation="fade-up" delay={0.1}>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-4 mb-6 text-start">
              {t('journey.title')} <span className="text-primary">{t('journey.titleHighlight')}</span>
            </h2>
          </AnimatedSection>
        </div>

        <AnimatedSection animation="fade-up" delay={0.2}>
          <div className="relative">
            <div className="absolute left-4 md:left-1/2 md:-translate-x-1/2 top-0 bottom-0 w-0.5 bg-white/10 hidden md:block" />

            <div className="space-y-8 md:space-y-12">
              {items.map((item, idx) => (
                <div key={item.year} className="flex flex-col md:flex-row md:items-start gap-4 md:gap-8">
                  {/* Year marker */}
                  <div className="md:w-1/2 md:flex md:justify-end md:pr-8">
                    <div className="flex items-center gap-4 md:justify-end">
                      <div className="w-14 h-14 rounded-full bg-primary flex items-center justify-center text-white font-bold text-lg">
                        {item.year}
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="md:w-1/2">
                    <div className="bg-white/5 border border-white/10 p-6 rounded-2xl">
                      <h3 className="text-xl font-semibold text-foreground mb-2 text-start">{item.title}</h3>
                      <p className="text-muted-foreground text-start">{item.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}

export default JourneySection;
