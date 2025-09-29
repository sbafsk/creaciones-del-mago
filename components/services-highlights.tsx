"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Section } from "@/components/section"
import { Printer, Palette, Wrench, ChevronLeft, ChevronRight } from "lucide-react"
import { useState } from "react"

const services = [
  {
    icon: Printer,
    title: "Impresión 3D Profesional",
    description: "Materiales de alta calidad como PLA, PETG, TPU y más. Precisión milimétrica en cada proyecto.",
    features: ["Múltiples materiales", "Alta precisión", "Acabado profesional"],
  },
  {
    icon: Palette,
    title: "Diseño CAD Personalizado",
    description: "Creamos modelos 3D únicos desde tu idea. Desde prototipos hasta piezas decorativas complejas.",
    features: ["Diseño desde cero", "Modificaciones", "Optimización para impresión"],
  },
  {
    icon: Wrench,
    title: "Solución de Problemas",
    description:
      "Piezas de repuesto, herramientas personalizadas y soluciones creativas para tus necesidades específicas.",
    features: ["Piezas de repuesto", "Herramientas únicas", "Soluciones creativas"],
  },
]

export function ServicesHighlights() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % services.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + services.length) % services.length)
  }

  const goToSlide = (index: number) => {
    setCurrentSlide(index)
  }

  return (
    <Section
      title="Nuestros Servicios"
      subtitle="Combinamos creatividad, tecnología y experiencia para dar vida a tus ideas más ambiciosas."
    >
      {/* Desktop Grid View */}
      <div className="hidden md:grid md:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <ServiceCard key={index} service={service} />
        ))}
      </div>

      {/* Mobile Carousel View */}
      <div className="md:hidden relative">
        <div className="overflow-hidden">
          <div
            className="flex transition-transform duration-300 ease-in-out"
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            {services.map((service, index) => (
              <div key={index} className="w-full flex-shrink-0 px-4">
                <ServiceCard service={service} />
              </div>
            ))}
          </div>
        </div>

        {/* Navigation arrows */}
        <Button
          variant="ghost"
          size="icon"
          className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white/10 hover:bg-white/20 backdrop-blur-sm"
          onClick={prevSlide}
          aria-label="Servicio anterior"
        >
          <ChevronLeft className="h-5 w-5" />
        </Button>
        <Button
          variant="ghost"
          size="icon"
          className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white/10 hover:bg-white/20 backdrop-blur-sm"
          onClick={nextSlide}
          aria-label="Siguiente servicio"
        >
          <ChevronRight className="h-5 w-5" />
        </Button>

        {/* Slide indicators */}
        <div className="flex justify-center space-x-2 mt-6">
          {services.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === currentSlide
                  ? "bg-violet-600 scale-125"
                  : "bg-gray-300 hover:bg-gray-400"
              }`}
              aria-label={`Ir al servicio ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </Section>
  )
}

function ServiceCard({ service }: { service: typeof services[0] }) {
  return (
    <Card className="group hover:shadow-lg transition-all duration-300 border-border hover:border-violet-600/50 h-full">
      <CardContent className="p-6">
        <div className="mb-4">
          <div className="inline-flex items-center justify-center w-12 h-12 bg-violet-600/10 rounded-lg group-hover:bg-violet-600/20 transition-colors">
            <service.icon className="h-6 w-6 text-violet-600" />
          </div>
        </div>
        <h3 className="text-xl font-semibold text-foreground mb-3">{service.title}</h3>
        <p className="text-muted-foreground mb-4 text-pretty">{service.description}</p>
        <ul className="space-y-2">
          {service.features.map((feature, featureIndex) => (
            <li key={featureIndex} className="flex items-center text-sm text-muted-foreground">
              <div className="w-1.5 h-1.5 bg-cyan-500 rounded-full mr-3"></div>
              {feature}
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  )
}
