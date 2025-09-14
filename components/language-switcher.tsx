"use client"

import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Globe } from "lucide-react"
import { useI18n } from "@/hooks/use-i18n"
import { locales } from "@/lib/i18n"

const languageNames = {
  es: "Español",
  en: "English",
}

export function LanguageSwitcher() {
  const { locale, setLocale } = useI18n()

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="sm" aria-label="Cambiar idioma">
          <Globe className="h-4 w-4 mr-2" />
          {languageNames[locale]}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        {locales.map((lang) => (
          <DropdownMenuItem key={lang} onClick={() => setLocale(lang)} className={locale === lang ? "bg-accent" : ""}>
            {languageNames[lang]}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
