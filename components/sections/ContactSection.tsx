"use client";

import { useState } from "react";
import { AnimatedSection, HugeIcon, CustomSelect, type IconName, type SelectOption } from "@/components/ui";
import { useLanguage } from "@/context/useLanguage";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";


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
              {contactInfo.map((info, idx) => (
                <motion.a
                  key={info.label}
                  href={info.href}
                  target={info.icon === "location" ? "_blank" : undefined}
                  rel={info.icon === "location" ? "noopener noreferrer" : undefined}
                  className="group relative overflow-hidden block mb-6"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -4 }}
                >
                  {/* Gradient border */}
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-primary/20 to-primary-dark/20 rounded-2xl opacity-0 group-hover:opacity-100 blur transition-all duration-300 -z-10" />
                  
                  <div className="flex items-start gap-4 p-6 bg-gradient-to-br from-slate-800/40 to-slate-900/40 border border-primary/20 rounded-2xl hover:border-primary/50 transition-all duration-300 backdrop-blur-sm group-hover:shadow-xl group-hover:shadow-primary/20">
                    <motion.div 
                      className="w-12 h-12 bg-gradient-to-br from-primary to-primary-dark rounded-xl flex items-center justify-center flex-shrink-0"
                      whileHover={{ scale: 1.1, rotate: 10 }}
                    >
                      <HugeIcon name={info.icon} size={24} className="text-white" />
                    </motion.div>
                    <div>
                      <p className="text-xs text-gray-400 mb-1 text-start uppercase tracking-widest font-semibold">{info.label}</p>
                      <p className="font-medium text-white text-start">{info.value}</p>
                    </div>
                  </div>
                </motion.a>
              ))}

              {/* Office Hours */}
              <motion.div 
                className="p-6 bg-gradient-to-br from-primary/60 to-primary-dark/60 border border-primary/40 rounded-2xl text-white backdrop-blur-sm"
                whileHover={{ scale: 1.02 }}
              >
                <h3 className="font-semibold mb-4 flex items-center gap-2 text-start">
                  <HugeIcon name="clock" size={20} />
                  {t('contact.officeHours')}
                </h3>
                <div className="space-y-2 text-white/90">
                  <p className="text-start text-sm">{t('contact.hours.weekdays')}</p>
                  <p className="text-start text-sm">{t('contact.hours.weekend')}</p>
                  <div className="pt-2 border-t border-white/20 mt-4 text-start">
                    <p className="text-sm"><strong>{t('contact.hours.support')}</strong></p>
                    <p className="text-xs text-white/70">{t('contact.hours.supportDesc')}</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </AnimatedSection>

          {/* Contact Form */}
          <AnimatedSection animation="fade-left" delay={0.3} className="lg:col-span-3">
            <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-primary/20 rounded-3xl p-8 md:p-10 backdrop-blur-sm hover:border-primary/40 transition-all duration-300">
              {isSubmitted ? (
                <motion.div 
                  className="text-start py-12"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                >
                  <motion.div 
                    className="w-16 h-16 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center me-auto mb-6"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", stiffness: 200 }}
                  >
                    <HugeIcon name="check" size={32} className="text-white" />
                  </motion.div>
                  <h3 className="text-2xl font-bold text-white mb-3 text-start">
                    {t('contact.success.title')}
                  </h3>
                  <p className="text-gray-300 text-start">
                    {t('contact.success.description')}
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                    >
                      <label htmlFor="name" className="block text-sm font-medium text-white mb-2 text-start">
                        {t('contact.form.name')} *
                      </label>
                      <motion.input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-slate-900/50 border border-primary/20 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary focus:bg-slate-900 transition-all text-start text-white placeholder:text-gray-500"
                        placeholder={t('contact.form.namePlaceholder')}
                        whileFocus={{ scale: 1.02 }}
                      />
                    </motion.div>
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.05 }}
                      viewport={{ once: true }}
                    >
                      <label htmlFor="email" className="block text-sm font-medium text-white mb-2 text-start">
                        {t('contact.form.email')} *
                      </label>
                      <motion.input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-slate-900/50 border border-primary/20 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary focus:bg-slate-900 transition-all text-start text-white placeholder:text-gray-500"
                        placeholder={t('contact.form.emailPlaceholder')}
                        whileFocus={{ scale: 1.02 }}
                      />
                    </motion.div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.1 }}
                      viewport={{ once: true }}
                    >
                      <label htmlFor="company" className="block text-sm font-medium text-white mb-2 text-start">
                        {t('contact.form.company')}
                      </label>
                      <motion.input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-slate-900/50 border border-primary/20 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary focus:bg-slate-900 transition-all text-start text-white placeholder:text-gray-500"
                        placeholder={t('contact.form.companyPlaceholder')}
                        whileFocus={{ scale: 1.02 }}
                      />
                    </motion.div>
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.15 }}
                      viewport={{ once: true }}
                    >
                      <label className="block text-sm font-medium text-white mb-2 text-start">
                        {t('contact.form.subject')} *
                      </label>
                      <CustomSelect
                        value={formData.subject}
                        onChange={(value) =>
                          setFormData((prev) => ({ ...prev, subject: value }))
                        }
                        options={[
                          {
                            value: "sanadpay",
                            label: t('contact.form.subjects.sanadpay'),
                          },
                          {
                            value: "partnership",
                            label: t('contact.form.subjects.partnership'),
                          },
                          {
                            value: "support",
                            label: t('contact.form.subjects.support'),
                          },
                          {
                            value: "demo",
                            label: t('contact.form.subjects.demo'),
                          },
                          {
                            value: "other",
                            label: t('contact.form.subjects.other'),
                          },
                        ]}
                        placeholder={t('contact.form.selectSubject')}
                      />
                    </motion.div>
                  </div>

                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    viewport={{ once: true }}
                  >
                    <label htmlFor="message" className="block text-sm font-medium text-white mb-2 text-start">
                      {t('contact.form.message')} *
                    </label>
                    <motion.textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full px-4 py-3 bg-slate-900/50 border border-primary/20 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary focus:bg-slate-900 transition-all resize-none text-start text-white placeholder:text-gray-500"
                      placeholder={t('contact.form.messagePlaceholder')}
                      whileFocus={{ scale: 1.02 }}
                    />
                  </motion.div>

                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    className={cn(
                      "w-full inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-primary to-primary-dark text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-primary/50 transition-all",
                      isSubmitting && "opacity-70 cursor-not-allowed"
                    )}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.25 }}
                    viewport={{ once: true }}
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
                  </motion.button>
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
