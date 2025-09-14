"use client"

import type React from "react"

import { useState } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Upload, Send } from "lucide-react"

interface Product {
  id: string
  title: string
}

interface CustomizationModalProps {
  isOpen: boolean
  onClose: () => void
  product: Product
}

export function CustomizationModal({ isOpen, onClose, product }: CustomizationModalProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    customizationType: "",
    description: "",
    budget: "",
    timeline: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log("Customization request:", formData)
    onClose()
  }

  const updateField = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>Solicitar Personalización - {product.title}</DialogTitle>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Contact Information */}
          <div className="space-y-4">
            <h3 className="font-semibold">Información de Contacto</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="name">Nombre completo *</Label>
                <Input id="name" value={formData.name} onChange={(e) => updateField("name", e.target.value)} required />
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
            <div>
              <Label htmlFor="phone">Teléfono</Label>
              <Input id="phone" value={formData.phone} onChange={(e) => updateField("phone", e.target.value)} />
            </div>
          </div>

          {/* Customization Details */}
          <div className="space-y-4">
            <h3 className="font-semibold">Detalles de Personalización</h3>
            <div>
              <Label htmlFor="customizationType">Tipo de personalización</Label>
              <Select
                value={formData.customizationType}
                onValueChange={(value) => updateField("customizationType", value)}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Seleccionar tipo" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="color">Cambio de color</SelectItem>
                  <SelectItem value="size">Cambio de tamaño</SelectItem>
                  <SelectItem value="design">Modificación de diseño</SelectItem>
                  <SelectItem value="text">Agregar texto/grabado</SelectItem>
                  <SelectItem value="other">Otro</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <Label htmlFor="description">Descripción detallada *</Label>
              <Textarea
                id="description"
                placeholder="Describe exactamente qué personalización necesitas..."
                value={formData.description}
                onChange={(e) => updateField("description", e.target.value)}
                rows={4}
                required
              />
            </div>
          </div>

          {/* Project Details */}
          <div className="space-y-4">
            <h3 className="font-semibold">Detalles del Proyecto</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
                    <SelectItem value="5000+">Más de $5,000</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label htmlFor="timeline">Tiempo requerido</Label>
                <Select value={formData.timeline} onValueChange={(value) => updateField("timeline", value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Seleccionar tiempo" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="urgent">Urgente (1-3 días)</SelectItem>
                    <SelectItem value="week">1 semana</SelectItem>
                    <SelectItem value="2weeks">2 semanas</SelectItem>
                    <SelectItem value="month">1 mes</SelectItem>
                    <SelectItem value="flexible">Flexible</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>

          {/* File Upload */}
          <div>
            <Label>Archivos de referencia (opcional)</Label>
            <div className="border-2 border-dashed border-border rounded-lg p-6 text-center">
              <Upload className="h-8 w-8 mx-auto mb-2 text-muted-foreground" />
              <p className="text-sm text-muted-foreground mb-2">Arrastra archivos aquí o haz clic para seleccionar</p>
              <p className="text-xs text-muted-foreground">
                Formatos soportados: STL, OBJ, STEP, JPG, PNG (máx. 200MB)
              </p>
              <Button type="button" variant="outline" size="sm" className="mt-2 bg-transparent">
                Seleccionar Archivos
              </Button>
            </div>
          </div>

          {/* Actions */}
          <div className="flex gap-3 pt-4">
            <Button type="button" variant="outline" onClick={onClose} className="flex-1 bg-transparent">
              Cancelar
            </Button>
            <Button type="submit" className="flex-1">
              <Send className="h-4 w-4 mr-2" />
              Enviar Solicitud
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  )
}
