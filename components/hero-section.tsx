"use client"

import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"

export function HeroSection() {
  return (
    <section className="relative h-[90vh] flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url('https://www.pmrihomeo.com/wp-content/uploads/2023/01/Why-Homeopathy-Tablets-are-Sweet.jpg')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          filter: "brightness(0.7)",
        }}
      />
      <div className="container relative z-10 mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto text-center text-white"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Holistic Healthcare
            <span className="block mt-2">For Your Entire Family</span>
          </h1>
          <p className="text-lg md:text-xl mb-8 text-gray-200">
            Experience the power of natural healing with our expert homeopathic treatments
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="text-lg">
              Book Consultation
            </Button>
            <Button size="lg" variant="outline" className="text-lg text-black dark:text-white">
              Learn More
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

