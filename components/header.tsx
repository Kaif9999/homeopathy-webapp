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
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <span className="text-2xl font-bold">Homeopathy</span>
          <span className="text-primary">Clinic</span>
        </Link>

        <nav className="hidden md:flex items-center space-x-6">
          <Link href="/" className="text-foreground/60 hover:text-foreground">
            Home
          </Link>
          <Link href="/diseases" className="text-foreground/60 hover:text-foreground">
            Diseases
          </Link>
          <Link href="/about" className="text-foreground/60 hover:text-foreground">
            About
          </Link>
          <Link href="/blog" className="text-foreground/60 hover:text-foreground">
            Blog
          </Link>
          <Link href="/contact" className="text-foreground/60 hover:text-foreground">
            Contact
          </Link>
          <ModeToggle />
          <Button>Book Appointment</Button>
        </nav>

        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon">
              <Menu className="h-6 w-6" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right">
            <nav className="flex flex-col space-y-4">
              <Link href="/" className="text-foreground/60 hover:text-foreground">
                Home
              </Link>
              <Link href="/diseases" className="text-foreground/60 hover:text-foreground">
                Diseases
              </Link>
              <Link href="/about" className="text-foreground/60 hover:text-foreground">
                About
              </Link>
              <Link href="/blog" className="text-foreground/60 hover:text-foreground">
                Blog
              </Link>
              <Link href="/contact" className="text-foreground/60 hover:text-foreground">
                Contact
              </Link>
              <ModeToggle />
              <Button className="w-full">Book Appointment</Button>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  )
}

