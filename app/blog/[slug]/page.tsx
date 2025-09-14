import type { Metadata } from "next"
import { BlogPostContent } from "@/components/blog-post-content"
import { StructuredData } from "@/components/structured-data"
import { generateArticleSchema } from "@/lib/seo"
import { notFound } from "next/navigation"

// Mock blog posts data - in a real app this would come from a CMS or database
const blogPosts = {
  "guia-materiales-3d": {
    id: "guia-materiales-3d",
    title: "Guía Completa de Materiales para Impresión 3D",
    excerpt:
      "Descubre las características, ventajas y aplicaciones de los principales materiales de impresión 3D disponibles en el mercado.",
    content: `
# Guía Completa de Materiales para Impresión 3D

La elección del material correcto es fundamental para el éxito de cualquier proyecto de impresión 3D. En esta guía completa, exploraremos los materiales más populares y sus aplicaciones específicas.

## PLA (Ácido Poliláctico)

El PLA es el material más popular para principiantes debido a su facilidad de uso y propiedades ecológicas.

### Características principales:
- **Biodegradable**: Se descompone naturalmente
- **Baja temperatura de impresión**: 190-220°C
- **Mínimo warping**: Ideal para principiantes
- **Acabado brillante**: Excelente calidad superficial

### Aplicaciones ideales:
- Prototipos conceptuales
- Figuras decorativas
- Juguetes educativos
- Objetos de interior

## ABS (Acrilonitrilo Butadieno Estireno)

El ABS es conocido por su resistencia y durabilidad, siendo el material de elección para aplicaciones funcionales.

### Características principales:
- **Alta resistencia**: Soporta impactos y estrés
- **Temperatura de impresión**: 220-250°C
- **Flexible**: Menos quebradizo que el PLA
- **Reciclable**: Puede ser reprocesado

### Aplicaciones ideales:
- Piezas mecánicas
- Carcasas electrónicas
- Herramientas
- Componentes automotrices

## PETG (Polietileno Tereftalato Glicol)

El PETG combina lo mejor del PLA y ABS, ofreciendo facilidad de impresión con excelentes propiedades mecánicas.

### Características principales:
- **Transparencia**: Ideal para aplicaciones ópticas
- **Resistencia química**: No se degrada fácilmente
- **Flexibilidad**: Resistente a impactos
- **Apto para alimentos**: Seguro para contacto alimentario

### Aplicaciones ideales:
- Contenedores transparentes
- Dispositivos médicos
- Componentes mecánicos
- Prototipos funcionales

## TPU (Poliuretano Termoplástico)

El TPU es un material flexible que abre nuevas posibilidades de diseño.

### Características principales:
- **Flexibilidad extrema**: Como goma
- **Resistencia a la abrasión**: Muy duradero
- **Amortiguación**: Excelente para aplicaciones de impacto
- **Resistencia química**: No se degrada fácilmente

### Aplicaciones ideales:
- Fundas para teléfonos
- Suelas de zapatos
- Juntas y sellos
- Juguetes flexibles

## Materiales Especializados

### Wood Fill
Combina PLA con fibras de madera real para un acabado natural que puede ser lijado y teñido.

### Metal Fill
Incorpora partículas metálicas que pueden ser pulidas para obtener un acabado metálico real.

### Materiales Solubles
Como PVA o HIPS, ideales para soportes complejos que se disuelven en agua o limoneno.

## Consejos para la Selección

1. **Define tu aplicación**: ¿Es decorativo o funcional?
2. **Considera el entorno**: ¿Estará expuesto a calor o químicos?
3. **Evalúa la complejidad**: ¿Necesitas soportes solubles?
4. **Piensa en el post-procesamiento**: ¿Requiere lijado o pintura?

## Conclusión

La elección del material correcto puede hacer la diferencia entre un proyecto exitoso y uno fallido. En Creaciones del Mago, te ayudamos a seleccionar el material óptimo para tu proyecto específico, garantizando los mejores resultados posibles.

¿Tienes dudas sobre qué material usar? [Contáctanos](/contact) para una consulta gratuita.
    `,
    category: "Materiales",
    author: "El Mago",
    date: "2024-01-15",
    readTime: "8 min",
    image: "/goku-figure-3d-printed-anime.jpg",
    tags: ["materiales", "PLA", "ABS", "PETG", "TPU", "guía"],
  },
  "optimizar-impresiones": {
    id: "optimizar-impresiones",
    title: "10 Consejos para Optimizar tus Impresiones 3D",
    excerpt:
      "Técnicas profesionales para mejorar la calidad, reducir tiempos de impresión y minimizar el desperdicio de material.",
    content: `
# 10 Consejos para Optimizar tus Impresiones 3D

Después de años perfeccionando nuestras técnicas de impresión 3D, compartimos contigo los consejos más efectivos para obtener resultados profesionales.

## 1. Calibra tu Cama de Impresión

Una cama mal calibrada es la causa #1 de impresiones fallidas.

### Proceso de calibración:
- Usa papel de 0.1mm como referencia
- Ajusta en 5 puntos: centro y esquinas
- Verifica la temperatura de la cama
- Realiza test de primera capa

## 2. Optimiza la Velocidad de Impresión

Más rápido no siempre es mejor. Encuentra el equilibrio perfecto.

### Velocidades recomendadas:
- **Primera capa**: 20-30 mm/s
- **Perímetros**: 40-60 mm/s
- **Relleno**: 60-80 mm/s
- **Soportes**: 30-50 mm/s

## 3. Ajusta la Temperatura Correctamente

Cada material tiene su rango óptimo de temperatura.

### Método de prueba:
1. Imprime torre de temperatura
2. Observa calidad de capas
3. Evalúa adherencia entre capas
4. Selecciona temperatura óptima

## 4. Configura el Relleno Inteligentemente

El relleno afecta resistencia, peso y tiempo de impresión.

### Patrones recomendados:
- **Gyroid**: Mejor relación resistencia/peso
- **Grid**: Rápido para prototipos
- **Honeycomb**: Máxima resistencia
- **Lightning**: Mínimo tiempo y material

## 5. Usa Soportes Solo Cuando Sea Necesario

Los soportes añaden tiempo y material. Úsalos estratégicamente.

### Regla de los 45°:
- Ángulos > 45°: Generalmente no necesitan soporte
- Ángulos < 45°: Evalúa si realmente necesitas soporte
- Voladizos cortos: Pueden imprimirse sin soporte

## 6. Optimiza la Orientación de la Pieza

La orientación afecta resistencia, calidad superficial y necesidad de soportes.

### Consideraciones:
- Coloca la cara más importante hacia arriba
- Minimiza la necesidad de soportes
- Considera la dirección de las fuerzas
- Optimiza para el post-procesamiento

## 7. Ajusta la Altura de Capa Según la Aplicación

La altura de capa afecta calidad y tiempo de impresión.

### Recomendaciones:
- **0.1mm**: Máxima calidad, detalles finos
- **0.2mm**: Equilibrio calidad/velocidad
- **0.3mm**: Prototipos rápidos
- **0.4mm**: Piezas grandes, menos detalle

## 8. Controla la Retracción

La retracción previene el stringing pero puede causar otros problemas.

### Configuración típica:
- **Distancia**: 2-6mm (direct drive: 2-3mm, bowden: 4-6mm)
- **Velocidad**: 25-45 mm/s
- **Z-hop**: 0.2-0.4mm si es necesario

## 9. Mantén tu Filamento Seco

La humedad es enemiga de la calidad de impresión.

### Señales de filamento húmedo:
- Burbujeo durante la impresión
- Superficie rugosa
- Mala adherencia entre capas
- Stringing excesivo

### Soluciones:
- Almacena en contenedores herméticos
- Usa desecante (silica gel)
- Considera un secador de filamento

## 10. Realiza Mantenimiento Regular

Una impresora bien mantenida produce mejores resultados.

### Rutina de mantenimiento:
- Limpia la cama de impresión
- Lubrica ejes y rodamientos
- Verifica tensión de correas
- Limpia el hotend
- Calibra regularmente

## Conclusión

La optimización de impresiones 3D es un proceso continuo de mejora. Cada material y cada impresora tienen sus particularidades, pero estos consejos te darán una base sólida para obtener resultados profesionales.

¿Necesitas ayuda optimizando tus impresiones? En Creaciones del Mago ofrecemos [consultoría técnica](/services) para ayudarte a perfeccionar tu proceso.
    `,
    category: "Técnicas",
    author: "El Mago",
    date: "2024-01-10",
    readTime: "6 min",
    image: "/camping-hook-3d-printed.jpg",
    tags: ["optimización", "técnicas", "calidad", "velocidad", "configuración"],
  },
}

