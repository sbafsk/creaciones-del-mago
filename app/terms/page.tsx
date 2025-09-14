import type { Metadata } from "next"
import { PolicyContent } from "@/components/policy-content"

export const metadata: Metadata = {
  title: "Términos y Condiciones | Creaciones del Mago",
  description:
    "Términos y condiciones de uso de los servicios de Creaciones del Mago. Lee nuestras políticas antes de realizar un pedido.",
  robots: {
    index: true,
    follow: true,
  },
}

export default function TermsPage() {
  return <PolicyContent type="terms" />
}
