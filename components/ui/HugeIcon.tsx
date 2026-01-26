"use client";

import { cn } from "@/lib/utils";

export type IconName =
  | "wallet"
  | "shield"
  | "chart"
  | "globe"
  | "phone"
  | "mail"
  | "location"
  | "arrow-right"
  | "check"
  | "credit-card"
  | "card"
  | "qr-code"
  | "bank"
  | "lock"
  | "users"
  | "lightning"
  | "clock"
  | "star"
  | "menu"
  | "close"
  | "chevron-down"
  | "bell"
  | "calendar"
  | "template"
  | "webhook"
  | "facebook"
  | "twitter"
  | "linkedin"
  | "instagram";

interface HugeIconProps {
  name: IconName;
  size?: number;
  className?: string;
  strokeWidth?: number;
}

const iconPaths: Record<IconName, string> = {
  wallet:
    "M2 7a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V7Zm14 5a1 1 0 1 0 2 0 1 1 0 0 0-2 0Zm-8-7V3m4 2V3",
  shield:
    "M12 2l8 4v6c0 5.5-3.8 10.7-8 12-4.2-1.3-8-6.5-8-12V6l8-4Zm-2 10l2 2 4-4",
  chart:
    "M3 3v18h18M7 14v3m4-6v6m4-9v9m4-12v12",
  globe:
    "M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20Zm0 0c2.5 0 4.5 4.5 4.5 10s-2 10-4.5 10-4.5-4.5-4.5-10 2-10 4.5-10ZM2 12h20",
  phone:
    "M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6 19.8 19.8 0 0 1-3.1-8.7A2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.4 1.8.7 2.6a2 2 0 0 1-.5 2.1L8.1 9.6a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2-.5c1 .3 1.8.6 2.7.7a2 2 0 0 1 1.9 2.4Z",
  mail:
    "M3 8l9 6 9-6M3 8v10a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V8M3 8l9-4 9 4",
  location:
    "M12 2a8 8 0 0 0-8 8c0 5.4 8 12 8 12s8-6.6 8-12a8 8 0 0 0-8-8Zm0 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6Z",
  "arrow-right":
    "M5 12h14m-7-7 7 7-7 7",
  check:
    "M20 6 9 17l-5-5",
  "credit-card":
    "M3 5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5Zm0 5h18M7 15h2m4 0h4",
  // alias: allow `card` name in some product feature arrays
  card:
    "M3 5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5Zm0 5h18M7 15h2m4 0h4",
  "qr-code":
    "M3 3h6v6H3V3Zm8 0h4v4h-4V3ZM3 11h4v4H3v-4Zm8 6h4v4h-4v-4Zm6-6h2v2h-2v-2Zm0 6h2v2h-2v-2Z",
  bank:
    "M3 21h18M3 10h18M5 6l7-3 7 3M4 10v11m16-11v11M8 14v3m4-3v3m4-3v3",
  lock:
    "M5 11V7a7 7 0 0 1 14 0v4M5 11h14a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2Zm7 5v2",
  bell:
    "M15 17h5l-1.405-1.405A2.032 2.032 0 0 1 18 14.158V11a6 6 0 1 0-12 0v3.159c0 .538-.214 1.055-.595 1.436L4 17h11Z",
  calendar:
    "M8 7V3m8 4V3M3 11h18M5 21h14a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2Z",
  template:
    "M3 4h18v16H3V4Zm4 4h10v8H7V8Z",
  webhook:
    "M7 7l3 3-3 3M17 7l-3 3 3 3M12 3v18",
  users:
    "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2m14-11a4 4 0 1 0-8 0 4 4 0 0 0 8 0Zm6 11v-2a4 4 0 0 0-3-3.9m-1-8.1a4 4 0 0 1 0 7.8",
  lightning:
    "M13 2 3 14h9l-1 8 10-12h-9l1-8Z",
  clock:
    "M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20Zm0-15v5l3 3",
  star:
    "m12 2 3.1 6.3 7 1-5.1 4.9 1.2 7L12 18l-6.2 3.2 1.2-7L2 9.3l7-1L12 2Z",
  menu:
    "M4 6h16M4 12h16M4 18h16",
  close:
    "M18 6 6 18M6 6l12 12",
  "chevron-down":
    "m6 9 6 6 6-6",
  facebook:
    "M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3V2Z",
  twitter:
    "M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2-3-.1-5-2.3-5.2-5.2.8.3 1.5.4 2.2.4a5 5 0 0 1-1.6-6.7C7 9.5 11 11 15.1 10.2a5 5 0 0 1 8.6-4.6c.8-.2 1.6-.5 2.3-.8-.3.9-.9 1.6-1.6 2.1.7 0 1.4-.2 2-.5-.4.7-1 1.3-1.6 1.8L22 4Z",
  linkedin:
    "M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6ZM2 9h4v12H2V9Zm2-6a2 2 0 1 1 0 4 2 2 0 0 1 0-4Z",
  instagram:
    "M3 8a5 5 0 0 1 5-5h8a5 5 0 0 1 5 5v8a5 5 0 0 1-5 5H8a5 5 0 0 1-5-5V8Zm9 8a4 4 0 1 0 0-8 4 4 0 0 0 0 8Zm5-9a1 1 0 1 0 0 2 1 1 0 0 0 0-2Z",
};

export function HugeIcon({
  name,
  size = 24,
  className,
  strokeWidth = 1.5,
}: HugeIconProps) {
  const path = iconPaths[name];

  if (!path) {
    console.warn(`HugeIcon: Icon "${name}" not found`);
    return null;
  }

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={cn("inline-block flex-shrink-0", className)}
      aria-hidden="true"
    >
      <path d={path} />
    </svg>
  );
}

export default HugeIcon;
