"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { Badge } from "@/components/ui/badge"
import { Section } from "@/components/section"
import { FileUpload } from "@/components/file-upload"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { Upload, Send, FileText, Clock, DollarSign, CheckCircle, AlertCircle, Lightbulb } from "lucide-react"
import { analytics } from "@/lib/analytics"

const serviceTypes = [
  { id: "prototyping", label: "Prototipado Rápido", price: "Desde $800" },
  { id: "custom-design", label: "Diseño Personalizado", price: "Desde $1,200" },
  { id: "production", label: "Producción en Serie", price: "Consultar" },
  { id: "repair", label: "Reparación y Repuestos", price: "Desde $600" },
  { id: "consultation", label: "Consultoría Técnica", price: "Desde $1,500/hora" },
  { id: "express", label: "Servicio Express", price: "Recargo 50%" },
]

const materials = [
  "PLA (Biodegradable)",
  "ABS (Resistente)",
  "PETG (Transparente)",
  "TPU (Flexible)",
  "Wood Fill (Madera)",
  "Metal Fill (Metálico)",
  "Otro (especificar)",
]

const colors = [
  "Blanco",
  "Negro",
  "Gris",
  "Rojo",
  "Azul",
  "Verde",
  "Amarillo",
  "Naranja",
  "Violeta",
  "Rosa",
  "Transparente",
  "Otro",
]

