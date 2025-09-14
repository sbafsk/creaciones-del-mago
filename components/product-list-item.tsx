import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Star, ShoppingCart, Eye } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

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
  material?: string
  color?: string
}

interface ProductListItemProps {
  product: Product
}

export function ProductListItem({ product }: ProductListItemProps) {
  const isOutOfStock = product.stockStatus === "out_of_stock"

  return (
    <Card className="group hover:shadow-lg transition-all duration-300 border-border hover:border-violet-600/50">
      <CardContent className="p-4">
        <div className="flex gap-4">
          {/* Product Image */}
          <div className="relative w-32 h-32 flex-shrink-0 overflow-hidden rounded-lg">
            <Image
              src={product.images[0] || "/placeholder.svg"}
              alt={product.title}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-300"
            />

            {/* Badges */}
            <div className="absolute top-2 left-2 flex flex-col gap-1">
              {product.isNew && <Badge className="bg-green-600 hover:bg-green-700 text-xs">Nuevo</Badge>}
              {product.isPopular && <Badge className="bg-orange-600 hover:bg-orange-700 text-xs">Popular</Badge>}
            </div>
          </div>

          {/* Product Info */}
          <div className="flex-1 min-w-0">
            <div className="flex items-start justify-between mb-2">
              <div className="flex-1 min-w-0">
                <Badge variant="outline" className="mb-2 text-xs">
                  {product.category}
                </Badge>
                <h3 className="font-semibold text-foreground mb-1 group-hover:text-violet-600 transition-colors">
                  <Link href={`/products/${product.id}`} className="line-clamp-2">
                    {product.title}
                  </Link>
                </h3>
                <p className="text-sm text-muted-foreground line-clamp-2 mb-2">{product.shortDescription}</p>
              </div>
              <div className="text-right ml-4">
                <div className="text-xl font-bold text-foreground">
                  ${product.price} {product.currency}
                </div>
              </div>
            </div>

            {/* Rating and Details */}
            <div className="flex items-center gap-4 mb-3">
              <div className="flex items-center gap-1">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`h-3 w-3 ${
                        i < Math.floor(product.rating) ? "fill-yellow-400 text-yellow-400" : "text-muted-foreground"
                      }`}
                    />
                  ))}
                </div>
                <span className="text-xs text-muted-foreground">({product.rating})</span>
              </div>

              {product.material && <span className="text-xs text-muted-foreground">Material: {product.material}</span>}

              {product.color && <span className="text-xs text-muted-foreground">Color: {product.color}</span>}

              {product.stockStatus === "low_stock" && <Badge variant="destructive">Pocas unidades</Badge>}
            </div>

            {/* Actions */}
            <div className="flex gap-2">
              <Button size="sm" disabled={isOutOfStock}>
                <ShoppingCart className="h-4 w-4 mr-2" />
                {isOutOfStock ? "Agotado" : "Agregar al Carrito"}
              </Button>
              <Button asChild variant="outline" size="sm">
                <Link href={`/products/${product.id}`}>
                  <Eye className="h-4 w-4 mr-2" />
                  Ver Detalles
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
