"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Slider } from "@/components/ui/slider"
import { Separator } from "@/components/ui/separator"
import { RotateCcw } from "lucide-react"

interface FilterOptions {
  category?: string
  material?: string
  priceRange?: number[]
  color?: string
  availability?: string
  stockStatus?: string
  sortBy?: string
}

interface FiltersProps {
  onFilterChange: (filters: FilterOptions) => void
}

const categories = [
  { value: "all", label: "Todas las categorías" },
  { value: "Camping & Outdoor", label: "Camping & Outdoor" },
  { value: "Cocina & Hogar", label: "Cocina & Hogar" },
  { value: "Decoración & Regalos", label: "Decoración & Regalos" },
  { value: "Juguetes & Figuras", label: "Juguetes & Figuras" },
  { value: "Accesorios Cannabis", label: "Accesorios Cannabis" },
  { value: "Anime & Geek", label: "Anime & Geek" },
]

const materials = [
  { value: "all", label: "Todos los materiales" },
  { value: "PLA", label: "PLA" },
  { value: "PETG", label: "PETG" },
  { value: "TPU", label: "TPU" },
  { value: "ABS", label: "ABS" },
]

const colors = [
  { value: "all", label: "Todos los colores" },
  { value: "Blanco", label: "Blanco" },
  { value: "Negro", label: "Negro" },
  { value: "Azul", label: "Azul" },
  { value: "Verde", label: "Verde" },
  { value: "Rojo", label: "Rojo" },
  { value: "Multicolor", label: "Multicolor" },
  { value: "Transparente", label: "Transparente" },
]

const availabilityOptions = [
  { value: "all", label: "Cualquier disponibilidad" },
  { value: "in_stock", label: "En stock" },
  { value: "low_stock", label: "Pocas unidades" },
]

const sortOptions = [
  { value: "featured", label: "Destacados" },
  { value: "name", label: "Nombre A-Z" },
  { value: "price_low", label: "Precio: Menor a Mayor" },
  { value: "price_high", label: "Precio: Mayor a Menor" },
  { value: "rating", label: "Mejor Valorados" },
]

export function FiltersSidebar({ onFilterChange }: FiltersProps) {
  const [filters, setFilters] = useState({
    category: "all",
    priceRange: [0, 2000],
    material: "all",
    color: "all",
    availability: "all",
    sortBy: "featured",
  })

  const updateFilters = (newFilters: Partial<typeof filters>) => {
    const updatedFilters = { ...filters, ...newFilters }
    setFilters(updatedFilters)
    onFilterChange(updatedFilters)
  }

  const resetFilters = () => {
    const defaultFilters = {
      category: "all",
      priceRange: [0, 2000],
      material: "all",
      color: "all",
      availability: "all",
      sortBy: "featured",
    }
    setFilters(defaultFilters)
    onFilterChange(defaultFilters)
  }

  return (
    <div className="space-y-6">
      {/* Sort */}
      <Card>
        <CardHeader className="pb-3">
          <CardTitle className="text-base">Ordenar por</CardTitle>
        </CardHeader>
        <CardContent>
          <Select value={filters.sortBy} onValueChange={(value) => updateFilters({ sortBy: value })}>
            <SelectTrigger>
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              {sortOptions.map((option) => (
                <SelectItem key={option.value} value={option.value}>
                  {option.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </CardContent>
      </Card>

      {/* Category */}
      <Card>
        <CardHeader className="pb-3">
          <CardTitle className="text-base">Categoría</CardTitle>
        </CardHeader>
        <CardContent>
          <RadioGroup value={filters.category} onValueChange={(value) => updateFilters({ category: value })}>
            {categories.map((category) => (
              <div key={category.value} className="flex items-center space-x-2">
                <RadioGroupItem value={category.value} id={category.value} />
                <Label htmlFor={category.value} className="text-sm font-normal cursor-pointer">
                  {category.label}
                </Label>
              </div>
            ))}
          </RadioGroup>
        </CardContent>
      </Card>

      {/* Price Range */}
      <Card>
        <CardHeader className="pb-3">
          <CardTitle className="text-base">Rango de Precio</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <Slider
              value={filters.priceRange}
              onValueChange={(value) => updateFilters({ priceRange: value })}
              max={2000}
              min={0}
              step={50}
              className="w-full"
            />
            <div className="flex items-center justify-between text-sm text-muted-foreground">
              <span>${filters.priceRange[0]} UYU</span>
              <span>${filters.priceRange[1]} UYU</span>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Material */}
      <Card>
        <CardHeader className="pb-3">
          <CardTitle className="text-base">Material</CardTitle>
        </CardHeader>
        <CardContent>
          <RadioGroup value={filters.material} onValueChange={(value) => updateFilters({ material: value })}>
            {materials.map((material) => (
              <div key={material.value} className="flex items-center space-x-2">
                <RadioGroupItem value={material.value} id={material.value} />
                <Label htmlFor={material.value} className="text-sm font-normal cursor-pointer">
                  {material.label}
                </Label>
              </div>
            ))}
          </RadioGroup>
        </CardContent>
      </Card>

      {/* Color */}
      <Card>
        <CardHeader className="pb-3">
          <CardTitle className="text-base">Color</CardTitle>
        </CardHeader>
        <CardContent>
          <Select value={filters.color} onValueChange={(value) => updateFilters({ color: value })}>
            <SelectTrigger>
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              {colors.map((color) => (
                <SelectItem key={color.value} value={color.value}>
                  {color.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </CardContent>
      </Card>

      {/* Availability */}
      <Card>
        <CardHeader className="pb-3">
          <CardTitle className="text-base">Disponibilidad</CardTitle>
        </CardHeader>
        <CardContent>
          <RadioGroup value={filters.availability} onValueChange={(value) => updateFilters({ availability: value })}>
            {availabilityOptions.map((option) => (
              <div key={option.value} className="flex items-center space-x-2">
                <RadioGroupItem value={option.value} id={option.value} />
                <Label htmlFor={option.value} className="text-sm font-normal cursor-pointer">
                  {option.label}
                </Label>
              </div>
            ))}
          </RadioGroup>
        </CardContent>
      </Card>

      <Separator />

      {/* Reset Filters */}
      <Button variant="outline" onClick={resetFilters} className="w-full bg-transparent">
        <RotateCcw className="h-4 w-4 mr-2" />
        Limpiar Filtros
      </Button>
    </div>
  )
}
