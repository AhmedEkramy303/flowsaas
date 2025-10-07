// lib/data/products.ts
import React from "react"
import type { ReactNode } from "react"
import { Zap, BarChart2 } from "lucide-react"



export interface Product {
  id: string
  title: string
  description: string
  icon: ReactNode
  link: string
}

export const products: Product[] = [
  {
    id: "workflow-automation",
    title: "Workflow Automation",
    description: "Automate routine tasks and approvals.",
    icon: <Zap className="h-8 w-8 text-blue-500" />,
    link: "/products/workflow-automation",
  },
  {
    id: "analytics-dashboard",
    title: "Analytics Dashboard",
    description: "Get real-time insights into your data.",
    icon: <BarChart2 className="h-8 w-8 text-green-500" />,
    link: "/products/analytics-dashboard",
  },
  // المزيد من المنتجات...
]
