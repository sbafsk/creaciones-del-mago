import type { Metadata } from "next"
import { AboutContent } from "@/components/about-content"

export const metadata: Metadata = {
  title: "Sobre Nosotros | Creaciones del Mago",
  description:
    "Conoce la historia de Creaciones del Mago, nuestro equipo y nuestra pasión por la impresión 3D en Montevideo, Uruguay.",
}

export default function AboutPage() {
  return <AboutContent />
}
