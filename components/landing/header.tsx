"use client"

import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"
import { cn } from "@/lib/utils"

const navLinks = [
  { id: "metodo", href: "#metodo", label: "Método + Áreas de Atuação" },
  { id: "sobre", href: "#quem-sou-eu", label: "Sobre" },
  { id: "clinica", href: "#clinica", label: "Clínica" },
  { id: "contato", href: "#clinica", label: "Contato" },
]

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleNavClick = () => {
    setIsMenuOpen(false)
  }

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        isScrolled
          ? "bg-background/95 backdrop-blur-md shadow-sm py-3"
          : "bg-background py-5"
      )}
    >
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex flex-col">
            <span className="font-logo text-xl md:text-2xl font-normal tracking-wide text-foreground">
              DRA. THAÍS MORESCHI
            </span>
            <span className="text-[10px] md:text-xs text-muted-foreground tracking-widest">
              CRM-PR: 25.605
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors duration-300 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-primary hover:after:w-full after:transition-all after:duration-300"
              >
                {link.label}
              </a>
            ))}
            <a
              href="https://wa.me/5544988348338"
              target="_blank"
              rel="noopener noreferrer"
              className="ml-4 px-6 py-2.5 bg-primary text-primary-foreground text-sm font-medium rounded-full hover:bg-primary/90 transition-all duration-300 hover:shadow-lg"
            >
              Agendar Consulta
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 text-foreground"
            aria-label="Menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div
          className={cn(
            "lg:hidden overflow-hidden transition-all duration-500 ease-in-out",
            isMenuOpen ? "max-h-96 opacity-100 mt-4" : "max-h-0 opacity-0"
          )}
        >
          <nav className="flex flex-col gap-4 py-4 border-t border-border">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                onClick={handleNavClick}
                className="text-base font-medium text-foreground/80 hover:text-primary transition-colors duration-300 py-2"
              >
                {link.label}
              </a>
            ))}
            <a
              href="https://wa.me/5544988348338"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 px-6 py-3 bg-primary text-primary-foreground text-sm font-medium rounded-full text-center hover:bg-primary/90 transition-all duration-300"
            >
              Agendar Consulta
            </a>
          </nav>
        </div>
      </div>
    </header>
  )
}
