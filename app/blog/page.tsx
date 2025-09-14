import type { Metadata } from "next"
import { BlogContent } from "@/components/blog-content"

export const metadata: Metadata = {
  title: "Blog | Creaciones del Mago",
  description:
    "Artículos, tutoriales y novedades sobre impresión 3D. Aprende técnicas, descubre materiales y mantente al día con las últimas tendencias.",
}

export default function BlogPage() {
  return <BlogContent />
}
