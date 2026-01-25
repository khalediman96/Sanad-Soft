import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Combines clsx and tailwind-merge for conditional class names
 * @param inputs - Class values to merge
 * @returns Merged class string
 */
export function cn(...inputs: ClassValue[]): string {
  return twMerge(clsx(inputs));
}

/**
 * Formats a phone number for display
 * @param phone - Phone number string
 * @returns Formatted phone number
 */
export function formatPhone(phone: string): string {
  return phone.replace(/(\d{3})(\d{3})(\d{4})/, "($1) $2-$3");
}

/**
 * Delays execution for a specified time
 * @param ms - Milliseconds to delay
 * @returns Promise that resolves after delay
 */
export function delay(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

/**
 * Checks if code is running on client side
 * @returns Boolean indicating if running in browser
 */
export function isClient(): boolean {
  return typeof window !== "undefined";
}

/**
 * Checks if user prefers reduced motion
 * @returns Boolean indicating reduced motion preference
 */
export function prefersReducedMotion(): boolean {
  if (!isClient()) return false;
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}
