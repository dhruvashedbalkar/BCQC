"use client"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { SectionHeading } from "@/components/section-heading"
import { GlassCard } from "@/components/glass-card"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { Fingerprint, Vote, FileJson, HardDrive, Wallet, ShieldCheck, Activity, Globe } from "lucide-react"

const dapps = [
  {
    id: "did",
    title: "Campus DID",
    icon: Fingerprint,
    desc: "Your verifiable on-chain student identity. Access labs, events, and voting rights.",
    status: "Live",
    color: "text-purple-400",
    bg: "bg-purple-500/10",
  },
  {
    id: "dao",
    title: "Club DAO",
    icon: Vote,
    desc: "Propose and vote on club initiatives, budget allocation, and future events.",
    status: "Live",
    color: "text-blue-400",
    bg: "bg-blue-500/10",
  },
  {
    id: "certs",
    title: "Soulbound Certs",
    icon: FileJson,
    desc: "Showcase your achievements and course completions with permanent on-chain badges.",
    status: "Beta",
    color: "text-pink-400",
    bg: "bg-pink-500/10",
  },
  {
    id: "ipfs",
    title: "Knowledge Vault",
    icon: HardDrive,
    desc: "Decentralized library of research papers, project docs, and learning resources.",
    status: "Live",
    color: "text-green-400",
    bg: "bg-green-500/10",
  },
]

export default function CampusPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />

      <div className="pt-32 pb-24 container mx-auto px-4">
        <SectionHeading
          title="Decentralized Campus"
          subtitle="A suite of Web3 applications powering our student community."
          className="mb-16"
        />

        {/* Stats Dashboard */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
          {[
            { label: "Total Transactions", value: "12.5k", icon: Activity },
            { label: "Active Wallets", value: "850+", icon: Wallet },
            { label: "Proposals Passed", value: "42", icon: ShieldCheck },
            { label: "Nodes Running", value: "15", icon: Globe },
          ].map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
            >
              <GlassCard className="flex items-center gap-4 p-4">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                  <stat.icon size={20} />
                </div>
                <div>
                  <div className="text-2xl font-bold">{stat.value}</div>
                  <div className="text-xs text-muted-foreground">{stat.label}</div>
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>

        {/* DApps Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {dapps.map((dapp, index) => (
            <motion.div
              key={dapp.id}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 + index * 0.1 }}
            >
              <GlassCard hover className="h-full flex flex-col">
                <div className="flex items-start justify-between mb-6">
                  <div className={`w-14 h-14 rounded-2xl ${dapp.bg} flex items-center justify-center ${dapp.color}`}>
                    <dapp.icon size={32} />
                  </div>
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-medium border ${
                      dapp.status === "Live"
                        ? "border-green-500/30 text-green-400 bg-green-500/10"
                        : "border-yellow-500/30 text-yellow-400 bg-yellow-500/10"
                    }`}
                  >
                    {dapp.status}
                  </span>
                </div>

                <h3 className="text-2xl font-bold mb-3">{dapp.title}</h3>
                <p className="text-muted-foreground mb-8 flex-1 text-lg">{dapp.desc}</p>

                <Button
                  className={`w-full h-12 text-base ${
                    dapp.id === "did"
                      ? "glow-purple"
                      : dapp.id === "dao"
                        ? "glow-blue"
                        : dapp.id === "certs"
                          ? "glow-pink"
                          : "border-green-500/50 hover:bg-green-500/10"
                  }`}
                  variant={dapp.id === "ipfs" ? "outline" : "default"}
                >
                  Launch Application
                </Button>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>

      <Footer />
    </main>
  )
}
