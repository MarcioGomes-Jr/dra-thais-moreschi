"use client"

import { useEffect, useRef } from "react"
import { ArrowUpRight, Stethoscope, FlaskConical, FileText, CalendarCheck } from "lucide-react"

const services = [
  {
    title: "Emagrecimento com saúde metabólica",
    description: "Protocolos personalizados que respeitam seu metabolismo para resultados sustentáveis.",
  },
  {
    title: "Medicina personalizada e integrativa",
    description: "Abordagem completa que considera sua individualidade bioquímica e estilo de vida.",
  },
  {
    title: "Longevidade com autonomia",
    description: "Estratégias para envelhecer com vitalidade, independência e qualidade de vida.",
  },
  {
    title: "Acompanhamento de rotina e estilo de vida",
    description: "Orientação contínua para manter hábitos saudáveis e resultados duradouros.",
  },
  {
    title: "Qualidade de vida e performance",
    description: "Otimização da sua energia, disposição e desempenho no dia a dia.",
  },
]

const methodSteps = [
  { icon: Stethoscope, title: "Consulta", description: "Avaliação completa e personalizada" },
  { icon: FlaskConical, title: "Bateria de Exames", description: "Análise profunda do seu organismo" },
  { icon: FileText, title: "Protocolo Personalizado", description: "Tratamento sob medida para você" },
  { icon: CalendarCheck, title: "Acompanhamento", description: "Suporte contínuo em sua jornada" },
]

export function MethodSection() {
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
    <section id="metodo" ref={sectionRef} className="py-20 md:py-32 bg-secondary/30 relative overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <div className="animate-on-scroll duration-700 max-w-4xl mx-auto text-center mb-16">
          <p className="text-sm font-medium text-primary tracking-widest uppercase mb-4">
            Método + Áreas de Atuação
          </p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-medium text-foreground mb-6 leading-tight text-balance">
            Agende um horário e tenha acesso a uma{" "}
            <span className="text-primary">visão estratégica, integrada e adaptada</span> para sua realidade!
          </h2>
          <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
            Em consulta, vamos encontrar a raiz do problema e buscar o melhor protocolo para promover vitalidade em todas as fases. Não com uma fórmula pronta, mas com processo e método.
          </p>
        </div>

        {/* Services Grid */}
        <div id="servicos" className="animate-on-scroll duration-700 delay-150 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {services.map((service, index) => (
            <div
              key={index}
              className="group p-6 bg-card rounded-xl border border-border hover:border-primary/30 hover:shadow-lg transition-all duration-300"
            >
              <h3 className="font-serif text-xl font-medium text-foreground mb-3 group-hover:text-primary transition-colors">
                {service.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        {/* Method Steps */}
        <div className="animate-on-scroll duration-700 delay-300 max-w-5xl mx-auto">
          <h3 className="font-serif text-2xl md:text-3xl font-medium text-foreground text-center mb-4">
            Método Dra. Thaís Moreschi
          </h3>
          <p className="text-center text-muted-foreground mb-12">
            Um caminho seguro para colocar um ponto final no que tira sua qualidade de vida
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {methodSteps.map((step, index) => (
              <div
                key={index}
                className="relative group"
              >
                <div className="flex flex-col items-center text-center p-6 bg-card rounded-xl border border-border hover:border-primary/30 hover:shadow-lg transition-all duration-300">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <step.icon className="w-7 h-7 text-primary" />
                  </div>
                  <span className="absolute -top-3 -left-3 w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-medium">
                    {index + 1}
                  </span>
                  <h4 className="font-serif text-lg font-medium text-foreground mb-2">
                    {step.title}
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    {step.description}
                  </p>
                </div>
                
                {/* Arrow between steps (hidden on last item and mobile) */}
                {index < methodSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-3 transform -translate-y-1/2 text-primary/40">
                    →
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
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
