"use client"

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Star } from "lucide-react"

interface Product {
  id: string
  title: string
  fullDescription: string
  specs: Record<string, string>
  shipping: {
    freeShipping: boolean
    estimatedDays: string
    pickupAvailable: boolean
  }
}

interface ProductTabsProps {
  product: Product
}

// Mock reviews data
const mockReviews = [
  {
    id: 1,
    author: "María González",
    rating: 5,
    date: "2024-01-15",
    title: "Excelente calidad",
    content: "Superó mis expectativas. La calidad de impresión es impresionante y llegó muy rápido.",
    verified: true,
  },
  {
    id: 2,
    author: "Carlos Rodríguez",
    rating: 4,
    date: "2024-01-10",
    title: "Muy bueno",
    content: "Producto tal como se describe. Muy útil para camping. Recomendado.",
    verified: true,
  },
  {
    id: 3,
    author: "Ana Martínez",
    rating: 5,
    date: "2024-01-05",
    title: "Perfecto",
    content: "Exactamente lo que necesitaba. El acabado es profesional y el material se siente resistente.",
    verified: false,
  },
]

export function ProductTabs({ product }: ProductTabsProps) {
  return (
    <Tabs defaultValue="description" className="w-full">
      <TabsList className="grid w-full grid-cols-4">
        <TabsTrigger value="description">Descripción</TabsTrigger>
        <TabsTrigger value="specs">Especificaciones</TabsTrigger>
        <TabsTrigger value="reviews">Reseñas</TabsTrigger>
        <TabsTrigger value="shipping">Envío y Devoluciones</TabsTrigger>
      </TabsList>

      <TabsContent value="description" className="mt-6">
        <Card>
          <CardContent className="p-6">
            <div className="prose prose-gray max-w-none">
              <p className="text-muted-foreground leading-relaxed">{product.fullDescription}</p>
            </div>
          </CardContent>
        </Card>
      </TabsContent>

      <TabsContent value="specs" className="mt-6">
        <Card>
          <CardContent className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {Object.entries(product.specs).map(([key, value]) => (
                <div
                  key={key}
                  className="flex justify-between items-center py-2 border-b border-border last:border-b-0"
                >
                  <span className="font-medium capitalize">{key.replace(/([A-Z])/g, " $1").trim()}:</span>
                  <span className="text-muted-foreground">{value}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </TabsContent>

      <TabsContent value="reviews" className="mt-6">
        <div className="space-y-6">
          {mockReviews.map((review) => (
            <Card key={review.id}>
              <CardContent className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="font-medium">{review.author}</span>
                      {review.verified && (
                        <Badge variant="secondary" className="text-xs">
                          Compra verificada
                        </Badge>
                      )}
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="flex">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`h-4 w-4 ${
                              i < review.rating ? "fill-yellow-400 text-yellow-400" : "text-muted-foreground"
                            }`}
                          />
                        ))}
                      </div>
                      <span className="text-sm text-muted-foreground">{review.date}</span>
                    </div>
                  </div>
                </div>
                <h4 className="font-medium mb-2">{review.title}</h4>
                <p className="text-muted-foreground">{review.content}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </TabsContent>

      <TabsContent value="shipping" className="mt-6">
        <Card>
          <CardContent className="p-6">
            <div className="space-y-6">
              <div>
                <h3 className="font-semibold mb-3">Información de Envío</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Envío gratuito en compras superiores a $1000 UYU</li>
                  <li>• Retiro gratuito en nuestro local de Montevideo</li>
                  <li>• Tiempo estimado de entrega: {product.shipping.estimatedDays}</li>
                  <li>• Envíos a todo Uruguay a través de DAC</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold mb-3">Política de Devoluciones</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Devoluciones gratuitas dentro de 30 días</li>
                  <li>• El producto debe estar en condiciones originales</li>
                  <li>• Reembolso completo o cambio por otro producto</li>
                  <li>• Contacta con nosotros para iniciar una devolución</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </TabsContent>
    </Tabs>
  )
}
