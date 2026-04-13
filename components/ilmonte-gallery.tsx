"use client"

import Image from "next/image"
import { useState } from "react"
import { X, ChevronLeft, ChevronRight } from "lucide-react"

export default function IlmonteGallery() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null)

  const galleryImages = [
    { src: "/images/ilmonte/gallery-main.webp", alt: "منظر جوي لـ IL Monte Galala — الأبراج على البحر مباشرة" },
    { src: "/images/ilmonte/aerial-sunset.webp", alt: "منظر غروب الشمس على المونت جلالة" },
    { src: "/images/ilmonte/villa-1.webp", alt: "فيلا فاخرة بإطلالة بحرية مباشرة" },
    { src: "/images/ilmonte/villa-2.webp", alt: "فيلا مع حمام سباحة خاص وإطلالة على البحر" },
    { src: "/images/ilmonte/amenities.webp", alt: "حمامات السباحة والمرافق الفاخرة" },
    { src: "/images/ilmonte/payment-plan.jpeg", alt: "نظام السداد — 5% مقدم و10 سنوات تقسيط" },
  ]

  const prev = () => {
    if (selectedImage === null) return
    setSelectedImage(selectedImage === 0 ? galleryImages.length - 1 : selectedImage - 1)
  }
  const next = () => {
    if (selectedImage === null) return
    setSelectedImage(selectedImage === galleryImages.length - 1 ? 0 : selectedImage + 1)
  }

  return (
    <section className="py-20 lg:py-32 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-primary text-sm font-bold tracking-widest uppercase mb-3">معرض الصور</p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">معرض الصور</h2>
            <p className="text-lg text-muted-foreground">
              اكتشف جمال IL Monte Galala من خلال معرض الصور
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryImages.map((image, index) => (
              <div
                key={index}
                className="relative aspect-[4/3] overflow-hidden cursor-pointer group"
                onClick={() => setSelectedImage(index)}
              >
                <Image
                  src={image.src || "/placeholder.svg"}
                  alt={image.alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300 flex items-center justify-center">
                  <span className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-sm font-bold border border-white/50 px-4 py-2">
                    عرض الصورة
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Lightbox */}
      {selectedImage !== null && (
        <div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute top-4 left-4 text-white hover:text-primary transition-colors p-2"
            onClick={() => setSelectedImage(null)}
          >
            <X className="w-8 h-8" />
          </button>
          <button
            className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:text-primary transition-colors p-2"
            onClick={(e) => { e.stopPropagation(); prev() }}
          >
            <ChevronRight className="w-10 h-10" />
          </button>
          <button
            className="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:text-primary transition-colors p-2"
            onClick={(e) => { e.stopPropagation(); next() }}
          >
            <ChevronLeft className="w-10 h-10" />
          </button>
          <div
            className="relative w-full h-full max-w-5xl max-h-[85vh]"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={galleryImages[selectedImage].src || "/placeholder.svg"}
              alt={galleryImages[selectedImage].alt}
              fill
              className="object-contain"
            />
          </div>
          <p className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white/60 text-sm">
            {selectedImage + 1} / {galleryImages.length}
          </p>
        </div>
      )}
    </section>
  )
}
