"use client";

import Link from "next/link";
import { AnimatedSection, HugeIcon, type IconName } from "@/components/ui";
import { useLanguage } from "@/lib/LanguageContext";
import { translations } from "@/lib/translations";

export function ProductsSection() {
  const { language } = useLanguage();
  const t = translations[language].products;

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
      tagline: t.sanadpay.tagline,
      description: t.sanadpay.description,
      features: t.sanadpay.features.map((f, i) => ({
        icon: ["wallet", "credit-card", "shield", "lightning", "chart", "globe"][i] as IconName,
        title: f.title,
        description: f.desc,
      })),
      isFeatured: true,
    },
    {
      name: "SanadMerchant",
      tagline: t.merchant.tagline,
      description: t.merchant.description,
      features: t.merchant.features.map((f, i) => ({
        icon: ["bank", "users", "chart"][i] as IconName,
        title: f.title,
        description: f.desc,
      })),
    },
    {
      name: "SanadBusiness",
      tagline: t.business.tagline,
      description: t.business.description,
      features: t.business.features.map((f, i) => ({
        icon: ["lock", "lightning", "users"][i] as IconName,
        title: f.title,
        description: f.desc,
      })),
    },
  ];

  return (
    <section id="products" className="py-20 md:py-28 bg-gradient-to-b from-background to-primary/5">
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
              <span className="gradient-text">{t.titleHighlight}</span>
            </h2>
          </AnimatedSection>

          <AnimatedSection animation="fade-up" delay={0.2}>
            <p className="text-lg text-gray-200 text-start">
              {t.description}
            </p>
          </AnimatedSection>
        </div>

        {/* Featured Product - SanadPay */}
        {products
          .filter((p) => p.isFeatured)
          .map((product) => (
            <AnimatedSection key={product.name} animation="fade-up" delay={0.3}>
              <div className="bg-white dark:bg-card border border-border rounded-3xl p-8 md:p-12 mb-12 relative overflow-hidden">
                {/* Background Decoration */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
                <div className="absolute bottom-0 left-0 w-48 h-48 bg-primary/10 rounded-full blur-3xl" />

                <div className="relative z-10">
                  {/* Product Header */}
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 mb-10">
                    <div>
                      <div className="flex items-center gap-3 mb-2 text-start">
                        <span className="px-3 py-1 bg-primary text-white text-xs font-semibold rounded-full">
                          {t.featured}
                        </span>
                        <span className="text-primary text-sm font-medium text-start">
                          {product.tagline}
                        </span>
                      </div>
                      <h3 className="text-3xl md:text-4xl font-bold text-foreground text-start">
                        {product.name}
                      </h3>
                      <p className="text-gray-200 mt-3 max-w-2xl text-start">{product.description}</p>
                    </div>
                    <Link
                      href="#contact"
                      className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary text-white font-semibold rounded-full hover:bg-primary-dark transition-all hover:shadow-lg hover:shadow-primary/25 whitespace-nowrap"
                    >
                      {t.getStarted}
                      <HugeIcon name="arrow-right" size={20} />
                    </Link>
                  </div>

                  {/* Features Grid */}
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {product.features.map((feature, index) => (
                      <div
                        key={feature.title}
                        className="group p-6 bg-background rounded-2xl hover:shadow-md transition-all"
                      >
                        <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-primary group-hover:scale-110 transition-all">
                          <HugeIcon
                            name={feature.icon}
                            size={24}
                            className="text-primary group-hover:text-white transition-colors"
                          />
                        </div>
                        <h4 className="text-lg font-semibold text-foreground mb-2 text-start">
                          {feature.title}
                        </h4>
                        <p className="text-gray-200 text-sm text-start">{feature.description}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </AnimatedSection>
          ))}

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
                <div className="bg-white dark:bg-card border border-border rounded-2xl p-8 h-full hover:shadow-lg hover:border-primary/30 transition-all">
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
                    {t.learnMore}
                    <HugeIcon name="arrow-right" size={18} />
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
