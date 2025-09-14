"use client"

import { useState } from "react"
import { Section } from "@/components/section"
import { FiltersSidebar } from "@/components/filters-sidebar"
import { ProductGrid } from "@/components/product-grid"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Filter, Grid, List } from "lucide-react"

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

// Extended mock products data
const allProducts: Product[] = [
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
    material: "PETG",
    color: "Negro",
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
    material: "PLA",
    color: "Multicolor",
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
    material: "PLA",
    color: "Blanco",
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
    material: "PLA",
    color: "Blanco",
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
    material: "PLA",
    color: "Verde",
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
    material: "PETG",
    color: "Negro",
  },
  {
    id: "camping-carabiner-001",
    title: "Mosquetón Reforzado",
    price: 350,
    currency: "UYU",
    rating: 4.4,
    category: "Camping & Outdoor",
    tags: ["mosquetón", "camping"],
    images: ["/3d-printed-carabiner.jpg"],
    shortDescription: "Mosquetón ligero pero resistente para equipos de camping.",
    stockStatus: "in_stock",
    material: "PETG",
    color: "Azul",
  },
  {
    id: "kitchen-funnel-001",
    title: "Embudo Plegable",
    price: 280,
    currency: "UYU",
    rating: 4.3,
    category: "Cocina & Hogar",
    tags: ["embudo", "plegable"],
    images: ["/3d-printed-collapsible-funnel.jpg"],
    shortDescription: "Embudo plegable que ahorra espacio en tu cocina.",
    stockStatus: "in_stock",
    material: "TPU",
    color: "Transparente",
  },
]

export function CatalogContent() {
  const [filteredProducts, setFilteredProducts] = useState(allProducts)
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid")
  const [isFilterOpen, setIsFilterOpen] = useState(false)

  const handleFilterChange = (filters: {
    category?: string
    material?: string
    priceRange?: number[]
    color?: string
    availability?: string
    stockStatus?: string
    sortBy?: string
  }) => {
    let filtered = allProducts

    // Filter by category
    if (filters.category && filters.category !== "all") {
      filtered = filtered.filter((product) => product.category === filters.category)
    }

    // Filter by price range
    if (filters.priceRange && filters.priceRange.length >= 2) {
      filtered = filtered.filter(
        (product) => product.price >= filters.priceRange![0] && product.price <= filters.priceRange![1],
      )
    }

    // Filter by material
    if (filters.material && filters.material !== "all") {
      filtered = filtered.filter((product) => product.material === filters.material)
    }

    // Filter by color
    if (filters.color && filters.color !== "all") {
      filtered = filtered.filter((product) => product.color === filters.color)
    }

    // Filter by availability
    if (filters.availability && filters.availability !== "all") {
      if (filters.availability === "in_stock") {
        filtered = filtered.filter((product) => product.stockStatus === "in_stock")
      } else if (filters.availability === "low_stock") {
        filtered = filtered.filter((product) => product.stockStatus === "low_stock")
      }
    }

    // Sort products
    if (filters.sortBy) {
      filtered = [...filtered].sort((a, b) => {
        switch (filters.sortBy) {
          case "price_low":
            return a.price - b.price
          case "price_high":
            return b.price - a.price
          case "rating":
            return b.rating - a.rating
          case "name":
            return a.title.localeCompare(b.title)
          default:
            return 0
        }
      })
    }

    setFilteredProducts(filtered)
  }

  return (
    <>
      {/* Category Intro */}
      <Section className="bg-card border-b">
        <div className="text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Catálogo de Productos</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Explora nuestra colección completa de productos impresos en 3D. Desde utilidades prácticas hasta piezas
            decorativas únicas, encuentra exactamente lo que necesitas.
          </p>
        </div>
      </Section>

      <div className="container mx-auto max-w-7xl px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Desktop Filters Sidebar */}
          <div className="hidden lg:block w-80 flex-shrink-0">
            <FiltersSidebar onFilterChange={handleFilterChange} />
          </div>

          {/* Main Content */}
          <div className="flex-1">
            {/* Mobile Filters & View Controls */}
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-2">
                <Sheet open={isFilterOpen} onOpenChange={setIsFilterOpen}>
                  <SheetTrigger asChild>
                    <Button variant="outline" size="sm" className="lg:hidden bg-transparent">
                      <Filter className="h-4 w-4 mr-2" />
                      Filtros
                    </Button>
                  </SheetTrigger>
                  <SheetContent side="left" className="w-80">
                    <div className="mt-6">
                      <FiltersSidebar onFilterChange={handleFilterChange} />
                    </div>
                  </SheetContent>
                </Sheet>

                <span className="text-sm text-muted-foreground">
                  {filteredProducts.length} producto{filteredProducts.length !== 1 ? "s" : ""}
                </span>
              </div>

              <div className="flex items-center gap-2">
                <Button
                  variant={viewMode === "grid" ? "default" : "outline"}
                  size="sm"
                  onClick={() => setViewMode("grid")}
                >
                  <Grid className="h-4 w-4" />
                </Button>
                <Button
                  variant={viewMode === "list" ? "default" : "outline"}
                  size="sm"
                  onClick={() => setViewMode("list")}
                >
                  <List className="h-4 w-4" />
                </Button>
              </div>
            </div>

            {/* Products Grid */}
            <ProductGrid products={filteredProducts} viewMode={viewMode} />

            {/* Empty State */}
            {filteredProducts.length === 0 && (
              <div className="text-center py-12">
                <div className="text-6xl mb-4">🔍</div>
                <h3 className="text-xl font-semibold text-foreground mb-2">No se encontraron productos</h3>
                <p className="text-muted-foreground mb-4">
                  Intenta ajustar los filtros o buscar con términos diferentes.
                </p>
                <Button onClick={() => handleFilterChange({})}>Limpiar Filtros</Button>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  )
}
