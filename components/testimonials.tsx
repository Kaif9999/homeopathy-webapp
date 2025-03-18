"use client"

import { motion } from "framer-motion"
import { Star } from "lucide-react"
import Image from "next/image"

const testimonials = [
  {
    name: "Sarah Johnson",
    avatar: "/placeholder.svg?height=40&width=40",
    role: "Patient",
    content:
      "The homeopathic treatment I received was incredibly effective. My chronic condition has improved significantly.",
  },
  {
    name: "Michael Chen",
    avatar: "/placeholder.svg?height=40&width=40",
    role: "Patient",
    content: "I was skeptical at first, but the results speak for themselves. The natural approach really works!",
  },
  {
    name: "Emma Williams",
    avatar: "/placeholder.svg?height=40&width=40",
    role: "Patient",
    content: "The doctors here are very knowledgeable and take time to understand your concerns. Highly recommended!",
  },
]

export function Testimonials() {
  return (
    <section className="py-20 bg-gradient-to-b from-muted to-emerald-950">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-emerald-600">
            Patient Testimonials
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Read what our patients say about their healing journey with us
          </p>
        </motion.div>

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
              <div className="flex items-center mb-4">
                <Image
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  width={48}
                  height={48}
                  className="rounded-full"
                />
                <div className="ml-4">
                  <h4 className="text-lg font-semibold text-white">{testimonial.name}</h4>
                  <p className="text-emerald-600">{testimonial.role}</p>
                </div>
              </div>
              <div className="flex gap-1 mb-2">
                {Array(5)
                  .fill(null)
                  .map((_, i) => (
                    <Star 
                      key={i} 
                      className="w-4 h-4 fill-emerald-600 text-emerald-600" 
                    />
                  ))}
              </div>
              <p className="text-gray-400">{testimonial.content}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

