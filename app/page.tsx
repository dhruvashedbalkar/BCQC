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
    <main className="min-h-screen bg-background selection:bg-primary/20">
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
