import { SectionHeading } from "@/components/section-heading"

const partners = [
  "Ethereum Foundation",
  "Consensys",
  "IBM Quantum",
  "Google Cloud",
  "Polygon",
  "Chainlink",
  "Optimism",
  "Solana",
]

export function PartnersSection() {
  return (
    <section className="py-24 border-t border-border/50">
      <div className="container mx-auto px-4">
        <SectionHeading title="Backed by Industry Leaders" className="mb-12" />

        <div className="flex flex-wrap justify-center gap-8 md:gap-16 opacity-70 grayscale hover:grayscale-0 transition-all duration-500">
          {partners.map((partner) => (
            <div
              key={partner}
              className="text-xl md:text-2xl font-bold text-muted-foreground hover:text-primary transition-colors cursor-default"
            >
              {partner}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
