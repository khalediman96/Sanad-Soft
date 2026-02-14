"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { HugeIcon, type IconName } from "@/components/ui";
import { useLanguage } from "@/context/useLanguage";

interface SocialLink {
  icon: IconName;
  href: string;
  label: string;
}

const socialLinks: SocialLink[] = [
  { icon: "facebook", href: "https://facebook.com", label: "Facebook" },
  { icon: "twitter", href: "https://twitter.com", label: "Twitter" },
  { icon: "linkedin", href: "https://linkedin.com", label: "LinkedIn" },
  { icon: "instagram", href: "https://instagram.com", label: "Instagram" },
];

export function Footer() {
  const { language, t } = useLanguage();
  const currentYear = new Date().getFullYear();

  interface FooterSectionLink {
    label: string;
    href: string;
  }

  interface FooterSection {
    title: string;
    links: FooterSectionLink[];
  }

  const footerSections: FooterSection[] = (() => {
    const toArray = (v: unknown): string[] =>
      Array.isArray(v) ? v : typeof v === "string" ? [v] : [];

    const productLinks = toArray(t('footer.sections.products.links'));
    const companyLinks = toArray(t('footer.sections.company.links'));
    const resourcesLinks = toArray(t('footer.sections.resources.links'));

    return [
      {
        title: t('footer.sections.products.title') as string,
        links: productLinks.map((label: string): FooterSectionLink => ({
          label,
          href: "#products",
        })),
      },
      {
        title: t('footer.sections.company.title') as string,
        links: companyLinks.map((label: string, i: number): FooterSectionLink => ({
          label,
          href: i === 0 ? "#about" : "#",
        })),
      },
      {
        title: t('footer.sections.resources.title') as string,
        links: resourcesLinks.map((label: string, i: number): FooterSectionLink => ({
          label,
          href: i >= 2 ? "#contact" : "#",
        })),
      },
    ];
  })();

  return (
    <footer className="bg-secondary text-white relative">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-0 left-10 w-60 h-60 bg-primary/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
          }}
        />
        <motion.div
          className="absolute bottom-0 right-10 w-96 h-96 bg-primary-dark/10 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
          }}
        />
      </div>

      <div className="container-custom py-16 relative z-10">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8">
          {/* Brand Section */}
          <motion.div
            className="lg:col-span-2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.1 }}
              viewport={{ once: true }}
            >
              <Link href="#home" className="inline-block text-2xl font-bold mb-4 group">
                <span className="text-primary group-hover:text-primary-dark transition-colors">Sanad</span>
                <span className="text-white">Soft</span>
              </Link>
            </motion.div>
            <motion.p
              className="text-gray-400 max-w-sm mb-6 text-start"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              viewport={{ once: true }}
            >
              {t('footer.description')}
            </motion.p>
            
            {/* Social Links */}
            <div className="flex items-center gap-4">
              {socialLinks.map((social, idx) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="w-10 h-10 flex items-center justify-center rounded-full bg-gradient-to-br from-slate-700/60 to-slate-800/60 border border-primary/20 text-white hover:border-primary/50 transition-all group relative overflow-hidden"
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: idx * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.2, rotate: 10 }}
                >
                  {/* Hover Background */}
                  <div className="absolute inset-0 bg-gradient-to-r from-primary to-primary-dark opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  <div className="relative z-10">
                    <HugeIcon name={social.icon} size={18} />
                  </div>
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Links Sections */}
          {footerSections.map((section, sectionIdx) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: sectionIdx * 0.1 }}
              viewport={{ once: true }}
            >
              <h3 className="text-sm font-semibold uppercase tracking-wider mb-4 text-start text-white">
                {section.title}
              </h3>
              <ul className="space-y-3">
                {(() => {
                  interface FooterLink {
                    label: string;
                    href: string;
                  }

                  return section.links.map((link: FooterLink, linkIdx: number) => (
                    <motion.li
                      key={link.label}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: sectionIdx * 0.1 + linkIdx * 0.05 }}
                      viewport={{ once: true }}
                    >
                      <Link
                        href={link.href}
                        className="text-gray-400 hover:text-primary transition-colors text-start block relative w-fit group"
                      >
                        <span className="group-hover:text-primary">{link.label}</span>
                        <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300" />
                      </Link>
                    </motion.li>
                  ));
                })()}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Divider */}
        <motion.div
          className="border-t border-white/10 mt-12 pt-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          viewport={{ once: true }}
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            {/* Copyright */}
            <motion.p
              className="text-gray-400 text-sm text-start"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
              viewport={{ once: true }}
            >
              © {currentYear} {t('footer.copyright')}
            </motion.p>

            {/* Contact Info */}
            <div className="flex flex-wrap items-center justify-center gap-6 text-sm">
              <motion.a
                href="mailto:info@sanadsoft.com"
                className="flex items-center gap-2 text-gray-400 hover:text-primary transition-colors group"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.45 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
              >
                <motion.div
                  whileHover={{ rotate: 10 }}
                >
                  <HugeIcon name="mail" size={16} />
                </motion.div>
                <span>Info@sanadsoft.com</span>
              </motion.a>
              <motion.a
                href="tel:+249123456789"
                className="flex items-center gap-2 text-gray-400 hover:text-primary transition-colors group"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
              >
                <motion.div
                  whileHover={{ rotate: -10 }}
                >
                  <HugeIcon name="phone" size={16} />
                </motion.div>
                <span>+249 123 456 789</span>
              </motion.a>
            </div>

            {/* Legal Links */}
            <div className="flex items-center gap-4 text-sm text-gray-400">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.55 }}
                viewport={{ once: true }}
              >
                <Link href="#" className="relative group">
                  <span className="group-hover:text-primary transition-colors">
                    {t('footer.legal.privacy')}
                  </span>
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300" />
                </Link>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6 }}
                viewport={{ once: true }}
              >
                <Link href="#" className="relative group">
                  <span className="group-hover:text-primary transition-colors">
                    {t('footer.legal.terms')}
                  </span>
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300" />
                </Link>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}

export default Footer;
