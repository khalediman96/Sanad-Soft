"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export function SmokeyBackground({ className, overlay = true }: { className?: string; overlay?: boolean }) {
  return (
    <div className={cn("absolute inset-0 -z-20 overflow-hidden pointer-events-none", className)} aria-hidden>
      {/* Layered blurred gradients to mimic a smokey animated background */}
      <motion.div
        className="absolute -top-64 -left-32 w-[48rem] h-[48rem] rounded-full filter blur-3xl opacity-30 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"
        animate={{ x: [0, 60, 0], y: [0, -30, 0], scale: [1, 1.08, 1] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
      />

      <motion.div
        className="absolute -bottom-64 -right-32 w-[56rem] h-[56rem] rounded-full filter blur-3xl opacity-25 bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400"
        animate={{ x: [0, -80, 0], y: [0, 40, 0], scale: [1.05, 1, 1.05] }}
        transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
      />

      <motion.div
        className="absolute top-10 right-1/2 w-96 h-96 rounded-full filter blur-2xl opacity-20 bg-gradient-to-r from-yellow-400 via-orange-400 to-red-400"
        animate={{ x: [0, 40, 0], y: [0, -20, 0], scale: [1, 1.04, 1] }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Optional dark overlay to keep content readable */}
      {overlay && <div className="absolute inset-0 bg-black/60" />}
    </div>
  );
}

export default SmokeyBackground;
