"use client";

import { useEffect, useState } from "react";
import { HugeIcon } from "@/components/ui";

export default function ScrollToTopButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setVisible(window.scrollY > 300);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      aria-label="Scroll to top"
      onClick={handleClick}
      className={`fixed bottom-6 right-6 z-50 flex items-center justify-center w-12 h-12 rounded-full shadow-lg transition-transform duration-200 transform-gpu bg-primary text-white hover:scale-105 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/60 ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6 pointer-events-none"
      }`}
    >
      <HugeIcon name="arrow-right" size={18} className="-rotate-90" />
    </button>
  );
}
