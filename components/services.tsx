"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"

const services = [
  {
    title: "Chronic Diseases",
    description: "Effective treatment for long-term health conditions",
    image: "/hair_loss.webp?height=400&width=600",
    slug: "chronic-diseases"
  },
  {
    title: "Skin Disorders",
    description: "Natural solutions for various skin conditions",
    image: "/placeholder.svg?height=400&width=600",
    slug: "skin-disorders"
  },
  {
    title: "Digestive Issues",
    description: "Holistic treatment for digestive system problems",
    image: "/placeholder.svg?height=400&width=600",
    slug: "digestive-issues"
  },
  {
    title: "Chronic Diseases",
    description: "Effective treatment for long-term health conditions",
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    title: "Skin Disorders",
    description: "Natural solutions for various skin conditions",
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    title: "Digestive Issues",
    description: "Holistic treatment for digestive system problems",
    image: "/placeholder.svg?height=400&width=600",
  },
]

export function Services() {
  return (
    <section className="py-16 bg-muted">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4">Our Services</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            We offer comprehensive homeopathic treatments for various health conditions
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative overflow-hidden rounded-lg"
            >
              <Image
                src={service.image || "/placeholder.svg"}
                alt={service.title}
                width={600}
                height={400}
                className="w-full object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-black/0 p-6 flex flex-col justify-end">
                <h3 className="text-xl font-semibold text-white mb-2">{service.title}</h3>
                <p className="text-gray-200 mb-4">{service.description}</p>
                <Link href={`/diseases/${service.slug}`}>
                  <Button variant="secondary" className="w-full">Learn More</Button>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

