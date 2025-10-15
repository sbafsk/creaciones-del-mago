// =============================================================================
// SITE CONSTANTS - Centralized data file for Creaciones del Mago
// =============================================================================
// This file contains all constant values, business information, and content
// used throughout the application. Organized by sections for easy maintenance.

import { Printer, Palette, Wrench } from "lucide-react"

// =============================================================================
// BUSINESS INFORMATION
// =============================================================================
export const BUSINESS_INFO = {
  // Basic company details
  name: "Creaciones del Mago",
  tagline: "De la Imaginación a la Realidad",
  description: {
    short: "Impresión 3D profesional, diseño CAD y creaciones personalizadas en Montevideo, Uruguay.",
    long: "Estudio profesional de impresión 3D especializado en prototipado, diseño CAD, juguetes personalizados y figuras de anime en Montevideo, Uruguay.",
    hero: "Solución de problemas, impresión 3D, diseño CAD, juguetes y anime. Transformamos tus ideas en objetos reales con la magia de la tecnología."
  },

  // Contact information
  contact: {
    phone: "+598 99 123 456",
    email: "info@creacionesdelmago.com",
    address: {
      street: "Av. 18 de Julio 1234",
      city: "Montevideo",
      region: "Montevideo",
      postalCode: "11200",
      country: "Uruguay",
      countryCode: "UY"
    }
  },

  // Geographic coordinates
  location: {
    latitude: -34.9011,
    longitude: -56.1645
  },

  // Business hours
  hours: {
    weekdays: "Mo-Fr 09:00-18:00",
    saturday: "Sa 10:00-14:00"
  },

  // Payment and pricing
  pricing: {
    range: "$500-$10000",
    currency: "UYU",
    acceptedPayments: ["Cash", "Credit Card", "Mercado Pago"] as string[],
    acceptedCurrencies: ["UYU"] as string[]
  }
} as const

// =============================================================================
// SEO & METADATA
// =============================================================================
export const SEO_CONFIG = {
  // Main site metadata
  title: {
    main: "Creaciones del Mago - Impresión 3D Profesional | Montevideo, Uruguay",
    short: "Creaciones del Mago - Impresión 3D Profesional",
    template: "%s | Creaciones del Mago"
  },

  description: "De la imaginación a la realidad. Servicios profesionales de impresión 3D, diseño CAD, juguetes personalizados y figuras de anime en Montevideo, Uruguay.",

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
    "PETG"
  ] as string[],

  // URLs and social
  urls: {
    base: "https://creacionesdelmago.com",
    canonical: "https://creacionesdelmago.com"
  },

  // Social media images
  images: {
    og: "/el-mago.png",
    twitter: "/el-mago.png",
    width: 1200,
    height: 630
  },

  // Locale configuration
  locale: {
    main: "es_UY",
    alternate: "en"
  }
} as const

// =============================================================================
// HERO SECTION
// =============================================================================
export const HERO_CONTENT = {
  // Main hero text
  badge: "Impresión 3D Profesional",
  title: {
    part1: "De la",
    highlight1: "Imaginación",
    part2: "a la",
    highlight2: "Realidad"
  },
  subtitle: "Solución de problemas, impresión 3D, diseño CAD, juguetes y anime. Transformamos tus ideas en objetos reales con la magia de la tecnología.",

  // Call-to-action buttons
  cta: {
    primary: {
      text: "Explorar Catálogo",
      href: "/catalog"
    },
    secondary: {
      text: "Diseño Personalizado",
      href: "/custom-order"
    }
  },

  // Statistics
  stats: [
    {
      value: "500+",
      label: "Proyectos Completados"
    },
    {
      value: "48h",
      label: "Tiempo Promedio"
    },
    {
      value: "100%",
      label: "Satisfacción"
    }
  ],

  // Hero image
  image: {
    src: "/el-mago.png",
    alt: "El Mago - Mascota de Creaciones del Mago",
    width: 400,
    height: 500
  }
} as const

