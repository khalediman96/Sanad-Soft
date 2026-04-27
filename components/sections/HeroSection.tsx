"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { HugeIcon, SmokeyBackground } from "@/components/ui";
import { AnimatedSection } from "@/components/ui";
import { useLanguage } from "@/context/useLanguage";
import { cn } from "@/lib/utils";

export function HeroSection() {
  const { language, isRTL, t } = useLanguage();

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24 md:pt-28"
    >
      <SmokeyBackground />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(5,10,18,0.45),rgba(5,10,18,0.92))]" />

      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute -top-40 -right-40 h-80 w-80 rounded-full bg-primary/20 blur-3xl"
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute top-24 left-[10%] h-64 w-64 rounded-full bg-fuchsia-500/10 blur-3xl"
          animate={{ scale: [1, 1.1, 1], opacity: [0.18, 0.3, 0.18] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute -bottom-40 -left-40 h-96 w-96 rounded-full bg-sky-400/10 blur-3xl"
          animate={{ scale: [1.2, 1, 1.2], opacity: [0.2, 0.4, 0.2] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-[1.05fr_0.95fr] gap-12 lg:gap-20 items-center">
          <div className="text-center lg:text-start">
            <AnimatedSection animation="fade-up" delay={0}>
              <span className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-white/6 px-4 py-2 text-sm font-medium text-primary shadow-lg backdrop-blur-sm mb-6">
                <HugeIcon name="lightning" size={16} />
                {t('hero.badge')}
              </span>
            </AnimatedSection>

            <AnimatedSection animation="fade-up" delay={0.1}>
              <h1 className="max-w-3xl text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-[1.05] mb-6 text-start">
                {t('hero.title')}{" "}
                <span className="gradient-text">{t('hero.titleHighlight')}</span>
              </h1>
            </AnimatedSection>

            <AnimatedSection animation="fade-up" delay={0.2}>
              <p className="max-w-2xl text-lg md:text-xl text-white/80 mx-auto lg:mx-0 mb-8 text-start leading-relaxed">
                {t('hero.description')}{" "}
                <strong className="text-primary">{t('hero.descriptionBold')}</strong>
                {t('hero.descriptionEnd')}
              </p>
            </AnimatedSection>

            <AnimatedSection animation="fade-up" delay={0.3}>
              <div className="flex flex-col md:flex-row gap-4 justify-center md:justify-start">
                <Link
                  href="#products"
                  className="inline-flex w-full md:w-auto items-center justify-center gap-2 rounded-full bg-gradient-to-r from-primary to-primary-dark px-8 py-4 text-white font-semibold shadow-lg shadow-primary/25 transition-all hover:-translate-y-0.5 hover:shadow-primary/40"
                >
                  {t('hero.ctaPrimary')}
                  <HugeIcon name="arrow-right" size={20} className={cn(isRTL && "rotate-180")} />
                </Link>
                <Link
                  href="#contact"
                  className="inline-flex w-full md:w-auto items-center justify-center gap-2 rounded-full border border-white/15 bg-slate-900/50 px-8 py-4 text-white font-semibold backdrop-blur-sm transition-all hover:border-primary/40 hover:text-primary"
                >
                  {t('hero.ctaSecondary')}
                </Link>
              </div>
            </AnimatedSection>

            <AnimatedSection animation="fade-up" delay={0.35}>
              <div className="mt-6 flex flex-wrap items-center justify-center lg:justify-start gap-3 text-sm text-white/75">
                <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 backdrop-blur-sm">
                  <HugeIcon name="shield" size={14} className="text-primary" />
                  Secure by design
                </span>
                <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 backdrop-blur-sm">
                  <HugeIcon name="globe" size={14} className="text-sky-300" />
                  Built for MENA
                </span>
                <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 backdrop-blur-sm">
                  <HugeIcon name="lightning" size={14} className="text-fuchsia-300" />
                  Fast deployment
                </span>
              </div>
            </AnimatedSection>

            <AnimatedSection animation="fade-up" delay={0.4}>
              <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-3">
                {[
                  { value: "500+", label: t('hero.badge1'), icon: "shield" },
                  { value: "99.9%", label: t('hero.badge2'), icon: "lock" },
                  { value: "24/7", label: t('hero.badge3'), icon: "clock" },
                ].map((item) => (
                  <div
                    key={item.label as string}
                    className="card-aurora glass rounded-2xl px-4 py-4 text-start border border-white/10 hover:border-primary/30 transition-all duration-300"
                  >
                    <div className="mb-2 flex items-center gap-2 text-primary">
                      <HugeIcon name={item.icon as "shield" | "lock" | "clock"} size={18} />
                      <span className="text-xs uppercase tracking-[0.2em] text-white/60">{item.value}</span>
                    </div>
                    <p className="text-sm text-white/85">{item.label}</p>
                  </div>
                ))}
              </div>
            </AnimatedSection>
          </div>

          <AnimatedSection animation="fade-left" delay={0.2} className="relative">
            <div className="relative mx-auto max-w-xl">
              <div className="absolute -inset-4 rounded-[32px] bg-gradient-to-r from-primary/25 via-fuchsia-500/10 to-sky-400/10 blur-2xl" />

              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="relative"
              >
                <div className="pointer-events-none absolute inset-0 rounded-[28px] bg-[radial-gradient(circle_at_top_right,rgba(34,168,153,0.18),transparent_28%),radial-gradient(circle_at_bottom_left,rgba(168,85,247,0.14),transparent_26%)]" />
                <motion.div
                  animate={{ y: [0, -8, 0], scale: [1, 1.01, 1] }}
                  transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 0.4 }}
                  className="relative"
                >
                  <Image
                    src="/hero.png"
                    alt="Sanad-Soft Digital Financial Solutions"
                    width={700}
                    height={560}
                    priority
                    className="w-full h-auto object-cover saturate-110 contrast-110 drop-shadow-[0_24px_50px_rgba(2,8,23,0.45)]"
                  />
                </motion.div>
              </motion.div>
            </div>
          </AnimatedSection>
        </div>
      </div>

      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <Link
          href="#about"
          className="flex flex-col items-center gap-2 text-gray-200 hover:text-primary transition-colors"
        >
          <span className="text-sm">{t('hero.scrollDown')}</span>
          <HugeIcon name="chevron-down" size={24} />
        </Link>
      </motion.div>
    </section>
  );
}

export default HeroSection;
