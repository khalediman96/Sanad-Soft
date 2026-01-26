"use client";

import Image from "next/image";
import { AnimatedSection, HugeIcon } from "@/components/ui";
import { useLanguage } from "@/context/useLanguage";
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
      <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-6 md:p-8 h-full">
        {/* Quote Icon */}
        <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center mb-4">
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="text-primary"
          >
            <path d="M4.583 17.321C3.553 16.227 3 15 3 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179zm10 0C13.553 16.227 13 15 13 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179z" />
          </svg>
        </div>

        {/* Content */}
        <p className="text-base md:text-lg text-white/90 leading-relaxed mb-6 line-clamp-4 text-start whitespace-normal">
          &ldquo;{testimonial.content}&rdquo;
        </p>

        {/* Rating */}
        <div className="flex items-center gap-1 mb-4">
          {[...Array(testimonial.rating)].map((_, i) => (
            <HugeIcon
              key={i}
              name="star"
              size={16}
              className="text-yellow-400 fill-yellow-400"
            />
          ))}
        </div>

        {/* Author */}
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center text-primary font-bold text-lg overflow-hidden">
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
          <div>
            <p className="font-semibold text-white text-sm">
              {testimonial.name}
            </p>
            <p className="text-muted-foreground text-xs">
              {testimonial.role} • {testimonial.company}
            </p>
          </div>
        </div>
      </div>
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
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20 pt-12 border-t border-white/10">
            {[
              { value: "4.9/5", label: t('testimonials.stats.rating') },
              { value: "98%", label: t('testimonials.stats.satisfaction') },
              { value: "500+", label: t('testimonials.stats.clients') },
              { value: "24/7", label: t('testimonials.stats.support') },
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