interface BlogPostPageProps {
  params: {
    slug: string
  }
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const post = blogPosts[params.slug as keyof typeof blogPosts]

  if (!post) {
    return {
      title: "Artículo no encontrado | Blog Creaciones del Mago",
      description: "El artículo que buscas no está disponible.",
    }
  }

  return {
    title: `${post.title} | Blog Creaciones del Mago`,
    description: post.excerpt,
    keywords: post.tags,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      url: `https://creacionesdelmago.com/blog/${post.id}`,
      images: [
        {
          url: post.image,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
      images: [post.image],
    },
    alternates: {
      canonical: `https://creacionesdelmago.com/blog/${post.id}`,
    },
  }
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const post = blogPosts[params.slug as keyof typeof blogPosts]

  if (!post) {
    notFound()
  }

  const articleSchema = generateArticleSchema({
    headline: post.title,
    description: post.excerpt,
    image: [`https://creacionesdelmago.com${post.image}`],
    datePublished: post.date,
    author: {
      name: post.author,
      url: "https://creacionesdelmago.com/about",
    },
    publisher: {
      name: "Creaciones del Mago",
      logo: "https://creacionesdelmago.com/el-mago.png",
    },
  })

  return (
    <>
      <StructuredData data={articleSchema} />
      <BlogPostContent post={post} />
    </>
  )
}
