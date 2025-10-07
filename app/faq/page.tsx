// app/faq/page.tsx

import { FAQSection } from "@/components/landing/faq-section"

export const metadata = {
  title: "FAQ – FlowSaaS",
  description: "Frequently asked questions about FlowSaaS.",
}

export default function FaqPage() {
  return (
    <main className="min-h-screen py-16">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold mb-8 text-center">FAQ</h1>
        <FAQSection />
      </div>
    </main>
  )
}
