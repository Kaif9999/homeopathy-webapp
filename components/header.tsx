"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ModeToggle } from "@/components/mode-toggle"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu } from "lucide-react"
import { useState } from "react"

export function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b border-emerald-900/20 bg-background/80 backdrop-blur-xl">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center space-x-2 group">
          <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-emerald-700 group-hover:from-blue-400 group-hover:to-emerald-400 group-hover:scale-105 transition-transform duration-300" role="heading">
            PublicHomeopathy
          </span>
          <span className="text-emerald-500 font-semibold group-hover:text-emerald-600 transition-colors duration-300">
            Clinic
          </span>
        </Link>

        <nav className="hidden md:flex items-center space-x-8">
          <Link href="/" className="text-muted-foreground hover:text-emerald-500 transition-all hover:scale-105">
            Home
          </Link>
          <Link href="/diseases" className="text-muted-foreground hover:text-emerald-500 transition-all hover:scale-105">
            Diseases
          </Link>
          <Link href="/about" className="text-muted-foreground hover:text-emerald-500 transition-all hover:scale-105">
            About
          </Link>
          <Link href="/contact" className="text-muted-foreground hover:text-emerald-500 transition-all hover:scale-105">
            Contact
          </Link>
          <Button className="bg-emerald-600/90 hover:bg-emerald-500 text-white shadow-lg shadow-emerald-600/20 transition-all hover:scale-105 rounded-full px-6">
            Book Free Consultation
          </Button>
        </nav>

        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild className="md:hidden">
            <Button 
              variant="ghost" 
              size="icon"
              className="hover:bg-emerald-600/10 text-emerald-500"
            >
              <Menu className="h-6 w-6" />
            </Button>
          </SheetTrigger>
          <SheetContent 
            side="right"
            className="w-full sm:w-[400px] border-l border-emerald-900/20 bg-background/95 backdrop-blur-xl p-0"
          >
            <nav className="flex flex-col h-full">
              <div className="p-6 border-b border-emerald-900/20">
                <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-emerald-600">
                  Homeopathy Clinic
                </span>
              </div>
              
              <div className="flex-1 overflow-auto py-6 px-6">
                <div className="space-y-6">
                  <Link 
                    href="/" 
                    className="flex items-center text-muted-foreground hover:text-emerald-500 transition-all hover:translate-x-2"
                    onClick={() => setIsOpen(false)}
                  >
                    <span className="text-lg">Home</span>
                  </Link>
                  <Link 
                    href="/diseases" 
                    className="flex items-center text-muted-foreground hover:text-emerald-500 transition-all hover:translate-x-2"
                    onClick={() => setIsOpen(false)}
                  >
                    <span className="text-lg">Diseases</span>
                  </Link>
                  <Link 
                    href="/about" 
                    className="flex items-center text-muted-foreground hover:text-emerald-500 transition-all hover:translate-x-2"
                    onClick={() => setIsOpen(false)}
                  >
                    <span className="text-lg">About</span>
                  </Link>
                  <Link 
                    href="/contact" 
                    className="flex items-center text-muted-foreground hover:text-emerald-500 transition-all hover:translate-x-2"
                    onClick={() => setIsOpen(false)}
                  >
                    <span className="text-lg">Contact</span>
                  </Link>
                </div>
              </div>

              <div className="p-6 border-t border-emerald-900/20 bg-emerald-950/30 backdrop-blur-sm">
                <Button 
                  className="w-full bg-emerald-600 hover:bg-emerald-500 text-white shadow-lg shadow-emerald-600/20 transition-all hover:scale-105"
                  onClick={() => setIsOpen(false)}
                >
                  Book Appointment
                </Button>
              </div>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  )
}

