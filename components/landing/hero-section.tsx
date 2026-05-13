"use client"

import { useEffect, useRef } from "react"
import { ArrowUpRight } from "lucide-react"
import Image from "next/image"

export function HeroSection() {
  const contentRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-in", "fade-in", "slide-in-from-bottom-8")
          }
        })
      },
      { threshold: 0.1 }
    )

    if (contentRef.current) {
      observer.observe(contentRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section className="relative min-h-screen flex items-center pt-28 lg:pt-24 overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-secondary via-background to-accent/20" />
      
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Content */}
          <div
            ref={contentRef}
            className="order-2 lg:order-1 text-center lg:text-left duration-700"
          >
            <p className="text-sm md:text-base font-medium text-primary tracking-widest uppercase mb-4">
              Emagrecimento, Longevidade e Bem-Estar
            </p>
            
            <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium leading-tight text-foreground mb-6">
              <span className="block">Com Método,</span>
              <span className="block">Eficiência e um</span>
              <span className="block text-primary">Caminho Prático</span>
            </h1>
            
            <p className="text-base md:text-lg text-muted-foreground max-w-lg mx-auto lg:mx-0 mb-8 leading-relaxed">
              Metodologia e protocolos personalizados e validados para te ajudar a alcançar seus objetivos em 2026.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a
                href="#metodo"
                className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary text-primary-foreground font-medium rounded-full hover:bg-primary/90 transition-all duration-300 hover:shadow-xl hover:scale-105"
              >
                Conheça Meus Serviços
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </a>
              <a
                href="#sobre"
                className="inline-flex items-center justify-center px-8 py-4 border border-primary/30 text-foreground font-medium rounded-full hover:bg-primary/5 transition-all duration-300"
              >
                Saiba Mais
              </a>
            </div>

            <p className="mt-8 text-sm text-muted-foreground italic">
              Comece 2026 transformando sua saúde física e qualidade de vida.
            </p>
          </div>

          {/* Image */}
          <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-md lg:max-w-lg xl:max-w-xl">
              <div className="absolute -inset-4 bg-gradient-to-br from-primary/20 to-accent/30 rounded-full blur-3xl opacity-50" />
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/foto%20dra%20principal-LIFkGjisNYZ5wxUoAZOh4WeMmSEskz.jpg"
                alt="Dra. Thaís Moreschi"
                width={600}
                height={800}
                className="relative rounded-2xl shadow-2xl object-cover w-full h-auto"
                priority
              />
            </div>
          </div>
        </div>
      </div>

    </section>
  )
}
