"use client"

import { useEffect, useRef, useState } from "react"
import { ArrowUpRight, Users, FileCheck, Heart } from "lucide-react"
import Image from "next/image"

const stats = [
  { icon: Users, value: 500, suffix: "+", label: "Pacientes atendidos" },
  { icon: FileCheck, value: 1200, suffix: "+", label: "Protocolos aplicados" },
  { icon: Heart, value: 800, suffix: "+", label: "Rotinas transformadas" },
]

function AnimatedCounter({ value, suffix }: { value: number; suffix: string }) {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLSpanElement>(null)
  const hasAnimated = useRef(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true
          const duration = 2000
          const steps = 60
          const increment = value / steps
          let current = 0

          const timer = setInterval(() => {
            current += increment
            if (current >= value) {
              setCount(value)
              clearInterval(timer)
            } else {
              setCount(Math.floor(current))
            }
          }, duration / steps)

          return () => clearInterval(timer)
        }
      },
      { threshold: 0.5 }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [value])

  return (
    <span ref={ref} className="font-serif text-4xl md:text-5xl font-medium text-primary">
      {count}{suffix}
    </span>
  )
}

export function PromiseSection() {
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
    <section id="sobre" ref={sectionRef} className="py-20 md:py-32 bg-background relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-accent/30 to-transparent rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* First Block */}
        <div className="animate-on-scroll duration-700 max-w-4xl mx-auto text-center mb-20">
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-medium text-foreground mb-8 leading-tight text-balance">
            Existe um caminho para{" "}
            <span className="text-primary">viver e envelhecer bem.</span>
          </h2>
          
          <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-6">
            Existe um caminho possível para <strong className="text-foreground font-semibold">não apenas viver bem, mas envelhecer com vitalidade, autonomia e clareza.</strong> Esse caminho passa por uma medicina integrativa e personalizada, que considera a individualidade de cada paciente para promover <strong className="text-foreground font-semibold">emagrecimento sustentável, equilíbrio metabólico e mais qualidade de vida ao longo dos anos.</strong>
          </p>
          
          <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
            Com <strong className="text-foreground font-semibold">um olhar funcional e estratégico sobre o corpo e o estilo de vida,</strong> é possível construir um plano que une longevidade, performance metabólica e mentoria em saúde. O objetivo não é apenas tratar sintomas, mas conduzir cada paciente a um envelhecimento ativo, consciente e com autonomia real.
          </p>
        </div>

        {/* Second Block with Image */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-20">
          <div className="animate-on-scroll duration-700 delay-150">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_4467%20TRATADA%20FEED-vL8De0spYJkUhNlQOHa0FHWD9WqwBx.jpg"
              alt="Dra. Thaís Moreschi - Estilo de vida saudável"
              width={600}
              height={700}
              className="rounded-2xl shadow-xl object-cover w-full h-auto"
            />
          </div>
          
          <div className="animate-on-scroll duration-700 delay-300">
            <h3 className="font-serif text-2xl md:text-3xl lg:text-4xl font-medium text-foreground mb-6 leading-tight text-balance">
              Você não precisa aceitar o cansaço como parte da sua vida.
            </h3>
            
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-8">
              Você sente o corpo sem energia, o sono não restaurador, o estresse constante e os sinais do envelhecimento chegando antes da hora.
            </p>
            
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-8">
              Nos últimos anos, lidamos com diversos casos como esse. Conhecemos o caminho para deixar tudo isso para trás.
            </p>

            <a
              href="https://wa.me/5544988348338"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground font-medium rounded-full hover:bg-primary/90 transition-all duration-300 hover:shadow-xl hover:scale-105"
            >
              Agende uma Consulta
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </a>
          </div>
        </div>

        {/* Stats */}
        <div className="animate-on-scroll duration-700 delay-500 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="text-center p-8 bg-secondary/50 rounded-2xl hover:bg-secondary transition-colors duration-300"
            >
              <stat.icon className="w-8 h-8 text-primary mx-auto mb-4" />
              <AnimatedCounter value={stat.value} suffix={stat.suffix} />
              <p className="text-muted-foreground mt-2">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
