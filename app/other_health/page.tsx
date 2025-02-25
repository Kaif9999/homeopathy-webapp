"use client"

import { Button } from "@/components/ui/button"
import { DiseaseConsultationForm } from "@/components/disease-consultation-form"
import { motion } from "framer-motion"
import { Check } from "lucide-react"

export default function OtherHealthPage() {
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
              General Health Care
            </h1>
            <p className="text-xl text-muted-foreground">
              Comprehensive homeopathic solutions for various health conditions
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-b from-background to-emerald-950">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-emerald-400">Holistic Healthcare</h2>
              <p className="text-muted-foreground leading-relaxed">
                We offer personalized homeopathic treatments for a wide range of health conditions, 
                focusing on natural healing and overall wellness. Our approach treats the whole person, 
                not just the symptoms.
              </p>
              <ul className="space-y-4">
                <li className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-emerald-500" />
                  <span className="text-muted-foreground">Personalized care</span>
                </li>
                <li className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-emerald-500" />
                  <span className="text-muted-foreground">Natural healing</span>
                </li>
                <li className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-emerald-500" />
                  <span className="text-muted-foreground">Preventive approach</span>
                </li>
              </ul>
            </div>
            <div className="bg-zinc-900/50 backdrop-blur-sm border border-emerald-900/30 rounded-2xl p-8">
              <h3 className="text-2xl font-semibold mb-4 text-emerald-400">Comprehensive Care</h3>
              <p className="text-muted-foreground mb-6">
                From chronic pain to respiratory issues, our homeopathic treatments provide 
                natural solutions for various health concerns without side effects.
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
          <DiseaseConsultationForm diseaseName="General Health" />
        </div>
      </section>
    </>
  )
}
