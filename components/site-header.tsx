"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Menu, X, Atom } from "lucide-react"
import { useState, useEffect } from "react"

const navItems = [
  { name: "About", href: "/about" },
  { name: "Learn Hub", href: "/learn" },
  { name: "Labs", href: "/labs" },
  { name: "Events", href: "/events" },
  { name: "Projects", href: "/projects" },
  { name: "Campus", href: "/campus" },
]

export function SiteHeader() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300 border-b",
        scrolled ? "bg-background/80 backdrop-blur-md border-white/10" : "bg-transparent border-transparent",
      )}
    >
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <div className="relative flex items-center justify-center w-8 h-8 bg-primary/20 rounded-lg border border-primary/50 overflow-hidden group-hover:border-primary transition-colors">
            <Atom className="w-5 h-5 text-primary animate-[spin_10s_linear_infinite]" />
          </div>
          <span className="font-bold text-lg tracking-tight">
            BQC<span className="text-primary">Club</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "text-sm font-medium transition-colors hover:text-primary relative",
                pathname === item.href ? "text-primary" : "text-muted-foreground",
              )}
            >
              {item.name}
              {pathname === item.href && (
                <motion.div
                  layoutId="navbar-indicator"
                  className="absolute -bottom-[21px] left-0 right-0 h-[2px] bg-primary"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
            </Link>
          ))}
        </nav>

        {/* CTA & Mobile Menu Toggle */}
        <div className="flex items-center gap-4">
          <Button
            variant="default"
            size="sm"
            className="hidden md:flex bg-primary hover:bg-primary/90 text-primary-foreground shadow-[0_0_15px_rgba(189,52,254,0.3)]"
          >
            Join the Club
          </Button>
          <button className="md:hidden text-muted-foreground hover:text-foreground" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="md:hidden absolute top-16 left-0 w-full bg-background/95 backdrop-blur-xl border-b border-white/10 p-4 flex flex-col gap-4"
        >
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "text-base font-medium py-2 border-b border-white/5",
                pathname === item.href ? "text-primary" : "text-muted-foreground",
              )}
              onClick={() => setIsOpen(false)}
            >
              {item.name}
            </Link>
          ))}
          <Button className="w-full mt-2 bg-primary hover:bg-primary/90">Join the Club</Button>
        </motion.div>
      )}
    </header>
  )
}
