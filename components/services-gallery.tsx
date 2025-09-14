"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog"
import { ZoomIn } from "lucide-react"
import Image from "next/image"

interface GalleryItem {
  id: string
  title: string
  category: string
  image: string
  description: string
  material: string
  printTime: string
  service: string
}

const galleryItems: GalleryItem[] = [
  {
    id: "1",
    title: "Prototipo de Carcasa Móvil",
    category: "Prototipado",
    image: "/gallery/prototype-phone-case.jpg",
    description: "Prototipo funcional de carcasa para smartphone con diseño ergonómico y protección reforzada.",
    material: "PETG",
    printTime: "3 horas",
    service: "prototyping",
  },
  {
    id: "2",
    title: "Figura Anime Personalizada",
    category: "Diseño Personalizado",
    image: "/gallery/custom-anime-figure.jpg",
    description: "Figura de anime diseñada desde cero basada en especificaciones del cliente.",
    material: "PLA Premium",
    printTime: "12 horas",
    service: "custom-design",
  },
  {
    id: "3",
    title: "Repuesto de Electrodoméstico",
    category: "Reparación",
    image: "/gallery/appliance-part.jpg",
    description: "Repuesto personalizado para electrodoméstico descontinuado mediante ingeniería inversa.",
    material: "ABS",
    printTime: "2 horas",
    service: "repair",
  },
  {
    id: "4",
    title: "Herramientas de Camping",
    category: "Producción Serie",
    image: "/gallery/camping-tools.jpg",
    description: "Set de herramientas ultralivianas para camping producidas en serie.",
    material: "PETG",
    printTime: "1.5 horas c/u",
    service: "production",
  },
  {
    id: "5",
    title: "Componente Médico",
    category: "Express",
    image: "/gallery/medical-component.jpg",
    description: "Componente médico de precisión entregado en 24 horas.",
    material: "PLA Médico",
    printTime: "4 horas",
    service: "express",
  },
  {
    id: "6",
    title: "Juguete Educativo",
    category: "Diseño Personalizado",
    image: "/gallery/educational-toy.jpg",
    description: "Juguete educativo diseñado para estimular el aprendizaje STEM.",
    material: "PLA Biodegradable",
    printTime: "6 horas",
    service: "custom-design",
  },
]

interface ServicesGalleryProps {
  filterByService?: string
}

export function ServicesGallery({ filterByService }: ServicesGalleryProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>("all")
  const [, setSelectedImage] = useState<GalleryItem | null>(null)

  const categories = ["all", ...Array.from(new Set(galleryItems.map((item) => item.category)))]

  const filteredItems = galleryItems.filter((item) => {
    const categoryMatch = selectedCategory === "all" || item.category === selectedCategory
    const serviceMatch = !filterByService || item.service === filterByService
    return categoryMatch && serviceMatch
  })

  return (
    <div className="space-y-8">
      {/* Category Filter */}
      {!filterByService && (
        <div className="flex flex-wrap gap-2 justify-center">
          {categories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? "default" : "outline"}
              size="sm"
              onClick={() => setSelectedCategory(category)}
              className={selectedCategory !== category ? "bg-transparent" : ""}
            >
              {category === "all" ? "Todos" : category}
            </Button>
          ))}
        </div>
      )}

      {/* Gallery Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredItems.map((item) => (
          <Card key={item.id} className="group overflow-hidden hover:shadow-lg transition-shadow">
            <div className="relative aspect-square overflow-hidden">
              <Image
                src={item.image || "/placeholder.svg"}
                alt={item.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
              <Dialog>
                <DialogTrigger asChild>
                  <Button
                    size="sm"
                    className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity"
                    onClick={() => setSelectedImage(item)}
                  >
                    <ZoomIn className="h-4 w-4" />
                  </Button>
                </DialogTrigger>
                <DialogContent className="max-w-4xl">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    <div className="relative aspect-square">
                      <Image
                        src={item.image || "/placeholder.svg"}
                        alt={item.title}
                        fill
                        className="object-cover rounded-lg"
                        sizes="(max-width: 1024px) 100vw, 50vw"
                      />
                    </div>
                    <div className="space-y-4">
                      <div>
                        <Badge variant="outline" className="mb-2">
                          {item.category}
                        </Badge>
                        <h3 className="text-2xl font-bold">{item.title}</h3>
                      </div>
                      <p className="text-muted-foreground">{item.description}</p>
                      <div className="space-y-2">
                        <div className="flex justify-between">
                          <span className="font-medium">Material:</span>
                          <span>{item.material}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="font-medium">Tiempo de impresión:</span>
                          <span>{item.printTime}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </DialogContent>
              </Dialog>
              <Badge className="absolute bottom-2 left-2 bg-black/80 text-white">{item.category}</Badge>
            </div>
            <CardContent className="p-4">
              <h3 className="font-semibold mb-1">{item.title}</h3>
              <p className="text-sm text-muted-foreground mb-2">{item.description}</p>
              <div className="flex justify-between text-xs text-muted-foreground">
                <span>{item.material}</span>
                <span>{item.printTime}</span>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {filteredItems.length === 0 && (
        <div className="text-center py-12">
          <p className="text-muted-foreground">No se encontraron proyectos en esta categoría.</p>
        </div>
      )}
    </div>
  )
}
