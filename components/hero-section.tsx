import { Button } from "@/components/ui/button"
import { ArrowRight, Sparkles } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export function HeroSection() {
  return (
    <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden bg-slate-900">
      {/* Dark gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900"></div>

      {/* Animated background stars */}
      <div className="absolute inset-0">
        <div className="star absolute top-20 left-20 w-1 h-1 bg-white rounded-full"></div>
        <div className="star absolute top-40 right-32 w-1 h-1 bg-cyan-400 rounded-full"></div>
        <div className="star absolute bottom-32 left-40 w-1 h-1 bg-violet-400 rounded-full"></div>
        <div className="star absolute top-60 left-1/3 w-1 h-1 bg-white rounded-full"></div>
        <div className="star absolute bottom-40 right-20 w-1 h-1 bg-cyan-300 rounded-full"></div>
        <div className="star absolute top-32 right-1/4 w-1 h-1 bg-violet-300 rounded-full"></div>
      </div>

      {/* Additional gradient overlay for better text contrast */}
      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-slate-800/60"></div>

      <div className="container mx-auto max-w-7xl px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Hero Content */}
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center space-x-2 bg-violet-600/10 border border-violet-600/20 rounded-full px-4 py-2 mb-6">
              <Sparkles className="h-4 w-4 text-violet-400" />
              <span className="text-sm font-medium text-violet-200">Impresión 3D Profesional</span>
            </div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 text-balance">
              De la{" "}
              <span className="bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent">
                Imaginación
              </span>{" "}
              a la{" "}
              <span className="bg-gradient-to-r from-cyan-400 to-violet-400 bg-clip-text text-transparent">
                Realidad
              </span>
            </h1>

            <p className="text-xl text-slate-100 mb-8 max-w-2xl text-pretty">
              Solución de problemas, impresión 3D, diseño CAD, juguetes y anime. Transformamos tus ideas en objetos
              reales con la magia de la tecnología.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button asChild size="lg" className="bg-violet-600 hover:bg-violet-700 glow-primary">
                <Link href="/catalog">
                  Explorar Catálogo
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-cyan-500 text-cyan-400 hover:bg-cyan-500/10 bg-slate-800/50 backdrop-blur-sm"
              >
                <Link href="/custom-order">Diseño Personalizado</Link>
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 mt-12 pt-8 border-t border-slate-700">
              <div className="text-center lg:text-left">
                <div className="text-2xl font-bold text-white">500+</div>
                <div className="text-sm text-slate-300">Proyectos Completados</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-2xl font-bold text-white">48h</div>
                <div className="text-sm text-slate-300">Tiempo Promedio</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-2xl font-bold text-white">100%</div>
                <div className="text-sm text-slate-300">Satisfacción</div>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative">
            <div className="relative w-full max-w-lg mx-auto">
              {/* Glow effect behind image */}
              <div className="absolute inset-0 bg-gradient-to-r from-violet-600/30 to-cyan-600/30 rounded-full blur-3xl"></div>

              {/* Main wizard image */}
              <div className="relative z-10 bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-8 border border-slate-700">
                <Image
                  src="/images/el-mago.png"
                  alt="El Mago - Mascota de Creaciones del Mago"
                  width={400}
                  height={500}
                  className="w-full h-auto"
                  priority
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
    </section>
  )
}
