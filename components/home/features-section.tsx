"use client"

import { SectionHeading } from "@/components/section-heading"
import { GlassCard } from "@/components/glass-card"
import { motion } from "framer-motion"
import { Cpu, Network, Brain, Globe, Shield, Rocket } from "lucide-react"

const features = [
  {
    icon: Network,
    title: "Blockchain Mastery",
    description: "Deep dive into consensus algorithms, smart contracts, and DeFi protocols.",
    color: "text-purple-400",
  },
  {
    icon: Cpu,
    title: "Quantum Computing",
    description: "Explore quantum algorithms, qubits, and the future of cryptography.",
    color: "text-blue-400",
  },
  {
    icon: Brain,
    title: "AI Integration",
    description: "Build decentralized AI models and autonomous agents on-chain.",
    color: "text-pink-400",
  },
  {
    icon: Globe,
    title: "DAO Governance",
    description: "Participate in our student-led DAO to vote on events and funding.",
    color: "text-green-400",
  },
  {
    icon: Shield,
    title: "Zero-Knowledge Proofs",
    description: "Research and implement privacy-preserving protocols.",
    color: "text-orange-400",
  },
  {
    icon: Rocket,
    title: "Incubator Program",
    description: "Launch your own startup with mentorship and grant funding.",
    color: "text-yellow-400",
  },
]

export function FeaturesSection() {
  return (
    <section className="py-24 relative">
      <div className="container mx-auto px-4">
        <SectionHeading
          title="Why Join BQ Club?"
          subtitle="We bridge the gap between theoretical knowledge and hands-on innovation in the most cutting-edge fields."
          className="mb-16"
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <GlassCard hover className="h-full">
                <div
                  className={`w-12 h-12 rounded-lg bg-background/50 flex items-center justify-center mb-6 ${feature.color}`}
                >
                  <feature.icon size={24} />
                </div>
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