// =============================================================================
// SERVICES SECTION
// =============================================================================
export const SERVICES_CONTENT = {
  // Section header
  title: "Nuestros Servicios",
  subtitle: "Combinamos creatividad, tecnología y experiencia para dar vida a tus ideas más ambiciosas.",

  // Services list
  services: [
    {
      icon: Printer,
      title: "Impresión 3D Profesional",
      description: "Materiales de alta calidad como PLA, PETG, TPU y más. Precisión milimétrica en cada proyecto.",
      features: [
        "Múltiples materiales",
        "Alta precisión",
        "Acabado profesional"
      ]
    },
    {
      icon: Palette,
      title: "Diseño CAD Personalizado",
      description: "Creamos modelos 3D únicos desde tu idea. Desde prototipos hasta piezas decorativas complejas.",
      features: [
        "Diseño desde cero",
        "Modificaciones",
        "Optimización para impresión"
      ]
    },
    {
      icon: Wrench,
      title: "Solución de Problemas",
      description: "Piezas de repuesto, herramientas personalizadas y soluciones creativas para tus necesidades específicas.",
      features: [
        "Piezas de repuesto",
        "Herramientas únicas",
        "Soluciones creativas"
      ]
    }
  ]
} as const

// =============================================================================
// FEATURED PRODUCTS SECTION
// =============================================================================
export const FEATURED_PRODUCTS_CONTENT = {
  // Section header
  title: "Productos Destacados",
  subtitle: "Descubre nuestras creaciones más populares, desde utilidades prácticas hasta piezas de colección únicas.",
  cta: {
    text: "Ver Todo el Catálogo",
    href: "/catalog"
  }
} as const

// =============================================================================
// PRODUCT CATEGORIES
// =============================================================================
export const PRODUCT_CATEGORIES = {
  camping: {
    name: "Camping & Outdoor",
    slug: "camping",
    href: "/catalog?category=camping"
  },
  kitchen: {
    name: "Cocina & Hogar",
    slug: "kitchen",
    href: "/catalog?category=kitchen"
  },
  decor: {
    name: "Decoración & Regalos",
    slug: "decor",
    href: "/catalog?category=decor"
  },
  toys: {
    name: "Juguetes & Figuras",
    slug: "toys",
    href: "/catalog?category=toys"
  },
  anime: {
    name: "Anime & Geek",
    slug: "anime",
    href: "/catalog?category=anime"
  },
  cannabis: {
    name: "Accesorios Cannabis",
    slug: "cannabis",
    href: "/catalog?category=cannabis"
  }
} as const

// =============================================================================
// SAMPLE PRODUCTS DATA
// =============================================================================
export const SAMPLE_PRODUCTS: Product[] = [
  {
    id: "camping-hook-001",
    title: "Gancho Ultraliviano Camping",
    price: 450,
    currency: "UYU",
    rating: 4.7,
    category: PRODUCT_CATEGORIES.camping.name,
    tags: ["liviano", "resistente"],
    images: ["/camping-hook-3d-printed.jpg"],
    shortDescription: "Gancho resistente y liviano impreso en PETG para tu próxima aventura.",
    stockStatus: "in_stock",
    isNew: true
  },
  {
    id: "anime-figure-001",
    title: "Figura Goku Super Saiyan",
    price: 1200,
    currency: "UYU",
    rating: 4.9,
    category: PRODUCT_CATEGORIES.anime.name,
    tags: ["anime", "coleccionable"],
    images: ["/goku-figure-3d-printed-anime.jpg"],
    shortDescription: "Figura detallada de Goku en pose icónica, pintada a mano.",
    stockStatus: "in_stock",
    isPopular: true
  },
  {
    id: "kitchen-organizer-001",
    title: "Organizador de Especias",
    price: 800,
    currency: "UYU",
    rating: 4.6,
    category: PRODUCT_CATEGORIES.kitchen.name,
    tags: ["organizador", "cocina"],
    images: ["/spice-organizer-3d-printed-kitchen.jpg"],
    shortDescription: "Organizador modular para especias, diseño minimalista y funcional.",
    stockStatus: "in_stock"
  },
  {
    id: "decor-lamp-001",
    title: "Lámpara Luna LED",
    price: 1500,
    currency: "UYU",
    rating: 4.8,
    category: PRODUCT_CATEGORIES.decor.name,
    tags: ["decoración", "LED"],
    images: ["/moon-lamp-3d-printed-decoration.jpg"],
    shortDescription: "Lámpara con forma de luna, textura realista e iluminación LED suave.",
    stockStatus: "low_stock"
  },
  {
    id: "toy-puzzle-001",
    title: "Puzzle 3D Dragón",
    price: 600,
    currency: "UYU",
    rating: 4.5,
    category: PRODUCT_CATEGORIES.toys.name,
    tags: ["puzzle", "dragón"],
    images: ["/dragon-puzzle-3d-printed-toy.jpg"],
    shortDescription: "Puzzle 3D articulado en forma de dragón, perfecto para todas las edades.",
    stockStatus: "in_stock"
  },
  {
    id: "cannabis-grinder-001",
    title: "Grinder Personalizado",
    price: 900,
    currency: "UYU",
    rating: 4.7,
    category: PRODUCT_CATEGORIES.cannabis.name,
    tags: ["grinder", "personalizable"],
    images: ["/cannabis-grinder-3d-printed.jpg"],
    shortDescription: "Grinder de alta calidad con diseño personalizable y acabado suave.",
    stockStatus: "in_stock"
  }
]

