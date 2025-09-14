"use client"

import { MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { analytics } from "@/lib/analytics"

interface WhatsAppButtonProps {
  message?: string
  source: string
  productId?: string
  className?: string
  variant?: "default" | "outline" | "ghost"
  size?: "sm" | "default" | "lg"
  children?: React.ReactNode
}

export function WhatsAppButton({
  message = "¡Hola! Me interesa conocer más sobre sus servicios de impresión 3D.",
  source,
  productId,
  className,
  variant = "default",
  size = "default",
  children,
}: WhatsAppButtonProps) {
  const phoneNumber = "59899123456" // Replace with actual WhatsApp number

  const handleClick = () => {
    analytics.whatsappClick({ source, product_id: productId })

    const encodedMessage = encodeURIComponent(message)
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`

    // Try to open WhatsApp, fallback to web version
    try {
      window.open(whatsappUrl, "_blank")
    } catch {
      // Fallback for browsers that don't support window.open
      window.location.href = whatsappUrl
    }
  }

  return (
    <Button onClick={handleClick} variant={variant} size={size} className={className}>
      {children || (
        <>
          <MessageCircle className="h-4 w-4 mr-2" />
          Contactar por WhatsApp
        </>
      )}
    </Button>
  )
}

// Sticky mobile WhatsApp button
export function StickyWhatsAppButton() {
  return (
    <div className="fixed bottom-4 right-4 z-40 md:hidden">
      <WhatsAppButton
        source="sticky_mobile"
        className="rounded-full shadow-lg bg-green-500 hover:bg-green-600 text-white"
        size="lg"
      >
        <MessageCircle className="h-5 w-5" />
      </WhatsAppButton>
    </div>
  )
}
