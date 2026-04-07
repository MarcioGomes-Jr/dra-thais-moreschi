import { Header } from "@/components/landing/header"
import { HeroSection } from "@/components/landing/hero-section"
import { PromiseSection } from "@/components/landing/promise-section"
import { MethodSection } from "@/components/landing/method-section"
import { AboutSection } from "@/components/landing/about-section"
import { ClinicSection } from "@/components/landing/clinic-section"
import { SocialSection } from "@/components/landing/social-section"
import { Footer } from "@/components/landing/footer"
import { WhatsAppButton } from "@/components/landing/whatsapp-button"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <PromiseSection />
      <MethodSection />
      <AboutSection />
      <ClinicSection />
      <SocialSection />
      <Footer />
      <WhatsAppButton />
    </main>
  )
}
