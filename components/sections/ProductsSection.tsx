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

  return (
    <section id="products" className="py-20 md:py-28 bg-gradient-to-b from-background to-primary/5">
      <div className="container-custom">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
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
          <div className="flex gap-3 mb-8">
            {[
              { id: "SanadPay", label: t('products.buttons.sanadpay') },
              { id: "Sanadak", label: t('products.buttons.sanadak') },
              { id: "SanadNotify", label: t('products.buttons.sanadnotify') },
            ].map((opt) => (
              <button
                key={opt.id}
                onClick={() => setActive(opt.id)}
                className={cn(
                  "px-4 py-2 rounded-full text-sm font-medium transition-all",
                  active === opt.id
                    ? "bg-primary text-white shadow-md"
                    : "bg-transparent border border-white/10 text-foreground hover:border-primary"
                )}
              >
                {opt.label}
              </button>
            ))}          </div>

          {/* Selected Product Panel */}
          <div className="bg-card border border-border rounded-2xl p-6 md:p-8 mb-8">
            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
              <div>
                <h3 className="text-2xl font-bold text-foreground text-start">
                  {active === "SanadPay" ? "SanadPay" : active === "Sanadak" ? "Sanadak" : "SanadNotify"}
                </h3>
                <p className="text-gray-200 mt-2 max-w-2xl text-start">
                    {active === "SanadPay"
                      ? t('products.sanadpay.description')
                      : active === "Sanadak"
                      ? t('products.sanadak.description')
                      : t('products.sanadnotify.description')}
                  </p>
              </div>
              <Link
                href="#contact"
                className="inline-flex items-center gap-2 px-4 py-2 bg-primary text-white text-center font-semibold rounded-full hover:bg-primary-dark transition-all whitespace-nowrap"
              >
                {t('products.getStarted')}
                <HugeIcon name="arrow-right" size={16} className={cn(isRTL && "rotate-180")} />
              </Link>
            </div>

            <div className="grid md:grid-cols-3 gap-4">
              {getSelectedFeatures().map((f) => (
                 
                <div key={f.title} className="p-4 bg-background rounded-lg">
                  <h4 className="font-semibold text-foreground mb-1">{f.title}</h4>
                  <p className="text-sm text-gray-200">{f.desc}</p>
                </div>
              ))}
            </div>
          </div>

        </AnimatedSection>

        {/* Featured Product - SanadPay */}

        {/* Other Products */}
        <div className="grid md:grid-cols-2 gap-8">
          {products
            .filter((p) => !p.isFeatured)
            .map((product, index) => (
              <AnimatedSection
                key={product.name}
                animation={index % 2 === 0 ? "fade-right" : "fade-left"}
                delay={0.2}
              >
                <div className="bg-card border border-border rounded-2xl p-8 h-full hover:shadow-lg hover:border-primary/30 transition-all">
                  <span className="text-primary text-sm font-medium text-start block">{product.tagline}</span>
                  <h3 className="text-2xl font-bold text-foreground mt-2 mb-3 text-start">
                    {product.name}
                  </h3>
                  <p className="text-gray-200 mb-6 text-start">{product.description}</p>

                  <div className="space-y-4">
                    {product.features.map((feature) => (
                      <div key={feature.title} className="flex items-start gap-3">
                        <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                          <HugeIcon name={feature.icon} size={18} className="text-primary" />
                        </div>
                        <div>
                          <h4 className="font-medium text-foreground text-start">{feature.title}</h4>
                          <p className="text-sm text-gray-200 text-start">{feature.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>

                  <Link
                    href="#contact"
                    className="inline-flex items-center gap-2 mt-8 text-primary font-medium hover:gap-3 transition-all"
                  >
                    {t('products.learnMore')}
                    <HugeIcon name="arrow-right" size={18} className={cn(isRTL && "rotate-180")} />
                  </Link> 
                </div>
              </AnimatedSection>
            ))}
        </div>
      </div>
    </section>
  );
}

export default ProductsSection;
