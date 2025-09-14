import { Card, CardContent } from "@/components/ui/card"
import { Section } from "@/components/section"
import { Printer, Palette, Wrench } from "lucide-react"

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
  return (
    <Section
      title="Nuestros Servicios"
      subtitle="Combinamos creatividad, tecnología y experiencia para dar vida a tus ideas más ambiciosas."
    >
      <div className="grid md:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <Card
            key={index}
            className="group hover:shadow-lg transition-all duration-300 border-border hover:border-violet-600/50"
          >
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
        ))}
      </div>
    </Section>
  )
}
