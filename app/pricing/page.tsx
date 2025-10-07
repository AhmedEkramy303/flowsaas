// app/pricing/page.tsx

import {PricingSection} from "@/components/landing/pricing-section"

export const metadata = {
  title: "Pricing – FlowSaaS",
  description: "Choose the plan that fits your business needs.",
}

export default function PricingPage() {
  return (
    <main className="min-h-screen py-16">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold mb-8 text-center">Pricing</h1>
        <PricingSection />
      </div>
    </main>
  )
}
