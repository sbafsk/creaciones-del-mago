import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Separator } from "@/components/ui/separator"
import { MapPin, Mail, Phone, Instagram, Facebook, Twitter } from "lucide-react"

const footerSections = {
  shop: {
    title: "Tienda",
    links: [
      { name: "Catálogo", href: "/catalog" },
      { name: "Camping & Outdoor", href: "/catalog?category=camping" },
      { name: "Cocina & Hogar", href: "/catalog?category=kitchen" },
      { name: "Decoración & Regalos", href: "/catalog?category=decor" },
      { name: "Juguetes & Figuras", href: "/catalog?category=toys" },
      { name: "Anime & Geek", href: "/catalog?category=anime" },
    ],
  },
  company: {
    title: "Empresa",
    links: [
      { name: "Servicios", href: "/services" },
      { name: "Contacto", href: "/contact" },
    ],
  },
  support: {
    title: "Soporte",
    links: [
      { name: "Envíos", href: "/policies/shipping" },
      { name: "Devoluciones", href: "/policies/returns" },
      { name: "Privacidad", href: "/policies/privacy" },
      { name: "Términos", href: "/policies/terms" },
    ],
  },
}

export function SiteFooter() {
  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto max-w-7xl px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center space-x-2 mb-4">
              <span className="text-xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Creaciones del Mago
              </span>
            </Link>
            <p className="text-muted-foreground mb-6 max-w-md">
              Transformamos tu imaginación en realidad. Impresión 3D profesional, diseño CAD y creaciones personalizadas
              en Montevideo.
            </p>

            {/* Contact Info */}
            <div className="space-y-2 text-sm text-muted-foreground">
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4" />
                <span>Montevideo, Uruguay</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4" />
                <span>info@creacionesdelmago.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4" />
                <span>+598 99 123 456</span>
              </div>
            </div>
          </div>

          {/* Footer Links */}
          {Object.entries(footerSections).map(([key, section]) => (
            <div key={key}>
              <h3 className="font-semibold text-foreground mb-4">{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

        </div>

        <Separator className="my-8" />

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-sm text-muted-foreground">© 2024 Creaciones del Mago. Todos los derechos reservados.</p>

          {/* Social Links */}
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="sm">
              <Instagram className="h-4 w-4" />
            </Button>
            <Button variant="ghost" size="sm">
              <Facebook className="h-4 w-4" />
            </Button>
            <Button variant="ghost" size="sm">
              <Twitter className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </footer>
  )
}
