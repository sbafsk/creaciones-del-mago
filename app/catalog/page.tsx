import type { Metadata } from "next"
import { Suspense } from "react"
import { CatalogContent } from "@/components/catalog-content"

export const metadata: Metadata = {
  title: "Catálogo de Productos 3D | Creaciones del Mago",
  description:
    "Explora nuestro catálogo completo de productos impresos en 3D: figuras de anime, accesorios de camping, juguetes personalizados y más. Envío a todo Uruguay.",
  keywords: [
    "catálogo 3D",
    "productos impresos 3D",
    "figuras anime",
    "accesorios camping",
    "juguetes personalizados",
    "Montevideo",
    "Uruguay",
  ],
  openGraph: {
    title: "Catálogo de Productos 3D | Creaciones del Mago",
    description: "Explora nuestro catálogo completo de productos impresos en 3D. Envío a todo Uruguay.",
    url: "https://creacionesdelmago.com/catalog",
    images: [
      {
        url: "/el-mago.png",
        width: 1200,
        height: 630,
        alt: "Catálogo de Productos 3D",
      },
    ],
    type: "website",
  },
  alternates: {
    canonical: "https://creacionesdelmago.com/catalog",
  },
}

export default function CatalogPage() {
  return (
    <Suspense fallback={<div className="container mx-auto max-w-7xl px-4 py-8">Cargando catálogo...</div>}>
      <CatalogContent />
    </Suspense>
  )
}
