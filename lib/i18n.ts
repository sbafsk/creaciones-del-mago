export interface Translations {
  [key: string]: string | Translations
}

export const translations = {
  es: {
    common: {
      loading: "Cargando...",
      error: "Error",
      success: "Éxito",
      cancel: "Cancelar",
      confirm: "Confirmar",
      save: "Guardar",
      edit: "Editar",
      delete: "Eliminar",
      search: "Buscar",
      filter: "Filtrar",
      sort: "Ordenar",
      next: "Siguiente",
      previous: "Anterior",
      close: "Cerrar",
      open: "Abrir",
      menu: "Menú",
      home: "Inicio",
      about: "Nosotros",
      contact: "Contacto",
      services: "Servicios",
      blog: "Blog",
      catalog: "Catálogo",
      cart: "Carrito",
      whatsapp: "WhatsApp",
      email: "Email",
      phone: "Teléfono",
      address: "Dirección",
      price: "Precio",
      quantity: "Cantidad",
      total: "Total",
      currency: "UYU",
    },
    navigation: {
      home: "Inicio",
      catalog: "Catálogo",
      services: "Servicios",
      customOrder: "Pedido Personalizado",
      blog: "Blog",
      about: "Nosotros",
      contact: "Contacto",
      privacy: "Política de Privacidad",
      terms: "Términos y Condiciones",
    },
    hero: {
      title: "De la Imaginación a la Realidad",
      subtitle:
        "Solución de problemas, impresión 3D, diseño CAD, juguetes y anime. Transformamos tus ideas en objetos reales con la magia de la tecnología.",
      cta: {
        catalog: "Explorar Catálogo",
        custom: "Diseño Personalizado",
      },
      stats: {
        projects: "Proyectos Completados",
        time: "Tiempo Promedio",
        satisfaction: "Satisfacción",
      },
    },
    products: {
      addToCart: "Agregar al Carrito",
      quickView: "Vista Rápida",
      outOfStock: "Agotado",
      inStock: "En Stock",
      lowStock: "Pocas Unidades",
      new: "Nuevo",
      popular: "Popular",
      rating: "Valoración",
      reviews: "Reseñas",
      material: "Material",
      color: "Color",
      size: "Tamaño",
      category: "Categoría",
    },
    filters: {
      sortBy: "Ordenar por",
      category: "Categoría",
      priceRange: "Rango de Precio",
      material: "Material",
      color: "Color",
      availability: "Disponibilidad",
      clearFilters: "Limpiar Filtros",
      allCategories: "Todas las categorías",
      allMaterials: "Todos los materiales",
      allColors: "Todos los colores",
      anyAvailability: "Cualquier disponibilidad",
    },
    fileUpload: {
      dragDrop: "Arrastra archivos aquí o haz clic para seleccionar",
      dragActive: "Suelta los archivos aquí...",
      selectFiles: "Seleccionar Archivos",
      supportedFormats: "STL, OBJ, STEP, JPG, PNG, PDF",
      maxSize: "máx. {size}MB cada uno",
      filesUploaded: "Archivos subidos",
      uploading: "Subiendo...",
      uploadError: "Error al subir archivo",
      fileTooLarge: "El archivo {name} es demasiado grande. Máximo {size}MB.",
      fileTypeNotAllowed: "Tipo de archivo no permitido: {type}",
      maxFilesExceeded: "Máximo {max} archivos permitidos",
    },
    consent: {
      title: "Respetamos tu privacidad",
      description:
        "Utilizamos cookies y tecnologías similares para mejorar tu experiencia, analizar el tráfico del sitio y personalizar el contenido. Podés elegir qué categorías aceptar.",
      acceptAll: "Aceptar todo",
      rejectAll: "Rechazar todo",
      customize: "Personalizar",
      hide: "Ocultar",
      categories: {
        title: "Categorías de cookies:",
        essential: "Esenciales: Necesarias para el funcionamiento básico del sitio",
        analytics: "Analíticas: Nos ayudan a entender cómo usás el sitio",
        marketing: "Marketing: Para mostrarte contenido relevante",
      },
    },
    accessibility: {
      skipToContent: "Saltar al contenido principal",
      openMenu: "Abrir menú",
      closeMenu: "Cerrar menú",
      searchProducts: "Buscar productos",
      cartItems: "{count} artículos en el carrito",
      imageGallery: "Galería de imágenes",
      previousImage: "Imagen anterior",
      nextImage: "Imagen siguiente",
      expandImage: "Ampliar imagen",
      closeDialog: "Cerrar diálogo",
      loading: "Cargando contenido",
      error: "Ha ocurrido un error",
      success: "Operación completada exitosamente",
      required: "Campo obligatorio",
      invalid: "Valor inválido",
      fileUploadArea: "Área de carga de archivos",
      removeFile: "Eliminar archivo {name}",
      uploadProgress: "Progreso de carga: {percent}%",
      starRating: "Valoración: {rating} de 5 estrellas",
      priceSlider: "Deslizador de rango de precios",
    },
    footer: {
      brand: {
        description: "Transformamos tu imaginación en realidad. Impresión 3D profesional, diseño CAD y creaciones personalizadas en Montevideo.",
        copyright: "© 2024 Creaciones del Mago. Todos los derechos reservados."
      },
      sections: {
        shop: "Tienda",
        company: "Empresa",
        support: "Soporte"
      },
      newsletter: {
        title: "Newsletter",
        description: "Recibe ofertas especiales y novedades.",
        placeholder: "Tu email",
        button: "Suscribirse",
        disclaimer: "No compartimos tu información."
      }
    },
    sections: {
      services: {
        title: "Nuestros Servicios",
        subtitle: "Combinamos creatividad, tecnología y experiencia para dar vida a tus ideas más ambiciosas."
      },
      featuredProducts: {
        title: "Productos Destacados",
        subtitle: "Descubre nuestras creaciones más populares, desde utilidades prácticas hasta piezas de colección únicas.",
        viewAll: "Ver Todo el Catálogo"
      }
    },
  },
}

export type Locale = keyof typeof translations
export const defaultLocale: Locale = "es"
export const locales: Locale[] = ["es"]

export function getTranslation(locale: Locale, key: string, params?: Record<string, string | number>): string {
  const keys = key.split(".")
  let value: unknown = translations[locale]

  for (const k of keys) {
    if (value && typeof value === 'object' && k in value) {
      value = (value as Record<string, unknown>)[k]
    } else {
      value = undefined
      break
    }
  }

  if (typeof value !== "string") {
    // Fallback to default locale
    value = translations[defaultLocale]
    for (const k of keys) {
      if (value && typeof value === 'object' && k in value) {
        value = (value as Record<string, unknown>)[k]
      } else {
        value = undefined
        break
      }
    }
  }

  if (typeof value !== "string") {
    return key // Return key if translation not found
  }

  // Replace parameters
  if (params) {
    return value.replace(/\{(\w+)\}/g, (match, param) => {
      return params[param]?.toString() || match
    })
  }

  return value
}

export function formatCurrency(amount: number, locale: Locale): string {
  const currency = locale === "es" ? "UYU" : "USD"
  const symbol = locale === "es" ? "$" : "$"

  return `${symbol}${amount.toLocaleString(locale === "es" ? "es-UY" : "en-US")} ${currency}`
}

export function formatDate(date: Date, locale: Locale): string {
  return date.toLocaleDateString(locale === "es" ? "es-UY" : "en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  })
}
