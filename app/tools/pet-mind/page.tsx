// app/tools/pet-mind/page.tsx

import { notFound } from "next/navigation"
import { aiTools } from "@/lib/data/ai-tools"
import ProductCard from "@/components/ProductCard"

export const metadata = {
  title: "PetMind AI – FlowSaaS",
  description: "Generate fun pet profiles and care tips with PetMind AI.",
}

export default function PetMindPage() {
  const tool = aiTools.find((t) => t.id === "pet-mind")
  if (!tool) notFound()

  return (
    <main className="min-h-screen py-16">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold mb-4">{tool.title}</h1>
        <p className="mb-8 text-lg text-muted-foreground">{tool.description}</p>
        <ProductCard {...tool} detailed />
      </div>
    </main>
  )
}
