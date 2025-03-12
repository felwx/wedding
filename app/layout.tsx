import type { Metadata } from "next"
import { Cormorant_Garamond, Inter } from "next/font/google"
import "./globals.css"
import "./styles/slider.css"
import Link from "next/link"
import type React from "react"
import { Header } from "./components/Header"

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" })
const cormorantGaramond = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-cormorant-garamond",
  weight: ["300", "400", "500", "600", "700"],
})

export const metadata: Metadata = {
  title: "Sandra & Félix",
  description: "Acompáñanos a celebrar nuestro día especial",
  openGraph: {
    title: "Sandra & Félix",
    description: "Acompáñanos a celebrar nuestro día especial",
    url: "https://v0-boda-alpha.vercel.app/",
    type: "website",
    images: [
      {
        url: "https://v0-boda-alpha.vercel.app/megabanner.jpg",
        width: 1635,
        height: 668,
        alt: "Invitación de boda",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sandra & Félix",
    description: "Acompáñanos a celebrar nuestro día especial",
    images: ["https://v0-boda-alpha.vercel.app/megabanner.jpg"],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body className={`${inter.variable} ${cormorantGaramond.variable} font-sans`}>
        <Header />
        <main className="container mx-auto py-6 md:py-8 px-4 md:px-6 mt-16">{children}</main>
        <footer className="bg-secondary py-8 text-secondary-foreground">
          <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8 text-center md:text-left">
            <div>
              <h3 className="font-serif text-xl mb-2 text-primary">Contáctanos</h3>
              <p>Email: fepecol@gmail.com</p>
              <p>Teléfono: 600 833 734</p>
            </div>
            <div>
              <h3 className="font-serif text-xl mb-2 text-primary">Ceremonia</h3>
              <p>Templo del Sagrado Corazón de Jesús (Tibidabo)</p>
              <p>Ctra. de Vallvidrera al Tibidabo, 111</p>
              <p>Sarrià-Sant Gervasi, 08035 Barcelona</p>
            </div>
            <div>
              <h3 className="font-serif text-xl mb-2 text-primary">Banquete</h3>
              <p>El Celler de Can Torrens</p>
              <p>Pl. de les Glòries Catalanes, 3</p>
              <p>08105 Sant Fost de Campsentelles, Barcelona</p>
            </div>
            <div>
              <h3 className="font-serif text-xl mb-2 text-primary">Enlaces rápidos</h3>
              <ul className="space-y-1">
                <li>
                  <Link href="/rsvp" className="hover:text-primary transition-colors duration-200">
                    Confirmar asistencia
                  </Link>
                </li>
                <li>
                  <Link href="/info" className="hover:text-primary transition-colors duration-200">
                    Información de la boda
                  </Link>
                </li>
                <li>
                  <Link href="/our-history" className="hover:text-primary transition-colors duration-200">
                    Nuestra historia
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="container mx-auto px-4 mt-8 pt-4 border-t border-primary/20 text-center">
            <p>&copy; {new Date().getFullYear()} Boda de Sandra & Félix. Todos los derechos reservados.</p>
          </div>
        </footer>
      </body>
    </html>
  )
}



import './globals.css'
