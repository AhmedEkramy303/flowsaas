"use client"

import { motion } from "framer-motion"
import { CheckCircle2, XCircle, AlertCircle } from "lucide-react"

const activities = [
  {
    id: 1,
    type: "success",
    message: "New user registered",
    time: "2 minutes ago",
  },
  {
    id: 2,
    type: "warning",
    message: "Payment pending",
    time: "15 minutes ago",
  },
  {
    id: 3,
    type: "success",
    message: "Order completed",
    time: "1 hour ago",
  },
  {
    id: 4,
    type: "error",
    message: "Failed login attempt",
    time: "2 hours ago",
  },
  {
    id: 5,
    type: "success",
    message: "New subscription",
    time: "3 hours ago",
  },
]

const iconMap = {
  success: CheckCircle2,
  warning: AlertCircle,
  error: XCircle,
}

const colorMap = {
  success: "text-green-600",
  warning: "text-yellow-600",
  error: "text-red-600",
}

export function RecentActivity() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.5 }}
      className="bg-card border border-border rounded-xl p-6"
    >
      <h3 className="text-lg font-semibold text-foreground mb-6">Recent Activity</h3>
      <div className="space-y-4">
        {activities.map((activity) => {
          const Icon = iconMap[activity.type as keyof typeof iconMap]
          const color = colorMap[activity.type as keyof typeof colorMap]
          return (
            <div key={activity.id} className="flex items-start gap-3">
              <Icon className={`h-5 w-5 ${color} flex-shrink-0 mt-0.5`} />
              <div className="flex-1 min-w-0">
                <p className="text-sm text-foreground">{activity.message}</p>
                <p className="text-xs text-muted-foreground mt-1">{activity.time}</p>
              </div>
            </div>
          )
        })}
      </div>
    </motion.div>
  )
}
