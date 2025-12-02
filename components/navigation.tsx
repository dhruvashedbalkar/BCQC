"use client"

import Link from "next/link"
import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [user, setUser] = useState<{ email: string; walletAddress: string | null } | null>(null)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    ;(async () => {
      try {
        const res = await fetch('/api/auth/me', { credentials: 'include' })
        if (res.ok) {
          const data = await res.json()
          setUser(data)
        } else {
          setUser(null)
        }
      } catch {
        setUser(null)
      }
    })()
  }, [])

  const navItems = [
    { name: "About", href: "/about" },
    { name: "Learn Hub", href: "/learn" },
    { name: "Labs", href: "/labs" },
    { name: "Events", href: "/events" },
    { name: "Projects", href: "/projects" },
    { name: "Members", href: "/members" },
  ]

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "glass py-3" : "py-6"}`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center glow-purple transition-all group-hover:scale-110">
              <span className="text-xl font-bold">BQ</span>
            </div>
            <div className="hidden md:block">
              <div className="font-bold text-lg leading-tight">BC & QC Club</div>
              <div className="text-xs text-muted-foreground">Deep Tech Innovation</div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors relative group"
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full" />
              </Link>
            ))}
          </div>

          {/* Right Side */}
          <div className="hidden lg:flex items-center gap-3 relative">
            {!user ? (
              <>
                <Button variant="ghost" size="sm" asChild>
                  <Link href="/join">Sign In</Link>
                </Button>
                <Button size="sm" className="glow-purple" asChild>
                  <Link href="/join">Join Club</Link>
                </Button>
              </>
            ) : (
              <div className="relative">
                <button
                  className="w-9 h-9 rounded-full bg-muted flex items-center justify-center font-bold"
                  onClick={() => setMenuOpen((v) => !v)}
                >
                  {user.email.charAt(0).toUpperCase()}
                </button>
                {menuOpen && (
                  <div className="absolute right-0 mt-2 w-48 glass rounded-xl p-2 shadow-lg">
                    <div className="px-3 py-2 text-xs text-muted-foreground border-b border-border/50">
                      {user.email}
                    </div>
                    <Link href="/profile" className="block px-3 py-2 text-sm hover:text-primary" onClick={() => setMenuOpen(false)}>
                      View Profile
                    </Link>
                    <button
                      className="w-full text-left px-3 py-2 text-sm hover:text-primary"
                      onClick={async () => {
                        await fetch('/api/auth/logout', { method: 'POST', credentials: 'include' })
                        setUser(null)
                        setMenuOpen(false)
                      }}
                    >
                      Sign Out
                    </button>
                  </div>
                )}
              </div>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button className="lg:hidden p-2" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden mt-4 glass rounded-xl p-6 space-y-4">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="block text-sm font-medium text-foreground/80 hover:text-primary transition-colors py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <div className="flex flex-col gap-2 pt-4 border-t border-border">
              {!user ? (
                <>
                  <Button variant="ghost" size="sm" asChild>
                    <Link href="/join">Sign In</Link>
                  </Button>
                  <Button size="sm" className="glow-purple" asChild>
                    <Link href="/join">Join Club</Link>
                  </Button>
                </>
              ) : (
                <>
                  <Link href="/profile" className="text-sm font-medium text-foreground/80 hover:text-primary" onClick={() => setIsMobileMenuOpen(false)}>
                    View Profile
                  </Link>
                  <button
                    className="text-left text-sm font-medium text-foreground/80 hover:text-primary"
                    onClick={async () => {
                      await fetch('/api/auth/logout', { method: 'POST', credentials: 'include' })
                      setUser(null)
                      setIsMobileMenuOpen(false)
                    }}
                  >
                    Sign Out
                  </button>
                </>
              )}
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
