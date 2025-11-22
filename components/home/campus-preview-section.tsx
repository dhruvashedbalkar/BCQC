import { SectionHeading } from "@/components/section-heading"
import { Button } from "@/components/ui/button"
import { GlassCard } from "@/components/glass-card"
import Link from "next/link"
import { Fingerprint, Vote, FileJson, HardDrive } from "lucide-react"

const dapps = [
  { icon: Fingerprint, title: "Campus DID", desc: "On-chain student identity" },
  { icon: Vote, title: "DAO Voting", desc: "Governance & proposals" },
  { icon: FileJson, title: "Certificates", desc: "SBT achievement badges" },
  { icon: HardDrive, title: "IPFS Vault", desc: "Decentralized storage" },
]

export function CampusPreviewSection() {
  return (
    <section className="py-24 relative">
      <div className="absolute inset-0 bg-[url('https://v0.dev/grid.svg')] opacity-10" />

      <div className="container mx-auto px-4 relative z-10">
        <SectionHeading
          title="Decentralized Campus Layer"
          subtitle="Experience Web3 in real life. Use our custom DApps to interact with the club and campus ecosystem."
          className="mb-16"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {dapps.map((dapp) => (
            <GlassCard
              key={dapp.title}
              hover
              className="text-center py-8 bg-gradient-to-b from-background/50 to-transparent"
            >
              <div className="w-16 h-16 mx-auto rounded-2xl bg-primary/10 flex items-center justify-center mb-6 text-primary glow-purple">
                <dapp.icon size={32} />
              </div>
              <h3 className="text-xl font-bold mb-2">{dapp.title}</h3>
              <p className="text-sm text-muted-foreground mb-6">{dapp.desc}</p>
              <Button variant="outline" size="sm" className="w-full bg-transparent" asChild>
                <Link href="/campus">Launch DApp</Link>
              </Button>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  )
}
