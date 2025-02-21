"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"
import { motion } from "framer-motion"

import { Button } from "@/components/ui/button"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { toast } from "@/hooks/use-toast"

const formSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  phone: z.string().min(10, {
    message: "Please enter a valid phone number.",
  }),
  message: z.string().min(10, {
    message: "Message must be at least 10 characters.",
  }),
})

export function ConsultationForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      message: "",
    },
  })

  function onSubmit(values: z.infer<typeof formSchema>) {
    toast({
      title: "Consultation Request Sent",
      description: "We'll get back to you soon!",
    })
    form.reset()
  }

  return (
    <section className="py-20 bg-gradient-to-b from-background to-muted">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto text-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-emerald-600">
            Get a Free Consultation
          </h2>
          <p className="text-muted-foreground text-lg">
            Are you suffering from chronic diseases? Our experts are here to help.
          </p>
        </motion.div>

        <div className="max-w-xl mx-auto">
          <Form {...form}>
            <form 
              onSubmit={form.handleSubmit(onSubmit)} 
              className="space-y-6 bg-zinc-900/50 backdrop-blur-sm border border-emerald-900/30 rounded-2xl p-8 shadow-lg hover:shadow-emerald-600/10 transition-all duration-300"
            >
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-foreground">Name</FormLabel>
                    <FormControl>
                      <Input 
                        placeholder="Your name" 
                        className="bg-background/50 border-emerald-900/30 focus:border-emerald-600/50 transition-colors rounded-lg" 
                        {...field} 
                      />
                    </FormControl>
                    <FormMessage className="text-red-400" />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-foreground">Email</FormLabel>
                    <FormControl>
                      <Input 
                        placeholder="john@example.com" 
                        className="bg-background/50 border-emerald-900/30 focus:border-emerald-600/50 transition-colors rounded-lg" 
                        {...field} 
                      />
                    </FormControl>
                    <FormMessage className="text-red-400" />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="phone"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-foreground">Phone Number</FormLabel>
                    <FormControl>
                      <Input 
                        placeholder="+1 (555) 000-0000" 
                        className="bg-background/50 border-emerald-900/30 focus:border-emerald-600/50 transition-colors rounded-lg" 
                        {...field} 
                      />
                    </FormControl>
                    <FormMessage className="text-red-400" />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-foreground">Your Message</FormLabel>
                    <FormControl>
                      <Textarea 
                        placeholder="Please describe your health concerns..." 
                        className="bg-background/50 border-emerald-900/30 focus:border-emerald-600/50 transition-colors rounded-lg min-h-[120px]" 
                        {...field} 
                      />
                    </FormControl>
                    <FormMessage className="text-red-400" />
                  </FormItem>
                )}
              />
              <Button 
                type="submit" 
                className="w-full bg-emerald-600 hover:bg-emerald-500 text-white shadow-lg shadow-emerald-600/20 transition-all hover:scale-105 rounded-lg"
              >
                Submit Request
              </Button>
            </form>
          </Form>
        </div>
      </div>
    </section>
  )
}

