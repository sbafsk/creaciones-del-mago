import type { ReactNode } from "react"
import { cn } from "@/lib/utils"

interface SectionProps {
  children: ReactNode
  className?: string
  title?: string
  subtitle?: string
  actions?: ReactNode
}

export function Section({ children, className, title, subtitle, actions }: SectionProps) {
  return (
    <section className={cn("py-16", className)}>
      <div className="container mx-auto max-w-7xl px-4">
        {(title || subtitle || actions) && (
          <div className="text-center mb-12">
            {title && <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">{title}</h2>}
            {subtitle && <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">{subtitle}</p>}
            {actions && <div className="mt-6">{actions}</div>}
          </div>
        )}
        {children}
      </div>
    </section>
  )
}
