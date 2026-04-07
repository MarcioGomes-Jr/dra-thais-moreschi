"use client"

import { useEffect, useRef, useState } from "react"
import { Instagram, Heart, MessageCircle, ExternalLink } from "lucide-react"
import Image from "next/image"

const instagramPosts = [
  { id: 1, likes: 245, comments: 18 },
  { id: 2, likes: 312, comments: 24 },
  { id: 3, likes: 189, comments: 12 },
  { id: 4, likes: 423, comments: 31 },
  { id: 5, likes: 267, comments: 19 },
  { id: 6, likes: 356, comments: 27 },
]

export function SocialSection() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const [hoveredPost, setHoveredPost] = useState<number | null>(null)

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

    const elements = sectionRef.current?.querySelectorAll(".animate-on-scroll")
    elements?.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} className="py-20 md:py-32 bg-background relative overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <div className="animate-on-scroll duration-700 text-center mb-12">
          {/* Instagram Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-secondary rounded-full mb-6">
            <Instagram className="w-4 h-4 text-muted-foreground" />
            <span className="text-sm text-muted-foreground">@dra.thaismoreschi</span>
          </div>
          
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-medium text-foreground mb-4 text-balance">
            Siga minhas redes sociais e acompanhe meu trabalho de perto!
          </h2>
          
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Conteúdos sobre longevidade, emagrecimento saudável e qualidade de vida.
          </p>
        </div>

        {/* Instagram Grid */}
        <div className="animate-on-scroll duration-700 delay-150 flex gap-4 overflow-x-auto pb-4 scrollbar-hide -mx-4 px-4 md:mx-0 md:px-0 md:grid md:grid-cols-6 md:overflow-visible">
          {instagramPosts.map((post, index) => (
            <a
              key={post.id}
              href="https://instagram.com/dra.thaismoreschi"
              target="_blank"
              rel="noopener noreferrer"
              className="relative flex-shrink-0 w-40 h-40 md:w-full md:h-auto md:aspect-square rounded-xl overflow-hidden group"
              onMouseEnter={() => setHoveredPost(post.id)}
              onMouseLeave={() => setHoveredPost(null)}
            >
              <Image
                src={`https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_44${67 + index * 3}%20TRATADA%20FEED-vL8De0spYJkUhNlQOHa0FHWD9WqwBx.jpg`}
                alt={`Post Instagram ${post.id}`}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
                onError={(e) => {
                  const target = e.target as HTMLImageElement
                  target.src = "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_4467%20TRATADA%20FEED-vL8De0spYJkUhNlQOHa0FHWD9WqwBx.jpg"
                }}
              />
              
              {/* Hover Overlay */}
              <div 
                className={`absolute inset-0 bg-black/50 flex flex-col items-center justify-center gap-2 transition-opacity duration-300 ${
                  hoveredPost === post.id ? "opacity-100" : "opacity-0"
                }`}
              >
                <div className="flex items-center gap-4 text-white">
                  <div className="flex items-center gap-1">
                    <Heart className="w-5 h-5 fill-white" />
                    <span className="text-sm font-medium">{post.likes}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <MessageCircle className="w-5 h-5 fill-white" />
                    <span className="text-sm font-medium">{post.comments}</span>
                  </div>
                </div>
                <ExternalLink className="w-4 h-4 text-white/70" />
              </div>
            </a>
          ))}
        </div>

        {/* CTA Button */}
        <div className="animate-on-scroll duration-700 delay-300 text-center mt-10">
          <a
            href="https://instagram.com/dra.thaismoreschi"
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
