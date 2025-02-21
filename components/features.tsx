"use client"

import { motion } from "framer-motion"
import { Clock, Heart, Shield, Users } from "lucide-react"

const features = [
  {
    icon: Heart,
    title: "Natural Healing",
    description: "Safe and gentle treatments that work with your body's natural healing abilities",
  },
  {
    icon: Shield,
    title: "No Side Effects",
    description: "Our homeopathic remedies are safe and free from harmful side effects",
  },
  {
    icon: Users,
    title: "Family Care",
    description: "Comprehensive healthcare solutions for all family members",
  },
  {
    icon: Clock,
    title: "24/7 Support",
    description: "Round-the-clock assistance for all your healthcare needs",
  },
]

export function Features() {
  return (
    <section className="py-20 bg-gradient-to-b from-background to-emerald-950">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="p-8 rounded-xl bg-zinc-900/50 backdrop-blur-sm border border-emerald-900/30 hover:border-emerald-600/50 transition-all duration-300 hover:shadow-lg hover:shadow-emerald-600/10 hover:-translate-y-1 group"
            >
              <feature.icon className="w-12 h-12 text-emerald-500 mb-4 group-hover:scale-110 transition-transform duration-300" />
              <h3 className="text-xl font-semibold mb-2 text-white group-hover:text-emerald-400 transition-colors">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

