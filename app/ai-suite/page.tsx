// app/ai-suite/page.tsx
import Link from "next/link"
import { aiTools } from "@/lib/data/ai-tools"
import ProductCard from "@/components/ProductCard"

export const metadata = {
  title: "AI Suite – FlowSaaS",
  description: "Explore our AI-powered agents and tools.",
}

export default function AiSuitePage() {
  return (
    <main className="min-h-screen py-16">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold mb-8 text-center">AI Suite</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {aiTools.map((tool) => (
            <Link key={tool.id} href={tool.link}>
              <ProductCard {...tool} />
            </Link>
          ))}
        </div>
      </div>
    </main>
  )
}
