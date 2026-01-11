"use client"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { SectionHeading } from "@/components/section-heading"
import { GlassCard } from "@/components/glass-card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { motion } from "framer-motion"
import { Github, ExternalLink, Star, GitFork } from "lucide-react"
import { projects } from "@/lib/data/projects"

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />

      <div className="pt-32 pb-24 container mx-auto px-4">
        <SectionHeading
          title="Student Projects"
          subtitle="Explore innovative solutions built by our community members."
          className="mb-12"
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
            >
              <GlassCard hover className="p-0 overflow-hidden h-full flex flex-col">
                <div className="h-48 overflow-hidden relative group">
                  <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity z-10 flex items-center justify-center gap-2 backdrop-blur-sm">
                    <Button size="icon" variant="secondary" className="rounded-full">
                      <Github size={18} />
                    </Button>
                    <Button size="icon" className="rounded-full bg-primary text-primary-foreground">
                      <ExternalLink size={18} />
                    </Button>
                  </div>
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>

                <div className="p-6 flex-1 flex flex-col">
                  <div className="flex items-center gap-2 mb-4">
                    <div className="w-6 h-6 rounded-full bg-muted overflow-hidden">
                      <img src={project.author.avatar || "/placeholder.svg"} alt={project.author.name} />
                    </div>
                    <span className="text-xs text-muted-foreground">by {project.author.name}</span>
                  </div>

                  <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">{project.title}</h3>
                  <p className="text-sm text-muted-foreground mb-4 flex-1">{project.description}</p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag) => (
                      <Badge key={tag} variant="secondary" className="text-xs font-normal">
                        {tag}
                      </Badge>
                    ))}
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t border-border/50 text-sm text-muted-foreground">
                    <div className="flex items-center gap-4">
                      <span className="flex items-center gap-1 hover:text-yellow-400 transition-colors">
                        <Star size={14} /> {project.stars}
                      </span>
                      <span className="flex items-center gap-1 hover:text-blue-400 transition-colors">
                        <GitFork size={14} /> {project.forks}
                      </span>
                    </div>
                    <span className="text-xs">Updated 2d ago</span>
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
