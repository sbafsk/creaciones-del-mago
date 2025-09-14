import { Card, CardContent } from "@/components/ui/card"
import { Section } from "@/components/section"
import { Star, Quote } from "lucide-react"
import Image from "next/image"

const testimonials = [
  {
    id: 1,
    name: "María González",
    role: "Diseñadora de Interiores",
    avatar: "/professional-woman-avatar.png",
    rating: 5,
    content:
      "Increíble calidad y atención al detalle. El organizador de especias que pedí superó mis expectativas. Definitivamente volveré a comprar.",
  },
  {
    id: 2,
    name: "Carlos Rodríguez",
    role: "Entusiasta del Camping",
    avatar: "/man-avatar-outdoor.jpg",
    rating: 5,
    content:
      "Los ganchos para camping son súper resistentes y livianos. Perfectos para mis aventuras. El servicio al cliente es excelente.",
  },
  {
    id: 3,
    name: "Ana Martínez",
    role: "Coleccionista de Anime",
    avatar: "/woman-avatar-anime-fan.jpg",
    rating: 5,
    content:
      "Las figuras de anime son obras de arte. La atención al detalle y la calidad de impresión son impresionantes. ¡Recomendado 100%!",
  },
]

export function TestimonialsSection() {
  return (
    <Section
      title="Lo Que Dicen Nuestros Clientes"
      subtitle="La satisfacción de nuestros clientes es nuestra mayor recompensa. Lee sus experiencias con nuestros productos y servicios."
      className="bg-card"
    >
      <div className="grid md:grid-cols-3 gap-8">
        {testimonials.map((testimonial) => (
          <Card key={testimonial.id} className="border-border hover:border-violet-600/50 transition-colors">
            <CardContent className="p-6">
              <div className="flex items-center mb-4">
                <Quote className="h-8 w-8 text-violet-600 mb-4" />
              </div>

              <p className="text-muted-foreground mb-6 text-pretty">&ldquo;{testimonial.content}&rdquo;</p>

              <div className="flex items-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`h-4 w-4 ${
                      i < testimonial.rating ? "fill-yellow-400 text-yellow-400" : "text-muted-foreground"
                    }`}
                  />
                ))}
              </div>

              <div className="flex items-center gap-3">
                <Image
                  src={testimonial.avatar || "/placeholder.svg"}
                  alt={testimonial.name}
                  width={48}
                  height={48}
                  className="rounded-full"
                />
                <div>
                  <div className="font-semibold text-foreground">{testimonial.name}</div>
                  <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </Section>
  )
}
