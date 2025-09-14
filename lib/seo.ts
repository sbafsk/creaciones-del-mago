import type { Metadata } from "next"

export interface SEOConfig {
  title: string
  description: string
  keywords?: string[]
  canonical?: string
  openGraph?: {
    title?: string
    description?: string
    image?: string
    type?: "website" | "article"
  }
  twitter?: {
    card?: "summary" | "summary_large_image"
    title?: string
    description?: string
    image?: string
  }
}

export function generateMetadata(config: SEOConfig): Metadata {
  const baseUrl = "https://creacionesdelmago.com"

  return {
    title: config.title,
    description: config.description,
    keywords: config.keywords?.join(", "),
    openGraph: {
      title: config.openGraph?.title || config.title,
      description: config.openGraph?.description || config.description,
      url: config.canonical ? `${baseUrl}${config.canonical}` : baseUrl,
      siteName: "Creaciones del Mago",
      images: config.openGraph?.image
        ? [
            {
              url: config.openGraph.image,
              width: 1200,
              height: 630,
              alt: config.openGraph.title || config.title,
            },
          ]
        : undefined,
      locale: "es_UY",
      type: config.openGraph?.type || "website",
    },
    twitter: {
      card: config.twitter?.card || "summary_large_image",
      title: config.twitter?.title || config.title,
      description: config.twitter?.description || config.description,
      images: config.twitter?.image ? [config.twitter.image] : undefined,
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
  }
}

// JSON-LD Structured Data Types
export interface LocalBusinessSchema {
  name: string
  description: string
  url: string
  telephone?: string
  email?: string
  address: {
    streetAddress: string
    addressLocality: string
    addressRegion: string
    postalCode: string
    addressCountry: string
  }
  geo?: {
    latitude: number
    longitude: number
  }
  openingHours?: string[]
  priceRange?: string
  paymentAccepted?: string[]
  currenciesAccepted?: string[]
}

export interface ProductSchema {
  name: string
  description: string
  image: string[]
  sku?: string
  brand: string
  category: string
  offers: {
    price: number
    priceCurrency: string
    availability: "InStock" | "OutOfStock" | "PreOrder"
    url: string
  }
  aggregateRating?: {
    ratingValue: number
    reviewCount: number
  }
}

export interface ArticleSchema {
  headline: string
  description: string
  image: string[]
  datePublished: string
  dateModified?: string
  author: {
    name: string
    url?: string
  }
  publisher: {
    name: string
    logo: string
  }
}

export function generateLocalBusinessSchema(data: LocalBusinessSchema) {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": data.url,
    name: data.name,
    description: data.description,
    url: data.url,
    telephone: data.telephone,
    email: data.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: data.address.streetAddress,
      addressLocality: data.address.addressLocality,
      addressRegion: data.address.addressRegion,
      postalCode: data.address.postalCode,
      addressCountry: data.address.addressCountry,
    },
    geo: data.geo
      ? {
          "@type": "GeoCoordinates",
          latitude: data.geo.latitude,
          longitude: data.geo.longitude,
        }
      : undefined,
    openingHours: data.openingHours,
    priceRange: data.priceRange,
    paymentAccepted: data.paymentAccepted,
    currenciesAccepted: data.currenciesAccepted,
  }
}

export function generateProductSchema(data: ProductSchema) {
  return {
    "@context": "https://schema.org",
    "@type": "Product",
    name: data.name,
    description: data.description,
    image: data.image,
    sku: data.sku,
    brand: {
      "@type": "Brand",
      name: data.brand,
    },
    category: data.category,
    offers: {
      "@type": "Offer",
      price: data.offers.price,
      priceCurrency: data.offers.priceCurrency,
      availability: `https://schema.org/${data.offers.availability}`,
      url: data.offers.url,
    },
    aggregateRating: data.aggregateRating
      ? {
          "@type": "AggregateRating",
          ratingValue: data.aggregateRating.ratingValue,
          reviewCount: data.aggregateRating.reviewCount,
        }
      : undefined,
  }
}

export function generateArticleSchema(data: ArticleSchema) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: data.headline,
    description: data.description,
    image: data.image,
    datePublished: data.datePublished,
    dateModified: data.dateModified || data.datePublished,
    author: {
      "@type": "Person",
      name: data.author.name,
      url: data.author.url,
    },
    publisher: {
      "@type": "Organization",
      name: data.publisher.name,
      logo: {
        "@type": "ImageObject",
        url: data.publisher.logo,
      },
    },
  }
}
