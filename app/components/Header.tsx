"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Heart, Menu, X } from "lucide-react"
import { usePathname } from "next/navigation"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isVisible, setIsVisible] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)
  const pathname = usePathname()
  
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
    document.body.style.overflow = isMenuOpen ? "auto" : "hidden"
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
    document.body.style.overflow = "auto"
  }

  useEffect(() => {
    const controlNavbar = () => {
      const currentScrollY = window.scrollY
      if (currentScrollY > lastScrollY) {
        setIsVisible(false) // Scrolling down
      } else {
        setIsVisible(true) // Scrolling up
      }
      setLastScrollY(currentScrollY)
    }

    window.addEventListener("scroll", controlNavbar)
    return () => window.removeEventListener("scroll", controlNavbar)
  }, [lastScrollY])

  return (
    <header
      className={`bg-secondary py-4 md:py-6 fixed top-0 left-0 right-0 z-50 shadow-md transition-transform duration-300 ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link
          href="/"
          className="text-secondary-foreground hover:text-primary font-serif text-2xl md:text-3xl flex items-center transition-colors duration-200"
        >
          S <Heart className="h-4 w-4 mx-1 text-secondary gold" /> F
        </Link>
        <nav className="hidden md:flex space-x-6">
          <Link href="/" className={pathname == "/" ? "active menu-item" :"menu-item"}>
            Inicio
          </Link>
          <Link href="/our-history" className={pathname == "/our-history" ? "active menu-item" :"menu-item"}>
            Nuestra historia
          </Link>
          <Link href="/info" className={pathname == "/info" ? "active menu-item" :"menu-item"}>
            Información
          </Link>
          {/* <Link href="/gallery" className="menu-item">
            Galería
          </Link> */}
          <Link href="/rsvp" className={pathname == "/rsvp" ? "active menu-item" :"menu-item"}>
            Asistencia
          </Link>
        </nav>
        <MobileMenu isOpen={isMenuOpen} toggleMenu={toggleMenu} closeMenu={closeMenu} />
      </div>
    </header>
  )
}

function MobileMenu({
  isOpen,
  toggleMenu,
  closeMenu,
}: {
  isOpen: boolean
  toggleMenu: () => void
  closeMenu: () => void
}) {
  return (
    <div className="md:hidden">
      <button onClick={toggleMenu} className="cursor-pointer">
        {isOpen ? (
          <X className="h-6 w-6 text-secondary-foreground hover:text-primary transition-colors duration-200" />
        ) : (
          <Menu className="h-6 w-6 text-secondary-foreground hover:text-primary transition-colors duration-200" />
        )}
      </button>
      <div
        className={`fixed inset-0 bg-secondary z-40 transform transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-end p-4">
          <button onClick={toggleMenu} className="cursor-pointer">
            <X className="h-6 w-6 text-secondary-foreground hover:text-primary transition-colors duration-200" />
          </button>
        </div>
        <nav className="flex flex-col items-center space-y-4 p-4">
          <Link href="/" className="menu-item text-xl" onClick={closeMenu}>
            Inicio
          </Link>
          <Link href="/our-history" className="menu-item text-xl" onClick={closeMenu}>
            Nuestra historia
          </Link>
          <Link href="/info" className="menu-item text-xl" onClick={closeMenu}>
            Información
          </Link>
          {/* <Link href="/gallery" className="menu-item text-xl" onClick={closeMenu}>
            Galería
          </Link> */}
          <Link href="/rsvp" className="menu-item text-xl" onClick={closeMenu}>
            Asistencia
          </Link>
        </nav>
      </div>
    </div>
  )
}

