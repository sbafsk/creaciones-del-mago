"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { MediaGallery } from "@/components/media-gallery"
import { ProductOptions } from "@/components/product-options"
import { ProductTabs } from "@/components/product-tabs"
import { CustomizationModal } from "@/components/customization-modal"
import { Star, ShoppingCart, Heart, Share2, Truck, Shield, RotateCcw } from "lucide-react"
import Link from "next/link"

interface Product {
  id: string
  title: string
  price: number
  currency: string
  rating: number
  reviewCount: number
  category: string
  tags: string[]
  images: string[]
  shortDescription: string
  fullDescription: string
  stockStatus: "in_stock" | "low_stock" | "out_of_stock"
  isNew?: boolean
  isPopular?: boolean
  material: string
  color: string
  specs: Record<string, string>
  options: Record<string, string[]>
  shipping: {
    freeShipping: boolean
    estimatedDays: string
    pickupAvailable: boolean
  }
}

interface ProductDetailContentProps {
  product: Product
}

export function ProductDetailContent({ product }: ProductDetailContentProps) {
  const [selectedOptions, setSelectedOptions] = useState<Record<string, string>>({})
  const [quantity, setQuantity] = useState(1)
  const [isCustomizationOpen, setIsCustomizationOpen] = useState(false)

  const isOutOfStock = product.stockStatus === "out_of_stock"

  return (
    <div className="container mx-auto max-w-7xl px-4 py-8">
      {/* Breadcrumb */}
      <nav className="flex items-center space-x-2 text-sm text-muted-foreground mb-8">
        <Link href="/" className="hover:text-foreground">
          Inicio
        </Link>
        <span>/</span>
        <Link href="/catalog" className="hover:text-foreground">
          Catálogo
        </Link>
        <span>/</span>
        <Link href={`/catalog?category=${encodeURIComponent(product.category)}`} className="hover:text-foreground">
          {product.category}
        </Link>
        <span>/</span>
        <span className="text-foreground">{product.title}</span>
      </nav>

      <div className="grid lg:grid-cols-2 gap-12 mb-12">
        {/* Media Gallery */}
        <div>
          <MediaGallery images={product.images} title={product.title} />
        </div>

        {/* Product Info */}
        <div>
          <div className="mb-4">
            <Badge variant="outline" className="mb-2">
              {product.category}
            </Badge>
            {product.isNew && <Badge className="ml-2 bg-green-600">Nuevo</Badge>}
            {product.isPopular && <Badge className="ml-2 bg-orange-600">Popular</Badge>}
          </div>

          <h1 className="text-3xl font-bold text-foreground mb-4 text-balance">{product.title}</h1>

          {/* Rating */}
          <div className="flex items-center gap-2 mb-4">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`h-5 w-5 ${
                    i < Math.floor(product.rating) ? "fill-yellow-400 text-yellow-400" : "text-muted-foreground"
                  }`}
                />
              ))}
            </div>
            <span className="text-sm text-muted-foreground">
              {product.rating} ({product.reviewCount} reseñas)
            </span>
          </div>

          {/* Price */}
          <div className="text-3xl font-bold text-foreground mb-6">
            ${product.price} {product.currency}
          </div>

          {/* Short Description */}
          <p className="text-muted-foreground mb-6 text-pretty">{product.shortDescription}</p>

          {/* Stock Status */}
          <div className="mb-6">
            {product.stockStatus === "in_stock" && (
              <div className="flex items-center text-green-600">
                <div className="w-2 h-2 bg-green-600 rounded-full mr-2"></div>
                En stock - Listo para enviar
              </div>
            )}
            {product.stockStatus === "low_stock" && (
              <div className="flex items-center text-orange-600">
                <div className="w-2 h-2 bg-orange-600 rounded-full mr-2"></div>
                Pocas unidades disponibles
              </div>
            )}
            {product.stockStatus === "out_of_stock" && (
              <div className="flex items-center text-red-600">
                <div className="w-2 h-2 bg-red-600 rounded-full mr-2"></div>
                Agotado
              </div>
            )}
          </div>

          {/* Product Options */}
          <ProductOptions
            options={product.options}
            selectedOptions={selectedOptions}
            onOptionsChange={setSelectedOptions}
            quantity={quantity}
            onQuantityChange={setQuantity}
          />

          {/* Actions */}
          <div className="space-y-4 mb-6">
            <div className="flex gap-3">
              <Button size="lg" className="flex-1" disabled={isOutOfStock}>
                <ShoppingCart className="h-5 w-5 mr-2" />
                {isOutOfStock ? "Agotado" : "Agregar al Carrito"}
              </Button>
              <Button variant="outline" size="lg">
                <Heart className="h-5 w-5" />
              </Button>
              <Button variant="outline" size="lg">
                <Share2 className="h-5 w-5" />
              </Button>
            </div>

            <Button
              variant="outline"
              size="lg"
              className="w-full bg-transparent"
              onClick={() => setIsCustomizationOpen(true)}
            >
              Solicitar Personalización
            </Button>
          </div>

          {/* Shipping Info */}
          <div className="space-y-3 p-4 bg-card rounded-lg border">
            <div className="flex items-center text-sm">
              <Truck className="h-4 w-4 mr-2 text-muted-foreground" />
              <span>
                {product.shipping.freeShipping ? "Envío gratuito" : "Envío disponible"} -{" "}
                {product.shipping.estimatedDays}
              </span>
            </div>
            {product.shipping.pickupAvailable && (
              <div className="flex items-center text-sm">
                <Shield className="h-4 w-4 mr-2 text-muted-foreground" />
                <span>Retiro gratuito en Montevideo</span>
              </div>
            )}
            <div className="flex items-center text-sm">
              <RotateCcw className="h-4 w-4 mr-2 text-muted-foreground" />
              <span>Devoluciones dentro de 30 días</span>
            </div>
          </div>
        </div>
      </div>

      <Separator className="mb-12" />

      {/* Product Tabs */}
      <ProductTabs product={product} />

      {/* Customization Modal */}
      <CustomizationModal
        isOpen={isCustomizationOpen}
        onClose={() => setIsCustomizationOpen(false)}
        product={product}
      />
    </div>
  )
}
