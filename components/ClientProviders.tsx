// components/ClientProviders.tsx
"use client"

import React, { Suspense } from "react"
import { SessionProvider } from "next-auth/react"
import { ThemeProvider } from "@/components/ui/theme-provider"

export default function ClientProviders({ children }: { children: React.ReactNode }) {
  return (
    <SessionProvider>
      <ThemeProvider>
        <Suspense fallback={null}>{children}</Suspense>
      </ThemeProvider>
    </SessionProvider>
  )
}