export function CustomOrderContent() {
  const [formData, setFormData] = useState({
    // Contact Info
    name: "",
    email: "",
    phone: "",
    company: "",

    // Project Details
    projectTitle: "",
    serviceType: "",
    description: "",
    quantity: "",
    material: "",
    color: "",

    // Requirements
    dimensions: "",
    tolerance: "",
    postProcessing: [] as string[],

    // Timeline & Budget
    timeline: "",
    budget: "",
    priority: "",

    // Files and Additional
    files: [] as File[],
    additionalNotes: "",
    newsletter: false,
  })

  const [currentStep, setCurrentStep] = useState(1)
  const totalSteps = 5 // Added file upload as separate step

  const updateField = (field: string, value: string | string[] | boolean | File[]) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const handlePostProcessingChange = (process: string, checked: boolean) => {
    const current = formData.postProcessing
    if (checked) {
      updateField("postProcessing", [...current, process])
    } else {
      updateField(
        "postProcessing",
        current.filter((p) => p !== process),
      )
    }
  }

  const nextStep = () => {
    if (currentStep < totalSteps) setCurrentStep(currentStep + 1)
  }

  const prevStep = () => {
    if (currentStep > 1) setCurrentStep(currentStep - 1)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    analytics.generateLead({
      form_step: "completed",
      project_type: formData.serviceType,
      file_count: formData.files.length,
    })

    console.log("Custom order submitted:", formData)
    // Handle form submission - would integrate with backend API
  }

  const handleFilesChange = (files: File[]) => {
    updateField("files", files)
  }

  return (
    <div className="min-h-screen pt-24 pb-16">
      <Section>
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <Badge variant="outline" className="mb-4 bg-violet-500/10 border-violet-500/20">
              Pedido Personalizado
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent">
              Solicita tu Cotización
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Completa este formulario detallado para recibir una cotización precisa y personalizada para tu proyecto
            </p>

            <div className="mt-6">
              <WhatsAppButton
                source="custom_order_header"
                message="¡Hola! Me interesa hacer un pedido personalizado de impresión 3D. ¿Podrían ayudarme?"
                variant="outline"
                className="bg-transparent"
              />
            </div>
          </div>

          {/* Progress Indicator */}
          <div className="mb-8">
            <div className="flex items-center justify-between mb-2">
              {Array.from({ length: totalSteps }, (_, i) => (
                <div key={i} className="flex items-center">
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${
                      i + 1 <= currentStep ? "bg-violet-500 text-white" : "bg-muted text-muted-foreground"
                    }`}
                  >
                    {i + 1 <= currentStep ? <CheckCircle className="h-4 w-4" /> : i + 1}
                  </div>
                  {i < totalSteps - 1 && (
                    <div className={`flex-1 h-0.5 mx-2 ${i + 1 < currentStep ? "bg-violet-500" : "bg-muted"}`} />
                  )}
                </div>
              ))}
            </div>
            <div className="text-center text-sm text-muted-foreground">
              Paso {currentStep} de {totalSteps}
            </div>
          </div>

          <form onSubmit={handleSubmit}>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  {currentStep === 1 && (
                    <>
                      <FileText className="h-5 w-5" /> Información de Contacto
                    </>
                  )}
                  {currentStep === 2 && (
                    <>
                      <Lightbulb className="h-5 w-5" /> Detalles del Proyecto
                    </>
                  )}
                  {currentStep === 3 && (
                    <>
                      <Clock className="h-5 w-5" /> Especificaciones Técnicas
                    </>
                  )}
                  {currentStep === 4 && (
                    <>
                      <Upload className="h-5 w-5" /> Archivos de Referencia
                    </>
                  )}
                  {currentStep === 5 && (
                    <>
                      <DollarSign className="h-5 w-5" /> Timeline y Presupuesto
                    </>
                  )}
                </CardTitle>
                <CardDescription>
                  {currentStep === 1 && "Información básica para contactarte"}
                  {currentStep === 2 && "Describe tu proyecto en detalle"}
                  {currentStep === 3 && "Especificaciones técnicas y materiales"}
                  {currentStep === 4 && "Sube archivos STL, OBJ, STEP o imágenes de referencia"}
                  {currentStep === 5 && "Tiempos y presupuesto estimado"}
                </CardDescription>
              </CardHeader>

              <CardContent className="space-y-6">
                {/* Step 1: Contact Information */}
                {currentStep === 1 && (
                  <div className="space-y-4">
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
                  </div>
                )}

                {/* Step 2: Project Details */}
                {currentStep === 2 && (
                  <div className="space-y-4">
                    <div>
                      <Label htmlFor="projectTitle">Título del proyecto *</Label>
                      <Input
                        id="projectTitle"
                        placeholder="Ej: Prototipo de carcasa para dispositivo móvil"
                        value={formData.projectTitle}
                        onChange={(e) => updateField("projectTitle", e.target.value)}
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="serviceType">Tipo de servicio *</Label>
                      <Select value={formData.serviceType} onValueChange={(value) => updateField("serviceType", value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Seleccionar servicio" />
                        </SelectTrigger>
                        <SelectContent>
                          {serviceTypes.map((service) => (
                            <SelectItem key={service.id} value={service.id}>
                              <div className="flex justify-between items-center w-full">
                                <span>{service.label}</span>
                                <Badge variant="outline" className="ml-2">
                                  {service.price}
                                </Badge>
                              </div>
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <Label htmlFor="description">Descripción detallada *</Label>
                      <Textarea
                        id="description"
                        placeholder="Describe tu proyecto: qué necesitas, para qué lo vas a usar, características especiales..."
                        value={formData.description}
                        onChange={(e) => updateField("description", e.target.value)}
                        rows={4}
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="quantity">Cantidad de piezas *</Label>
                      <Select value={formData.quantity} onValueChange={(value) => updateField("quantity", value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Seleccionar cantidad" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="1">1 pieza</SelectItem>
                          <SelectItem value="2-5">2-5 piezas</SelectItem>
                          <SelectItem value="6-10">6-10 piezas</SelectItem>
                          <SelectItem value="11-25">11-25 piezas</SelectItem>
                          <SelectItem value="26-50">26-50 piezas</SelectItem>
                          <SelectItem value="50+">Más de 50 piezas</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                )}

                {/* Step 3: Technical Specifications */}
                {currentStep === 3 && (
                  <div className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="material">Material preferido</Label>
                        <Select value={formData.material} onValueChange={(value) => updateField("material", value)}>
                          <SelectTrigger>
                            <SelectValue placeholder="Seleccionar material" />
                          </SelectTrigger>
                          <SelectContent>
                            {materials.map((material) => (
                              <SelectItem key={material} value={material}>
                                {material}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                      <div>
                        <Label htmlFor="color">Color preferido</Label>
                        <Select value={formData.color} onValueChange={(value) => updateField("color", value)}>
                          <SelectTrigger>
                            <SelectValue placeholder="Seleccionar color" />
                          </SelectTrigger>
                          <SelectContent>
                            {colors.map((color) => (
                              <SelectItem key={color} value={color}>
                                {color}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                    <div>
                      <Label htmlFor="dimensions">Dimensiones aproximadas</Label>
                      <Input
                        id="dimensions"
                        placeholder="Ej: 10cm x 5cm x 2cm"
                        value={formData.dimensions}
                        onChange={(e) => updateField("dimensions", e.target.value)}
                      />
                    </div>
                    <div>
                      <Label htmlFor="tolerance">Tolerancia requerida</Label>
                      <Select value={formData.tolerance} onValueChange={(value) => updateField("tolerance", value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Seleccionar tolerancia" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="standard">Estándar (±0.2mm)</SelectItem>
                          <SelectItem value="high">Alta precisión (±0.1mm)</SelectItem>
                          <SelectItem value="ultra">Ultra precisión (±0.05mm)</SelectItem>
                          <SelectItem value="custom">Personalizada</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <Label>Post-procesamiento (opcional)</Label>
                      <div className="grid grid-cols-2 gap-2 mt-2">
                        {["Lijado", "Pintura", "Ensamblaje", "Perforado", "Roscado", "Otro"].map((process) => (
                          <div key={process} className="flex items-center space-x-2">
                            <Checkbox
                              id={process}
                              checked={formData.postProcessing.includes(process)}
                              onCheckedChange={(checked) => handlePostProcessingChange(process, checked as boolean)}
                            />
                            <Label htmlFor={process} className="text-sm">
                              {process}
                            </Label>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}

                {/* Step 4: File Upload */}
                {currentStep === 4 && (
                  <div className="space-y-4">
                    <div>
                      <Label>Archivos de referencia</Label>
                      <p className="text-sm text-muted-foreground mb-4">
                        Sube archivos 3D (STL, OBJ, STEP), imágenes de referencia o documentos técnicos. Esto nos
                        ayudará a darte una cotización más precisa.
                      </p>
                      <FileUpload onFilesChange={handleFilesChange} maxFiles={10} maxSize={200} />
                    </div>

                    {formData.files.length === 0 && (
                      <div className="bg-muted/50 rounded-lg p-4">
                        <div className="flex items-start gap-3">
                          <AlertCircle className="h-5 w-5 text-warning flex-shrink-0 mt-0.5" />
                          <div>
                            <p className="text-sm font-medium">¿No tienes archivos 3D?</p>
                            <p className="text-sm text-muted-foreground mt-1">
                              No te preocupes. Podemos trabajar con bocetos, fotos o descripciones detalladas. También
                              ofrecemos servicios de diseño 3D desde cero.
                            </p>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                )}

                {/* Step 5: Timeline & Budget (previously step 4) */}
                {currentStep === 5 && (
                  <div className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="timeline">Tiempo requerido *</Label>
                        <Select value={formData.timeline} onValueChange={(value) => updateField("timeline", value)}>
                          <SelectTrigger>
                            <SelectValue placeholder="Seleccionar tiempo" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="urgent">Urgente (1-3 días) +50%</SelectItem>
                            <SelectItem value="week">1 semana</SelectItem>
                            <SelectItem value="2weeks">2 semanas</SelectItem>
                            <SelectItem value="month">1 mes</SelectItem>
                            <SelectItem value="flexible">Flexible</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div>
                        <Label htmlFor="budget">Presupuesto estimado (UYU)</Label>
                        <Select value={formData.budget} onValueChange={(value) => updateField("budget", value)}>
                          <SelectTrigger>
                            <SelectValue placeholder="Seleccionar rango" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="500-1000">$500 - $1,000</SelectItem>
                            <SelectItem value="1000-2000">$1,000 - $2,000</SelectItem>
                            <SelectItem value="2000-5000">$2,000 - $5,000</SelectItem>
                            <SelectItem value="5000-10000">$5,000 - $10,000</SelectItem>
                            <SelectItem value="10000+">Más de $10,000</SelectItem>
                            <SelectItem value="open">Abierto a propuestas</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                    <div>
                      <Label htmlFor="priority">Prioridad del proyecto</Label>
                      <Select value={formData.priority} onValueChange={(value) => updateField("priority", value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Seleccionar prioridad" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="low">Baja - Tengo tiempo</SelectItem>
                          <SelectItem value="medium">Media - Fecha flexible</SelectItem>
                          <SelectItem value="high">Alta - Fecha fija</SelectItem>
                          <SelectItem value="urgent">Urgente - Lo antes posible</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <Label htmlFor="additionalNotes">Notas adicionales</Label>
                      <Textarea
                        id="additionalNotes"
                        placeholder="Cualquier información adicional que consideres importante..."
                        value={formData.additionalNotes}
                        onChange={(e) => updateField("additionalNotes", e.target.value)}
                        rows={3}
                      />
                    </div>

                    <div className="flex items-center space-x-2">
                      <Checkbox
                        id="newsletter"
                        checked={formData.newsletter}
                        onCheckedChange={(checked) => updateField("newsletter", checked as boolean)}
                      />
                      <Label htmlFor="newsletter" className="text-sm">
                        Quiero recibir novedades y ofertas especiales
                      </Label>
                    </div>
                  </div>
                )}

                {/* Navigation Buttons */}
                <div className="flex justify-between pt-6 border-t">
                  <Button
                    type="button"
                    variant="outline"
                    onClick={prevStep}
                    disabled={currentStep === 1}
                    className="bg-transparent"
                  >
                    Anterior
                  </Button>

                  {currentStep < totalSteps ? (
                    <Button type="button" onClick={nextStep}>
                      Siguiente
                    </Button>
                  ) : (
                    <Button type="submit">
                      <Send className="h-4 w-4 mr-2" />
                      Enviar Solicitud
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          </form>

          {/* Info Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            <Card>
              <CardContent className="p-6 text-center">
                <Clock className="h-8 w-8 mx-auto mb-3 text-violet-400" />
                <h3 className="font-semibold mb-2">Respuesta Rápida</h3>
                <p className="text-sm text-muted-foreground">Recibirás una cotización detallada en menos de 24 horas</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 text-center">
                <CheckCircle className="h-8 w-8 mx-auto mb-3 text-green-400" />
                <h3 className="font-semibold mb-2">Sin Compromiso</h3>
                <p className="text-sm text-muted-foreground">
                  La cotización es completamente gratuita y sin obligación
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 text-center">
                <AlertCircle className="h-8 w-8 mx-auto mb-3 text-cyan-400" />
                <h3 className="font-semibold mb-2">Asesoramiento</h3>
                <p className="text-sm text-muted-foreground">
                  Te ayudamos a optimizar tu proyecto para mejores resultados
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </Section>
    </div>
  )
}
