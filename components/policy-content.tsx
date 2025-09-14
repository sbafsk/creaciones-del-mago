import { Section } from "@/components/section"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Shield, FileText, Mail, Phone } from "lucide-react"

interface PolicyContentProps {
  type: "privacy" | "terms"
}

export function PolicyContent({ type }: PolicyContentProps) {
  const isPrivacy = type === "privacy"

  return (
    <div className="min-h-screen pt-24 pb-16">
      <Section>
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <Badge variant="outline" className="mb-4 bg-violet-500/10 border-violet-500/20">
              {isPrivacy ? (
                <>
                  <Shield className="h-3 w-3 mr-1" />
                  Privacidad
                </>
              ) : (
                <>
                  <FileText className="h-3 w-3 mr-1" />
                  Términos Legales
                </>
              )}
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              {isPrivacy ? "Política de Privacidad" : "Términos y Condiciones"}
            </h1>
            <p className="text-lg text-muted-foreground">
              {isPrivacy ? "Última actualización: 15 de enero de 2024" : "Última actualización: 15 de enero de 2024"}
            </p>
          </div>

          {/* Content */}
          <div className="prose prose-lg max-w-none space-y-8">
            {isPrivacy ? (
              <>
                <Card>
                  <CardContent className="p-8">
                    <h2 className="text-2xl font-bold mb-4">1. Información que Recopilamos</h2>
                    <div className="space-y-4 text-muted-foreground">
                      <p>En Creaciones del Mago recopilamos información que nos proporcionas directamente cuando:</p>
                      <ul className="space-y-2">
                        <li>• Solicitas una cotización o realizas un pedido</li>
                        <li>• Te suscribes a nuestro newsletter</li>
                        <li>• Nos contactas a través de formularios o email</li>
                        <li>• Interactúas con nuestro sitio web</li>
                      </ul>
                      <p>
                        Esta información puede incluir: nombre, email, teléfono, dirección, detalles del proyecto,
                        archivos 3D, y preferencias de comunicación.
                      </p>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-8">
                    <h2 className="text-2xl font-bold mb-4">2. Cómo Usamos tu Información</h2>
                    <div className="space-y-4 text-muted-foreground">
                      <p>Utilizamos la información recopilada para:</p>
                      <ul className="space-y-2">
                        <li>• Procesar y completar tus pedidos</li>
                        <li>• Comunicarnos contigo sobre tu proyecto</li>
                        <li>• Enviarte actualizaciones y ofertas (si te suscribiste)</li>
                        <li>• Mejorar nuestros servicios y experiencia del usuario</li>
                        <li>• Cumplir con obligaciones legales</li>
                      </ul>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-8">
                    <h2 className="text-2xl font-bold mb-4">3. Protección de Datos</h2>
                    <div className="space-y-4 text-muted-foreground">
                      <p>Implementamos medidas de seguridad técnicas y organizativas para proteger tu información:</p>
                      <ul className="space-y-2">
                        <li>• Encriptación SSL en todas las comunicaciones</li>
                        <li>• Acceso restringido a información personal</li>
                        <li>• Copias de seguridad regulares y seguras</li>
                        <li>• Capacitación del personal en protección de datos</li>
                      </ul>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-8">
                    <h2 className="text-2xl font-bold mb-4">4. Compartir Información</h2>
                    <div className="space-y-4 text-muted-foreground">
                      <p>No vendemos, alquilamos o compartimos tu información personal con terceros, excepto:</p>
                      <ul className="space-y-2">
                        <li>• Proveedores de servicios necesarios para completar tu pedido</li>
                        <li>• Cuando sea requerido por ley</li>
                        <li>• Con tu consentimiento explícito</li>
                      </ul>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-8">
                    <h2 className="text-2xl font-bold mb-4">5. Tus Derechos</h2>
                    <div className="space-y-4 text-muted-foreground">
                      <p>Tienes derecho a:</p>
                      <ul className="space-y-2">
                        <li>• Acceder a tu información personal</li>
                        <li>• Corregir datos inexactos</li>
                        <li>• Solicitar la eliminación de tus datos</li>
                        <li>• Oponerte al procesamiento de tus datos</li>
                        <li>• Portabilidad de datos</li>
                      </ul>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-8">
                    <h2 className="text-2xl font-bold mb-4">6. Cookies y Tecnologías Similares</h2>
                    <div className="space-y-4 text-muted-foreground">
                      <p>
                        Utilizamos cookies y tecnologías similares para mejorar tu experiencia en nuestro sitio web:
                      </p>
                      <ul className="space-y-2">
                        <li>• Cookies esenciales para el funcionamiento del sitio</li>
                        <li>• Cookies de análisis para entender el uso del sitio</li>
                        <li>• Cookies de preferencias para recordar tus configuraciones</li>
                      </ul>
                      <p>Puedes gestionar tus preferencias de cookies a través del banner de consentimiento.</p>
                    </div>
                  </CardContent>
                </Card>
              </>
            ) : (
              <>
                <Card>
                  <CardContent className="p-8">
                    <h2 className="text-2xl font-bold mb-4">1. Aceptación de Términos</h2>
                    <div className="space-y-4 text-muted-foreground">
                      <p>
                        Al acceder y utilizar los servicios de Creaciones del Mago, aceptas estar sujeto a estos
                        términos y condiciones. Si no estás de acuerdo con algún término, no debes utilizar nuestros
                        servicios.
                      </p>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-8">
                    <h2 className="text-2xl font-bold mb-4">2. Servicios Ofrecidos</h2>
                    <div className="space-y-4 text-muted-foreground">
                      <p>Creaciones del Mago ofrece servicios de:</p>
                      <ul className="space-y-2">
                        <li>• Impresión 3D profesional</li>
                        <li>• Diseño y modelado CAD</li>
                        <li>• Prototipado rápido</li>
                        <li>• Consultoría técnica</li>
                        <li>• Reparación y creación de repuestos</li>
                      </ul>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-8">
                    <h2 className="text-2xl font-bold mb-4">3. Proceso de Pedidos</h2>
                    <div className="space-y-4 text-muted-foreground">
                      <p>El proceso de pedidos incluye:</p>
                      <ul className="space-y-2">
                        <li>• Solicitud de cotización a través de nuestros formularios</li>
                        <li>• Evaluación técnica y propuesta comercial</li>
                        <li>• Aceptación de la propuesta por parte del cliente</li>
                        <li>• Pago del 50% como anticipo (salvo acuerdo diferente)</li>
                        <li>• Desarrollo y entrega del proyecto</li>
                        <li>• Pago del saldo restante</li>
                      </ul>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-8">
                    <h2 className="text-2xl font-bold mb-4">4. Precios y Pagos</h2>
                    <div className="space-y-4 text-muted-foreground">
                      <ul className="space-y-2">
                        <li>• Los precios están expresados en pesos uruguayos (UYU)</li>
                        <li>• Las cotizaciones tienen validez de 30 días</li>
                        <li>• Aceptamos efectivo, transferencia bancaria y Mercado Pago</li>
                        <li>• Los pagos deben realizarse según los plazos acordados</li>
                        <li>• Los precios pueden variar según la complejidad del proyecto</li>
                      </ul>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-8">
                    <h2 className="text-2xl font-bold mb-4">5. Propiedad Intelectual</h2>
                    <div className="space-y-4 text-muted-foreground">
                      <ul className="space-y-2">
                        <li>• El cliente mantiene los derechos sobre sus diseños originales</li>
                        <li>• No reproducimos diseños con derechos de autor sin autorización</li>
                        <li>• Los diseños creados por nosotros pueden tener derechos compartidos</li>
                        <li>• Respetamos la confidencialidad de los proyectos</li>
                      </ul>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-8">
                    <h2 className="text-2xl font-bold mb-4">6. Garantías y Limitaciones</h2>
                    <div className="space-y-4 text-muted-foreground">
                      <ul className="space-y-2">
                        <li>• Garantizamos la calidad de impresión por 30 días</li>
                        <li>• No garantizamos la funcionalidad de diseños de terceros</li>
                        <li>• Las tolerancias están sujetas a las limitaciones de la tecnología</li>
                        <li>• El cliente es responsable de la legalidad de sus diseños</li>
                      </ul>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-8">
                    <h2 className="text-2xl font-bold mb-4">7. Cancelaciones y Reembolsos</h2>
                    <div className="space-y-4 text-muted-foreground">
                      <ul className="space-y-2">
                        <li>• Las cancelaciones deben notificarse antes del inicio de producción</li>
                        <li>• Los anticipos de proyectos cancelados se reembolsan menos gastos administrativos</li>
                        <li>• No se aceptan devoluciones de productos personalizados</li>
                        <li>• Los defectos de fabricación se corrigen sin costo adicional</li>
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              </>
            )}

            {/* Contact Information */}
            <Card className="bg-gradient-to-r from-violet-500/10 to-cyan-500/10">
              <CardContent className="p-8 text-center">
                <h2 className="text-2xl font-bold mb-4">¿Tienes Preguntas?</h2>
                <p className="text-muted-foreground mb-6">
                  Si tienes dudas sobre{" "}
                  {isPrivacy ? "nuestra política de privacidad" : "nuestros términos y condiciones"}, no dudes en
                  contactarnos.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <div className="flex items-center gap-2">
                    <Mail className="h-4 w-4" />
                    <span>info@creacionesdelmago.com</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Phone className="h-4 w-4" />
                    <span>+598 99 123 456</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </Section>
    </div>
  )
}
