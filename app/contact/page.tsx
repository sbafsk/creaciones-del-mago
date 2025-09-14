import type { Metadata } from "next"
import { ContactContent } from "@/components/contact-content"

export const metadata: Metadata = {
  title: "Contacto | Creaciones del Mago",
  description:
    "Contáctanos para consultas, cotizaciones o cualquier pregunta sobre nuestros servicios de impresión 3D en Montevideo.",
}

export default function ContactPage() {
  return <ContactContent />
}
