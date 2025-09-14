"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Section } from "@/components/section"
import { Heart, Users, Award, Target, Lightbulb, Wrench, Globe, ArrowRight, Star, Zap } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

const values = [
  {
    icon: Heart,
    title: "Pasión por la Innovación",
    description: "Cada proyecto es una oportunidad para crear algo único y transformar ideas en realidad tangible.",
  },
  {
    icon: Users,
    title: "Compromiso con el Cliente",
    description: "Tu éxito es nuestro éxito. Trabajamos contigo desde la idea inicial hasta el producto final.",
  },
  {
    icon: Award,
    title: "Calidad Excepcional",
    description: "Utilizamos tecnología de vanguardia y los mejores materiales para garantizar resultados superiores.",
  },
  {
    icon: Globe,
    title: "Impacto Sostenible",
    description: "Promovemos prácticas responsables y materiales eco-friendly para un futuro más sostenible.",
  },
]

const stats = [
  { number: "500+", label: "Proyectos Completados" },
  { number: "150+", label: "Clientes Satisfechos" },
  { number: "3", label: "Años de Experiencia" },
  { number: "24h", label: "Tiempo de Respuesta" },
]

const timeline = [
  {
    year: "2021",
    title: "Los Inicios",
    description: "Comenzamos como un proyecto personal con una impresora 3D casera y mucha pasión por la tecnología.",
  },
  {
    year: "2022",
    title: "Primeros Clientes",
    description: "Expandimos nuestros servicios y comenzamos a trabajar con empresas locales y emprendedores.",
  },
  {
    year: "2023",
    title: "Crecimiento",
    description: "Incorporamos nuevas tecnologías y materiales, ampliando significativamente nuestras capacidades.",
  },
  {
    year: "2024",
    title: "Consolidación",
    description: "Nos establecemos como referentes en impresión 3D en Uruguay con un equipo especializado.",
  },
]

