"use client"

import { useState, useEffect } from "react"
import { X } from "lucide-react"
import { Button } from "@/components/ui/button"

const announcements = [
  "🚚 Retiro gratuito en Montevideo - Ahorra en envío",
  "✨ 20% OFF en figuras de anime - Solo esta semana",
  "🎯 Diseños personalizados desde $800 UYU",
  "📦 Nuevos materiales disponibles: PETG y TPU",
]

export function AnnouncementBar() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % announcements.length)
    }, 4000)

    return () => clearInterval(interval)
  }, [])

  if (!isVisible) return null

  return (
    <div className="bg-primary text-primary-foreground py-2 px-4 text-center relative">
      <div className="container mx-auto max-w-7xl">
        <p className="text-sm font-medium">{announcements[currentIndex]}</p>
      </div>
      <Button
        variant="ghost"
        size="sm"
        className="absolute right-2 top-1/2 transform -translate-y-1/2 h-6 w-6 p-0 text-primary-foreground hover:bg-primary-foreground/20"
        onClick={() => setIsVisible(false)}
      >
        <X className="h-3 w-3" />
      </Button>
    </div>
  )
}
