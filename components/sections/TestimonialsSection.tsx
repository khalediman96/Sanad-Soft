"use client";

import Image from "next/image";
import { AnimatedSection, HugeIcon } from "@/components/ui";
import { useLanguage } from "@/context/useLanguage";
import { motion } from "framer-motion";
import {
  ThreeDScrollTriggerContainer,
  ThreeDScrollTriggerRow,
} from "@/components/lightswind/3d-scroll-trigger";

interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  content: string;
  rating: number;
  avatar: string;
}

function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  return (
    <div className="mx-4 w-[350px] md:w-[400px] shrink-0" dir="ltr">
      <motion.div 
        className="group relative overflow-hidden"
        whileHover={{ y: -8, scale: 1.02 }}
        transition={{ duration: 0.3 }}
      >
        {/* Gradient border effect */}
        <div className="absolute -inset-0.5 bg-gradient-to-r from-primary/30 to-primary-dark/30 rounded-3xl opacity-0 group-hover:opacity-100 blur transition-all duration-300 -z-10" />
        
        <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-primary/20 rounded-3xl p-6 md:p-8 h-full backdrop-blur-sm group-hover:border-primary/40 group-hover:shadow-xl group-hover:shadow-primary/20 transition-all duration-300">
          {/* Quote Icon */}
          <motion.div 
            className="w-12 h-12 bg-gradient-to-br from-primary to-primary-dark rounded-full flex items-center justify-center mb-6"
            whileHover={{ rotate: 360 }}
            transition={{ duration: 0.6 }}
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="text-white"
            >
              <path d="M4.583 17.321C3.553 16.227 3 15 3 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179zm10 0C13.553 16.227 13 15 13 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179z" />
            </svg>
          </motion.div>

          {/* Content */}
          <p className="text-base md:text-lg text-white/90 leading-relaxed mb-6 line-clamp-4 text-start whitespace-normal">
            &ldquo;{testimonial.content}&rdquo;
          </p>

          {/* Animated Rating */}
          <motion.div 
            className="flex items-center gap-2 mb-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ staggerChildren: 0.1 }}
            viewport={{ once: true }}
          >
            {[...Array(testimonial.rating)].map((_, i) => (
              <motion.div
                key={i}
                initial={{ scale: 0, rotate: -180 }}
                whileInView={{ scale: 1, rotate: 0 }}
                transition={{ delay: i * 0.1, type: "spring", stiffness: 200 }}
                viewport={{ once: true }}
              >
                <HugeIcon 
                  name="star"
                  size={18}
                  className="text-amber-400 fill-amber-400"
                />
              </motion.div>
            ))}
          </motion.div>

          {/* Author with enhanced styling */}
          <div className="flex items-center gap-3 pt-4 border-t border-primary/20">
            <div className="w-12 h-12 bg-gradient-to-br from-primary to-primary-dark rounded-full flex items-center justify-center text-white font-bold text-lg overflow-hidden flex-shrink-0">
              {testimonial.avatar ? (
                <Image
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  width={48}
                  height={48}
                  className="w-full h-full object-cover"
                />
              ) : (
                testimonial.name.charAt(0)
              )}
            </div>
            <div className="flex-1">
              <p className="font-semibold text-white text-sm">
                {testimonial.name}
              </p>
              <p className="text-gray-400 text-xs">
                {testimonial.role} • {testimonial.company}
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

interface TestimonialItem {
  name: string;
  role: string;
  company: string;
  content: string;
}

export function TestimonialsSection() {
  const { language, t } = useLanguage();

  const testimonialItems = t('testimonials.items') as unknown as TestimonialItem[];
  const testimonials: Testimonial[] = testimonialItems.map((item, i) => ({
    id: i + 1,
    name: item.name,
    role: item.role,
    company: item.company,
    content: item.content,
    rating: 5,
    avatar: `https://i.pravatar.cc/150?img=${20 + i}`,
  }));

  return (
    <section className="py-20 md:py-28 bg-secondary text-white overflow-hidden">
      <div className="container-custom">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <AnimatedSection animation="fade-up">
            <span className="text-primary font-semibold text-sm uppercase tracking-wider text-start block">
              {t('testimonials.subtitle')}
            </span>
          </AnimatedSection>

          <AnimatedSection animation="fade-up" delay={0.1}>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-4 mb-6 text-start">
              {t('testimonials.title')}{" "}
              <span className="text-primary">{t('testimonials.titleHighlight')}</span>
            </h2>
          </AnimatedSection>

          <AnimatedSection animation="fade-up" delay={0.2}>
            <p className="text-lg text-muted-foreground text-start">
              {t('testimonials.description')}
            </p>
          </AnimatedSection>
        </div>
      </div>

      {/* 3D Scroll Trigger Carousel */}
      <AnimatedSection animation="fade-up" delay={0.3}>
        <ThreeDScrollTriggerContainer className="py-8" style={{ direction: 'ltr' }}>
          {/* First Row - scrolls right */}
          <ThreeDScrollTriggerRow baseVelocity={3} direction={1} className="mb-6">
            {testimonials.map((testimonial) => (
              <TestimonialCard key={testimonial.id} testimonial={testimonial} />
            ))}
          </ThreeDScrollTriggerRow>

          {/* Second Row - scrolls left */}
          <ThreeDScrollTriggerRow baseVelocity={3} direction={-1}>
            {[...testimonials].reverse().map((testimonial) => (
              <TestimonialCard
                key={`reverse-${testimonial.id}`}
                testimonial={testimonial}
              />
            ))}
          </ThreeDScrollTriggerRow>
        </ThreeDScrollTriggerContainer>
      </AnimatedSection>

      <div className="container-custom">
        {/* Stats Row */}
        <AnimatedSection animation="fade-up" delay={0.4}>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20 pt-12 border-t border-primary/20">
            {[
              { value: "4.9", suffix: "/5", label: t('testimonials.stats.rating') },
              { value: "98", suffix: "%", label: t('testimonials.stats.satisfaction') },
              { value: "500", suffix: "+", label: t('testimonials.stats.clients') },
              { value: "24", suffix: "/7", label: t('testimonials.stats.support') },
            ].map((stat, index) => (
              <motion.div 
                key={stat.label} 
                className="text-start group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <motion.p 
                  className="text-3xl md:text-4xl font-bold mb-2 bg-gradient-to-r from-primary to-primary-dark bg-clip-text text-transparent group-hover:scale-110 transition-transform"
                  whileHover={{ scale: 1.1 }}
                >
                  {stat.value}{stat.suffix}
                </motion.p>
                <p className="text-gray-400 text-sm group-hover:text-gray-300 transition-colors">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}

export default TestimonialsSection;
