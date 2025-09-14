"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Section } from "@/components/section"
import { Calendar, Clock, User, Search, ArrowRight, BookOpen, Lightbulb } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

const blogPosts = [
  {
    id: "guia-materiales-3d",
    title: "Guía Completa de Materiales para Impresión 3D",
    excerpt:
      "Descubre las características, ventajas y aplicaciones de los principales materiales de impresión 3D disponibles en el mercado.",
    category: "Materiales",
    author: "El Mago",
    date: "2024-01-15",
    readTime: "8 min",
    image: "/3d-printing-materials-pla-abs-petg-filaments.jpg",
    featured: true,
  },
  {
    id: "optimizar-impresiones",
    title: "10 Consejos para Optimizar tus Impresiones 3D",
    excerpt:
      "Técnicas profesionales para mejorar la calidad, reducir tiempos de impresión y minimizar el desperdicio de material.",
    category: "Técnicas",
    author: "El Mago",
    date: "2024-01-10",
    readTime: "6 min",
    image: "/3d-printer-optimization-settings-quality.jpg",
    featured: false,
  },
  {
    id: "diseno-para-impresion",
    title: "Diseño para Impresión 3D: Principios Fundamentales",
    excerpt:
      "Aprende los principios básicos del diseño orientado a la fabricación aditiva para obtener mejores resultados.",
    category: "Diseño",
    author: "El Mago",
    date: "2024-01-05",
    readTime: "10 min",
    image: "/3d-design-cad-modeling-principles.jpg",
    featured: false,
  },
  {
    id: "mantenimiento-impresora",
    title: "Mantenimiento Preventivo de tu Impresora 3D",
    excerpt:
      "Rutinas de mantenimiento esenciales para mantener tu impresora 3D funcionando perfectamente durante años.",
    category: "Mantenimiento",
    author: "El Mago",
    date: "2023-12-28",
    readTime: "7 min",
    image: "/3d-printer-maintenance-cleaning-calibration.jpg",
    featured: false,
  },
  {
    id: "tendencias-2024",
    title: "Tendencias en Impresión 3D para 2024",
    excerpt:
      "Las innovaciones y tendencias más importantes que están transformando la industria de la impresión 3D este año.",
    category: "Tendencias",
    author: "El Mago",
    date: "2023-12-20",
    readTime: "5 min",
    image: "/3d-printing-trends-2024-innovation-technology.jpg",
    featured: false,
  },
  {
    id: "post-procesamiento",
    title: "Técnicas de Post-procesamiento para Impresiones 3D",
    excerpt:
      "Métodos profesionales para mejorar el acabado superficial y las propiedades mecánicas de tus impresiones.",
    category: "Técnicas",
    author: "El Mago",
    date: "2023-12-15",
    readTime: "9 min",
    image: "/3d-print-post-processing-sanding-painting-finishin.jpg",
    featured: false,
  },
]

const categories = ["Todos", "Materiales", "Técnicas", "Diseño", "Mantenimiento", "Tendencias"]

export function BlogContent() {
  const featuredPost = blogPosts.find((post) => post.featured)
  const regularPosts = blogPosts.filter((post) => !post.featured)

  return (
    <div className="min-h-screen pt-24 pb-16">
      <Section>
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <Badge variant="outline" className="mb-4 bg-violet-500/10 border-violet-500/20">
              <BookOpen className="h-3 w-3 mr-1" />
              Blog
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent">
              Conocimiento 3D
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Artículos, tutoriales y consejos para dominar el arte de la impresión 3D
            </p>
          </div>

          {/* Search and Categories */}
          <div className="flex flex-col md:flex-row gap-4 mb-12">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input placeholder="Buscar artículos..." className="pl-10" />
            </div>
            <div className="flex gap-2 overflow-x-auto">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={category === "Todos" ? "default" : "outline"}
                  size="sm"
                  className={category !== "Todos" ? "bg-transparent" : ""}
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>

          {/* Featured Post */}
          {featuredPost && (
            <Card className="mb-12 overflow-hidden">
              <div className="md:flex">
                <div className="md:w-1/2">
                  <Image
                    src={featuredPost.image || "/placeholder.svg"}
                    alt={featuredPost.title}
                    width={400}
                    height={200}
                    className="w-full h-64 md:h-full object-cover"
                  />
                </div>
                <div className="md:w-1/2 p-8">
                  <Badge className="mb-3 bg-violet-500">{featuredPost.category}</Badge>
                  <h2 className="text-2xl md:text-3xl font-bold mb-4 leading-tight">{featuredPost.title}</h2>
                  <p className="text-muted-foreground mb-6 leading-relaxed">{featuredPost.excerpt}</p>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground mb-6">
                    <div className="flex items-center gap-1">
                      <User className="h-4 w-4" />
                      {featuredPost.author}
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      {new Date(featuredPost.date).toLocaleDateString("es-ES")}
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      {featuredPost.readTime}
                    </div>
                  </div>
                  <Button asChild>
                    <Link href={`/blog/${featuredPost.id}`}>
                      Leer Artículo
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>
            </Card>
          )}

          {/* Regular Posts Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {regularPosts.map((post) => (
              <Card key={post.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="relative">
                  <Image
                    src={post.image || "/placeholder.svg"}
                    alt={post.title}
                    width={400}
                    height={200}
                    className="w-full h-48 object-cover"
                  />
                  <Badge className="absolute top-3 left-3 bg-violet-500">{post.category}</Badge>
                </div>
                <CardHeader>
                  <CardTitle className="line-clamp-2 leading-tight">{post.title}</CardTitle>
                  <CardDescription className="line-clamp-3">{post.excerpt}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                    <div className="flex items-center gap-1">
                      <Calendar className="h-3 w-3" />
                      {new Date(post.date).toLocaleDateString("es-ES")}
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="h-3 w-3" />
                      {post.readTime}
                    </div>
                  </div>
                  <Button variant="outline" size="sm" asChild className="w-full bg-transparent">
                    <Link href={`/blog/${post.id}`}>Leer Más</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Newsletter Signup */}
          <Card className="mt-16 bg-gradient-to-r from-violet-500/10 to-cyan-500/10">
            <CardContent className="p-8 text-center">
              <Lightbulb className="h-12 w-12 mx-auto mb-4 text-violet-400" />
              <h3 className="text-2xl font-bold mb-4">¿Te gustó este contenido?</h3>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                Suscríbete a nuestro newsletter y recibe los últimos artículos, tutoriales y ofertas especiales
                directamente en tu email.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <Input placeholder="Tu email" className="flex-1" />
                <Button>Suscribirse</Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </Section>
    </div>
  )
}
