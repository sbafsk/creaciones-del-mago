"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronDown, ChevronUp } from "lucide-react"

interface FAQItem {
  id: string
  question: string
  answer: string
  category: string
}

const faqItems: FAQItem[] = [
  {
    id: "1",
    question: "¿Cuánto tiempo toma imprimir un prototipo?",
    answer:
      "El tiempo de impresión depende del tamaño y complejidad del objeto. Los prototipos simples pueden estar listos en 2-4 horas, mientras que piezas más complejas pueden tomar 8-24 horas. Ofrecemos servicio express para entregas urgentes.",
    category: "Tiempos",
  },
  {
    id: "2",
    question: "¿Qué materiales utilizan para la impresión 3D?",
    answer:
      "Trabajamos con una amplia gama de materiales: PLA (biodegradable), ABS (resistente), PETG (transparente), TPU (flexible), Wood Fill (efecto madera), Metal Fill (efecto metálico), y materiales especializados como PLA médico. Seleccionamos el material óptimo según las necesidades de tu proyecto.",
    category: "Materiales",
  },
  {
    id: "3",
    question: "¿Pueden crear un diseño desde cero si solo tengo una idea?",
    answer:
      "Absolutamente. Nuestro servicio de diseño personalizado incluye modelado CAD profesional desde bocetos, descripciones o referencias. Trabajamos contigo en iteraciones hasta lograr el diseño perfecto antes de la impresión.",
    category: "Diseño",
  },
  {
    id: "4",
    question: "¿Cuál es la precisión de sus impresiones?",
    answer:
      "Nuestras impresoras ofrecen precisión estándar de ±0.2mm, alta precisión de ±0.1mm, y ultra precisión de ±0.05mm para proyectos que lo requieran. La tolerancia final depende del material y complejidad de la pieza.",
    category: "Calidad",
  },
  {
    id: "5",
    question: "¿Ofrecen servicios de post-procesamiento?",
    answer:
      "Sí, ofrecemos lijado, pintura, ensamblaje, perforado, roscado y otros acabados especializados. Esto asegura que tu pieza esté lista para usar al momento de la entrega.",
    category: "Acabados",
  },
  {
    id: "6",
    question: "¿Cuáles son los costos de envío?",
    answer:
      "Ofrecemos envío gratuito para pedidos superiores a $1,500 UYU en Montevideo. Para el interior del país, los costos varían según destino y peso. También disponemos de retiro en nuestro taller sin costo adicional.",
    category: "Envíos",
  },
  {
    id: "7",
    question: "¿Pueden reparar objetos rotos o crear repuestos?",
    answer:
      "Sí, utilizamos técnicas de ingeniería inversa para recrear piezas rotas o descontinuadas. Podemos mejorar el diseño original para mayor durabilidad. Este servicio es ideal para electrodomésticos, juguetes, y componentes únicos.",
    category: "Reparaciones",
  },
  {
    id: "8",
    question: "¿Qué garantía ofrecen en sus trabajos?",
    answer:
      "Garantizamos la calidad de impresión por 30 días. Si hay defectos de fabricación, reimprimimos sin costo. Para diseños personalizados, incluimos hasta 2 revisiones menores sin cargo adicional.",
    category: "Garantía",
  },
]

interface ServicesFAQProps {
  filterByCategory?: string
}

export function ServicesFAQ({ filterByCategory }: ServicesFAQProps) {
  const [openItems, setOpenItems] = useState<Set<string>>(new Set())
  const [selectedCategory, setSelectedCategory] = useState<string>("all")

  const categories = ["all", ...Array.from(new Set(faqItems.map((item) => item.category)))]

  const filteredItems = faqItems.filter((item) => {
    const categoryMatch = selectedCategory === "all" || item.category === selectedCategory
    const filterMatch = !filterByCategory || item.category === filterByCategory
    return categoryMatch && filterMatch
  })

  const toggleItem = (id: string) => {
    const newOpenItems = new Set(openItems)
    if (newOpenItems.has(id)) {
      newOpenItems.delete(id)
    } else {
      newOpenItems.add(id)
    }
    setOpenItems(newOpenItems)
  }

  return (
    <div className="space-y-8">
      {/* Category Filter */}
      {!filterByCategory && (
        <div className="flex flex-wrap gap-2 justify-center">
          {categories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? "default" : "outline"}
              size="sm"
              onClick={() => setSelectedCategory(category)}
              className={selectedCategory !== category ? "bg-transparent" : ""}
            >
              {category === "all" ? "Todas" : category}
            </Button>
          ))}
        </div>
      )}

      {/* FAQ Items */}
      <div className="space-y-4">
        {filteredItems.map((item) => (
          <Card key={item.id} className="overflow-hidden">
            <Button
              variant="ghost"
              className="w-full p-6 h-auto justify-between text-left hover:bg-muted/50"
              onClick={() => toggleItem(item.id)}
            >
              <div className="flex-1">
                <h3 className="font-semibold text-base mb-1">{item.question}</h3>
                <span className="text-sm text-muted-foreground">{item.category}</span>
              </div>
              {openItems.has(item.id) ? (
                <ChevronUp className="h-5 w-5 text-muted-foreground flex-shrink-0 ml-4" />
              ) : (
                <ChevronDown className="h-5 w-5 text-muted-foreground flex-shrink-0 ml-4" />
              )}
            </Button>
            {openItems.has(item.id) && (
              <CardContent className="pt-0 pb-6 px-6">
                <p className="text-muted-foreground leading-relaxed">{item.answer}</p>
              </CardContent>
            )}
          </Card>
        ))}
      </div>

      {filteredItems.length === 0 && (
        <div className="text-center py-12">
          <p className="text-muted-foreground">No se encontraron preguntas en esta categoría.</p>
        </div>
      )}
    </div>
  )
}
