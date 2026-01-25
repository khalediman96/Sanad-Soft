"use client";

import { createContext, useContext, useState, useEffect, ReactNode } from "react";

type Language = "en" | "ar";

interface LanguageContextType {
  language: Language;
  toggleLanguage: () => void;
  isRTL: boolean;
  isHydrated: boolean;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>("ar"); // Default to Arabic
  const [isRTL, setIsRTL] = useState(true); // Default to RTL
  const [isHydrated, setIsHydrated] = useState(false);

  useEffect(() => {
    // Mark as hydrated
    setIsHydrated(true);
    
    // Load language from localStorage
    const savedLanguage = localStorage.getItem("language") as Language;
    if (savedLanguage === "ar" || savedLanguage === "en") {
      setLanguage(savedLanguage);
      setIsRTL(savedLanguage === "ar");
    }
  }, []);

  useEffect(() => {
    if (isHydrated) {
      // Update HTML dir attribute only after hydration
      document.documentElement.dir = isRTL ? "rtl" : "ltr";
      document.documentElement.lang = language;
      // Update font family based on language
      document.documentElement.style.fontFamily = isRTL 
        ? "var(--font-cairo), var(--font-inter), system-ui, sans-serif"
        : "var(--font-inter), system-ui, sans-serif";
      // Save to localStorage
      localStorage.setItem("language", language);
    }
  }, [language, isRTL, isHydrated]);

  const toggleLanguage = () => {
    setLanguage((prev) => {
      const newLang = prev === "en" ? "ar" : "en";
      setIsRTL(newLang === "ar");
      return newLang;
    });
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, isRTL, isHydrated }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
