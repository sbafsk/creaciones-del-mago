import type { Metadata } from "next"
import { HeroSection } from "@/components/hero-section"
import { ServicesHighlights } from "@/components/services-highlights"
import { FeaturedProducts } from "@/components/featured-products"
import { TestimonialsSection } from "@/components/testimonials-section"
import { NewsletterCTA } from "@/components/newsletter-cta"
import { StructuredData } from "@/components/structured-data"
import { generateLocalBusinessSchema } from "@/lib/seo"
import { SEO_CONFIG, BUSINESS_INFO } from "@/lib/constants"

export const metadata: Metadata = {
  title: SEO_CONFIG.title.main,
  description: SEO_CONFIG.description,
  keywords: SEO_CONFIG.keywords,
  openGraph: {
    title: SEO_CONFIG.title.short,
    description: SEO_CONFIG.description,
    url: SEO_CONFIG.urls.base,
    siteName: BUSINESS_INFO.name,
    images: [
      {
        url: SEO_CONFIG.images.og,
        width: SEO_CONFIG.images.width,
        height: SEO_CONFIG.images.height,
        alt: SEO_CONFIG.title.short,
      },
    ],
    locale: SEO_CONFIG.locale.main,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: SEO_CONFIG.title.short,
    description: SEO_CONFIG.description,
    images: [SEO_CONFIG.images.twitter],
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
    canonical: SEO_CONFIG.urls.canonical,
    languages: {
      "es-UY": SEO_CONFIG.urls.base,
      en: `${SEO_CONFIG.urls.base}/en`,
    },
  },
}

const localBusinessData = generateLocalBusinessSchema({
  name: BUSINESS_INFO.name,
  description: BUSINESS_INFO.description.long,
  url: SEO_CONFIG.urls.base,
  telephone: BUSINESS_INFO.contact.phone,
  email: BUSINESS_INFO.contact.email,
  address: {
    streetAddress: BUSINESS_INFO.contact.address.street,
    addressLocality: BUSINESS_INFO.contact.address.city,
    addressRegion: BUSINESS_INFO.contact.address.region,
    postalCode: BUSINESS_INFO.contact.address.postalCode,
    addressCountry: BUSINESS_INFO.contact.address.countryCode,
  },
  geo: {
    latitude: BUSINESS_INFO.location.latitude,
    longitude: BUSINESS_INFO.location.longitude,
  },
  openingHours: [BUSINESS_INFO.hours.weekdays, BUSINESS_INFO.hours.saturday],
  priceRange: BUSINESS_INFO.pricing.range,
  paymentAccepted: BUSINESS_INFO.pricing.acceptedPayments,
  currenciesAccepted: BUSINESS_INFO.pricing.acceptedCurrencies,
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
