// components/ProductCard.tsx
import React from "react"

export interface ProductCardProps {
  id: string
  title: string
  description: string
  icon: React.ReactNode
  detailed?: boolean
}

export function ProductCard({ title, description, icon, detailed }: ProductCardProps) {
  return (
    <div
      className={`p-6 border border-border rounded-lg bg-card hover:shadow-lg transition ${
        detailed ? "max-w-2xl mx-auto" : ""
      }`}
    >
      <div className="flex items-center mb-4 space-x-4">
        <div className="text-4xl">{icon}</div>
        <h2 className="text-2xl font-semibold">{title}</h2>
      </div>
      <p className="text-muted-foreground">{description}</p>
    </div>
  )
}

export default ProductCard
