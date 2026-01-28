"use client";

import { useState } from "react";
import { AnimatedSection, HugeIcon, type IconName } from "@/components/ui";
import { useLanguage } from "@/context/useLanguage";
import { cn } from "@/lib/utils";

interface ContactInfo {
  icon: IconName;
  label: string;
  value: string;
  href: string;
}

export function ContactSection() {
  const { language, isRTL, t } = useLanguage();
  
  const contactInfo: ContactInfo[] = [
    {
      icon: "location",
      label: t('contact.info.visit'),
      value: t('contact.info.address'),
      href: "https://maps.google.com",
    },
    {
      icon: "mail",
      label: t('contact.info.email'),
      value: t('contact.info.emailAddress'),
      href: `mailto:${t('contact.info.emailAddress')}`,
    },
    {
      icon: "phone",
      label: t('contact.info.call'),
      value: t('contact.info.phone'),
      href: `tel:${t('contact.info.phone').replace(/\s/g, "")}`,
    },
  ];

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setIsSubmitted(true);
    setFormData({ name: "", email: "", company: "", subject: "", message: "" });

    // Reset success message after 5 seconds
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  return (
    <section id="contact" className="py-20 md:py-28 bg-background">
      <div className="container-custom">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <AnimatedSection animation="fade-up">
            <span className="text-primary font-semibold text-sm uppercase tracking-wider text-start block">
              {t('contact.subtitle')}
            </span>
          </AnimatedSection>

          <AnimatedSection animation="fade-up" delay={0.1}>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-4 mb-6 text-start">
              {t('contact.title')}{" "}
              <span className="gradient-text">{t('contact.titleHighlight')}</span>
            </h2>
          </AnimatedSection>

          <AnimatedSection animation="fade-up" delay={0.2}>
            <p className="text-lg text-gray-200 text-start">
              {t('contact.description')}
            </p>
          </AnimatedSection>
        </div>

        <div className="grid lg:grid-cols-5 gap-12">
          {/* Contact Info */}
          <AnimatedSection animation="fade-right" delay={0.2} className="lg:col-span-2">
            <div className="space-y-6">
              {contactInfo.map((info) => (
                <a
                  key={info.label}
                  href={info.href}
                  target={info.icon === "location" ? "_blank" : undefined}
                  rel={info.icon === "location" ? "noopener noreferrer" : undefined}
                  className="flex items-start gap-4 p-6 bg-card border border-border rounded-2xl hover:shadow-lg hover:border-primary/30 transition-all group"
                >
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-primary transition-colors">
                    <HugeIcon
                      name={info.icon}
                      size={24}
                      className="text-primary group-hover:text-white transition-colors"
                    />
                  </div>
                  <div>
                    <p className="text-sm text-gray-200 mb-1 text-start">{info.label}</p>
                    <p className="font-medium text-foreground text-start">{info.value}</p>
                  </div>
                </a>
              ))}

              {/* Office Hours */}
              <div className="p-6 bg-gradient-to-br from-primary to-primary-dark rounded-2xl text-white">
                <h3 className="font-semibold mb-4 flex items-center gap-2 text-start">
                  <HugeIcon name="clock" size={20} />
                  {t('contact.officeHours')}
                </h3>
                <div className="space-y-2 text-white/90">
                  <p className="text-start">{t('contact.hours.weekdays')}</p>
                  <p className="text-start">{t('contact.hours.weekend')}</p>
                  <p className="pt-2 border-t border-white/20 mt-4 text-start">
                    <strong>{t('contact.hours.support')}</strong> {t('contact.hours.supportDesc')}
                  </p>
                </div>
              </div>
            </div>
          </AnimatedSection>

          {/* Contact Form */}
          <AnimatedSection animation="fade-left" delay={0.3} className="lg:col-span-3">
            <div className="bg-card border border-border rounded-2xl p-8 md:p-10">
              {isSubmitted ? (
                <div className="text-start py-12">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center me-auto mb-6">
                    <HugeIcon name="check" size={32} className="text-green-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground mb-3 text-start">
                    {t('contact.success.title')}
                  </h3>
                  <p className="text-gray-200 text-start">
                    {t('contact.success.description')}
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-sm font-medium text-foreground mb-2 text-start"
                      >
                        {t('contact.form.name')} *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-background border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors text-start"
                        placeholder={t('contact.form.namePlaceholder')}
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-foreground mb-2 text-start"
                      >
                        {t('contact.form.email')} *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-background border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors text-start"
                        placeholder={t('contact.form.emailPlaceholder')}
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label
                        htmlFor="company"
                        className="block text-sm font-medium text-foreground mb-2 text-start"
                      >
                        {t('contact.form.company')}
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-background border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors text-start"
                        placeholder={t('contact.form.companyPlaceholder')}
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="subject"
                        className="block text-sm font-medium text-foreground mb-2 text-start"
                      >
                        {t('contact.form.subject')} *
                      </label>
                      <select
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-background border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors text-start"
                      >
                        <option value="">{t('contact.form.selectSubject')}</option>
                        <option value="sanadpay">{t('contact.form.subjects.sanadpay')}</option>
                        <option value="partnership">{t('contact.form.subjects.partnership')}</option>
                        <option value="support">{t('contact.form.subjects.support')}</option>
                        <option value="demo">{t('contact.form.subjects.demo')}</option>
                        <option value="other">{t('contact.form.subjects.other')}</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-foreground mb-2 text-start"
                    >
                      {t('contact.form.message')} *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full px-4 py-3 bg-background border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors resize-none text-start"
                      placeholder={t('contact.form.messagePlaceholder')}
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={cn(
                      "w-full inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary text-white font-semibold rounded-xl hover:bg-primary-dark transition-all",
                      isSubmitting && "opacity-70 cursor-not-allowed"
                    )}
                  >
                    {isSubmitting ? (
                      <>
                        <svg
                          className="animate-spin h-5 w-5"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                          />
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                          />
                        </svg>
                        {t('contact.form.sending')}
                      </>
                    ) : (
                      <>
                        {t('contact.form.send')}
                        <HugeIcon name="arrow-right" size={20} className={cn(isRTL && "rotate-180")} />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}

export default ContactSection;
