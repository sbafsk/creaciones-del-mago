import { Section } from "@/components/section"
import { ProductCard } from "@/components/product-card"
import { Button } from "@/components/ui/button"
import Link from "next/link"

// Mock featured products data
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

const featuredProducts: Product[] = [
  {
    id: "camping-hook-001",
    title: "Gancho Ultraliviano Camping",
    price: 450,
    currency: "UYU",
    rating: 4.7,
    category: "Camping & Outdoor",
    tags: ["liviano", "resistente"],
    images: ["/camping-hook-3d-printed.jpg"],
    shortDescription: "Gancho resistente y liviano impreso en PETG para tu próxima aventura.",
    stockStatus: "in_stock",
    isNew: true,
  },
  {
    id: "anime-figure-001",
    title: "Figura Goku Super Saiyan",
    price: 1200,
    currency: "UYU",
    rating: 4.9,
    category: "Anime & Geek",
    tags: ["anime", "coleccionable"],
    images: ["/goku-figure-3d-printed-anime.jpg"],
    shortDescription: "Figura detallada de Goku en pose icónica, pintada a mano.",
    stockStatus: "in_stock",
    isPopular: true,
  },
  {
    id: "kitchen-organizer-001",
    title: "Organizador de Especias",
    price: 800,
    currency: "UYU",
    rating: 4.6,
    category: "Cocina & Hogar",
    tags: ["organizador", "cocina"],
    images: ["/spice-organizer-3d-printed-kitchen.jpg"],
    shortDescription: "Organizador modular para especias, diseño minimalista y funcional.",
    stockStatus: "in_stock",
  },
  {
    id: "decor-lamp-001",
    title: "Lámpara Luna LED",
    price: 1500,
    currency: "UYU",
    rating: 4.8,
    category: "Decoración & Regalos",
    tags: ["decoración", "LED"],
    images: ["/moon-lamp-3d-printed-decoration.jpg"],
    shortDescription: "Lámpara con forma de luna, textura realista e iluminación LED suave.",
    stockStatus: "low_stock",
  },
  {
    id: "toy-puzzle-001",
    title: "Puzzle 3D Dragón",
    price: 600,
    currency: "UYU",
    rating: 4.5,
    category: "Juguetes & Figuras",
    tags: ["puzzle", "dragón"],
    images: ["/dragon-puzzle-3d-printed-toy.jpg"],
    shortDescription: "Puzzle 3D articulado en forma de dragón, perfecto para todas las edades.",
    stockStatus: "in_stock",
  },
  {
    id: "cannabis-grinder-001",
    title: "Grinder Personalizado",
    price: 900,
    currency: "UYU",
    rating: 4.7,
    category: "Accesorios Cannabis",
    tags: ["grinder", "personalizable"],
    images: ["/cannabis-grinder-3d-printed.jpg"],
    shortDescription: "Grinder de alta calidad con diseño personalizable y acabado suave.",
    stockStatus: "in_stock",
  },
]

export function FeaturedProducts() {
  return (
    <Section
      title="Productos Destacados"
      subtitle="Descubre nuestras creaciones más populares, desde utilidades prácticas hasta piezas de colección únicas."
      actions={
        <Button asChild variant="outline">
          <Link href="/catalog">Ver Todo el Catálogo</Link>
        </Button>
      }
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {featuredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </Section>
  )
}
