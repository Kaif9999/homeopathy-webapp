"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"

const services = [
  {
    title: "Sexual Health",
    description: "Effective natural solutions for sexual health and wellness",
    image: "/images/chronic.jpg",
    slug: "sexual_wellness"
  },
  {
    title: "Skin & Allergy Care",
    description: "Holistic treatment for skin conditions and allergies",
    image: "/images/skin.jpg",
    slug: "skin_disease"
  },
  {
    title: "Digestion Care",
    description: "Natural remedies for digestion and gut health",
    image: "/images/digestion.jpg",
    slug: "digestion_care"
  },
  {
    title: "Hair Fall",
    description: "Natural solutions for hair loss and scalp health",
    image: "/images/hairfall.jpg",
    slug: "hairfall"
  },
  {
    title: "Other Health Issues",
    description: "Comprehensive homeopathic care for various health conditions",
    image: "/images/other.jpg",
    slug: "other_health"
  },
]

export function Services() {
  return (
    <section className="py-24 bg-gradient-to-b from-background to-emerald-950">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-emerald-600">
            Our Specialized Services
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Discover our comprehensive range of homeopathic treatments tailored to your unique health needs
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
              className="group relative overflow-hidden rounded-2xl bg-zinc-900/50 backdrop-blur-sm border border-emerald-900/30 hover:border-emerald-600/50 transition-all duration-500"
            >
              <div className="aspect-[4/3] relative overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.title}
                  width={600}
                  height={400}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent" />
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-semibold mb-3 text-white group-hover:text-emerald-400 transition-colors">
                  {service.title}
                </h3>
                <p className="text-muted-foreground mb-6">
                  {service.description}
                </p>
                <Link href={`/${service.slug}`}>
                  <Button 
                    variant="outline" 
                    className="w-full border-2 border-emerald-600/50 text-white hover:bg-emerald-600/20 shadow-lg shadow-emerald-600/10 transition-all hover:scale-105"
                  >
                    Learn More
                  </Button>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

