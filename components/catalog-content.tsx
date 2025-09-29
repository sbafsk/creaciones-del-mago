"use client"

import { useState, useEffect } from "react"
import { useSearchParams } from "next/navigation"
import { Section } from "@/components/section"
import { FiltersSidebar } from "@/components/filters-sidebar"
import { ProductGrid } from "@/components/product-grid"
import { Breadcrumbs } from "@/components/breadcrumbs"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Filter, Grid, List, Mountain, Gamepad2, ChefHat, Gift, Puzzle, Leaf } from "lucide-react"
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
  isFeatured?: boolean
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
    isFeatured: true,
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
    isFeatured: true,
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
    isFeatured: true,
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

// Product categories with icons and descriptions
const categories = [
  {
    id: "camping",
    name: "Camping & Outdoor",
    description: "Accesorios resistentes para tus aventuras al aire libre",
    icon: Mountain,
    count: allProducts.filter(p => p.category === "Camping & Outdoor").length,
    color: "bg-green-500",
    href: "/catalog?category=camping"
  },
  {
    id: "anime",
    name: "Anime & Geek",
    description: "Figuras y collectibles de tus series favoritas",
    icon: Gamepad2,
    count: allProducts.filter(p => p.category === "Anime & Geek").length,
    color: "bg-purple-500",
    href: "/catalog?category=anime"
  },
  {
    id: "kitchen",
    name: "Cocina & Hogar",
    description: "Soluciones prácticas para tu hogar y cocina",
    icon: ChefHat,
    count: allProducts.filter(p => p.category === "Cocina & Hogar").length,
    color: "bg-orange-500",
    href: "/catalog?category=kitchen"
  },
  {
    id: "decor",
    name: "Decoración & Regalos",
    description: "Piezas únicas para decorar y regalar",
    icon: Gift,
    count: allProducts.filter(p => p.category === "Decoración & Regalos").length,
    color: "bg-pink-500",
    href: "/catalog?category=decor"
  },
  {
    id: "toys",
    name: "Juguetes & Figuras",
    description: "Juguetes educativos y figuras articuladas",
    icon: Puzzle,
    count: allProducts.filter(p => p.category === "Juguetes & Figuras").length,
    color: "bg-blue-500",
    href: "/catalog?category=toys"
  },
  {
    id: "cannabis",
    name: "Accesorios Cannabis",
    description: "Accesorios de alta calidad y diseño personalizable",
    icon: Leaf,
    count: allProducts.filter(p => p.category === "Accesorios Cannabis").length,
    color: "bg-emerald-500",
    href: "/catalog?category=cannabis"
  }
]

export function CatalogContent() {
  const [filteredProducts, setFilteredProducts] = useState(allProducts)
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid")
  const [isFilterOpen, setIsFilterOpen] = useState(false)
  const [currentCategory, setCurrentCategory] = useState<string | null>(null)
  const searchParams = useSearchParams()

  // Handle URL parameters on component mount
  useEffect(() => {
    const categoryParam = searchParams.get('category')
    if (categoryParam) {
      setCurrentCategory(categoryParam)
      // Apply category filter
      handleFilterChange({ category: getCategoryNameFromParam(categoryParam) })
    }
  }, [searchParams])

  // Helper function to get category name from URL parameter
  const getCategoryNameFromParam = (param: string): string => {
    const categoryMap: { [key: string]: string } = {
      'camping': 'Camping & Outdoor',
      'anime': 'Anime & Geek',
      'kitchen': 'Cocina & Hogar',
      'decor': 'Decoración & Regalos',
      'toys': 'Juguetes & Figuras',
      'cannabis': 'Accesorios Cannabis'
    }
    return categoryMap[param] || ''
  }

  // Generate breadcrumb items
  type BreadcrumbItem = { label: string; href?: string; isActive?: boolean }
  const getBreadcrumbItems = (): BreadcrumbItem[] => {
    const items: BreadcrumbItem[] = [
      { label: "Catálogo", href: "/catalog" }
    ]

    if (currentCategory) {
      const category = categories.find(cat => cat.id === currentCategory)
      if (category) {
        items.push({ label: category.name, isActive: true })
      }
    }

    return items
  }

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

      {/* Category Cards - Only show if no specific category is selected */}
      {!currentCategory && (
        <Section className="bg-background">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">Explora por Categorías</h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Descubre productos organizados por categorías para encontrar exactamente lo que buscas
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((category) => (
              <Link key={category.id} href={category.href}>
                <Card className="group hover:shadow-lg transition-all duration-300 border-border hover:border-violet-600/50 cursor-pointer h-full">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className={`inline-flex items-center justify-center w-12 h-12 rounded-lg transition-colors ${category.id === 'camping' ? 'bg-green-500/10 group-hover:bg-green-500/20' :
                          category.id === 'anime' ? 'bg-purple-500/10 group-hover:bg-purple-500/20' :
                            category.id === 'kitchen' ? 'bg-orange-500/10 group-hover:bg-orange-500/20' :
                              category.id === 'decor' ? 'bg-pink-500/10 group-hover:bg-pink-500/20' :
                                category.id === 'toys' ? 'bg-blue-500/10 group-hover:bg-blue-500/20' :
                                  'bg-emerald-500/10 group-hover:bg-emerald-500/20'
                        }`}>
                        <category.icon className={`h-6 w-6 ${category.id === 'camping' ? 'text-green-600' :
                            category.id === 'anime' ? 'text-purple-600' :
                              category.id === 'kitchen' ? 'text-orange-600' :
                                category.id === 'decor' ? 'text-pink-600' :
                                  category.id === 'toys' ? 'text-blue-600' :
                                    'text-emerald-600'
                          }`} />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-violet-600 transition-colors">
                          {category.name}
                        </h3>
                        <p className="text-sm text-muted-foreground mb-3 text-pretty">
                          {category.description}
                        </p>
                        <div className="flex items-center justify-between">
                          <span className="text-xs text-muted-foreground">
                            {category.count} producto{category.count !== 1 ? 's' : ''}
                          </span>
                          <span className="text-xs text-violet-600 font-medium group-hover:underline">
                            Ver todos →
                          </span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </Section>
      )}

      <div className="container mx-auto max-w-7xl px-4 py-8">
        {/* Breadcrumbs */}
        <div className="mb-6">
          <Breadcrumbs items={getBreadcrumbItems()} />
        </div>

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
