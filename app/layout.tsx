import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import "./globals.css"

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
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable} antialiased`}>
        <Suspense fallback={null}>{children}</Suspense>
        <Analytics />
      </body>
    </html>
  )
}
