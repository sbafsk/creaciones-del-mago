import type { Metadata } from "next"
import { ProductDetailContent } from "@/components/product-detail-content"
import { StructuredData } from "@/components/structured-data"
import { generateProductSchema } from "@/lib/seo"
import { notFound } from "next/navigation"

interface ProductDetail {
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
  specs: {
    material: string
    weight: string
    dimensions: string
    loadCapacity?: string
    scale?: string
    printTime: string
    layerHeight: string
  }
  options: {
    colors?: string[]
    sizes?: string[]
    scales?: string[]
    finishes?: string[]
  }
  shipping: {
    freeShipping: boolean
    estimatedDays: string
    pickupAvailable: boolean
  }
}

// Mock product data - in a real app this would come from a database
const products: Record<string, ProductDetail> = {
  "camping-hook-001": {
    id: "camping-hook-001",
    title: "Gancho Ultraliviano Camping",
    price: 450,
    currency: "UYU",
    rating: 4.7,
    reviewCount: 23,
    category: "Camping & Outdoor",
    tags: ["liviano", "resistente"],
    images: [
      "/camping-hook-3d-printed.jpg",
      "/camping-hook-3d-printed.jpg",
      "/camping-hook-3d-printed.jpg",
      "/camping-hook-3d-printed.jpg",
    ],
    shortDescription: "Gancho resistente y liviano impreso en PETG para tu próxima aventura.",
    fullDescription:
      "Este gancho ultraliviano está diseñado específicamente para entusiastas del camping que buscan equipos confiables sin peso extra. Impreso en PETG de alta calidad, ofrece la resistencia necesaria para soportar cargas importantes mientras mantiene un peso mínimo. Su diseño ergonómico facilita el uso con guantes y su acabado suave evita daños en otros equipos.",
    stockStatus: "in_stock",
    isNew: true,
    material: "PETG",
    color: "Negro",
    specs: {
      material: "PETG",
      weight: "18g",
      dimensions: "60×40×8mm",
      loadCapacity: "15kg",
      printTime: "2 horas",
      layerHeight: "0.2mm",
    },
    options: {
      colors: ["Negro", "Verde Militar", "Azul Marino"],
      sizes: ["Estándar", "Grande"],
    },
    shipping: {
      freeShipping: true,
      estimatedDays: "2-3 días laborales",
      pickupAvailable: true,
    },
  },
  "anime-figure-001": {
    id: "anime-figure-001",
    title: "Figura Goku Super Saiyan",
    price: 1200,
    currency: "UYU",
    rating: 4.9,
    reviewCount: 45,
    category: "Anime & Geek",
    tags: ["anime", "coleccionable"],
    images: [
      "/goku-figure-3d-printed-anime.jpg",
      "/goku-figure-3d-printed-anime.jpg",
      "/goku-figure-3d-printed-anime.jpg",
      "/goku-figure-3d-printed-anime.jpg",
    ],
    shortDescription: "Figura detallada de Goku en pose icónica, pintada a mano.",
    fullDescription:
      "Figura de colección de Goku Super Saiyan en su pose más icónica. Cada figura es impresa con precisión milimétrica y pintada a mano por nuestros artistas especializados. Los detalles incluyen músculos definidos, expresión facial característica y efectos de energía. Perfecta para coleccionistas y fans de Dragon Ball.",
    stockStatus: "in_stock",
    isPopular: true,
    material: "PLA",
    color: "Multicolor",
    specs: {
      material: "PLA Premium",
      weight: "150g",
      dimensions: "180×120×80mm",
      scale: "1:8",
      printTime: "8 horas",
      layerHeight: "0.1mm",
    },
    options: {
      scales: ["1:10", "1:8", "1:6"],
      finishes: ["Pintado a mano", "Sin pintar"],
    },
    shipping: {
      freeShipping: false,
      estimatedDays: "5-7 días laborales",
      pickupAvailable: true,
    },
  },
}

interface ProductPageProps {
  params: {
    id: string
  }
}

export async function generateMetadata({ params }: ProductPageProps): Promise<Metadata> {
  const product = products[params.id as keyof typeof products]

  if (!product) {
    return {
      title: "Producto no encontrado | Creaciones del Mago",
      description: "El producto que buscas no está disponible.",
    }
  }

  return {
    title: `${product.title} | Creaciones del Mago`,
    description: `${product.shortDescription} Precio: $${product.price} ${product.currency}. ${product.stockStatus === "in_stock" ? "Disponible ahora" : "Consultar disponibilidad"}.`,
    keywords: [
      product.title,
      product.category,
      ...product.tags,
      "impresión 3D",
      "Montevideo",
      "Uruguay",
      product.material,
    ],
    openGraph: {
      title: `${product.title} | Creaciones del Mago`,
      description: product.shortDescription,
      url: `https://creacionesdelmago.com/products/${product.id}`,
      images: product.images.map((image) => ({
        url: image,
        width: 800,
        height: 600,
        alt: product.title,
      })),
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: `${product.title} | Creaciones del Mago`,
      description: product.shortDescription,
      images: [product.images[0]],
    },
    alternates: {
      canonical: `https://creacionesdelmago.com/products/${product.id}`,
    },
  }
}

export default function ProductPage({ params }: ProductPageProps) {
  const product = products[params.id as keyof typeof products]

  if (!product) {
    notFound()
  }

  const productSchema = generateProductSchema({
    name: product.title,
    description: product.fullDescription,
    image: product.images.map((img) => `https://creacionesdelmago.com${img}`),
    sku: product.id,
    brand: "Creaciones del Mago",
    category: product.category,
    offers: {
      price: product.price,
      priceCurrency: product.currency,
      availability: product.stockStatus === "in_stock" ? "InStock" : "OutOfStock",
      url: `https://creacionesdelmago.com/products/${product.id}`,
    },
    aggregateRating: {
      ratingValue: product.rating,
      reviewCount: product.reviewCount,
    },
  })

  return (
    <>
      <StructuredData data={productSchema} />
      <ProductDetailContent product={product} />
    </>
  )
}
