import type { Metadata } from "next"
import { PolicyContent } from "@/components/policy-content"

export const metadata: Metadata = {
  title: "Política de Privacidad | Creaciones del Mago",
  description:
    "Política de privacidad y protección de datos de Creaciones del Mago. Conoce cómo protegemos tu información personal.",
  robots: {
    index: true,
    follow: true,
  },
}

export default function PrivacyPage() {
  return <PolicyContent type="privacy" />
}
