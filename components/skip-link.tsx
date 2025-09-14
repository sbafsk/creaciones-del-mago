"use client"

import { useI18n } from "@/hooks/use-i18n"

export function SkipLink() {
  const { t } = useI18n()

  return (
    <a
      href="#main-content"
      className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-primary focus:text-primary-foreground focus:rounded-md focus:shadow-lg"
    >
      {t("accessibility.skipToContent")}
    </a>
  )
}
