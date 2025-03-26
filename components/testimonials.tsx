"use client"

import { motion } from "framer-motion"
import { Star } from "lucide-react"
import Image from "next/image"

const testimonials = [
  {
    content:
      "We also provide Lab Testing Services"
  },
  {
    content: "On time home Sample Collection"
  },
  {
    content: "100% Report Correctness"
  },
]

export function Testimonials() {
  return (
    <section className="py-20 bg-gradient-to-b from-muted to-emerald-950">
      <div className="container">

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="p-8 rounded-xl bg-zinc-900/50 backdrop-blur-sm border border-emerald-900/30 hover:border-emerald-600/50 transition-all duration-300 hover:shadow-lg hover:shadow-emerald-600/10 hover:-translate-y-1"
            >
              <p className="text-lg text-gray-400">{testimonial.content}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

