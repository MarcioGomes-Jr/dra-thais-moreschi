"use client"

import { useState, useEffect } from "react"
import { MessageCircle, X } from "lucide-react"
import { cn } from "@/lib/utils"

export function WhatsAppButton() {
  const [isTooltipVisible, setIsTooltipVisible] = useState(false)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    // Show button after scroll
    const handleScroll = () => {
      setIsVisible(window.scrollY > 300)
    }
    
    window.addEventListener("scroll", handleScroll)
    
    // Show tooltip after 3 seconds
    const tooltipTimer = setTimeout(() => {
      setIsTooltipVisible(true)
    }, 3000)

    return () => {
      window.removeEventListener("scroll", handleScroll)
      clearTimeout(tooltipTimer)
    }
  }, [])

  const handleCloseTooltip = (e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()
    setIsTooltipVisible(false)
  }

  return (
    <div
      className={cn(
        "fixed bottom-6 right-6 z-50 transition-all duration-500",
        isVisible ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0"
      )}
    >
      {/* Tooltip */}
      <div
        className={cn(
          "absolute bottom-full right-0 mb-4 transition-all duration-300",
          isTooltipVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2 pointer-events-none"
        )}
      >
        <div className="relative bg-card rounded-2xl shadow-xl p-4 max-w-[200px] border border-border">
          <button
            onClick={handleCloseTooltip}
            className="absolute -top-2 -right-2 w-6 h-6 bg-card border border-border rounded-full flex items-center justify-center text-muted-foreground hover:text-foreground transition-colors shadow-md"
            aria-label="Fechar"
          >
            <X className="w-3 h-3" />
          </button>
          <p className="text-foreground font-medium text-sm leading-relaxed">
            Precisa de ajuda?
          </p>
          <p className="text-muted-foreground text-sm mt-1">
            Fale conosco pelo WhatsApp!
          </p>
          {/* Tooltip Arrow */}
          <div className="absolute -bottom-2 right-8 w-4 h-4 bg-card border-r border-b border-border transform rotate-45" />
        </div>
      </div>

      {/* Button */}
      <a
        href="https://wa.me/5544988348338?text=Olá! Gostaria de agendar uma consulta."
        target="_blank"
        rel="noopener noreferrer"
        className="group flex items-center justify-center w-14 h-14 md:w-16 md:h-16 bg-[#25D366] rounded-full shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300"
        aria-label="Contato via WhatsApp"
      >
        <MessageCircle className="w-7 h-7 md:w-8 md:h-8 text-white" />
        
        {/* Pulse Animation */}
        <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-30" />
      </a>
    </div>
  )
}
