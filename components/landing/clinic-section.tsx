"use client"

import { useEffect, useRef, useState } from "react"
import { ArrowUpRight, MapPin, Phone, Mail, ExternalLink } from "lucide-react"
import Image from "next/image"

const clinicImages = [
  { src: "/images/clinic-1.jpeg", alt: "Clínica", label: "Clínica" },
  { src: "/images/clinic-2.jpeg", alt: "Clínica", label: "Clínica" },
  { src: "/images/clinic-3.jpeg", alt: "Clínica", label: "Clínica" },
  { src: "/images/clinic-4.jpeg", alt: "Clínica", label: "Clínica" },
]

const contactInfo = [
  {
    icon: MapPin,
    title: "Endereço",
    lines: [
      "Av. Brasil, 4785 - Sala 303",
      "3° Andar, Sala 03 - Zona 04",
      "CEP 87014-070, Maringá, Paraná",
    ],
  },
  {
    icon: Phone,
    title: "Telefone",
    lines: ["(44) 98834-8338"],
    link: "tel:+5544988348338",
  },
  {
    icon: Mail,
    title: "E-mail",
    lines: ["drathaislmoreschi@gmail.com"],
    link: "mailto:drathaislmoreschi@gmail.com",
  },
]

export function ClinicSection() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const [activeImage, setActiveImage] = useState(0)

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
    <section id="clinica" ref={sectionRef} className="py-20 md:py-32 bg-secondary/30 relative overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <div className="animate-on-scroll duration-700 text-center mb-16">
          <p className="text-sm font-medium text-primary tracking-widest uppercase mb-4">
            Clínica + Redes Sociais
          </p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-medium text-foreground mb-4 text-balance">
            Conheça nossa clínica
          </h2>
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
            Um espaço preparado para atender com qualidade e acolhimento.
          </p>
        </div>

        <div id="contato" className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Gallery */}
          <div className="animate-on-scroll duration-700 delay-150">
            {/* Main Image */}
            <div className="relative rounded-xl overflow-hidden mb-4 aspect-[4/3] bg-muted">
              <Image
                src={clinicImages[activeImage].src}
                alt={clinicImages[activeImage].alt}
                fill
                className="object-cover"
              />
              <div className="absolute bottom-4 left-4 px-4 py-2 bg-foreground/80 text-background text-sm rounded-lg backdrop-blur-sm">
                {clinicImages[activeImage].label}
              </div>
            </div>
            
            {/* Thumbnails */}
            <div className="grid grid-cols-4 gap-3">
              {clinicImages.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setActiveImage(index)}
                  className={`relative rounded-lg overflow-hidden aspect-square bg-muted transition-all duration-300 ${
                    activeImage === index
                      ? "ring-2 ring-primary ring-offset-2"
                      : "opacity-70 hover:opacity-100"
                  }`}
                >
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div className="animate-on-scroll duration-700 delay-300">
            <div className="bg-card rounded-2xl p-6 md:p-8 border border-border">
              <h3 className="font-serif text-2xl font-medium text-foreground mb-8">
                Informações de Contato
              </h3>

              <div className="space-y-6">
                {contactInfo.map((info) => (
                  <div key={info.title} className="flex gap-4">
                    <div className="w-12 h-12 bg-secondary rounded-xl flex items-center justify-center flex-shrink-0">
                      <info.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-medium text-foreground mb-1">{info.title}</h4>
                      {info.lines.map((line, index) => (
                        <p key={index} className="text-muted-foreground text-sm">
                          {info.link && index === 0 ? (
                            <a
                              href={info.link}
                              className="hover:text-primary transition-colors"
                            >
                              {line}
                            </a>
                          ) : (
                            line
                          )}
                        </p>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              <a
                href="https://wa.me/5544988348338"
                target="_blank"
                rel="noopener noreferrer"
                className="group w-full mt-8 inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary text-primary-foreground font-medium rounded-full hover:bg-primary/90 transition-all duration-300 hover:shadow-xl"
              >
                Agende sua Consulta
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </a>
            </div>

            {/* Map */}
            <div className="mt-6 rounded-xl overflow-hidden border border-border">
              <div className="relative h-48 bg-muted">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3661.0836722710083!2d-51.94857622654587!3d-23.42134443846663!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ecd727c94fdff3%3A0x7c907cf28ce37eac!2sAv.%20Brasil%2C%204785%20-%20Zona%2004%2C%20Maring%C3%A1%20-%20PR%2C%2087014-070!5e0!3m2!1spt-BR!2sbr!4v1777038737829!5m2!1spt-BR!2sbr"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="absolute inset-0"
                />
              </div>
              <a
                href="https://www.google.com/maps/search/?api=1&query=Av%20Brasil%204785%20Maring%C3%A1%20Paran%C3%A1"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 p-3 bg-card hover:bg-secondary transition-colors text-sm text-foreground"
              >
                Abrir no Maps
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
