import React from "react"
import type { Metadata } from 'next'
import { Inter, Playfair_Display, JetBrains_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const inter = Inter({ 
  subsets: ["latin"],
  variable: '--font-inter'
});

const playfair = Playfair_Display({ 
  subsets: ["latin"],
  variable: '--font-playfair'
});

const jetbrainsMono = JetBrains_Mono({ 
  subsets: ["latin"],
  variable: '--font-jetbrains'
});

export const metadata: Metadata = {
  title: 'MENCINE CO LTD - Smoke-Free Thermal Waste Destruction',
  description: 'Award-winning Tanzanian environmental technology company pioneering decentralized, smoke-free waste destruction infrastructure for hygiene products and bio-medical waste.',
  generator: 'v0.app',
  icons: {
    icon: [
      { url: '/images/WIKI%20CLUB%20LOGO%20(5).png', sizes: '32x32',  type: 'image/png' },
      { url: '/images/WIKI%20CLUB%20LOGO%20(5).png', sizes: '192x192', type: 'image/png' },
      { url: '/images/WIKI%20CLUB%20LOGO%20(5).png', sizes: '512x512', type: 'image/png' },
    ],
    apple: { url: '/images/WIKI%20CLUB%20LOGO%20(5).png', sizes: '180x180', type: 'image/png' },
  },


}


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="bg-background" data-scroll-behavior="smooth">
      <body className={`${inter.variable} ${playfair.variable} ${jetbrainsMono.variable} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
