"use client"

import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
// import heroImage from "@/public/heroSection.jpeg"

export function HeroSection() {
  return (
    <section className="relative h-[90vh] flex items-center justify-center overflow-hidden bg-background">
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url('/heroSection.jpeg')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          filter: "brightness(0.3)",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-transparent z-[1]" />
      <div className="container relative z-10 mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto text-center"
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-emerald-600">
            Holistic Healthcare
            <span className="block mt-2">For Your Family</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-300">
            Experience the power of natural healing with our expert homeopathic treatments
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="text-lg bg-emerald-600 hover:bg-emerald-500 text-white shadow-lg shadow-emerald-600/20 transition-all hover:scale-105">
              Book Consultation
            </Button>
            <Button size="lg" variant="outline" className="text-lg border-2 border-emerald-600/50 text-white hover:bg-emerald-600/20 shadow-lg shadow-emerald-600/10 transition-all hover:scale-105">
              Learn More
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

