"use client"

import { Section } from "@/components/section"
import { ProductCard } from "@/components/product-card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { FEATURED_PRODUCTS_CONTENT, SAMPLE_PRODUCTS } from "@/lib/constants"
import { useI18n } from "@/hooks/use-i18n"


export function FeaturedProducts() {
  const { t } = useI18n()

  return (
    <Section
      title={t("sections.featuredProducts.title")}
      subtitle={t("sections.featuredProducts.subtitle")}
      actions={
        <Button asChild variant="outline">
          <Link href={FEATURED_PRODUCTS_CONTENT.cta.href}>{t("sections.featuredProducts.viewAll")}</Link>
        </Button>
      }
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {SAMPLE_PRODUCTS.filter((p) => p.isFeatured).map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </Section>
  )
}