export function AboutContent() {
  return (
    <div className="min-h-screen pt-24 pb-16">
      {/* Hero Section */}
      <Section className="pb-16 bg-gradient-to-br from-violet-950/20 via-background to-cyan-950/20">
        <div className="max-w-4xl mx-auto text-center">
          <Badge variant="outline" className="mb-4 bg-violet-500/10 border-violet-500/20">
            Sobre Nosotros
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent">
            Creaciones del Mago
          </h1>
          <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
            Somos un equipo apasionado por la impresión 3D, dedicado a transformar ideas en realidad tangible. Desde
            nuestro taller en Montevideo, creamos soluciones innovadoras que superan las expectativas de nuestros
            clientes.
          </p>
          <div className="flex items-center justify-center mb-8">
            <Image
              src="/el-mago.png"
              alt="El Mago - Mascota de Creaciones del Mago"
              width={120}
              height={120}
              className="rounded-full border-4 border-violet-500/20"
            />
          </div>
        </div>
      </Section>

      {/* Stats Section */}
      <Section className="py-16 bg-muted/30">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((stat, index) => (
            <div key={index}>
              <div className="text-3xl md:text-4xl font-bold text-violet-400 mb-2">{stat.number}</div>
              <div className="text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>
      </Section>

      {/* Story Section */}
      <Section>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Nuestra Historia</h2>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Todo comenzó en 2021 con una simple impresora 3D y una gran curiosidad por las posibilidades de la
              fabricación aditiva. Lo que empezó como un hobby se transformó rápidamente en una pasión, y luego en una
              misión: democratizar el acceso a la tecnología de impresión 3D en Uruguay.
            </p>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Desde entonces, hemos crecido constantemente, incorporando nuevas tecnologías, materiales y técnicas para
              ofrecer servicios cada vez más especializados. Nuestro enfoque siempre ha sido la calidad, la innovación y
              el servicio personalizado.
            </p>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              Hoy, somos reconocidos como uno de los principales proveedores de servicios de impresión 3D en Montevideo,
              trabajando con empresas, emprendedores, diseñadores y particulares que buscan materializar sus ideas más
              ambiciosas.
            </p>
            <Button asChild>
              <Link href="/services">
                Conoce Nuestros Servicios
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
          <div className="relative">
            <Image
              src="/el-mago.png"
              alt="Taller de Creaciones del Mago"
              width={500}
              height={400}
              className="rounded-lg shadow-lg"
            />
            <div className="absolute -bottom-6 -right-6 bg-gradient-to-r from-violet-500 to-cyan-500 p-4 rounded-lg text-white">
              <Zap className="h-8 w-8" />
            </div>
          </div>
        </div>
      </Section>

      {/* Values Section */}
      <Section className="bg-muted/30">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Nuestros Valores</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Los principios que guían cada decisión y cada proyecto que emprendemos
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {values.map((value, index) => {
            const Icon = value.icon
            return (
              <Card key={index}>
                <CardContent className="p-8">
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-lg bg-violet-500/10 flex-shrink-0">
                      <Icon className="h-6 w-6 text-violet-400" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                      <p className="text-muted-foreground leading-relaxed">{value.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </Section>

      {/* Timeline Section */}
      <Section>
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Nuestro Camino</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            La evolución de Creaciones del Mago a través de los años
          </p>
        </div>

        <div className="relative">
          <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-violet-500 to-cyan-500" />
          <div className="space-y-12">
            {timeline.map((item, index) => (
              <div key={index} className={`flex items-center ${index % 2 === 0 ? "flex-row" : "flex-row-reverse"}`}>
                <div className={`w-1/2 ${index % 2 === 0 ? "pr-8 text-right" : "pl-8 text-left"}`}>
                  <Card>
                    <CardContent className="p-6">
                      <Badge className="mb-3 bg-violet-500">{item.year}</Badge>
                      <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                      <p className="text-muted-foreground">{item.description}</p>
                    </CardContent>
                  </Card>
                </div>
                <div className="relative z-10">
                  <div className="w-4 h-4 bg-gradient-to-r from-violet-500 to-cyan-500 rounded-full" />
                </div>
                <div className="w-1/2" />
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Mission Section */}
      <Section className="bg-gradient-to-r from-violet-500/10 to-cyan-500/10">
        <div className="text-center max-w-4xl mx-auto">
          <Target className="h-16 w-16 mx-auto mb-6 text-violet-400" />
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Nuestra Misión</h2>
          <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
            Democratizar el acceso a la tecnología de impresión 3D, ofreciendo servicios de alta calidad que permitan a
            empresas, emprendedores y creativos materializar sus ideas más innovadoras. Creemos en un futuro donde la
            fabricación personalizada sea accesible para todos.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            <div className="text-center">
              <Lightbulb className="h-8 w-8 mx-auto mb-3 text-violet-400" />
              <h3 className="font-semibold mb-2">Innovación</h3>
              <p className="text-sm text-muted-foreground">Adoptamos las últimas tecnologías y técnicas</p>
            </div>
            <div className="text-center">
              <Wrench className="h-8 w-8 mx-auto mb-3 text-cyan-400" />
              <h3 className="font-semibold mb-2">Calidad</h3>
              <p className="text-sm text-muted-foreground">Cada proyecto recibe atención meticulosa al detalle</p>
            </div>
            <div className="text-center">
              <Star className="h-8 w-8 mx-auto mb-3 text-violet-400" />
              <h3 className="font-semibold mb-2">Excelencia</h3>
              <p className="text-sm text-muted-foreground">Superamos expectativas en cada entrega</p>
            </div>
          </div>
        </div>
      </Section>

      {/* CTA Section */}
      <Section>
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">¿Listo para crear algo increíble?</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Únete a los cientos de clientes que ya han confiado en nosotros para materializar sus ideas más ambiciosas
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
              <Link href="/custom-order">
                Comenzar Proyecto
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild className="bg-transparent">
              <Link href="/contact">Contactar</Link>
            </Button>
          </div>
        </div>
      </Section>
    </div>
  )
}
