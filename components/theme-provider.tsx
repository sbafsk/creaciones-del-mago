"use client"

import { createContext, useContext } from "react"
import { ThemeProvider as NextThemesProvider } from "next-themes"
import type { ThemeProviderProps } from "next-themes"

const ThemeProviderContext = createContext<{
  theme: string
  setTheme: (theme: string) => void
} | null>(null)

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  return (
    <NextThemesProvider {...props}>
      {children}
    </NextThemesProvider>
  )
}

export const useTheme = () => {
  const context = useContext(ThemeProviderContext)

  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider")
  }

  return context
}