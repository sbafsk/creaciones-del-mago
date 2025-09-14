import type { Metadata } from "next"
import { HeroSection } from "@/components/hero-section"
import { ServicesHighlights } from "@/components/services-highlights"
import { FeaturedProducts } from "@/components/featured-products"
import { TestimonialsSection } from "@/components/testimonials-section"
import { NewsletterCTA } from "@/components/newsletter-cta"
import { StructuredData } from "@/components/structured-data"
import { generateLocalBusinessSchema } from "@/lib/seo"

export const metadata: Metadata = {
  title: "Creaciones del Mago - Impresión 3D Profesional | Montevideo, Uruguay",
  description:
    "De la imaginación a la realidad. Servicios profesionales de impresión 3D, diseño CAD, juguetes personalizados y figuras de anime en Montevideo, Uruguay.",
  keywords: [
    "impresión 3D",
    "Montevideo",
    "Uruguay",
    "diseño 3D",
    "prototipado",
    "figuras anime",
    "juguetes personalizados",
    "PLA",
    "ABS",
    "PETG",
  ],
  openGraph: {
    title: "Creaciones del Mago - Impresión 3D Profesional",
    description: "De la imaginación a la realidad. Servicios profesionales de impresión 3D en Montevideo, Uruguay.",
    url: "https://creacionesdelmago.com",
    siteName: "Creaciones del Mago",
    images: [
      {
        url: "/og-image-homepage.jpg",
        width: 1200,
        height: 630,
        alt: "Creaciones del Mago - Impresión 3D Profesional",
      },
    ],
    locale: "es_UY",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Creaciones del Mago - Impresión 3D Profesional",
    description: "De la imaginación a la realidad. Servicios profesionales de impresión 3D en Montevideo, Uruguay.",
    images: ["/og-image-homepage.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://creacionesdelmago.com",
    languages: {
      "es-UY": "https://creacionesdelmago.com",
      en: "https://creacionesdelmago.com/en",
    },
  },
}

const localBusinessData = generateLocalBusinessSchema({
  name: "Creaciones del Mago",
  description:
    "Estudio profesional de impresión 3D especializado en prototipado, diseño CAD, juguetes personalizados y figuras de anime en Montevideo, Uruguay.",
  url: "https://creacionesdelmago.com",
  telephone: "+598 99 123 456",
  email: "info@creacionesdelmago.com",
  address: {
    streetAddress: "Av. 18 de Julio 1234",
    addressLocality: "Montevideo",
    addressRegion: "Montevideo",
    postalCode: "11200",
    addressCountry: "UY",
  },
  geo: {
    latitude: -34.9011,
    longitude: -56.1645,
  },
  openingHours: ["Mo-Fr 09:00-18:00", "Sa 10:00-14:00"],
  priceRange: "$500-$10000",
  paymentAccepted: ["Cash", "Credit Card", "Mercado Pago"],
  currenciesAccepted: ["UYU"],
})

export default function HomePage() {
  return (
    <>
      <StructuredData data={localBusinessData} />
      <HeroSection />
      <ServicesHighlights />
      <FeaturedProducts />
      <TestimonialsSection />
      <NewsletterCTA />
    </>
  )
}
