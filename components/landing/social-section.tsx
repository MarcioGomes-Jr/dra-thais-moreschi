"use client"

import { useEffect, useRef } from "react"
import { Instagram, ExternalLink } from "lucide-react"
import Image from "next/image"

const instagramUrl = "https://www.instagram.com/dra.thaismoreschi"

const instagramPosts = [
  "/instagram/post-1.jpg",
  "/instagram/post-2.jpg",
  "/instagram/post-3.jpg",
  "/instagram/post-4.jpg",
  "/instagram/post-5.jpg",
  "/instagram/post-6.jpg",
]

export function SocialSection() {
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(
              "animate-in",
              "fade-in",
              "slide-in-from-bottom-8"
            )
          }
        })
      },
      { threshold: 0.1 }
    )

    const elements = sectionRef.current?.querySelectorAll(".animate-on-scroll")
    elements?.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  return (
    <section
      ref={sectionRef}
      className="py-20 md:py-32 bg-background relative overflow-hidden"
    >
      <div className="container mx-auto px-4 lg:px-8">
        <div className="animate-on-scroll duration-700 text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-secondary rounded-full mb-6">
            <Instagram className="w-4 h-4 text-muted-foreground" />
            <span className="text-sm text-muted-foreground">
              @dra.thaismoreschi
            </span>
          </div>

          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-medium text-foreground mb-4 text-balance">
            Siga minhas redes sociais e acompanhe meu trabalho de perto
          </h2>

          <p className="text-muted-foreground max-w-2xl mx-auto">
            Conteúdos sobre longevidade, emagrecimento saudável e qualidade de
            vida.
          </p>
        </div>

        <div className="animate-on-scroll duration-700 delay-150 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {instagramPosts.map((image, index) => (
            <a
              key={image}
              href={instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative aspect-square overflow-hidden rounded-2xl bg-secondary shadow-sm"
            >
              <Image
                src={image}
                alt={`Post do Instagram ${index + 1}`}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />

              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/45 transition-colors duration-300" />

              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="flex items-center gap-2 rounded-full bg-white/90 px-4 py-2 text-sm font-medium text-black">
                  Ver no Instagram
                  <ExternalLink className="w-4 h-4" />
                </div>
              </div>
            </a>
          ))}
        </div>

        <div className="animate-on-scroll duration-700 delay-300 text-center mt-10">
          <a
            href={instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-[#F58529] via-[#DD2A7B] to-[#8134AF] text-white font-medium rounded-full hover:shadow-lg hover:scale-105 transition-all duration-300"
          >
            <Instagram className="w-5 h-5" />
            Seguir no Instagram
          </a>
        </div>
      </div>
    </section>
  )
}