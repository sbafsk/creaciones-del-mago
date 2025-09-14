"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { Section } from "@/components/section"
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  MessageCircle,
  Instagram,
  Facebook,
  Linkedin,
  CheckCircle,
} from "lucide-react"
import Link from "next/link"

const contactInfo = [
  {
    icon: MapPin,
    title: "Ubicación",
    details: ["Montevideo, Uruguay", "Zona Pocitos"],
    action: "Ver en Mapa",
    href: "#",
  },
  {
    icon: Phone,
    title: "Teléfono",
    details: ["+598 99 123 456", "WhatsApp disponible"],
    action: "Llamar",
    href: "tel:+59899123456",
  },
  {
    icon: Mail,
    title: "Email",
    details: ["info@creacionesdelmago.uy", "Respuesta en 24hs"],
    action: "Enviar Email",
    href: "mailto:info@creacionesdelmago.uy",
  },
  {
    icon: Clock,
    title: "Horarios",
    details: ["Lun - Vie: 9:00 - 18:00", "Sáb: 10:00 - 14:00"],
    action: "Ver Disponibilidad",
    href: "#",
  },
]

const socialLinks = [
  { icon: Instagram, label: "Instagram", href: "#", color: "text-pink-500" },
  { icon: Facebook, label: "Facebook", href: "#", color: "text-blue-500" },
  { icon: Linkedin, label: "LinkedIn", href: "#", color: "text-blue-600" },
]

const inquiryTypes = [
  "Consulta General",
  "Cotización de Proyecto",
  "Soporte Técnico",
  "Colaboración Comercial",
  "Prensa y Medios",
  "Otro",
]

