"use client"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { SectionHeading } from "@/components/section-heading"
import { GlassCard } from "@/components/glass-card"
import { Badge } from "@/components/ui/badge"
import { motion } from "framer-motion"
import { Github, Linkedin, Twitter } from "lucide-react"

const leadership = [
  {
    name: "Sarah Chen",
    role: "President",
    track: "Blockchain",
    bio: "Full-stack blockchain developer. Previously interned at Ethereum Foundation.",
    image: "/placeholder.svg?key=leader1",
    socials: { twitter: "#", github: "#", linkedin: "#" },
  },
  {
    name: "James Wilson",
    role: "Vice President",
    track: "Quantum",
    bio: "PhD candidate in Quantum Information. Researching error correction codes.",
    image: "/placeholder.svg?key=leader2",
    socials: { twitter: "#", github: "#", linkedin: "#" },
  },
  {
    name: "Maria Garcia",
    role: "Head of AI",
    track: "AI/ML",
    bio: "Building autonomous agents for DeFi. Winner of ETHGlobal 2024.",
    image: "/placeholder.svg?key=leader3",
    socials: { twitter: "#", github: "#", linkedin: "#" },
  },
  {
    name: "David Kim",
    role: "Head of Research",
    track: "Cryptography",
    bio: "Focusing on ZK-rollups and privacy scaling solutions.",
    image: "/placeholder.svg?key=leader4",
    socials: { twitter: "#", github: "#", linkedin: "#" },
  },
]

const members = [
  { name: "Alex Thompson", role: "Core Member", skills: ["Solidity", "React"] },
  { name: "Emma Davis", role: "Contributor", skills: ["Python", "Qiskit"] },
  { name: "Michael Brown", role: "Member", skills: ["Rust", "Substrate"] },
  { name: "Lisa Wang", role: "Core Member", skills: ["Design", "Figma"] },
  { name: "Kevin White", role: "Member", skills: ["Go", "Cosmos SDK"] },
  { name: "Rachel Green", role: "Contributor", skills: ["TensorFlow", "PyTorch"] },
  { name: "Chris Taylor", role: "Member", skills: ["Smart Contracts"] },
  { name: "Amanda Martinez", role: "Core Member", skills: ["Community", "Marketing"] },
]

export default function MembersPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />

      <div className="pt-32 pb-24 container mx-auto px-4">
        <SectionHeading
          title="Community & Leadership"
          subtitle="Meet the brilliant minds building the future of decentralized technology."
          className="mb-16"
        />

        {/* Leadership Team */}
        <h3 className="text-2xl font-bold mb-8 pl-2 border-l-4 border-primary">Leadership Team</h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {leadership.map((leader, index) => (
            <motion.div
              key={leader.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <GlassCard hover className="text-center h-full">
                <div className="w-24 h-24 mx-auto rounded-full p-1 bg-gradient-to-br from-primary to-secondary mb-4">
                  <div className="w-full h-full rounded-full overflow-hidden bg-background">
                    <img
                      src={leader.image || "/placeholder.svg"}
                      alt={leader.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>

                <h4 className="text-xl font-bold mb-1">{leader.name}</h4>
                <p className="text-primary font-medium text-sm mb-2">{leader.role}</p>
                <Badge variant="secondary" className="mb-4">
                  {leader.track}
                </Badge>

                <p className="text-sm text-muted-foreground mb-6 leading-relaxed">{leader.bio}</p>

                <div className="flex justify-center gap-3 mt-auto">
                  <a
                    href={leader.socials.twitter}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    <Twitter size={18} />
                  </a>
                  <a
                    href={leader.socials.github}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    <Github size={18} />
                  </a>
                  <a
                    href={leader.socials.linkedin}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    <Linkedin size={18} />
                  </a>
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>

        {/* Member Directory */}
        <h3 className="text-2xl font-bold mb-8 pl-2 border-l-4 border-secondary">Member Directory</h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {members.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.05 }}
              viewport={{ once: true }}
            >
              <GlassCard className="p-4 flex items-center gap-4 hover:bg-primary/5 transition-colors">
                <div className="w-10 h-10 rounded-full bg-muted flex items-center justify-center font-bold text-muted-foreground">
                  {member.name.charAt(0)}
                </div>
                <div>
                  <div className="font-bold text-sm">{member.name}</div>
                  <div className="text-xs text-muted-foreground mb-1">{member.role}</div>
                  <div className="flex gap-1">
                    {member.skills.map((skill) => (
                      <span key={skill} className="text-[10px] px-1.5 py-0.5 rounded-sm bg-primary/10 text-primary">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>

      <Footer />
    </main>
  )
}
