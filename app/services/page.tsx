import type { Metadata } from "next"
import { ServicesContent } from "@/components/services-content"

export const metadata: Metadata = {
  title: "Servicios de Impresión 3D | Creaciones del Mago",
  description:
    "Servicios profesionales de impresión 3D en Montevideo. Prototipado, producción en serie, diseño personalizado y más.",
}

export default function ServicesPage() {
  return <ServicesContent />
}
