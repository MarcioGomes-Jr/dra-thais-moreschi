"use client"

import { useEffect, useRef } from "react"
import { ArrowUpRight, Dumbbell, Baby, Salad, Sparkles } from "lucide-react"
import Image from "next/image"

const lifestyle = [
  { icon: Dumbbell, title: "Atividade Física e Rotina Ativa" },
  { icon: Baby, title: "Maternidade e Rotina Familiar" },
  { icon: Salad, title: "Alimentação Consciente" },
  { icon: Sparkles, title: "Autocuidado" },
]

export function AboutSection() {
  const sectionRef = useRef<HTMLDivElement>(null)

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
    <section id="quem-sou-eu" ref={sectionRef} className="py-20 md:py-32 bg-background relative overflow-hidden">
      {/* Decorative gradient */}
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-accent/30 to-transparent rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Images Grid */}
          <div className="animate-on-scroll duration-700 order-2 lg:order-1">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_4498%20TRATADA%20FEED-hEXmn1aE7cTTsFLti0CqJwEcq5OJST.jpg"
                  alt="Dra. Thaís - Rotina ativa"
                  width={300}
                  height={400}
                  className="rounded-xl shadow-lg object-cover w-full h-64 md:h-80"
                />
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_4457%20TRATADA%20FEED%20PB-qIzShkG6X6UodoSiiC9hVS9IW4194d.jpg"
                  alt="Dra. Thaís - Alongamento"
                  width={300}
                  height={300}
                  className="rounded-xl shadow-lg object-cover w-full h-48 md:h-56"
                />
              </div>
              <div className="space-y-4 pt-8">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_4490%20TRATADA%20FEED-WXylgGtoaqUBs4ZNLKm3KvmLiUABTl.jpg"
                  alt="Dra. Thaís - Equilíbrio"
                  width={300}
                  height={400}
                  className="rounded-xl shadow-lg object-cover w-full h-64 md:h-80"
                />
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_4479%20TRATADA%20FEED-IVp1o78dSFIfFlABZJEtZNM60JnOQC.jpg"
                  alt="Dra. Thaís - Postura"
                  width={300}
                  height={300}
                  className="rounded-xl shadow-lg object-cover w-full h-48 md:h-56"
                />
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="animate-on-scroll duration-700 delay-150 order-1 lg:order-2">
            <p className="text-sm font-medium text-primary tracking-widest uppercase mb-4">
              Quem Sou Eu
            </p>
            
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-medium text-foreground mb-2">
              Dra. Thaís Moreschi
            </h2>
            <p className="text-lg text-primary mb-6">Médica e Mentora</p>
            
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-6">
              Minha trajetória na medicina sempre foi guiada pelo desejo de compreender o paciente de forma integral, respeitando sua individualidade e seu momento de vida. Com formação sólida e atuação na medicina personalizada e funcional, direciono meu trabalho ao emagrecimento, à longevidade e à construção de vitalidade em todas as fases, unindo ciência, experiência clínica e um olhar atento ao que realmente sustenta saúde e bem-estar.
            </p>
            
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-8">
              Meu método de trabalho é personalizado. A partir de uma análise profunda do metabolismo, dos hábitos e do estilo de vida, desenvolvo estratégias que promovem equilíbrio metabólico, autonomia no envelhecimento e resultados consistentes. Mais do que tratar sintomas, meu propósito é conduzir cada paciente a uma vida longa, funcional e com energia para viver bem em todas as etapas.
            </p>

            {/* Quote */}
            <blockquote className="border-l-4 border-primary pl-6 py-2 mb-8">
              <p className="text-lg md:text-xl font-serif italic text-foreground">
                O verdadeiro caminho para viver bem envolve desenvolver um estilo de vida que promove saúde.
              </p>
            </blockquote>

            {/* Lifestyle */}
            <div className="mb-8">
              <p className="text-sm font-medium text-primary tracking-widest uppercase mb-4">
                Meu estilo de vida —
              </p>
              <div className="grid grid-cols-2 gap-4">
                {lifestyle.map((item) => (
                  <div
                    key={item.title}
                    className="flex items-center gap-3 p-3 bg-secondary/50 rounded-lg hover:bg-secondary transition-colors duration-300"
                  >
                    <item.icon className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-sm text-foreground">{item.title}</span>
                  </div>
                ))}
              </div>
            </div>

            <a
              href="https://wa.me/5544988348338"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground font-medium rounded-full hover:bg-primary/90 transition-all duration-300 hover:shadow-xl hover:scale-105"
            >
              Agende um Horário
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
