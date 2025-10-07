// app/layout.tsx

import React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import Navbar from "@/components/landing/navbar"
import Footer from "@/components/landing/footer"
import ClientProviders from "@/components/ClientProviders"

export const metadata: Metadata = {
  title: "FlowSaaS - Modern Business Solutions",
  description:
    "Transform your business with our cutting-edge SaaS platform. Streamline operations, boost productivity, and scale effortlessly.",
  keywords: "SaaS, business software, productivity, automation, analytics",
  openGraph: {
    title: "FlowSaaS - Modern Business Solutions",
    description: "Transform your business with our cutting-edge SaaS platform.",
    type: "website",
    url: "https://flowsaas.com",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "FlowSaaS Platform",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "FlowSaaS - Modern Business Solutions",
    description: "Transform your business with our cutting-edge SaaS platform.",
    images: ["/og-image.png"],
  },
  generator: "v0.app",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${GeistSans.variable} ${GeistMono.variable}`}
    >
      <body className="font-sans antialiased">
        <ClientProviders>
          <Navbar />
          {children}
          <Footer />
        </ClientProviders>
        <Analytics />
      </body>
    </html>
  )
}
