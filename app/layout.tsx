import React from "react";
import type { Metadata } from "next";
import { Inter, Playfair_Display, JetBrains_Mono } from "next/font/google";
import { Toaster } from "sonner";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://mencine.co.tz"),
  title: {
    default: "MENCINE CO LTD - Smoke-Free Thermal Waste Destruction",
    template: "%s | MENCINE CO LTD",
  },
  description:
    "Award-winning Tanzanian environmental technology company pioneering decentralized, smoke-free waste destruction infrastructure for hygiene products and bio-medical waste.",
  keywords: [
    "waste destruction",
    "smoke-free incinerator",
    "Tanzania environmental tech",
    "medical waste management",
    "sanitary pad disposal",
    "environmental technology",
    "Tanzania",
  ],
  authors: [{ name: "Mencine Co Ltd" }],
  creator: "Mencine Co Ltd",
  publisher: "Mencine Co Ltd",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_TZ",
    url: "https://mencine.co.tz",
    siteName: "MENCINE CO LTD",
    title: "MENCINE CO LTD - Environmental Technology Pioneers",
    description:
      "Decentralized, smoke-free waste destruction infrastructure for a cleaner Tanzania.",
    images: [
      {
        url: "/images/WIKI%20CLUB%20LOGO%20(5).png",
        width: 1200,
        height: 630,
        alt: "MENCINE CO LTD Waste Destruction Technology",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "MENCINE CO LTD",
    description: "Pioneering smoke-free waste destruction in Tanzania.",
    images: ["/images/impact.jpg"],
  },
  icons: {
    icon: [
      {
        url: "/images/WIKI%20CLUB%20LOGO%20(5).png",
        sizes: "32x32",
        type: "image/png",
      },
      {
        url: "/images/WIKI%20CLUB%20LOGO%20(5).png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        url: "/images/WIKI%20CLUB%20LOGO%20(5).png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
    apple: {
      url: "/images/WIKI%20CLUB%20LOGO%20(5).png",
      sizes: "180x180",
      type: "image/png",
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="bg-background" data-scroll-behavior="smooth">
      <body
        className={`${inter.variable} ${playfair.variable} ${jetbrainsMono.variable} font-sans antialiased`}
      >
        {children}
        <Toaster position="top-center" richColors />
        <Analytics />
      </body>
    </html>
  );
}
