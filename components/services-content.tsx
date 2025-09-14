"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Section } from "@/components/section"
import { ServicesGallery } from "@/components/services-gallery"
import { ServicesFAQ } from "@/components/services-faq"
import {
  Palette,
  Zap,
  Users,
  CheckCircle,
  ArrowRight,
  Lightbulb,
  Wrench,
  Package,
  ImageIcon,
  HelpCircle,
} from "lucide-react"
import Link from "next/link"

const services = [
  {
    id: "prototyping",
    icon: Lightbulb,
    title: "Prototipado Rápido",
    description: "Convierte tus ideas en realidad con prototipos funcionales en tiempo récord.",
    features: [
      "Desarrollo de prototipos en 24-48 horas",
      "Múltiples iteraciones incluidas",
      "Materiales de alta calidad",
      "Asesoramiento técnico especializado",
    ],
    pricing: "Desde $800 UYU",
    popular: true,
  },
  {
    id: "custom-design",
    icon: Palette,
    title: "Diseño Personalizado",
    description: "Creamos diseños únicos adaptados a tus necesidades específicas.",
    features: [
      "Diseño 3D desde cero",
      "Modelado CAD profesional",
      "Optimización para impresión",
      "Archivos fuente incluidos",
    ],
    pricing: "Desde $1,200 UYU",
    popular: false,
  },
  {
    id: "production",
    icon: Package,
    title: "Producción en Serie",
    description: "Fabricación de múltiples unidades con calidad consistente.",
    features: ["Producción escalable", "Control de calidad riguroso", "Descuentos por volumen", "Entrega programada"],
    pricing: "Consultar",
    popular: false,
  },
  {
    id: "repair",
    icon: Wrench,
    title: "Reparación y Repuestos",
    description: "Restauramos y creamos repuestos para objetos dañados o descontinuados.",
    features: ["Ingeniería inversa", "Reparación de piezas rotas", "Repuestos personalizados", "Mejoras de diseño"],
    pricing: "Desde $600 UYU",
    popular: false,
  },
  {
    id: "consultation",
    icon: Users,
    title: "Consultoría Técnica",
    description: "Asesoramiento experto para optimizar tus proyectos de impresión 3D.",
    features: ["Análisis de viabilidad", "Selección de materiales", "Optimización de costos", "Capacitación técnica"],
    pricing: "Desde $1,500 UYU/hora",
    popular: false,
  },
  {
    id: "express",
    icon: Zap,
    title: "Servicio Express",
    description: "Impresión urgente para cuando necesitas resultados inmediatos.",
    features: ["Entrega en 24 horas", "Prioridad máxima", "Seguimiento en tiempo real", "Garantía de calidad"],
    pricing: "Recargo del 50%",
    popular: false,
  },
]

const processSteps = [
  {
    step: "01",
    title: "Consulta Inicial",
    description: "Analizamos tu proyecto y definimos los requerimientos técnicos.",
  },
  {
    step: "02",
    title: "Cotización",
    description: "Preparamos una propuesta detallada con tiempos y costos.",
  },
  {
    step: "03",
    title: "Desarrollo",
    description: "Diseñamos, optimizamos e imprimimos tu proyecto.",
  },
  {
    step: "04",
    title: "Entrega",
    description: "Control de calidad final y entrega en tiempo acordado.",
  },
]

export function ServicesContent() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <Section className="pt-24 pb-16 bg-gradient-to-br from-violet-950/20 via-background to-cyan-950/20">
        <div className="text-center max-w-4xl mx-auto">
          <Badge variant="outline" className="mb-4 bg-violet-500/10 border-violet-500/20">
            Servicios Profesionales
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent">
            Servicios de Impresión 3D
          </h1>
          <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
            Transformamos tus ideas en realidad con servicios profesionales de impresión 3D. Desde prototipos hasta
            producción en serie, tenemos la solución perfecta para tu proyecto.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
              <Link href="/custom-order">
                Solicitar Cotización
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild className="bg-transparent">
              <Link href="/contact">Consulta Gratuita</Link>
            </Button>
          </div>
        </div>
      </Section>

      {/* Services Grid */}
      <Section>
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Nuestros Servicios</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Ofrecemos una gama completa de servicios de impresión 3D para satisfacer todas tus necesidades
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => {
            const Icon = service.icon
            return (
              <Card key={service.id} className={`relative ${service.popular ? "ring-2 ring-violet-500/50" : ""}`}>
                {service.popular && <Badge className="absolute -top-2 left-4 bg-violet-500">Más Popular</Badge>}
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <div className="p-2 rounded-lg bg-violet-500/10">
                      <Icon className="h-6 w-6 text-violet-400" />
                    </div>
                    <CardTitle className="text-xl">{service.title}</CardTitle>
                  </div>
                  <CardDescription className="text-base">{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="flex items-center justify-between">
                    <span className="font-semibold text-lg">{service.pricing}</span>
                    <Button size="sm" asChild>
                      <Link href="/custom-order">Solicitar</Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </Section>

      {/* Gallery Section */}
      <Section className="bg-muted/30">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-2 mb-4">
            <ImageIcon className="h-6 w-6 text-violet-400" />
            <h2 className="text-3xl md:text-4xl font-bold">Galería de Proyectos</h2>
          </div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explora algunos de nuestros trabajos más destacados y descubre la calidad que podemos lograr para tu
            proyecto
          </p>
        </div>
        <ServicesGallery />
      </Section>

      {/* Process Section */}
      <Section>
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Nuestro Proceso</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Un proceso simple y transparente para llevar tu proyecto desde la idea hasta la realidad
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {processSteps.map((step, index) => (
            <div key={index} className="text-center">
              <div className="relative mb-6">
                <div className="w-16 h-16 mx-auto rounded-full bg-gradient-to-r from-violet-500 to-cyan-500 flex items-center justify-center text-white font-bold text-xl">
                  {step.step}
                </div>
                {index < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-8 left-full w-full h-0.5 bg-gradient-to-r from-violet-500/50 to-cyan-500/50 -translate-x-8" />
                )}
              </div>
              <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
              <p className="text-muted-foreground">{step.description}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* FAQ Section */}
      <Section className="bg-muted/30">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-2 mb-4">
            <HelpCircle className="h-6 w-6 text-violet-400" />
            <h2 className="text-3xl md:text-4xl font-bold">Preguntas Frecuentes</h2>
          </div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Resolvemos las dudas más comunes sobre nuestros servicios de impresión 3D
          </p>
        </div>
        <ServicesFAQ />
      </Section>

      {/* CTA Section */}
      <Section>
        <div className="text-center bg-gradient-to-r from-violet-500/10 to-cyan-500/10 rounded-2xl p-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">¿Listo para comenzar tu proyecto?</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Contáctanos hoy mismo para una consulta gratuita y descubre cómo podemos ayudarte a materializar tus ideas
            con la mejor calidad del mercado.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
              <Link href="/custom-order">
                Solicitar Cotización
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild className="bg-transparent">
              <Link href="/contact">Contactar Ahora</Link>
            </Button>
          </div>
        </div>
      </Section>
    </div>
  )
}
