"use client";

import { AnimatedSection, HugeIcon } from "@/components/ui";
import { useLanguage } from "@/context/useLanguage";
import { cn } from "@/lib/utils";

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
            <div className="timeline-line" />

            <div className="space-y-8 md:space-y-12">
              {items.map((item, idx) => (
                <div
                  key={item.year}
                  className={cn(
                    "group flex flex-col md:flex-row md:items-start gap-4 md:gap-8",
                    idx % 2 === 1 && "md:flex-row-reverse"
                  )}
                >
                  {/* Year marker */}
                  <div
                    className={cn(
                      "md:w-1/2 md:flex relative",
                      idx % 2 === 0 ? "md:justify-end md:pr-8" : "md:justify-start md:pl-8"
                    )}
                  >
                    <div
                      className={cn(
                        "flex items-center gap-4 relative",
                        idx % 2 === 0 ? "md:justify-end" : "md:justify-start"
                      )}
                    >
                      <div className="relative">
                        <div className="w-14 h-14 rounded-full bg-gradient-to-br from-primary to-primary-dark text-white font-bold text-lg flex items-center justify-center shadow-xl ring-4 ring-primary/10 transition-transform transform-gpu group-hover:scale-105">
                          <span className="tracking-wide">{item.year}</span>
                        </div>

                        <div
                          className="timeline-connector hidden md:block"
                          style={
                            idx % 2 === 0
                              ? { right: 'calc(50% - 3rem)', width: 'calc(50% - 3rem)' }
                              : { left: 'calc(50% - 3rem)', width: 'calc(50% - 3rem)' }
                          }
                        />
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="md:w-1/2">
                    <div className={cn("timeline-card bg-card border border-border rounded-2xl p-6 md:p-8 shadow-md transition-all duration-300", idx % 2 === 1 && "md:text-end") }>
                      <h3 className={cn("text-xl font-semibold text-foreground mb-2 text-start", idx % 2 === 1 && "md:text-end")}>{item.title}</h3>
                      <p className={cn("text-muted-foreground text-start", idx % 2 === 1 && "md:text-end")}>{item.desc}</p>
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
