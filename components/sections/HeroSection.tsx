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
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16 md:pt-20"
    >
      {/* Smokey animated background (like Lightswind UI "Smokey Background") */}
      <SmokeyBackground />
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute -top-40 -right-40 w-80 h-80 bg-primary/20 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute -bottom-40 -left-40 w-96 h-96 bg-primary/15 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div className="text-center lg:text-start">
            <AnimatedSection animation="fade-up" delay={0}>
              <span className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary text-sm font-medium rounded-full mb-6">
                <HugeIcon name="lightning" size={16} />
                {t('hero.badge')}
              </span>
            </AnimatedSection>

            <AnimatedSection animation="fade-up" delay={0.1}>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 text-start">
                {t('hero.title')}{" "}
                <span className="gradient-text">{t('hero.titleHighlight')}</span>
              </h1>
            </AnimatedSection>

            <AnimatedSection animation="fade-up" delay={0.2}>
              <p className="text-lg md:text-xl text-gray-200 max-w-xl mx-auto lg:mx-0 mb-8 text-start">
                {t('hero.description')}{" "}
                <strong className="text-primary">{t('hero.descriptionBold')}</strong>
                {t('hero.descriptionEnd')}
              </p>
            </AnimatedSection>

            <AnimatedSection animation="fade-up" delay={0.3}>
              <div className={cn(
                "flex flex-col md:flex-row gap-4 justify-center md:justify-start"
              )}>
                <Link
                  href="#products"
                  className="inline-flex w-full md:w-auto items-center justify-center gap-2 px-8 py-4 bg-primary text-white font-semibold rounded-full hover:bg-primary-dark transition-all hover:shadow-lg hover:shadow-primary/25"
                >
                  {t('hero.ctaPrimary')}
                  <HugeIcon name="arrow-right" size={20} className={cn(isRTL && "rotate-180")} />
                </Link>
                <Link
                  href="#contact"
                  className="inline-flex w-full md:w-auto items-center justify-center gap-2 px-8 py-4 border-2 border-primary text-primary font-semibold rounded-full hover:bg-primary hover:text-white transition-colors"
                >
                  {t('hero.ctaSecondary')}
                </Link>
              </div>
            </AnimatedSection>

            {/* Trust Badges */}
            <AnimatedSection animation="fade-up" delay={0.4}>
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-6 mt-12">
                <div className="flex items-center gap-2 text-sm text-gray-200">
                  <HugeIcon name="shield" size={20} className="text-primary" />
                  <span>{t('hero.badge1')}</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-200">
                  <HugeIcon name="lock" size={20} className="text-primary" />
                  <span>{t('hero.badge2')}</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-200">
                  <HugeIcon name="clock" size={20} className="text-primary" />
                  <span>{t('hero.badge3')}</span>
                </div>
              </div>
            </AnimatedSection>
          </div>

          {/* Hero Image */}
          <AnimatedSection animation="fade-left" delay={0.2} className="relative">
            <div className="relative max-w-lg mx-auto">
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="relative rounded-3xl overflow-hidden "
              >
                {/* Subtle continuous bobbing animation */}
                <motion.div
                  animate={{ y: [0, -8, 0] }}
                  transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 0.4 }}
                  className="w-full h-full"
                >
                  <Image
                    src="/hero.png"
                    alt="Sanad-Soft Digital Financial Solutions"
                    width={600}
                    height={500}
                    priority
                    className="w-full h-auto object-cover"
                  />
                </motion.div>

                {/* Overlay gradient */}
                {/* <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent" /> */}
              </motion.div>
            </div>
          </AnimatedSection>
        </div>
      </div>

      {/* Scroll Indicator */}
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
