"use client";

import Link from "next/link";
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
    <footer className="bg-secondary text-white">
      <div className="container-custom py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <Link href="#home" className="inline-block text-2xl font-bold mb-4">
              <span className="text-primary">Sanad</span>
              <span className="text-white">Soft</span>
            </Link>
            <p className="text-muted-foreground max-w-sm mb-6 text-start">
              {t('footer.description')}
            </p>
            
            {/* Social Links */}
            <div className="flex items-center gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 text-white hover:bg-primary hover:text-white transition-colors"
                >
                  <HugeIcon name={social.icon} size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Links Sections */}
          {footerSections.map((section) => (
            <div key={section.title}>
              <h3 className="text-sm font-semibold uppercase tracking-wider mb-4 text-start">
                {section.title}
              </h3>
              <ul className="space-y-3">
                {(() => {
                  interface FooterLink {
                    label: string;
                    href: string;
                  }

                  return section.links.map((link: FooterLink) => (
                    <li key={link.label}>
                      <Link
                        href={link.href}
                        className="text-muted-foreground hover:text-primary transition-colors text-start block"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ));
                })()}
              </ul>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            {/* Copyright */}
            <p className="text-muted-foreground text-sm text-start">
              © {currentYear} {t('footer.copyright')}
            </p>

            {/* Contact Info */}
            <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-muted-foreground">
              <a
                href="mailto:info@sanadsoft.com"
                className="flex items-center gap-2 hover:text-primary transition-colors"
              >
                <HugeIcon name="mail" size={16} />
                Info@sanadsoft.com
              </a>
              <a
                href="tel:+249123456789"
                className="flex items-center gap-2 hover:text-primary transition-colors"
              >
                <HugeIcon name="phone" size={16} />
                +249 123 456 789
              </a>
            </div>

            {/* Legal Links */}
            <div className="flex items-center gap-4 text-sm text-muted-foreground">
              <Link href="#" className="hover:text-primary transition-colors">
                {t('footer.legal.privacy')}
              </Link>
              <Link href="#" className="hover:text-primary transition-colors">
                {t('footer.legal.terms')}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