export function ContactContent() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    inquiryType: "",
    subject: "",
    message: "",
    urgency: "",
  })

  const [isSubmitted, setIsSubmitted] = useState(false)

  const updateField = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Contact form submitted:", formData)
    setIsSubmitted(true)
    // Handle form submission
  }

  if (isSubmitted) {
    return (
      <div className="min-h-screen pt-24 pb-16 flex items-center justify-center">
        <Card className="max-w-md mx-auto text-center">
          <CardContent className="p-8">
            <CheckCircle className="h-16 w-16 mx-auto mb-4 text-green-500" />
            <h2 className="text-2xl font-bold mb-4">¡Mensaje Enviado!</h2>
            <p className="text-muted-foreground mb-6">
              Gracias por contactarnos. Responderemos a tu consulta en menos de 24 horas.
            </p>
            <Button onClick={() => setIsSubmitted(false)} className="w-full">
              Enviar Otro Mensaje
            </Button>
          </CardContent>
        </Card>
      </div>
    )
  }

  return (
    <div className="min-h-screen pt-24 pb-16">
      <Section>
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <Badge variant="outline" className="mb-4 bg-violet-500/10 border-violet-500/20">
              <MessageCircle className="h-3 w-3 mr-1" />
              Contacto
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent">
              Hablemos de tu Proyecto
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              ¿Tienes una idea que quieres materializar? Estamos aquí para ayudarte. Contáctanos y descubre cómo podemos
              hacer realidad tu proyecto.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Information */}
            <div className="lg:col-span-1">
              <h2 className="text-2xl font-bold mb-6">Información de Contacto</h2>
              <div className="space-y-6">
                {contactInfo.map((info, index) => {
                  const Icon = info.icon
                  return (
                    <Card key={index}>
                      <CardContent className="p-6">
                        <div className="flex items-start gap-4">
                          <div className="p-2 rounded-lg bg-violet-500/10 flex-shrink-0">
                            <Icon className="h-5 w-5 text-violet-400" />
                          </div>
                          <div className="flex-1">
                            <h3 className="font-semibold mb-2">{info.title}</h3>
                            {info.details.map((detail, idx) => (
                              <p key={idx} className="text-sm text-muted-foreground">
                                {detail}
                              </p>
                            ))}
                            <Button variant="link" size="sm" asChild className="p-0 h-auto mt-2">
                              <Link href={info.href}>{info.action}</Link>
                            </Button>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  )
                })}
              </div>

              {/* Social Links */}
              <div className="mt-8">
                <h3 className="font-semibold mb-4">Síguenos</h3>
                <div className="flex gap-4">
                  {socialLinks.map((social, index) => {
                    const Icon = social.icon
                    return (
                      <Button key={index} variant="outline" size="icon" asChild className="bg-transparent">
                        <Link href={social.href}>
                          <Icon className={`h-4 w-4 ${social.color}`} />
                        </Link>
                      </Button>
                    )
                  })}
                </div>
              </div>

              {/* Quick Actions */}
              <Card className="mt-8 bg-gradient-to-r from-violet-500/10 to-cyan-500/10">
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-4">Acciones Rápidas</h3>
                  <div className="space-y-3">
                    <Button variant="outline" size="sm" asChild className="w-full justify-start bg-transparent">
                      <Link href="/custom-order">Solicitar Cotización</Link>
                    </Button>
                    <Button variant="outline" size="sm" asChild className="w-full justify-start bg-transparent">
                      <Link href="/services">Ver Servicios</Link>
                    </Button>
                    <Button variant="outline" size="sm" asChild className="w-full justify-start bg-transparent">
                      <Link href="/catalog">Explorar Catálogo</Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <Card>
                <CardHeader>
                  <CardTitle>Envíanos un Mensaje</CardTitle>
                  <CardDescription>
                    Completa el formulario y nos pondremos en contacto contigo lo antes posible
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Personal Information */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="name">Nombre completo *</Label>
                        <Input
                          id="name"
                          value={formData.name}
                          onChange={(e) => updateField("name", e.target.value)}
                          required
                        />
                      </div>
                      <div>
                        <Label htmlFor="email">Email *</Label>
                        <Input
                          id="email"
                          type="email"
                          value={formData.email}
                          onChange={(e) => updateField("email", e.target.value)}
                          required
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="phone">Teléfono</Label>
                        <Input
                          id="phone"
                          value={formData.phone}
                          onChange={(e) => updateField("phone", e.target.value)}
                        />
                      </div>
                      <div>
                        <Label htmlFor="company">Empresa (opcional)</Label>
                        <Input
                          id="company"
                          value={formData.company}
                          onChange={(e) => updateField("company", e.target.value)}
                        />
                      </div>
                    </div>

                    {/* Inquiry Details */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="inquiryType">Tipo de consulta *</Label>
                        <Select
                          value={formData.inquiryType}
                          onValueChange={(value) => updateField("inquiryType", value)}
                        >
                          <SelectTrigger>
                            <SelectValue placeholder="Seleccionar tipo" />
                          </SelectTrigger>
                          <SelectContent>
                            {inquiryTypes.map((type) => (
                              <SelectItem key={type} value={type}>
                                {type}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                      <div>
                        <Label htmlFor="urgency">Urgencia</Label>
                        <Select value={formData.urgency} onValueChange={(value) => updateField("urgency", value)}>
                          <SelectTrigger>
                            <SelectValue placeholder="Seleccionar urgencia" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="low">Baja - Sin prisa</SelectItem>
                            <SelectItem value="medium">Media - Esta semana</SelectItem>
                            <SelectItem value="high">Alta - Urgente</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="subject">Asunto *</Label>
                      <Input
                        id="subject"
                        placeholder="Resumen breve de tu consulta"
                        value={formData.subject}
                        onChange={(e) => updateField("subject", e.target.value)}
                        required
                      />
                    </div>

                    <div>
                      <Label htmlFor="message">Mensaje *</Label>
                      <Textarea
                        id="message"
                        placeholder="Describe tu proyecto o consulta en detalle..."
                        value={formData.message}
                        onChange={(e) => updateField("message", e.target.value)}
                        rows={6}
                        required
                      />
                    </div>

                    <Button type="submit" size="lg" className="w-full">
                      <Send className="h-4 w-4 mr-2" />
                      Enviar Mensaje
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* FAQ Section */}
          <div className="mt-16">
            <h2 className="text-2xl font-bold text-center mb-8">Preguntas Frecuentes</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-2">¿Cuánto tiempo toma recibir una cotización?</h3>
                  <p className="text-sm text-muted-foreground">
                    Normalmente respondemos con una cotización detallada en menos de 24 horas hábiles.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-2">¿Ofrecen consultas presenciales?</h3>
                  <p className="text-sm text-muted-foreground">
                    Sí, podemos coordinar reuniones en nuestro taller en Montevideo para proyectos complejos.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-2">¿Trabajan con archivos que yo proporcione?</h3>
                  <p className="text-sm text-muted-foreground">
                    Absolutamente. Aceptamos archivos STL, OBJ, STEP y otros formatos estándar de impresión 3D.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-2">¿Qué métodos de pago aceptan?</h3>
                  <p className="text-sm text-muted-foreground">
                    Aceptamos transferencias bancarias, tarjetas de crédito/débito y efectivo para entregas locales.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </Section>
    </div>
  )
}
