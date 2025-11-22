"use client"

import { SectionHeading } from "@/components/section-heading"
import { Button } from "@/components/ui/button"
import { GlassCard } from "@/components/glass-card"
import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowRight, BookOpen, Terminal, Code } from "lucide-react"

const tracks = [
  {
    title: "Blockchain Development",
    icon: Code,
    levels: ["Solidity Basics", "DeFi Protocols", "ZK Rollups"],
    progress: 75,
  },
  {
    title: "Quantum Mechanics",
    icon: Terminal,
    levels: ["Linear Algebra", "Qubit Gates", "Shor's Algorithm"],
    progress: 45,
  },
  {
    title: "AI & Machine Learning",
    icon: BookOpen,
    levels: ["Neural Networks", "Transformers", "On-Chain AI"],
    progress: 60,
  },
]

export function LearnPreviewSection() {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-b from-background via-primary/5 to-background pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          {/* Text Content */}
          <div className="lg:w-1/2">
            <SectionHeading
              title="Master the Technologies of Tomorrow"
              subtitle="Our curated learning paths take you from beginner to researcher. Earn on-chain credentials as you progress."
              centered={false}
              className="mb-8"
            />

            <ul className="space-y-4 mb-8">
              {["Interactive coding environments", "Peer-reviewed projects", "Industry-recognized certificates"].map(
                (item) => (
                  <li key={item} className="flex items-center gap-3 text-muted-foreground">
                    <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center">
                      <ArrowRight size={14} className="text-primary" />
                    </div>
                    {item}
                  </li>
                ),
              )}
            </ul>

            <Button size="lg" className="glow-purple" asChild>
              <Link href="/learn">Start Learning Now</Link>
            </Button>
          </div>

          {/* Interactive Preview */}
          <div className="lg:w-1/2 w-full">
            <div className="space-y-4">
              {tracks.map((track, index) => (
                <motion.div
                  key={track.title}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.2 }}
                  viewport={{ once: true }}
                >
                  <GlassCard className="group hover:bg-primary/10 transition-colors">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-4">
                        <div className="w-10 h-10 rounded-lg bg-background flex items-center justify-center text-primary">
                          <track.icon size={20} />
                        </div>
                        <div>
                          <h4 className="font-bold">{track.title}</h4>
                          <p className="text-xs text-muted-foreground">{track.levels.join(" • ")}</p>
                        </div>
                      </div>
                      <div className="text-xs font-mono text-primary">{track.progress}% COMPLETE</div>
                    </div>

                    <div className="h-2 bg-background rounded-full overflow-hidden">
                      <motion.div
                        className="h-full bg-gradient-to-r from-primary to-secondary"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${track.progress}%` }}
                        transition={{ duration: 1, delay: 0.5 }}
                      />
                    </div>
                  </GlassCard>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