// =============================================================================
// FOOTER CONTENT
// =============================================================================
export const FOOTER_CONTENT = {
  // Brand section
  brand: {
    description: "Transformamos tu imaginación en realidad. Impresión 3D profesional, diseño CAD y creaciones personalizadas en Montevideo.",
    copyright: "© 2024 Creaciones del Mago. Todos los derechos reservados."
  },

  // Footer navigation sections
  sections: {
    shop: {
      title: "Tienda",
      links: [
        { name: "Catálogo", href: "/catalog" },
        { name: PRODUCT_CATEGORIES.camping.name, href: PRODUCT_CATEGORIES.camping.href },
        { name: PRODUCT_CATEGORIES.kitchen.name, href: PRODUCT_CATEGORIES.kitchen.href },
        { name: PRODUCT_CATEGORIES.decor.name, href: PRODUCT_CATEGORIES.decor.href },
        { name: PRODUCT_CATEGORIES.toys.name, href: PRODUCT_CATEGORIES.toys.href },
        { name: PRODUCT_CATEGORIES.anime.name, href: PRODUCT_CATEGORIES.anime.href }
      ]
    },
    company: {
      title: "Empresa",
      links: [
        { name: "Nosotros", href: "/about" },
        { name: "Servicios", href: "/services" },
        { name: "Blog", href: "/blog" },
        { name: "Contacto", href: "/contact" }
      ]
    },
    support: {
      title: "Soporte",
      links: [
        { name: "Envíos", href: "/policies/shipping" },
        { name: "Devoluciones", href: "/policies/returns" },
        { name: "Privacidad", href: "/policies/privacy" },
        { name: "Términos", href: "/policies/terms" }
      ]
    }
  },

  // Newsletter section
  newsletter: {
    title: "Newsletter",
    description: "Recibe ofertas especiales y novedades.",
    placeholder: "Tu email",
    button: "Suscribirse",
    disclaimer: "No compartimos tu información."
  }
} as const

// =============================================================================
// UI CONSTANTS
// =============================================================================
export const UI_CONSTANTS = {
  // Common cart mock data
  cart: {
    mockItemCount: 3
  },

  // Animation and styling
  animations: {
    starPositions: [
      { top: "20", left: "20", color: "white" },
      { top: "40", right: "32", color: "cyan-400" },
      { bottom: "32", left: "40", color: "violet-400" },
      { top: "60", left: "1/3", color: "white" },
      { bottom: "40", right: "20", color: "cyan-300" },
      { top: "32", right: "1/4", color: "violet-300" }
    ]
  }
} as const

// =============================================================================
// ACCESSIBILITY LABELS
// =============================================================================
export const ACCESSIBILITY = {
  navigation: {
    main: "Navegación principal",
    mobile: "Navegación móvil"
  },
  images: {
    logo: "Logotipo de Creaciones del Mago",
    hero: "El Mago - Mascota de Creaciones del Mago"
  }
} as const

// =============================================================================
// TYPE DEFINITIONS
// =============================================================================
export interface Product {
  id: string
  title: string
  price: number
  currency: string
  rating: number
  category: string
  tags: string[]
  images: string[]
  shortDescription: string
  stockStatus: "in_stock" | "low_stock" | "out_of_stock"
  isNew?: boolean
  isPopular?: boolean
}

export type ProductCategory = keyof typeof PRODUCT_CATEGORIES