"use client"

import { Button } from "@/components/ui/button"
import { DiseaseConsultationForm } from "@/components/disease-consultation-form"
import { motion } from "framer-motion"
import { Check } from "lucide-react"

export default function SexualWellnessPage() {
  return (
    <>
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden bg-background">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/80 to-transparent z-[1]" />
        <div className="container relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-emerald-600">
              Sexual Wellness Treatment
            </h1>
            <p className="text-xl text-muted-foreground">
              Natural and confidential homeopathic solutions for sexual health concerns
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-b from-background to-emerald-950">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-emerald-400">Understanding Sexual Health</h2>
              <p className="text-muted-foreground leading-relaxed">
                Sexual health issues can significantly impact quality of life and relationships. Our homeopathic approach 
                addresses these concerns naturally, focusing on both physical and emotional aspects of sexual wellness.
              </p>
              <ul className="space-y-4">
                <li className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-emerald-500" />
                  <span className="text-muted-foreground">Personalized treatment plans</span>
                </li>
                <li className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-emerald-500" />
                  <span className="text-muted-foreground">Complete confidentiality</span>
                </li>
                <li className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-emerald-500" />
                  <span className="text-muted-foreground">Natural healing approach</span>
                </li>
              </ul>
            </div>
            <div className="bg-zinc-900/50 backdrop-blur-sm border border-emerald-900/30 rounded-2xl p-8">
              <h3 className="text-2xl font-semibold mb-4 text-emerald-400">Why Choose Homeopathy?</h3>
              <p className="text-muted-foreground mb-6">
                Homeopathic treatment for sexual health works by addressing the root cause, not just symptoms. 
                Our remedies are natural, safe, and free from side effects.
              </p>
              <Button className="w-full bg-emerald-600 hover:bg-emerald-500 text-white">
                Book Consultation
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container">
          <DiseaseConsultationForm diseaseName="Sexual Wellness" />
        </div>
      </section>
    </>
  )
} 