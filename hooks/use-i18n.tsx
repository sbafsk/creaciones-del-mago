"use client"

import { createContext, useContext, useState, useEffect, type ReactNode } from "react"
import { type Locale, defaultLocale, getTranslation, formatCurrency, formatDate } from "@/lib/i18n"

interface I18nContextType {
  locale: Locale
  setLocale: (locale: Locale) => void
  t: (key: string, params?: Record<string, string | number>) => string
  formatCurrency: (amount: number) => string
  formatDate: (date: Date) => string
}

const I18nContext = createContext<I18nContextType | undefined>(undefined)

export function I18nProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>(defaultLocale)

  useEffect(() => {
    // Get locale from localStorage or browser
    const savedLocale = localStorage.getItem("locale") as Locale
    const browserLocale = navigator.language.startsWith("en") ? "en" : "es"
    const initialLocale = savedLocale || browserLocale

    setLocaleState(initialLocale)
  }, [])

  const setLocale = (newLocale: Locale) => {
    setLocaleState(newLocale)
    localStorage.setItem("locale", newLocale)
    document.documentElement.lang = newLocale
  }

  const t = (key: string, params?: Record<string, string | number>) => {
    return getTranslation(locale, key, params)
  }

  const formatCurrencyWithLocale = (amount: number) => {
    return formatCurrency(amount, locale)
  }

  const formatDateWithLocale = (date: Date) => {
    return formatDate(date, locale)
  }

  return (
    <I18nContext.Provider
      value={{
        locale,
        setLocale,
        t,
        formatCurrency: formatCurrencyWithLocale,
        formatDate: formatDateWithLocale,
      }}
    >
      {children}
    </I18nContext.Provider>
  )
}

export function useI18n() {
  const context = useContext(I18nContext)
  if (context === undefined) {
    throw new Error("useI18n must be used within an I18nProvider")
  }
  return context
}
