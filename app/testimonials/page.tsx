// app/testimonials/page.tsx

import TestimonialsSection from "@/components/landing/testimonials-section"

export const metadata = {
  title: "Testimonials – FlowSaaS",
  description: "See what our customers are saying about FlowSaaS.",
}

export default function TestimonialsPage() {
  return (
    <main className="min-h-screen py-16">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold mb-8 text-center">Testimonials</h1>
        <TestimonialsSection />
      </div>
    </main>
  )
}
