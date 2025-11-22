import { cn } from "@/lib/utils"

interface SectionHeadingProps {
  title: string
  subtitle?: string
  className?: string
  centered?: boolean
}

export function SectionHeading({ title, subtitle, className, centered = true }: SectionHeadingProps) {
  return (
    <div className={cn(centered && "text-center", className)}>
      <h2 className="text-4xl md:text-5xl font-bold mb-4 text-balance">{title}</h2>
      {subtitle && <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">{subtitle}</p>}
    </div>
  )
}
