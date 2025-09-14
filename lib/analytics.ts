"use client"

declare global {
  interface Window {
    gtag: (...args: unknown[]) => void
    plausible: (event: string, options?: { props?: Record<string, unknown> }) => void
  }
}

export interface AnalyticsEvent {
  name: string
  params?: Record<string, unknown>
}

export interface ProductEventParams extends Record<string, unknown> {
  item_id: string
  item_name: string
  price: number
  currency: string
  category: string
}

export interface CustomOrderEventParams extends Record<string, unknown> {
  form_step: string
  project_type?: string
  file_count?: number
}

class Analytics {
  private consentGiven = false

  constructor() {
    // Check for stored consent
    if (typeof window !== "undefined") {
      this.consentGiven = localStorage.getItem("analytics-consent") === "true"
    }
  }

  setConsent(consent: boolean) {
    this.consentGiven = consent
    if (typeof window !== "undefined") {
      localStorage.setItem("analytics-consent", consent.toString())
    }
  }

  hasConsent(): boolean {
    return this.consentGiven
  }

  private trackGA4(event: AnalyticsEvent) {
    if (typeof window !== "undefined" && window.gtag && this.consentGiven) {
      window.gtag("event", event.name, event.params)
    }
  }

  private trackPlausible(event: AnalyticsEvent) {
    if (typeof window !== "undefined" && window.plausible && this.consentGiven) {
      window.plausible(event.name, { props: event.params })
    }
  }

  track(event: AnalyticsEvent) {
    if (!this.consentGiven) return

    this.trackGA4(event)
    this.trackPlausible(event)
  }

  // Product events
  viewItem(params: ProductEventParams) {
    this.track({
      name: "view_item",
      params,
    })
  }

  addToCart(params: ProductEventParams) {
    this.track({
      name: "add_to_cart",
      params,
    })
  }

  beginCheckout(params: { value: number; currency: string; items: ProductEventParams[] }) {
    this.track({
      name: "begin_checkout",
      params,
    })
  }

  purchase(params: { transaction_id: string; value: number; currency: string; items: ProductEventParams[] }) {
    this.track({
      name: "purchase",
      params,
    })
  }

  // Custom order events
  generateLead(params: CustomOrderEventParams) {
    this.track({
      name: "generate_lead",
      params,
    })
  }

  fileUpload(params: { file_name: string; file_size: number; file_type: string }) {
    this.track({
      name: "file_upload",
      params,
    })
  }

  whatsappClick(params: { source: string; product_id?: string }) {
    this.track({
      name: "whatsapp_click",
      params,
    })
  }
}

export const analytics = new Analytics()
