import type React from "react"
import { cn } from "@/lib/utils"

interface GlassCardProps {
  children: React.ReactNode
  className?: string
  hover?: boolean
}

export function GlassCard({ children, className, hover = false }: GlassCardProps) {
  return (
    <div
      className={cn(
        "glass rounded-xl p-6",
        hover && "transition-all duration-300 hover:scale-105 hover:glow-purple cursor-pointer",
        className,
      )}
    >
      {children}
    </div>
  )
}
