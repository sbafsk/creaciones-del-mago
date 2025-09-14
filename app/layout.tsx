import type React from "react"
import type { Metadata } from "next"
import { Syne } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import { I18nProvider } from "@/hooks/use-i18n"
import { SkipLink } from "@/components/skip-link"
import { ErrorBoundary } from "@/components/error-boundary"
import { AnnouncementBar } from "@/components/announcement-bar"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import "./globals.css"

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-syne",
  weight: ["400", "500", "600", "700", "800"],
})

export const metadata: Metadata = {
  title: "Creaciones del Mago - Impresión 3D Profesional en Uruguay",
  description:
    "Servicios profesionales de impresión 3D, diseño CAD y prototipado rápido en Uruguay. Transformamos tus ideas en realidad.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" className={`${syne.variable} antialiased`}>
      <body>
        <ErrorBoundary>
          <I18nProvider>
            <SkipLink />
            <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
              <div className="min-h-screen flex flex-col">
                <AnnouncementBar />
                <SiteHeader />
                <main className="flex-1" id="main-content">
                  {children}
                </main>
                <SiteFooter />
              </div>
            </ThemeProvider>
          </I18nProvider>
        </ErrorBoundary>
      </body>
    </html>
  )
}
