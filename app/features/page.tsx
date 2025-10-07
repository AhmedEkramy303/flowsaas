// app/features/page.tsx

import {FeaturesSection} from "@/components/landing/features-section"

export const metadata = {
  title: "Features – FlowSaaS",
  description: "Explore the powerful features of FlowSaaS.",
}

export default function FeaturesPage() {
  return (
    <main className="min-h-screen py-16">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold mb-8 text-center">Features</h1>
        <FeaturesSection />
      </div>
    </main>
  )
}
