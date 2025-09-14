"use client"

import { memo, useCallback } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Star, ShoppingCart, Eye } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useI18n } from "@/hooks/use-i18n"

interface Product {
  id: string
  title: string
  price: number
  currency: string
  rating: number
  category: string
  tags: string[]
  images: string[]
  shortDescription: string
  stockStatus: "in_stock" | "low_stock" | "out_of_stock"
  isNew?: boolean
  isPopular?: boolean
}

interface ProductCardProps {
  product: Product
  onAddToCart?: (productId: string) => void
}

const ProductCardComponent = ({ product, onAddToCart }: ProductCardProps) => {
  const { t, formatCurrency } = useI18n()
  const isOutOfStock = product.stockStatus === "out_of_stock"

  const handleAddToCart = useCallback(() => {
    if (onAddToCart && !isOutOfStock) {
      onAddToCart(product.id)
    }
  }, [onAddToCart, product.id, isOutOfStock])

  return (
    <Card className="group hover:shadow-lg transition-all duration-300 border-border hover:border-violet-600/50 overflow-hidden">
      <div className="relative aspect-square overflow-hidden">
        <Image
          src={product.images[0] || "/placeholder.svg"}
          alt={product.title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-300"
        />

        {/* Badges */}
        <div className="absolute top-3 left-3 flex flex-col gap-2">
          {product.isNew && <Badge className="bg-green-600 hover:bg-green-700">{t("products.new")}</Badge>}
          {product.isPopular && <Badge className="bg-orange-600 hover:bg-orange-700">{t("products.popular")}</Badge>}
          {product.stockStatus === "low_stock" && <Badge variant="destructive">{t("products.lowStock")}</Badge>}
        </div>

        {/* Hover overlay */}
        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <Button asChild variant="secondary" size="sm">
            <Link href={`/products/${product.id}`} aria-label={`${t("products.quickView")}: ${product.title}`}>
              <Eye className="h-4 w-4 mr-2" />
              {t("products.quickView")}
            </Link>
          </Button>
        </div>
      </div>

      <CardContent className="p-4">
        {/* Category */}
        <Badge variant="outline" className="mb-2 text-xs">
          {product.category}
        </Badge>

        {/* Title */}
        <h3 className="font-semibold text-foreground mb-2 line-clamp-2 group-hover:text-violet-600 transition-colors">
          <Link href={`/products/${product.id}`}>{product.title}</Link>
        </h3>

        {/* Rating */}
        <div
          className="flex items-center gap-1 mb-2"
          role="img"
          aria-label={t("accessibility.starRating", { rating: product.rating })}
        >
          <div className="flex">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`h-3 w-3 ${
                  i < Math.floor(product.rating) ? "fill-yellow-400 text-yellow-400" : "text-muted-foreground"
                }`}
                aria-hidden="true"
              />
            ))}
          </div>
          <span className="text-xs text-muted-foreground">({product.rating})</span>
        </div>

        {/* Price */}
        <div className="text-lg font-bold text-foreground mb-3">{formatCurrency(product.price)}</div>

        {/* Actions */}
        <div className="flex gap-2">
          <Button
            size="sm"
            className="flex-1"
            disabled={isOutOfStock}
            onClick={handleAddToCart}
            aria-label={isOutOfStock ? t("products.outOfStock") : `${t("products.addToCart")}: ${product.title}`}
          >
            <ShoppingCart className="h-4 w-4 mr-2" />
            {isOutOfStock ? t("products.outOfStock") : t("products.addToCart")}
          </Button>
          <Button asChild variant="ghost" size="sm" aria-label={`${t("products.quickView")}: ${product.title}`}>
            <Link href={`/products/${product.id}`}>
              <Eye className="h-4 w-4" />
              <span className="sr-only">{t("products.quickView")}</span>
            </Link>
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}

export const ProductCard = memo(ProductCardComponent)
