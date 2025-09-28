"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Sparkles, ChevronLeft, ChevronRight } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { useState, useEffect } from "react"

const slides = [
  {
    id: 1,
    badge: { icon: Sparkles, text: "Impresión 3D Profesional" },
    title: {
      main: "De la",
      highlight1: "Imaginación",
      middle: "a la",
      highlight2: "Realidad"
    },
    description: "Solución de problemas, impresión 3D, diseño CAD, juguetes y anime. Transformamos tus ideas en objetos reales con la magia de la tecnología.",
    buttons: [
      { href: "/catalog", text: "Explorar Catálogo", variant: "primary", icon: ArrowRight },
      { href: "/services", text: "Nuestros Servicios", variant: "outline" }
    ],
    image: "/el-mago.png",
    imageAlt: "El Mago - Mascota de Creaciones del Mago",
    stats: [
      { value: "500+", label: "Proyectos Completados" },
      { value: "48h", label: "Tiempo Promedio" },
      { value: "100%", label: "Satisfacción" }
    ]
  },
  {
    id: 2,
    badge: { icon: Sparkles, text: "Productos Únicos" },
    title: {
      main: "Catálogo de",
      highlight1: "Productos",
      middle: "3D",
      highlight2: "Únicos"
    },
    description: "Descubre nuestra amplia gama de productos para camping, cocina, decoración, juguetes y figuras de anime. Cada pieza diseñada con precisión.",
    buttons: [
      { href: "/catalog", text: "Ver Catálogo", variant: "primary", icon: ArrowRight },
      { href: "/services", text: "Servicios", variant: "outline" }
    ],
    image: "/el-mago.png",
    imageAlt: "Productos 3D únicos",
    stats: [
      { value: "200+", label: "Productos Disponibles" },
      { value: "24h", label: "Envío Rápido" },
      { value: "5⭐", label: "Calificación Promedio" }
    ]
  },
  {
    id: 3,
    badge: { icon: Sparkles, text: "Servicios Premium" },
    title: {
      main: "Servicios",
      highlight1: "Profesionales",
      middle: "de",
      highlight2: "Impresión"
    },
    description: "Ofrecemos servicios completos de impresión 3D, desde prototipado hasta producción en serie. Calidad garantizada en cada proyecto.",
    buttons: [
      { href: "/services", text: "Ver Servicios", variant: "primary", icon: ArrowRight },
      { href: "/contact", text: "Contactar", variant: "outline" }
    ],
    image: "/el-mago.png",
    imageAlt: "Servicios profesionales de impresión 3D",
    stats: [
      { value: "7", label: "Tipos de Material" },
      { value: "0.1mm", label: "Precisión Máxima" },
      { value: "24/7", label: "Soporte Técnico" }
    ]
  }
]

