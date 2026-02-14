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
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled
          ? "dark:bg-secondary/5 backdrop-blur-md shadow-lg"
          : "bg-transparent"
      )}
    >
      <div className="container-custom">
        <nav className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link
            href="#home"
            className="flex items-center gap-2 text-xl font-bold"
            onClick={handleNavClick}
          >
            <Image src="/logos/sanadlogo.svg" alt="Sanad Soft Logo" width={160} height={100} className="object-contain" />
          </Link>

          {/* Desktop Navigation */}
          <ul className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={cn(
                    "relative text-sm font-medium transition-colors hover:text-primary",
                    "after:absolute after:bottom-[-4px] after:left-0 after:h-0.5 after:w-0 after:bg-primary after:transition-all hover:after:w-full",
                    scrolled ? "text-foreground" : "text-foreground"
                  )}
                >
                  {t(item.key)}
                </Link>
              </li>
            ))}
          </ul>

          {/* CTA & Language Toggle (Desktop) */}
          <div className="hidden md:flex items-center gap-4">
            <button
              onClick={toggleLanguage}
              className={cn(
                "flex items-center gap-2 px-3 py-2 rounded-lg transition-all",
                "hover:bg-primary/10 text-foreground hover:text-primary"
              )}
              aria-label="Toggle language"
            >
             <HugeIcon name="globe" size={20} strokeWidth={2} />
              <span className="text-sm font-medium">{language === "en" ? "AR" : "EN"}</span>
            </button>
            
            <Link
              href="#contact"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-primary text-white font-medium text-sm rounded-full hover:bg-primary-dark transition-colors"
            >
              {t('nav.getStarted')}
              <HugeIcon name="arrow-right" size={16} className={cn(isRTL && "rotate-180")} />
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden z-[10001] flex items-center gap-3">
            <button
              onClick={toggleLanguage}
              className="flex items-center gap-1 px-2 py-1 rounded-lg text-white hover:bg-white/10 transition-colors"
              aria-label="Toggle language"
            >
              <span className="text-xs font-medium">{language === "en" ? "AR" : "EN"}</span>
            </button>
            
            <div className="z-[10002]">
              <Hamburger
              toggled={isOpen}
              toggle={setIsOpen}
              size={24}
              color="#ffffff"
              label="Toggle menu"
              rounded
            />
            </div>
          </div>
        </nav>
      </div>

      {/* Mobile Navigation Drawer */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 bg-black/60 md:hidden z-[9998]"
              onClick={() => setIsOpen(false)}
            />

            {/* Drawer */}
            <motion.div
              initial={{ x: isRTL ? "-100%" : "100%" }}
              animate={{ x: 0 }}
              exit={{ x: isRTL ? "-100%" : "100%" }}
              transition={{ type: "spring", damping: 30, stiffness: 300 }}
              className={cn(
                "fixed top-0 bottom-0 w-[280px] bg-[#1e293b] shadow-xl md:hidden z-[9999]",
                isRTL ? "left-0" : "right-0"
              )}
            >
              <div className="flex flex-col h-full pt-20 pb-8 px-6">
                <ul className="flex flex-col gap-2">
                  {navItems.map((item, index) => (
                    <motion.li
                      key={item.href}
                      initial={{ opacity: 0, x: isRTL ? -20 : 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <Link
                        href={item.href}
                        onClick={handleNavClick}
                        className="block py-3 px-4 text-white font-medium rounded-lg hover:bg-primary/10 hover:text-primary transition-colors"
                      >
                        {t(item.key)}
                      </Link>
                    </motion.li>
                  ))}
                </ul>

                <div className="mt-auto">
                  <Link
                    href="#contact"
                    onClick={handleNavClick}
                    className="flex items-center justify-center gap-2 w-full px-5 py-3 bg-primary text-white font-medium rounded-full hover:bg-primary-dark transition-colors"
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
    </header>
  );
}

export default Header;
