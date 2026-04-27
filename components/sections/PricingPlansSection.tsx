"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { AnimatedSection, HugeIcon, type IconName } from "@/components/ui";
import { useLanguage } from "@/context/useLanguage";
import { cn } from "@/lib/utils";

type RawPlan = {
  name: string;
  badge: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  cta: string;
};

export function PricingPlansSection() {
  const { isRTL, t } = useLanguage();

  const rawPlans = t("pricing.plans") as unknown;
  const plansSource = Array.isArray(rawPlans) ? (rawPlans as RawPlan[]) : [];

  const plans = plansSource.map((plan, index) => ({
    ...plan,
    features: Array.isArray(plan.features) ? plan.features : [],
    icon: ["wallet", "chart", "shield"][index] as IconName,
    featured: index === 1,
  }));

  return (
    <section id="pricing" className="section-blend py-20 md:py-28 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-8 left-10 h-72 w-72 rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-fuchsia-500/10 blur-3xl" />
      </div>

      <div className="container-custom">
        <div className="max-w-3xl mb-16 text-start">
          <AnimatedSection animation="fade-up">
            <span className="text-primary font-semibold text-sm uppercase tracking-wider block">
              {t("pricing.subtitle")}
            </span>
          </AnimatedSection>

          <AnimatedSection animation="fade-up" delay={0.1}>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-4 mb-6">
              {t("pricing.title")} <span className="gradient-text">{t("pricing.titleHighlight")}</span>
            </h2>
          </AnimatedSection>

          <AnimatedSection animation="fade-up" delay={0.2}>
            <p className="text-lg text-gray-200 max-w-2xl">
              {t("pricing.description")}
            </p>
          </AnimatedSection>
        </div>

        <div className="grid lg:grid-cols-3 gap-6 xl:gap-8">
          {plans.map((plan, index) => (
            <AnimatedSection key={plan.name} animation="fade-up" delay={index * 0.08}>
              <motion.div
                className={cn("group relative h-full", plan.featured && "lg:-translate-y-3")}
                whileHover={{ y: -8, scale: 1.01 }}
                transition={{ duration: 0.25 }}
              >
                <div
                  className={cn(
                    "absolute -inset-0.5 rounded-[28px] blur opacity-0 transition-all duration-300 -z-10",
                    plan.featured
                      ? "bg-gradient-to-r from-primary/30 via-fuchsia-400/25 to-sky-400/25 opacity-100"
                      : "bg-gradient-to-r from-primary/20 to-sky-400/20 group-hover:opacity-100"
                  )}
                />

                <div
                  className={cn(
                    "card-aurora relative flex h-full flex-col rounded-[28px] border p-7 backdrop-blur-md transition-all duration-300",
                    plan.featured
                      ? "border-primary/40 bg-gradient-to-br from-slate-800/85 to-slate-900/95 shadow-2xl shadow-primary/15"
                      : "border-white/10 bg-gradient-to-br from-slate-800/55 to-slate-900/75 group-hover:border-primary/30"
                  )}
                >
                  <div className="mb-6 flex items-start justify-between gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-primary to-primary-dark text-white shadow-lg shadow-primary/25">
                      <HugeIcon name={plan.icon} size={22} />
                    </div>

                    <span
                      className={cn(
                        "rounded-full border px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em]",
                        plan.featured
                          ? "border-primary/40 bg-primary/10 text-primary"
                          : "border-white/10 bg-white/5 text-white/70"
                      )}
                    >
                      {plan.badge}
                    </span>
                  </div>

                  <h3 className="text-2xl font-bold text-white mb-2 text-start">{plan.name}</h3>

                  <div className="mb-4 flex items-end gap-2 text-start">
                    <span className="text-4xl font-black text-white leading-none">{plan.price}</span>
                    <span className="text-sm text-white/60 pb-1">{plan.period}</span>
                  </div>

                  <p className="text-gray-300 mb-6 leading-relaxed text-start">{plan.description}</p>

                  <div className="mb-6 h-px w-full bg-gradient-to-r from-primary/30 via-white/10 to-transparent" />

                  <ul className="space-y-3 mb-8 flex-1">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3 text-start">
                        <div className="mt-0.5 flex h-5 w-5 items-center justify-center rounded-full bg-primary/20 text-primary">
                          <HugeIcon name="check" size={13} />
                        </div>
                        <span className="text-sm text-gray-200">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Link
                    href="#contact"
                    className={cn(
                      "inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 font-semibold transition-all",
                      plan.featured
                        ? "bg-gradient-to-r from-primary to-primary-dark text-white shadow-lg shadow-primary/25 hover:shadow-primary/40"
                        : "border border-white/10 bg-white/5 text-white hover:border-primary/35 hover:text-primary"
                    )}
                  >
                    {plan.cta}
                    <HugeIcon name="arrow-right" size={18} className={cn(isRTL && "rotate-180")} />
                  </Link>
                </div>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection animation="fade-up" delay={0.25}>
          <p className="mt-6 text-sm text-white/65 text-center md:text-start">
            {t("pricing.note")}
          </p>
        </AnimatedSection>
      </div>
    </section>
  );
}

export default PricingPlansSection;
