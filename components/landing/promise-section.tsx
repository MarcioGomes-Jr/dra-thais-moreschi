"use client"

import { useEffect, useRef } from "react"
import { ArrowUpRight } from "lucide-react"
import Image from "next/image"

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
            Existe um caminho possível{" "}
            <span className="text-primary">para viver e envelhecer bem</span>
          </h2>
          
          <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-6">
            Existe um caminho possível para <strong className="text-foreground font-semibold">não apenas viver bem, mas envelhecer com vitalidade, autonomia e disposição.</strong> Esse caminho passa por uma medicina personalizada, que considera a individualidade de cada paciente para promover <strong className="text-foreground font-semibold">emagrecimento sustentável, reposição hormonal, equilíbrio metabólico e mais qualidade de vida ao longo dos anos.</strong>
          </p>
          
          <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
            Com <strong className="text-foreground font-semibold">um olhar funcional e estratégico sobre o corpo e o estilo de vida,</strong> é possível construir um plano que une longevidade, performance metabólica e liderança em saúde. O objetivo não é apenas tratar sintomas, mas conduzir cada paciente a um envelhecimento otimizado, consciente e com autonomia real.
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
              Você não precisa aceitar viver abaixo do seu verdadeiro potencial
            </h3>
            
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-8">
              Talvez você sinta falta de energia ao longo do dia. Percebe dificuldade para emagrecer, ganhar massa muscular ou manter uma composição corporal saudável. Seu rendimento físico, mental e emocional já não é o mesmo. E, muitas vezes, parece que você está apenas sobrevivendo à rotina sem disposição para viver plenamente.

            </p>
            
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-8">
              Esses sinais não devem ser ignorados.
            </p>

            <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-8">
              Com o passar dos anos, homens e mulheres podem apresentar alterações hormonais e metabólicas importantes que afetam várias áreas da vida. Quando bem indicada, a terapia de reposição hormonal pode ser uma ferramenta estratégica para restaurar equilíbrio, vitalidade e performance com segurança e individualização.
            </p>

            <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-8">
              Porque viver bem não é apenas ausência de doença. É ter energia, clareza, força e disposição para aproveitar a vida em todas as suas áreas.
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
      </div>
    </section>
  )
}
