// app/products/page.tsx
import Link from "next/link"
import { products } from "@/lib/data/products"
import ProductCard from "@/components/ProductCard"

export const metadata = {
  title: "Products – FlowSaaS",
  description: "Browse our suite of products and tools.",
}

export default function ProductsPage() {
  return (
    <main className="min-h-screen py-16">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold mb-8 text-center">Products</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <Link key={product.id} href={product.link}>
              <ProductCard {...product} />
            </Link>
          ))}
        </div>
      </div>
    </main>
  )
}
