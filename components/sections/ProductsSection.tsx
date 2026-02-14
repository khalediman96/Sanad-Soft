"use client";

import { useState } from "react";
import Link from "next/link";
import { AnimatedSection, HugeIcon, type IconName } from "@/components/ui";
import { useLanguage } from "@/context/useLanguage";
import { cn } from "@/lib/utils";

export function ProductsSection() {
  const { language, isRTL, t } = useLanguage();
  const [active, setActive] = useState("SanadPay");

  interface ProductFeature {
    icon: IconName;
    title: string;
    description: string;
  }

  interface Product {
    name: string;
    tagline: string;
    description: string;
    features: ProductFeature[];
    isFeatured?: boolean;
  }

  const products: Product[] = [
    {
      name: "SanadPay",
      tagline: t('products.sanadpay.tagline') as string,
      description: t('products.sanadpay.description') as string,
      features: (t('products.sanadpay.features') as unknown as { title: string; desc: string }[]).map((f, i) => ({
        icon: ["wallet", "credit-card", "shield", "lightning", "chart", "globe"][i] as IconName,
        title: f.title,
        description: f.desc,
      })),
      isFeatured: true,
    },
    {
      name: "Sanadak",
      tagline: t('products.sanadak.tagline') as string,
      description: t('products.sanadak.description') as string,
      features: (t('products.sanadak.features') as unknown as { title: string; desc: string }[]).map((f, i) => ({
        icon: ["wallet", "qr-code", "card", "card", "chart", "users"][i] as IconName,
        title: f.title,
        description: f.desc,
      })),
    },
    {
      name: "SanadNotify",
      tagline: t('products.sanadnotify.tagline') as string,
      description: t('products.sanadnotify.description') as string,
      features: (t('products.sanadnotify.features') as unknown as { title: string; desc: string }[]).map((f, i) => ({
        icon: ["bell", "calendar", "users", "chart", "template", "webhook"][i] as IconName,
        title: f.title,
        description: f.desc,
      })),
    },
  ];

  const getSelectedFeatures = (): { title: string; desc: string }[] => {
    const res =
      active === "SanadPay"
        ? t('products.sanadpay.features')
        : active === "Sanadak"
        ? t('products.sanadak.features')
        : t('products.sanadnotify.features');

    if (typeof res === "string") return [];
    return res as { title: string; desc: string }[];
  };

  const getActiveProductName = (): string => {
    if (active === "SanadPay") return t('products.sanadpay.name') as string;
    if (active === "Sanadak") return t('products.sanadak.name') as string;
    return t('products.sanadnotify.name') as string;
  };

  const getTranslatedProductName = (id: string): string => {
    if (id === "SanadPay") return t('products.sanadpay.name') as string;
    if (id === "Sanadak") return t('products.sanadak.name') as string;
    if (id === "SanadNotify") return t('products.sanadnotify.name') as string;
    return id;
  };

  return (
    <section id="products" className="py-20 md:py-28 bg-background relative overflow-hidden">
      {/* Animated background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl opacity-30 animate-pulse" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl opacity-30 animate-pulse" style={{ animationDelay: '1s' }} />
      </div>

      <div className="container-custom relative z-10">
        {/* Section Header */}
        <div className="max-w-4xl mb-16">
          <AnimatedSection animation="fade-up">
            <span className="text-primary font-semibold text-sm uppercase tracking-wider text-start block">
              {t('products.subtitle')}
            </span>
          </AnimatedSection>

          <AnimatedSection animation="fade-up" delay={0.1}>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-4 mb-6 text-start">
              {t('products.title')}{" "}
              <span className="gradient-text">{t('products.titleHighlight')}</span>
            </h2>
          </AnimatedSection>

          <AnimatedSection animation="fade-up" delay={0.2}>
            <p className="text-lg text-gray-200 text-start">
              {t('products.description')}
            </p>
          </AnimatedSection>
        </div>

        {/* Product Selector Buttons */}
        <AnimatedSection animation="fade-up" delay={0.25}>
          <div className="flex gap-3 mb-12">
            {[
              { id: "SanadPay", label: t('products.buttons.sanadpay') },
              { id: "Sanadak", label: t('products.buttons.sanadak') },
              { id: "SanadNotify", label: t('products.buttons.sanadnotify') },
            ].map((opt) => (
              <button
                key={opt.id}
                onClick={() => setActive(opt.id)}
                className={cn(
                  "px-6 py-3 rounded-full text-sm font-semibold transition-all duration-300 relative overflow-hidden",
                  active === opt.id
                    ? "bg-gradient-to-r from-primary to-primary-dark text-white shadow-lg shadow-primary/50 scale-105"
                    : "bg-transparent border-2 border-primary/30 text-foreground hover:border-primary/60 hover:bg-primary/5"
                )}
              >
                {opt.label}
              </button>
            ))}          </div>

          {/* Selected Product Panel */}
          <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-primary/20 rounded-3xl p-8 md:p-12 mb-16 backdrop-blur-sm hover:border-primary/40 transition-all duration-300 group">
            {/* Decorative elements */}
            <div className="absolute -top-20 -right-20 w-40 h-40 bg-primary/10 rounded-full blur-3xl group-hover:bg-primary/20 transition-all duration-300" />
            
            <div className="relative">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-8 mb-8">
                <div className="flex-1">
                  <span className="inline-flex items-center gap-2 px-3 py-1 bg-primary/10 border border-primary/30 rounded-full text-primary text-xs font-bold mb-3 uppercase tracking-wider">
                    <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                    {active === "SanadPay" ? "Featured Product" : "Solution"}
                  </span>
                  <h3 className="text-3xl md:text-4xl font-bold text-white text-start mb-3">
                    {getActiveProductName()}
                  </h3>
                  <p className="text-gray-300 text-lg leading-relaxed max-w-2xl text-start">
                    {active === "SanadPay"
                      ? t('products.sanadpay.description')
                      : active === "Sanadak"
                      ? t('products.sanadak.description')
                      : t('products.sanadnotify.description')}
                  </p>
                </div>
                <Link
                  href="#contact"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-primary to-primary-dark text-white font-semibold rounded-full hover:shadow-lg hover:shadow-primary/50 hover:scale-105 transition-all whitespace-nowrap"
                >
                  {t('products.getStarted')}
                  <HugeIcon name="arrow-right" size={18} className={cn(isRTL && "rotate-180")} />
                </Link>
              </div>

              <div className="grid md:grid-cols-3 gap-4">
                {getSelectedFeatures().map((f, idx) => (
                  <AnimatedSection 
                    key={f.title}
                    animation="fade-up"
                    delay={idx * 0.1}
                  >
                    <div className="p-6 bg-gradient-to-br from-slate-700/30 to-slate-800/30 border border-primary/10 rounded-2xl hover:border-primary/30 hover:bg-slate-700/50 transition-all duration-300 group/item">
                      <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center mb-3 group-hover/item:bg-primary/30 transition-all">
                        <HugeIcon name={["wallet", "credit-card", "shield", "lightning", "chart", "globe", "bell", "calendar", "users"][idx] as IconName} size={20} className="text-primary" />
                      </div>
                      <h4 className="font-semibold text-white mb-2 text-start">{f.title}</h4>
                      <p className="text-sm text-gray-300 text-start">{f.desc}</p>
                    </div>
                  </AnimatedSection>
                ))}
              </div>
            </div>
          </div>

        </AnimatedSection>

        {/* Other Products */}
        <div className="grid md:grid-cols-2 gap-8">
          {products
            .filter((p) => !p.isFeatured)
            .map((product, index) => (
              <AnimatedSection
                key={product.name}
                animation={index % 2 === 0 ? "fade-right" : "fade-left"}
                delay={0.3 + index * 0.1}
              >
                <div className="group relative h-full">
                  {/* Decorative gradient background */}
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-primary/20 to-primary-dark/20 rounded-3xl opacity-0 group-hover:opacity-100 blur transition-all duration-300 -z-10" />
                  
                  <div className="bg-gradient-to-br from-slate-800/60 to-slate-900/60 border border-primary/20 rounded-3xl p-8 h-full hover:border-primary/50 transition-all duration-300 backdrop-blur-sm group-hover:shadow-2xl group-hover:shadow-primary/20">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <span className="text-primary text-xs font-bold uppercase tracking-widest block mb-2">{product.tagline}</span>
                        <h3 className="text-2xl font-bold text-white text-start">
                          {getTranslatedProductName(product.name)}
                        </h3>
                      </div>
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-primary-dark flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                        <HugeIcon name={["wallet", "credit-card"][index] as IconName} size={24} className="text-white" />
                      </div>
                    </div>
                    
                    <p className="text-gray-300 mb-8 text-start leading-relaxed">{product.description}</p>

                    <div className="space-y-3 mb-8">
                      {product.features.slice(0, 3).map((feature) => (
                        <div key={feature.title} className="flex items-start gap-3 group/feature">
                          <div className="w-8 h-8 bg-primary/20 rounded-lg flex items-center justify-center flex-shrink-0 group-hover/feature:bg-primary/40 transition-colors">
                            <HugeIcon name={feature.icon} size={16} className="text-primary" />
                          </div>
                          <div>
                            <h4 className="font-medium text-white text-start text-sm">{feature.title}</h4>
                            <p className="text-xs text-gray-400 text-start">{feature.description}</p>
                          </div>
                        </div>
                      ))}
                    </div>

                    <Link
                      href="#contact"
                      className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all group-hover:text-primary-light"
                    >
                      {t('products.learnMore')}
                      <HugeIcon name="arrow-right" size={18} className={cn(isRTL && "rotate-180")} />
                    </Link> 
                  </div>
                </div>
              </AnimatedSection>
            ))}
        </div>
      </div>
    </section>
  );
}

export default ProductsSection;
