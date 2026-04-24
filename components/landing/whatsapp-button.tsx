"use client"

import { useState, useEffect } from "react"
import { cn } from "@/lib/utils"

export function WhatsAppButton() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 300)
    }
    
    window.addEventListener("scroll", handleScroll)

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return (
    <div
      className={cn(
        "fixed bottom-6 right-6 z-50 transition-all duration-500",
        isVisible ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0"
      )}
    >
      <a
        href="https://wa.me/5544988348338?text=Olá! Gostaria de agendar uma consulta."
        target="_blank"
        rel="noopener noreferrer"
        className="group relative flex items-center justify-center w-14 h-14 md:w-16 md:h-16 bg-[#25D366] rounded-full shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300"
        aria-label="Contato via WhatsApp"
      >
        <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-30" />
        <svg
          className="relative z-10 w-7 h-7 md:w-8 md:h-8 text-white"
          viewBox="0 0 32 32"
          fill="currentColor"
          aria-hidden="true"
        >
          <path d="M16.02 3.2c-7.05 0-12.78 5.72-12.78 12.76 0 2.24.59 4.43 1.7 6.36L3.14 28.8l6.64-1.74a12.75 12.75 0 0 0 6.24 1.59c7.04 0 12.76-5.72 12.76-12.77S23.06 3.2 16.02 3.2Zm0 23.28c-1.97 0-3.9-.53-5.59-1.54l-.4-.24-3.94 1.03 1.05-3.84-.26-.39a10.5 10.5 0 1 1 9.14 4.98Zm5.76-7.86c-.31-.16-1.86-.92-2.15-1.02-.29-.11-.5-.16-.71.16-.21.31-.81 1.02-.99 1.23-.18.21-.37.24-.68.08-.31-.16-1.32-.49-2.52-1.56-.93-.83-1.56-1.86-1.74-2.17-.18-.31-.02-.48.14-.64.14-.14.31-.37.47-.55.16-.18.21-.31.31-.52.1-.21.05-.39-.03-.55-.08-.16-.71-1.71-.97-2.34-.26-.62-.52-.53-.71-.54h-.6c-.21 0-.55.08-.84.39-.29.31-1.1 1.08-1.1 2.62s1.13 3.04 1.29 3.25c.16.21 2.22 3.39 5.38 4.75.75.32 1.34.52 1.8.66.76.24 1.45.21 1.99.13.61-.09 1.86-.76 2.12-1.49.26-.73.26-1.36.18-1.49-.08-.13-.29-.21-.61-.37Z" />
        </svg>
      </a>
    </div>
  )
}
