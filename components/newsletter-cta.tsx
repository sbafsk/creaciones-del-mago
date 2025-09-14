import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Section } from "@/components/section"
import { Mail, Sparkles } from "lucide-react"

export function NewsletterCTA() {
  return (
    <Section className="bg-gradient-to-r from-violet-600 to-cyan-600">
      <div className="text-center max-w-2xl mx-auto">
        <div className="inline-flex items-center justify-center w-16 h-16 bg-white/10 rounded-full mb-6">
          <Mail className="h-8 w-8 text-white" />
        </div>

        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 text-balance">Mantente al Día con la Magia</h2>

        <p className="text-xl text-white/90 mb-8 text-pretty">
          Recibe ofertas exclusivas, nuevos productos y consejos de impresión 3D directamente en tu bandeja de entrada.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto mb-6">
          <Input
            type="email"
            placeholder="tu@email.com"
            className="bg-white/10 border-white/20 text-white placeholder:text-white/70 focus:bg-white/20"
          />
          <Button className="bg-white text-violet-600 hover:bg-white/90 font-semibold">
            <Sparkles className="h-4 w-4 mr-2" />
            Suscribirse
          </Button>
        </div>

        <p className="text-sm text-white/70">No spam, solo contenido mágico. Puedes cancelar en cualquier momento.</p>
      </div>
    </Section>
  )
}
