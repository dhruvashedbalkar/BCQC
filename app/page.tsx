import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { HeroSection } from "@/components/home/hero-section"
import { FeaturesSection } from "@/components/home/features-section"
import { StatsSection } from "@/components/home/stats-section"
import { LearnPreviewSection } from "@/components/home/learn-preview-section"
import { CampusPreviewSection } from "@/components/home/campus-preview-section"
import { PartnersSection } from "@/components/home/partners-section"

export default function Home() {
  return (
    <main className="min-h-screen bg-background selection:bg-primary/20 relative">
      <div className="pointer-events-none absolute inset-0 z-0 [background-image:linear-gradient(to_right,rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.08)_1px,transparent_1px)] [background-size:20px_20px] [mask-image:radial-gradient(ellipse_at_center,black,transparent_65%)]" />
      <Navigation />
      <HeroSection />
      <StatsSection />
      <FeaturesSection />
      <LearnPreviewSection />
      <CampusPreviewSection />
      <PartnersSection />
      <Footer />
    </main>
  )
}
