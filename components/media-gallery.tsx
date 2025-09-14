"use client"

import type React from "react"

import { useState, useRef } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent } from "@/components/ui/dialog"
import { ChevronLeft, ChevronRight, Expand } from "lucide-react"
import { useI18n } from "@/hooks/use-i18n"

interface MediaGalleryProps {
  images: string[]
  title: string
}

export function MediaGallery({ images, title }: MediaGalleryProps) {
  const [selectedImage, setSelectedImage] = useState(0)
  const [isLightboxOpen, setIsLightboxOpen] = useState(false)
  const { t } = useI18n()
  const thumbnailRefs = useRef<(HTMLButtonElement | null)[]>([])

  const nextImage = () => {
    const newIndex = (selectedImage + 1) % images.length
    setSelectedImage(newIndex)
    thumbnailRefs.current[newIndex]?.focus()
  }

  const prevImage = () => {
    const newIndex = (selectedImage - 1 + images.length) % images.length
    setSelectedImage(newIndex)
    thumbnailRefs.current[newIndex]?.focus()
  }

  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === "ArrowRight") {
      event.preventDefault()
      nextImage()
    } else if (event.key === "ArrowLeft") {
      event.preventDefault()
      prevImage()
    } else if (event.key === "Enter" || event.key === " ") {
      event.preventDefault()
      setIsLightboxOpen(true)
    }
  }

  return (
    <div className="space-y-4">
      {/* Main Image */}
      <div
        className="relative aspect-square overflow-hidden rounded-lg bg-card group"
        role="img"
        aria-label={t("accessibility.imageGallery")}
        tabIndex={0}
        onKeyDown={handleKeyDown}
      >
        <Image
          src={images[selectedImage] || "/placeholder.svg"}
          alt={`${title} - ${t("accessibility.imageGallery")} ${selectedImage + 1} ${t("common.of")} ${images.length}`}
          fill
          className="object-cover"
          priority
        />

        {/* Navigation Arrows */}
        {images.length > 1 && (
          <>
            <Button
              variant="secondary"
              size="sm"
              className="absolute left-2 top-1/2 transform -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity"
              onClick={prevImage}
              aria-label={t("accessibility.previousImage")}
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <Button
              variant="secondary"
              size="sm"
              className="absolute right-2 top-1/2 transform -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity"
              onClick={nextImage}
              aria-label={t("accessibility.nextImage")}
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </>
        )}

        {/* Expand Button */}
        <Button
          variant="secondary"
          size="sm"
          className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity"
          onClick={() => setIsLightboxOpen(true)}
          aria-label={t("accessibility.expandImage")}
        >
          <Expand className="h-4 w-4" />
        </Button>

        {/* Image counter for screen readers */}
        <div className="sr-only" aria-live="polite">
          Imagen {selectedImage + 1} de {images.length}
        </div>
      </div>

      {/* Thumbnails */}
      {images.length > 1 && (
        <div className="grid grid-cols-4 gap-2" role="tablist" aria-label="Miniaturas de imágenes">
          {images.map((image, index) => (
            <button
              key={index}
              ref={(el) => {
                thumbnailRefs.current[index] = el
              }}
              className={`relative aspect-square overflow-hidden rounded-md border-2 transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 ${
                selectedImage === index ? "border-primary" : "border-transparent hover:border-border"
              }`}
              onClick={() => setSelectedImage(index)}
              role="tab"
              aria-selected={selectedImage === index}
              aria-label={`Ver imagen ${index + 1} de ${images.length}`}
            >
              <Image
                src={image || "/placeholder.svg"}
                alt={`${title} - Miniatura ${index + 1}`}
                fill
                className="object-cover"
              />
            </button>
          ))}
        </div>
      )}

      {/* Lightbox */}
      <Dialog open={isLightboxOpen} onOpenChange={setIsLightboxOpen}>
        <DialogContent className="max-w-4xl p-0" aria-label="Imagen ampliada">
          <div className="relative aspect-square">
            <Image
              src={images[selectedImage] || "/placeholder.svg"}
              alt={`${title} - Imagen ampliada ${selectedImage + 1}`}
              fill
              className="object-contain"
            />

            {/* Lightbox Navigation */}
            {images.length > 1 && (
              <>
                <Button
                  variant="secondary"
                  size="sm"
                  className="absolute left-4 top-1/2 transform -translate-y-1/2"
                  onClick={prevImage}
                  aria-label={t("accessibility.previousImage")}
                >
                  <ChevronLeft className="h-4 w-4" />
                </Button>
                <Button
                  variant="secondary"
                  size="sm"
                  className="absolute right-4 top-1/2 transform -translate-y-1/2"
                  onClick={nextImage}
                  aria-label={t("accessibility.nextImage")}
                >
                  <ChevronRight className="h-4 w-4" />
                </Button>
              </>
            )}
          </div>
        </DialogContent>
      </Dialog>
    </div>
  )
}
