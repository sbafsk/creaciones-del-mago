"use client"

import { useState, useCallback, useMemo } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Search, ShoppingCart, Menu, MessageCircle } from "lucide-react"
import { useI18n } from "@/hooks/use-i18n"
import { BUSINESS_INFO, UI_CONSTANTS, ACCESSIBILITY } from "@/lib/constants"

export function SiteHeader() {
  const [isOpen, setIsOpen] = useState(false)
  const { t } = useI18n()
  const cartItemCount = UI_CONSTANTS.cart.mockItemCount

  const navigation = useMemo(() => [
    { name: t("navigation.home"), href: "/" },
    { name: t("navigation.catalog"), href: "/catalog" },
    { name: t("navigation.services"), href: "/services" },
    { name: t("navigation.customOrder"), href: "/custom-order" },
    { name: t("navigation.blog"), href: "/blog" },
    { name: t("navigation.about"), href: "/about" },
    { name: t("navigation.contact"), href: "/contact" },
  ], [t])

  const handleMenuToggle = useCallback(() => {
    setIsOpen(prev => !prev)
  }, [])

  const handleMenuClose = useCallback(() => {
    setIsOpen(false)
  }, [])

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto max-w-7xl px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 group">
            <div className="relative">
              <div className="absolute -inset-1 bg-primary/20 rounded-full blur-sm opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              {BUSINESS_INFO.name}
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-6" role="navigation" aria-label={ACCESSIBILITY.navigation.main}>
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded-sm"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Actions */}
          <div className="flex items-center space-x-4">
            {/* Search - Hidden on mobile */}
            <div className="hidden md:flex relative">
              <label htmlFor="search-input" className="sr-only">
                {t("accessibility.searchProducts")}
              </label>
              <Search
                className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-foreground/60"
                aria-hidden="true"
              />
              <Input
                id="search-input"
                placeholder={t("accessibility.searchProducts")}
                className="pl-10 w-64 bg-card border-border"
              />
            </div>

            {/* Cart */}
            <Button
              variant="ghost"
              size="sm"
              className="relative"
              aria-label={t("accessibility.cartItems", { count: cartItemCount })}
            >
              <ShoppingCart className="h-5 w-5" />
              {cartItemCount > 0 && (
                <Badge
                  variant="destructive"
                  className="absolute -top-2 -right-2 h-5 w-5 flex items-center justify-center p-0 text-xs"
                  aria-hidden="true"
                >
                  {cartItemCount}
                </Badge>
              )}
            </Button>

            {/* WhatsApp - Mobile sticky CTA */}
            <Button size="sm" className="hidden sm:flex bg-green-600 hover:bg-green-700">
              <MessageCircle className="h-4 w-4 mr-2" />
              {t("common.whatsapp")}
            </Button>

            {/* Mobile Menu */}
            <Sheet open={isOpen} onOpenChange={handleMenuToggle}>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  size="sm"
                  className="lg:hidden"
                  aria-label={isOpen ? t("accessibility.closeMenu") : t("accessibility.openMenu")}
                >
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-80">
                <div className="flex flex-col space-y-4 mt-8">
                  {/* Mobile Search */}
                  <div className="relative">
                    <label htmlFor="mobile-search-input" className="sr-only">
                      {t("accessibility.searchProducts")}
                    </label>
                    <Search
                      className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-foreground/60"
                      aria-hidden="true"
                    />
                    <Input
                      id="mobile-search-input"
                      placeholder={t("accessibility.searchProducts")}
                      className="pl-10 bg-card border-border"
                    />
                  </div>

                  {/* Mobile Navigation */}
                  <nav className="flex flex-col space-y-2" role="navigation" aria-label={ACCESSIBILITY.navigation.mobile}>
                    {navigation.map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors py-2 px-3 rounded-md hover:bg-card focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                        onClick={handleMenuClose}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </nav>

                  {/* Mobile WhatsApp */}
                  <Button className="w-full bg-green-600 hover:bg-green-700">
                    <MessageCircle className="h-4 w-4 mr-2" />
                    {t("common.whatsapp")}
                  </Button>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  )
}
