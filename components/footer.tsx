import Link from "next/link"
import { Github, Twitter, Linkedin, Mail } from "lucide-react"

export function Footer() {
  const footerLinks = {
    Club: [
      { name: "About", href: "/about" },
      { name: "Events", href: "/events" },
      { name: "Members", href: "/members" },
      { name: "Join Us", href: "/join" },
    ],
    Learn: [
      { name: "Blockchain Track", href: "/learn#blockchain" },
      { name: "Quantum Track", href: "/learn#quantum" },
      { name: "AI/ML Track", href: "/learn#ai" },
      { name: "Resources", href: "/resources" },
    ],
    Build: [
      { name: "Projects", href: "/projects" },
      { name: "Labs", href: "/labs" },
      { name: "Bounties", href: "/bounties" },
      { name: "Campus Chain", href: "/campus" },
    ],
  }

  return (
    <footer className="border-t border-border/50 bg-background/50 backdrop-blur-sm">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center glow-purple">
                <span className="text-xl font-bold">BQ</span>
              </div>
              <div>
                <div className="font-bold text-lg leading-tight">BC & QC Club</div>
                <div className="text-xs text-muted-foreground">Deep Tech Innovation</div>
              </div>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed mb-6">
              Building the future of decentralized intelligence through blockchain, quantum computing, and AI
              innovation.
            </p>
            <div className="flex items-center gap-3">
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg glass flex items-center justify-center hover:bg-primary/20 transition-colors"
              >
                <Twitter size={18} />
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg glass flex items-center justify-center hover:bg-primary/20 transition-colors"
              >
                <Github size={18} />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg glass flex items-center justify-center hover:bg-primary/20 transition-colors"
              >
                <Linkedin size={18} />
              </a>
              <a
                href="mailto:contact@bqclub.edu"
                className="w-9 h-9 rounded-lg glass flex items-center justify-center hover:bg-primary/20 transition-colors"
              >
                <Mail size={18} />
              </a>
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="font-semibold mb-4 text-foreground">{category}</h3>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-sm text-muted-foreground hover:text-primary transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-border/50 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Blockchain & Quantum Computing Club. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link href="/privacy" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
