import { HeroSection } from "@/components/hero-section"
import { Features } from "@/components/features"
import { ConsultationForm } from "@/components/consultation-form"
import { Testimonials } from "@/components/testimonials"
import { Services } from "@/components/services"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <HeroSection />
      <Features />
      <Services />
      <ConsultationForm />
      <Testimonials />
    </div>
  )
}

