"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { AnimatedSection, HugeIcon } from "@/components/ui";
import { useLanguage } from "@/lib/LanguageContext";
import { translations } from "@/lib/translations";

interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  content: string;
  rating: number;
}

export function TestimonialsSection() {
  const { language } = useLanguage();
  const t = translations[language].testimonials;
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials: Testimonial[] = t.items.map((item, i) => ({
    id: i + 1,
    name: item.name,
    role: item.role,
    company: item.company,
    content: item.content,
    rating: 5,
  }));

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-20 md:py-28 bg-secondary text-white overflow-hidden">
      <div className="container-custom">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <AnimatedSection animation="fade-up">
            <span className="text-primary font-semibold text-sm uppercase tracking-wider text-start block">
              {t.subtitle}
            </span>
          </AnimatedSection>

          <AnimatedSection animation="fade-up" delay={0.1}>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-4 mb-6 text-start">
              {t.title}{" "}
              <span className="text-primary">{t.titleHighlight}</span>
            </h2>
          </AnimatedSection>

          <AnimatedSection animation="fade-up" delay={0.2}>
            <p className="text-lg text-muted-foreground text-start">
              {t.description}
            </p>
          </AnimatedSection>
        </div>

        {/* Testimonials Carousel */}
        <AnimatedSection animation="fade-up" delay={0.3}>
          <div className="relative max-w-4xl mx-auto">
            {/* Main Testimonial Card */}
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8 md:p-12">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentIndex}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  {/* Quote Icon */}
                  <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mb-6">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="text-primary"
                    >
                      <path d="M11 7.5a5.5 5.5 0 1 0-11 0v1a5.5 5.5 0 0 0 5.5 5.5h.5v2.5a2.5 2.5 0 0 1-5 0v-1H-1v1a4.5 4.5 0 0 0 9 0v-2.5h.5A7.5 7.5 0 0 0 16 6.5v-1a5.5 5.5 0 0 0-5-5.48V7.5zm2 0V1.02A5.5 5.5 0 0 1 18.5 6.5v1A5.5 5.5 0 0 1 13 13h-.5v2.5a4.5 4.5 0 1 0 9 0v-1h2v1a6.5 6.5 0 1 1-13 0v-2.5H10A7.5 7.5 0 0 0 2.5 5.5v1a5.5 5.5 0 0 0 5 5.48V7.5z" />
                    </svg>
                  </div>

                  {/* Content */}
                  <p className="text-xl md:text-2xl text-white/90 leading-relaxed mb-8 text-start">
                    &ldquo;{testimonials[currentIndex].content}&rdquo;
                  </p>

                  {/* Rating */}
                  <div className="flex items-center gap-1 mb-6">
                    {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                      <HugeIcon key={i} name="star" size={20} className="text-yellow-400 fill-yellow-400" />
                    ))}
                  </div>

                  {/* Author */}
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 bg-primary/20 rounded-full flex items-center justify-center text-primary font-bold text-xl">
                      {testimonials[currentIndex].name.charAt(0)}
                    </div>
                    <div>
                      <p className="font-semibold text-white">
                        {testimonials[currentIndex].name}
                      </p>
                      <p className="text-muted-foreground">
                        {testimonials[currentIndex].role} at {testimonials[currentIndex].company}
                      </p>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Navigation */}
            <div className="flex items-center justify-center gap-4 mt-8">
              <button
                onClick={prevTestimonial}
                className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center hover:bg-primary transition-colors"
                aria-label="Previous testimonial"
              >
                <HugeIcon name="arrow-right" size={20} className="rotate-180" />
              </button>

              {/* Dots */}
              <div className="flex items-center gap-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`w-2.5 h-2.5 rounded-full transition-all ${
                      index === currentIndex
                        ? "bg-primary w-8"
                        : "bg-white/30 hover:bg-white/50"
                    }`}
                    aria-label={`Go to testimonial ${index + 1}`}
                  />
                ))}
              </div>

              <button
                onClick={nextTestimonial}
                className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center hover:bg-primary transition-colors"
                aria-label="Next testimonial"
              >
                <HugeIcon name="arrow-right" size={20} />
              </button>
            </div>
          </div>
        </AnimatedSection>

        {/* Stats Row */}
        <AnimatedSection animation="fade-up" delay={0.4}>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20 pt-12 border-t border-white/10">
            {[
              { value: "4.9/5", label: t.stats.rating },
              { value: "98%", label: t.stats.satisfaction },
              { value: "500+", label: t.stats.clients },
              { value: "24/7", label: t.stats.support },
            ].map((stat) => (
              <div key={stat.label} className="text-start">
                <p className="text-3xl md:text-4xl font-bold text-primary mb-2">
                  {stat.value}
                </p>
                <p className="text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}

export default TestimonialsSection;
