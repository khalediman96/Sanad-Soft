import type { Metadata } from "next";
import { Inter, Cairo } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/context/useLanguage";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const cairo = Cairo({
  variable: "--font-cairo",
  subsets: ["arabic", "latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Sanad-Soft | Digital Financial Solutions for Sudan & MENA",
  description:
    "Empowering businesses with secure, scalable payment infrastructure. SanadPay - your trusted e-wallet and payment gateway for the MENA region.",
  keywords: [
    "SanadPay",
    "digital payments",
    "e-wallet",
    "payment gateway",
    "Sudan fintech",
    "MENA payments",
    "financial solutions",
  ],
  authors: [{ name: "Sanad-Soft" }],
  openGraph: {
    title: "Sanad-Soft | Digital Financial Solutions",
    description:
      "Empowering businesses with secure, scalable payment infrastructure across Sudan and MENA.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sanad-Soft | Digital Financial Solutions",
    description:
      "Empowering businesses with secure, scalable payment infrastructure across Sudan and MENA.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl" className="scroll-smooth" suppressHydrationWarning>
      <body className={`${inter.variable} ${cairo.variable} font-cairo antialiased`}>
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}
