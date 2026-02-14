"use client";

import { AnimatedSection, HugeIcon, type IconName } from "@/components/ui";
import { useLanguage } from "@/context/useLanguage";
import { cn } from "@/lib/utils";

const milestoneIcons: IconName[] = ["users", "lightning", "wallet", "bell", "globe"];

export function JourneySection() {
  const { language, t } = useLanguage();
  const items = (t('journey.items') as unknown as { year: string; title: string; desc: string }[]) ?? [];

  return (
    <section id="journey" className="py-20 md:py-28 bg-background relative overflow-hidden">
      {/* Background image with vignette */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20 md:opacity-30 bg-image-fixed"
        style={{
          backgroundImage: 'url(/timeline-img.jpg)',
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
        <div className="max-w-3xl mx-auto text-center mb-16">
          <AnimatedSection animation="fade-up">
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">
              {t('journey.subtitle')}
            </span>
          </AnimatedSection>

          <AnimatedSection animation="fade-up" delay={0.1}>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-4 mb-6">
              {t('journey.title')} <span className="gradient-text">{t('journey.titleHighlight')}</span>
            </h2>
          </AnimatedSection>
        </div>

        <div className="relative max-w-6xl mx-auto z-10">
          {/* Animated central line */}
          <div className="timeline-line-modern" />

          <div className="space-y-0">
            {items.map((item, idx) => (
              <AnimatedSection 
                key={item.year}
                animation={idx % 2 === 0 ? "fade-right" : "fade-left"}
                delay={idx * 0.15}
              >
                <div
                  className={cn(
                    "group relative flex flex-col md:flex-row md:items-center gap-6 md:gap-0 py-8 md:py-12",
                    idx % 2 === 1 && "md:flex-row-reverse"
                  )}
                >
                  {/* Content Card */}
                  <div className="md:w-[calc(50%-3rem)] relative">
                    <div className={cn(
                      "timeline-card-modern backdrop-blur-sm bg-gradient-to-br from-slate-800/40 to-slate-900/60 border border-primary/20 rounded-2xl p-6 md:p-8 shadow-2xl hover:shadow-primary/20 transition-all duration-500 group-hover:border-primary/40",
                      idx % 2 === 0 ? "md:mr-auto" : "md:ml-auto"
                    )}>
                      {/* Icon */}
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-primary-dark flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                        <HugeIcon name={milestoneIcons[idx % milestoneIcons.length]} size={24} strokeWidth={2} className="text-white" />
                      </div>
                      
                      {/* Year badge */}
                      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 mb-3">
                        <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                        <span className="text-primary font-bold text-sm">{item.year}</span>
                      </div>
                      
                      <h3 className="text-xl font-bold text-white mb-3 group-hover:text-primary transition-colors">
                        {item.title}
                      </h3>
                      <p className="text-gray-300 leading-relaxed">
                        {item.desc}
                      </p>
                      
                      {/* Decorative line */}
                      <div className={cn(
                        "absolute top-1/2 w-8 h-0.5 bg-gradient-to-r from-primary/60 to-transparent hidden md:block",
                        idx % 2 === 0 ? "left-full ml-0" : "right-full mr-0"
                      )} />
                    </div>
                  </div>

                  {/* Central dot indicator */}
                  <div className="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
                    <div className="relative">
                      {/* Outer glow ring */}
                      <div className="absolute inset-0 rounded-full bg-primary/30 blur-xl animate-pulse" />
                      
                      {/* Main dot */}
                      <div className="relative w-6 h-6 rounded-full bg-gradient-to-br from-primary via-primary-dark to-primary border-4 border-background shadow-lg group-hover:scale-125 transition-transform duration-300">
                        <div className="absolute inset-0 rounded-full bg-white/20 animate-ping" />
                      </div>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default JourneySection;
