"use client"

import { useState } from "react"
import Image from "next/image"
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog"
import { ChevronLeft, ChevronRight } from "lucide-react"

// const images = [
//   { src: "/galeria1.jpg", alt: "Couple 1" },
//   { src: "/galeria2.jpg", alt: "Couple 2" },
//   { src: "/galeria3.jpg", alt: "Couple 3" },
//   { src: "/galeria4.jpg", alt: "Couple 4" },
//   { src: "/galeria5.jpg", alt: "Couple 5" },
//   { src: "/galeria6.jpg", alt: "Couple 6" },
//   { src: "/galeria7.jpg", alt: "Couple 6" },
// ]

const images = Array.from({ length: 21 }, (_, i) => ({
  src: `/galeria/galeria${i + 1}.jpg`,
  alt: `Foto ${i + 1}`,
}));

export default function Gallery() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length)
  }

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length)
  }

  return (
    <div className="content-wrapper">
      <h1 className="elegant-heading text-3xl sm:text-4xl mb-6 md:mb-8 text-center">Nuestra Galería de Fotos</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
        {images.map((image, index) => (
          <Dialog key={index}>
            <DialogTrigger asChild>
              <div className="relative aspect-square rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 cursor-pointer">
                <Image src={image.src || "/placeholder.svg"} alt={image.alt} fill className="object-cover" />
              </div>
            </DialogTrigger>
            <DialogContent className="max-w-3xl w-full bg-transparent border-none">
              <div className="relative aspect-square">
                <Image
                  src={images[index+1].src || "/placeholder.svg"}
                  alt={images[index+1].alt}
                  fill
                  className="object-contain"
                />
                <button
                  onClick={prevImage}
                  className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 rounded-full p-2"
                >
                  <ChevronLeft className="w-6 h-6 text-white" />
                </button>
                <button
                  onClick={nextImage}
                  className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 rounded-full p-2"
                >
                  <ChevronRight className="w-6 h-6 text-white" />
                </button>
              </div>
            </DialogContent>
          </Dialog>
        ))}
      </div>
    </div>
  )
}

