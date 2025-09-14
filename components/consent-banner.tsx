"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { X, Shield, Settings } from "lucide-react"
import { analytics } from "@/lib/analytics"

export function ConsentBanner() {
  const [isVisible, setIsVisible] = useState(false)
  const [showDetails, setShowDetails] = useState(false)

  useEffect(() => {
    // Show banner only on first visit if no consent stored
    const hasConsent = localStorage.getItem("analytics-consent")
    if (!hasConsent) {
      setIsVisible(true)
    }
  }, [])

  const handleAcceptAll = () => {
    analytics.setConsent(true)
    setIsVisible(false)
  }

  const handleRejectAll = () => {
    analytics.setConsent(false)
    setIsVisible(false)
  }

  const handleClose = () => {
    // If user closes without choosing, default to no consent
    analytics.setConsent(false)
    setIsVisible(false)
  }

  if (!isVisible) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4">
      <Card className="mx-auto max-w-4xl bg-surface border-border shadow-xl">
        <div className="p-6">
          <div className="flex items-start gap-4">
            <Shield className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
            <div className="flex-1">
              <h3 className="text-lg font-semibold text-foreground mb-2">Respetamos tu privacidad</h3>
              <p className="text-muted-foreground mb-4">
                Utilizamos cookies y tecnologías similares para mejorar tu experiencia, analizar el tráfico del sitio y
                personalizar el contenido. Podés elegir qué categorías aceptar.
              </p>

              {showDetails && (
                <div className="mb-4 p-4 bg-background rounded-lg border border-border">
                  <h4 className="font-medium text-foreground mb-2">Categorías de cookies:</h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>
                      • <strong>Esenciales:</strong> Necesarias para el funcionamiento básico del sitio
                    </li>
                    <li>
                      • <strong>Analíticas:</strong> Nos ayudan a entender cómo usás el sitio
                    </li>
                    <li>
                      • <strong>Marketing:</strong> Para mostrarte contenido relevante
                    </li>
                  </ul>
                </div>
              )}

              <div className="flex flex-wrap gap-3">
                <Button onClick={handleAcceptAll} className="bg-primary hover:bg-primary/90">
                  Aceptar todo
                </Button>
                <Button
                  variant="outline"
                  onClick={handleRejectAll}
                  className="border-border hover:bg-surfaceHover bg-transparent"
                >
                  Rechazar todo
                </Button>
                <Button
                  variant="ghost"
                  onClick={() => setShowDetails(!showDetails)}
                  className="text-muted-foreground hover:text-foreground"
                >
                  <Settings className="h-4 w-4 mr-2" />
                  {showDetails ? "Ocultar" : "Personalizar"}
                </Button>
              </div>
            </div>
            <Button
              variant="ghost"
              size="sm"
              onClick={handleClose}
              className="text-muted-foreground hover:text-foreground"
              aria-label="Cerrar banner de cookies"
            >
              <X className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </Card>
    </div>
  )
}
