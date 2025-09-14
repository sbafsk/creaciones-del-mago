import type { Metadata } from "next"
import { CustomOrderContent } from "@/components/custom-order-content"

export const metadata: Metadata = {
  title: "Pedido Personalizado | Creaciones del Mago",
  description:
    "Solicita tu pedido personalizado de impresión 3D. Formulario completo para cotizaciones y proyectos especiales.",
}

export default function CustomOrderPage() {
  return <CustomOrderContent />
}
