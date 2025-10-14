"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Section } from "@/components/section"
import { SERVICES_CONTENT } from "@/lib/constants"
import { useI18n } from "@/hooks/use-i18n"


export function ServicesHighlights() {
  const { t } = useI18n()

  return (
    <Section
      title={t("sections.services.title")}
      subtitle={t("sections.services.subtitle")}
    >
      <div className="grid md:grid-cols-3 gap-8">
        {SERVICES_CONTENT.services.map((service, index) => (
          <Card
            key={index}
            className="group hover:shadow-lg transition-all duration-300 border-border hover:border-violet-600/50"
          >
            <CardContent className="p-6">
              <div className="mb-4">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-violet-600/10 rounded-lg group-hover:bg-violet-600/20 transition-colors">
                  <service.icon className="h-6 w-6 text-violet-600" />
                </div>
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">{service.title}</h3>
              <p className="text-muted-foreground mb-4 text-pretty">{service.description}</p>
              <ul className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-sm text-muted-foreground">
                    <div className="w-1.5 h-1.5 bg-cyan-500 rounded-full mr-3"></div>
                    {feature}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        ))}
      </div>
    </Section>
  )
}
