"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Squash as Hamburger } from "hamburger-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { HugeIcon } from "@/components/ui";
import { useLanguage } from "@/context/useLanguage";
import Image from "next/image";

interface NavItem {
  key: string;
  href: string;
}

const navItems: NavItem[] = [
  { key: "nav.home", href: "#home" },
  { key: "nav.about", href: "#about" },
  { key: "nav.products", href: "#products" },
  { key: "nav.features", href: "#services" },
  { key: "nav.solutions", href: "#solutions" },
  { key: "nav.contact", href: "#contact" },
];

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { language, toggleLanguage, isRTL, t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const handleNavClick = () => {
    setIsOpen(false);
  };

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-[10000] px-3 md:px-4 pt-3 transition-all duration-300">
        <div className="container-custom">
          <nav
            className={cn(
              "flex items-center justify-between h-16 md:h-[72px] rounded-2xl border px-4 md:px-6 transition-all duration-300",
              "bg-slate-950/70 backdrop-blur-xl shadow-[0_12px_40px_rgba(2,8,23,0.35)]",
              scrolled ? "border-primary/30" : "border-white/10"
            )}
          >
            <Link
              href="#home"
              className="flex items-center justify-center "
              onClick={handleNavClick}
            >
              <Image
                src={language === "ar" ? "/logos/sanad-arabic.svg" : "/logos/LOGO.svg"}
                alt="Sanad Soft Logo"
                width={280}
                height={110}
                className="block h-14 md:h-16 w-auto object-contain"
              />
            </Link>

            <ul className="hidden md:flex items-center gap-1 rounded-full border border-white/10 bg-white/5 p-1.5">
              {navItems.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="block rounded-full px-4 py-2 text-sm font-medium text-foreground/90 transition-all hover:bg-white/5 hover:text-primary"
                  >
                    {t(item.key)}
                  </Link>
                </li>
              ))}
            </ul>

            <div className="hidden md:flex items-center gap-3">
              <button
                onClick={toggleLanguage}
                className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-foreground transition-all hover:border-primary/40 hover:text-primary"
                aria-label="Toggle language"
              >
                <HugeIcon name="globe" size={18} strokeWidth={2} />
                <span className="text-sm font-medium">{language === "en" ? "AR" : "EN"}</span>
              </button>

              <Link
                href="#contact"
                className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-primary to-primary-dark px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-primary/25 transition-all hover:-translate-y-0.5 hover:shadow-primary/40"
              >
                {t('nav.getStarted')}
                <HugeIcon name="arrow-right" size={16} className={cn(isRTL && "rotate-180")} />
              </Link>
            </div>

            <div className="md:hidden relative z-[10001] flex items-center gap-2">
              <button
                onClick={toggleLanguage}
                className="flex items-center gap-1 rounded-full border border-white/10 bg-white/5 px-3 py-2 text-white transition-colors hover:border-primary/40 hover:text-primary"
                aria-label="Toggle language"
              >
                <span className="text-xs font-medium">{language === "en" ? "AR" : "EN"}</span>
              </button>

              <div className="relative z-[10002] rounded-full border border-white/10 bg-white/5 p-1.5">
                <Hamburger
                  toggled={isOpen}
                  toggle={setIsOpen}
                  size={20}
                  color={isOpen ? "#8A9A5B" : "#ffffff"}
                  label="Toggle menu"
                  rounded
                />
              </div>
            </div>
          </nav>
        </div>
      </header>

      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 bg-slate-950/70 backdrop-blur-sm md:hidden z-[9998]"
              onClick={() => setIsOpen(false)}
            />

            <motion.div
              initial={{ x: isRTL ? "-100%" : "100%" }}
              animate={{ x: 0 }}
              exit={{ x: isRTL ? "-100%" : "100%" }}
              transition={{ type: "spring", damping: 30, stiffness: 300 }}
              className={cn(
                "fixed top-0 bottom-0 w-[300px] bg-[linear-gradient(180deg,#0b1320,#08111b)] shadow-2xl md:hidden z-[9999] border-white/10",
                isRTL ? "left-0 border-r" : "right-0 border-l"
              )}
            >
              <div className="flex flex-col h-full pt-24 pb-8 px-5">
                <ul className="flex flex-col gap-2 rounded-2xl border border-white/10 bg-white/5 p-3">
                  {navItems.map((item, index) => (
                    <motion.li
                      key={item.href}
                      initial={{ opacity: 0, x: isRTL ? -20 : 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.08 }}
                    >
                      <Link
                        href={item.href}
                        onClick={handleNavClick}
                        className="block rounded-xl py-3 px-4 text-white font-medium hover:bg-primary/10 hover:text-primary transition-colors"
                      >
                        {t(item.key)}
                      </Link>
                    </motion.li>
                  ))}
                </ul>

                <div className="mt-auto rounded-2xl border border-white/10 bg-white/5 p-4">
                  <p className="mb-3 text-sm text-white/70">{t('hero.badge')}</p>
                  <Link
                    href="#contact"
                    onClick={handleNavClick}
                    className="flex items-center justify-center gap-2 w-full rounded-full bg-gradient-to-r from-primary to-primary-dark px-5 py-3 text-white font-medium transition-colors"
                  >
                    {t('nav.getStarted')}
                    <HugeIcon name="arrow-right" size={16} className={cn(isRTL && "rotate-180")} />
                  </Link>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}

export default Header;
