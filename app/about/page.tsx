"use client"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { SectionHeading } from "@/components/section-heading"
import { GlassCard } from "@/components/glass-card"
import { motion } from "framer-motion"
import { Target, Lightbulb, Users, Zap, Globe } from "lucide-react"

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />

      <div className="pt-32 pb-24 container mx-auto px-4">
        <SectionHeading
          title="About Us"
          subtitle="We are a student-led research and development club focused on the intersection of Blockchain, Quantum Computing, and Artificial Intelligence."
          className="mb-16"
        />

        {/* Mission & Vision */}
        <div className="grid md:grid-cols-2 gap-8 mb-20">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>
            <GlassCard className="h-full border-t-4 border-t-primary">
              <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center text-primary mb-6">
                <Target size={28} />
              </div>
              <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
              <p className="text-muted-foreground text-lg leading-relaxed">
                To democratize access to deep tech education and provide a sandbox for students to build, experiment,
                and innovate with decentralized technologies. We believe the future of intelligence is distributed.
              </p>
            </GlassCard>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
            <GlassCard className="h-full border-t-4 border-t-secondary">
              <div className="w-12 h-12 rounded-lg bg-secondary/20 flex items-center justify-center text-secondary mb-6">
                <Lightbulb size={28} />
              </div>
              <h2 className="text-2xl font-bold mb-4">Our Vision</h2>
              <p className="text-muted-foreground text-lg leading-relaxed">
                A campus where every student has the tools and knowledge to contribute to the Web3 ecosystem. We
                envision a world where blockchain, quantum, and AI converge to solve humanity's hardest problems.
              </p>
            </GlassCard>
          </motion.div>
        </div>

        {/* What Makes Us Different */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-12">Why We Are Different</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: Users,
                title: "Community First",
                desc: "We are not just a club; we are a DAO. Every member has a voice in our direction and funding decisions.",
              },
              {
                icon: Zap,
                title: "Hands-on Building",
                desc: "We prioritize shipping code over theory. Our labs and hackathons are designed for builders.",
              },
              {
                icon: Globe,
                title: "Industry Connected",
                desc: "Direct partnerships with leading protocols and tech companies for internships and grants.",
              },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
              >
                <GlassCard className="text-center h-full">
                  <div className="w-16 h-16 mx-auto rounded-full bg-background flex items-center justify-center text-primary mb-6 glow-purple">
                    <item.icon size={32} />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                  <p className="text-muted-foreground">{item.desc}</p>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Timeline */}
        <div>
          <h2 className="text-3xl font-bold text-center mb-12">Our Journey</h2>
          <div className="max-w-3xl mx-auto relative border-l border-primary/30 pl-8 space-y-12">
            {[
              { year: "2023", title: "Club Founded", desc: "Started with 5 members in a dorm room." },
              { year: "2024", title: "First Hackathon", desc: "Hosted 200+ students for a 48-hour build sprint." },
              { year: "2025", title: "DAO Launch", desc: "Transitioned to fully on-chain governance." },
              { year: "Future", title: "Global Expansion", desc: "Partnering with universities worldwide." },
            ].map((item, i) => (
              <div key={item.year} className="relative">
                <div className="absolute -left-[41px] top-0 w-5 h-5 rounded-full bg-primary border-4 border-background glow-purple" />
                <div className="text-sm font-mono text-primary mb-1">{item.year}</div>
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </main>
  )
}
