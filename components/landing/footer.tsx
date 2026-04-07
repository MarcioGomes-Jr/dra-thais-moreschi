"use client"

import { Instagram, Phone, Mail, MapPin, ArrowUp } from "lucide-react"

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <footer className="bg-[#897057]">
      {/* CTA Section */}
      <div className="container mx-auto px-4 lg:px-8 py-12 md:py-16">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="font-serif text-2xl md:text-3xl font-medium text-white mb-2">
              Pronto(a) para transformar sua saúde?
            </h3>
            <p className="text-white/70">
              Agende sua consulta e comece sua jornada ainda esta semana.
            </p>
          </div>
          <a
            href="https://wa.me/5544988348338"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 bg-white text-[#897057] font-medium rounded-full hover:bg-white/90 transition-all duration-300 hover:shadow-lg whitespace-nowrap"
          >
            <Phone className="w-5 h-5" />
            Agendar Consulta
          </a>
        </div>
      </div>

      {/* Main Footer */}
      <div className="border-t border-white/10">
        <div className="container mx-auto px-4 lg:px-8 py-12 md:py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-16">
            {/* Brand Column */}
            <div>
              <div className="mb-6">
                <span className="font-serif text-2xl font-medium text-white">
                  Dra. Thaís Moreschi
                </span>
              </div>
              <p className="text-white/70 text-sm leading-relaxed mb-4">
                Metodologia e protocolos personalizados para te ajudar a alcançar seus objetivos. Emagrecimento com saúde metabólica, medicina personalizada e integrativa.
              </p>
              <p className="text-white/80 text-sm font-medium">
                CRM-PR: 25.605
              </p>
            </div>

            {/* Navigation Column */}
            <div>
              <h4 className="font-serif text-lg font-medium text-white mb-6">
                Navegação
              </h4>
              <nav className="flex flex-col gap-3">
                <a href="#servicos" className="text-white/70 hover:text-white transition-colors text-sm">
                  Serviços
                </a>
                <a href="#clinica" className="text-white/70 hover:text-white transition-colors text-sm">
                  Clínica
                </a>
                <a href="#sobre" className="text-white/70 hover:text-white transition-colors text-sm">
                  Sobre
                </a>
                <a href="https://instagram.com/dra.thaismoreschi" target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-white transition-colors text-sm">
                  Instagram
                </a>
              </nav>
            </div>

            {/* Contact Column */}
            <div>
              <h4 className="font-serif text-lg font-medium text-white mb-6">
                Contato
              </h4>
              <div className="flex flex-col gap-4">
                <a
                  href="tel:+5544988348338"
                  className="flex items-center gap-3 text-white/70 hover:text-white transition-colors text-sm"
                >
                  <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                    <Phone className="w-4 h-4 text-white" />
                  </div>
                  (44) 98834-8338
                </a>
                <a
                  href="mailto:contato@drathaismoreschi.com.br"
                  className="flex items-center gap-3 text-white/70 hover:text-white transition-colors text-sm"
                >
                  <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                    <Mail className="w-4 h-4 text-white" />
                  </div>
                  contato@drathaismoreschi.com.br
                </a>
                <div className="flex items-start gap-3 text-white/70 text-sm">
                  <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                    <MapPin className="w-4 h-4 text-white" />
                  </div>
                  <span>
                    Av. Brasil, 4785 - Sala 303<br />
                    Zona 04 - Maringá, PR
                  </span>
                </div>
                
                {/* Social */}
                <a
                  href="https://instagram.com/dra.thaismoreschi"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram className="w-5 h-5 text-white" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="container mx-auto px-4 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-white/50 text-center md:text-left">
              {new Date().getFullYear()} Dra. Thaís Moreschi. Feito com <span className="text-white/70">&#9825;</span> por Over Performance
            </p>
            <button
              onClick={scrollToTop}
              className="flex items-center gap-2 text-sm text-white/50 hover:text-white transition-colors"
            >
              Voltar ao topo
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  )
}