export function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  useEffect(() => {
    if (!isAutoPlaying) return

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [isAutoPlaying])

  const goToSlide = (index: number) => {
    setCurrentSlide(index)
    setIsAutoPlaying(false)
    setTimeout(() => setIsAutoPlaying(true), 10000)
  }

  const goToPrevious = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
    setIsAutoPlaying(false)
    setTimeout(() => setIsAutoPlaying(true), 10000)
  }

  const goToNext = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
    setIsAutoPlaying(false)
    setTimeout(() => setIsAutoPlaying(true), 10000)
  }

  const currentSlideData = slides[currentSlide]

  return (
    <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden bg-slate-900">
      {/* Dark gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900"></div>

      {/* Animated background stars */}
      <div className="absolute inset-0">
        <div className="star absolute top-20 left-20 w-1 h-1 bg-white rounded-full animate-pulse"></div>
        <div className="star absolute top-40 right-32 w-1 h-1 bg-cyan-400 rounded-full animate-pulse"></div>
        <div className="star absolute bottom-32 left-40 w-1 h-1 bg-violet-400 rounded-full animate-pulse"></div>
        <div className="star absolute top-60 left-1/3 w-1 h-1 bg-white rounded-full animate-pulse"></div>
        <div className="star absolute bottom-40 right-20 w-1 h-1 bg-cyan-300 rounded-full animate-pulse"></div>
        <div className="star absolute top-32 right-1/4 w-1 h-1 bg-violet-300 rounded-full animate-pulse"></div>
      </div>

      {/* Additional gradient overlay for better text contrast */}
      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-slate-800/60"></div>

      {/* Navigation arrows */}
      <Button
        variant="ghost"
        size="icon"
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-white/10 hover:bg-white/20 text-white border-white/20"
        onClick={goToPrevious}
        aria-label="Slide anterior"
      >
        <ChevronLeft className="h-6 w-6" />
      </Button>
      <Button
        variant="ghost"
        size="icon"
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-white/10 hover:bg-white/20 text-white border-white/20"
        onClick={goToNext}
        aria-label="Siguiente slide"
      >
        <ChevronRight className="h-6 w-6" />
      </Button>

      <div className="container mx-auto max-w-7xl px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Hero Content */}
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center space-x-2 bg-violet-600/10 border border-violet-600/20 rounded-full px-4 py-2 mb-6 transition-all duration-500">
              <currentSlideData.badge.icon className="h-4 w-4 text-violet-400" />
              <span className="text-sm font-medium text-violet-200">{currentSlideData.badge.text}</span>
            </div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 text-balance transition-all duration-500">
              {currentSlideData.title.main}{" "}
              <span className="bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent">
                {currentSlideData.title.highlight1}
              </span>{" "}
              {currentSlideData.title.middle}{" "}
              <span className="bg-gradient-to-r from-cyan-400 to-violet-400 bg-clip-text text-transparent">
                {currentSlideData.title.highlight2}
              </span>
            </h1>

            <p className="text-xl text-slate-100 mb-8 max-w-2xl text-pretty transition-all duration-500">
              {currentSlideData.description}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
              {currentSlideData.buttons.map((button, index) => (
                <Button
                  key={index}
                  asChild
                  size="lg"
                  variant={button.variant === "primary" ? "default" : "outline"}
                  className={button.variant === "primary"
                    ? "bg-violet-600 hover:bg-violet-700 glow-primary"
                    : "border-cyan-500 text-cyan-400 hover:bg-cyan-500/10 bg-slate-800/50 backdrop-blur-sm"
                  }
                >
                  <Link href={button.href}>
                    {button.text}
                    {button.icon && <button.icon className="ml-2 h-5 w-5" />}
                  </Link>
                </Button>
              ))}
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-slate-700">
              {currentSlideData.stats.map((stat, index) => (
                <div key={index} className="text-center lg:text-left transition-all duration-500">
                  <div className="text-2xl font-bold text-white">{stat.value}</div>
                  <div className="text-sm text-slate-300">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative">
            <div className="relative w-full max-w-lg mx-auto">
              {/* Glow effect behind image */}
              <div className="absolute inset-0 bg-gradient-to-r from-violet-600/30 to-cyan-600/30 rounded-full blur-3xl"></div>

              {/* Main image */}
              <div className="relative z-10 bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-8 border border-slate-700 transition-all duration-500">
                <Image
                  src={currentSlideData.image}
                  alt={currentSlideData.imageAlt}
                  width={400}
                  height={500}
                  className="w-full h-auto transition-all duration-500"
                  priority={currentSlide === 0}
                />
              </div>

              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 bg-violet-600 rounded-full p-3 animate-bounce">
                <Sparkles className="h-6 w-6 text-white" />
              </div>
              <div className="absolute -bottom-4 -left-4 bg-cyan-600 rounded-full p-3 animate-pulse">
                <Sparkles className="h-6 w-6 text-white" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Slide indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex space-x-2 z-20">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide
                ? "bg-white scale-110"
                : "bg-white/50 hover:bg-white/70"
            }`}
            aria-label={`Ir al slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  )
}
