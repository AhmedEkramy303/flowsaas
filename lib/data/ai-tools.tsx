// lib/data/ai-tools.tsx
import React from "react"
import type { ReactNode } from "react"
import { Bot, Code, MessageCircle } from "lucide-react"

export interface AITool {
  id: string
  title: string
  description: string
  icon: ReactNode
  link: string
}

export const aiTools: AITool[] = [
  {
    id: "pet-mind",
    title: "PetMind AI",
    description: "Generate fun pet profiles and care tips.",
    icon: <Bot className="h-8 w-8 text-purple-500" />,
    link: "/tools/pet-mind",
  },
  {
    id: "code-helper",
    title: "Code Helper",
    description: "AI assistant for coding suggestions.",
    icon: <Code className="h-8 w-8 text-indigo-500" />,
    link: "/ai-suite/code-helper",
  },
  {
    id: "chat-agent",
    title: "Chat Agent",
    description: "Conversational AI for customer support.",
    icon: <MessageCircle className="h-8 w-8 text-teal-500" />,
    link: "/ai-suite/chat-agent",
  },
  // أضف أدوات إضافية حسب الحاجة
]
