"use client"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { SectionHeading } from "@/components/section-heading"
import { GlassCard } from "@/components/glass-card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { motion } from "framer-motion"
import { Search, Clock, Trophy, ArrowRight } from "lucide-react"
import { useState } from "react"

const courses = [
  {
    id: 1,
    title: "Blockchain Fundamentals",
    category: "Blockchain",
    level: "Beginner",
    duration: "4 weeks",
    xp: 500,
    image: "/interconnected-blocks.png",
    progress: 0,
  },
  {
    id: 2,
    title: "Smart Contract Security",
    category: "Blockchain",
    level: "Advanced",
    duration: "6 weeks",
    xp: 800,
    image: "/digital-security-abstract.png",
    progress: 0,
  },
  {
    id: 3,
    title: "Intro to Quantum Mechanics",
    category: "Quantum",
    level: "Beginner",
    duration: "5 weeks",
    xp: 600,
    image: "/quantum-entanglement.png",
    progress: 30,
  },
  {
    id: 4,
    title: "Qiskit Development",
    category: "Quantum",
    level: "Intermediate",
    duration: "4 weeks",
    xp: 700,
    image: "/coding-workspace.png",
    progress: 0,
  },
  {
    id: 5,
    title: "AI Agents on Chain",
    category: "AI",
    level: "Advanced",
    duration: "8 weeks",
    xp: 1000,
    image: "/abstract-ai-network.png",
    progress: 0,
  },
  {
    id: 6,
    title: "Machine Learning Basics",
    category: "AI",
    level: "Beginner",
    duration: "4 weeks",
    xp: 500,
    image: "/neural-network.png",
    progress: 0,
  },
]

export default function LearnPage() {
  const [selectedCategory, setSelectedCategory] = useState("All")

  const filteredCourses = selectedCategory === "All" ? courses : courses.filter((c) => c.category === selectedCategory)

  return (
    <main className="min-h-screen bg-background">
      <Navigation />

      <div className="pt-32 pb-24 container mx-auto px-4">
        <SectionHeading
          title="Learn Hub"
          subtitle="Master the future. Choose your track and start earning on-chain credentials."
          className="mb-12"
        />

        {/* Filters & Search */}
        <div className="flex flex-col md:flex-row gap-4 items-center justify-between mb-12">
          <div className="flex gap-2 overflow-x-auto pb-2 md:pb-0 w-full md:w-auto">
            {["All", "Blockchain", "Quantum", "AI"].map((cat) => (
              <Button
                key={cat}
                variant={selectedCategory === cat ? "default" : "outline"}
                onClick={() => setSelectedCategory(cat)}
                className={selectedCategory === cat ? "glow-purple" : ""}
              >
                {cat}
              </Button>
            ))}
          </div>

          <div className="relative w-full md:w-72">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground w-4 h-4" />
            <Input placeholder="Search courses..." className="pl-9 bg-background/50" />
          </div>
        </div>

        {/* Course Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCourses.map((course, index) => (
            <motion.div
              key={course.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <GlassCard hover className="p-0 overflow-hidden h-full flex flex-col">
                <div className="relative h-48">
                  <img
                    src={course.image || "/placeholder.svg"}
                    alt={course.title}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge variant="secondary" className="bg-black/50 backdrop-blur-md border-primary/20">
                      {course.category}
                    </Badge>
                  </div>
                </div>

                <div className="p-6 flex-1 flex flex-col">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="font-bold text-lg mb-1 line-clamp-1">{course.title}</h3>
                      <div className="flex items-center gap-3 text-xs text-muted-foreground">
                        <span className="flex items-center gap-1">
                          <Clock size={12} /> {course.duration}
                        </span>
                        <span className="flex items-center gap-1">
                          <Trophy size={12} /> {course.xp} XP
                        </span>
                      </div>
                    </div>
                    <Badge
                      variant="outline"
                      className={
                        course.level === "Advanced"
                          ? "text-red-400 border-red-400/30"
                          : course.level === "Intermediate"
                            ? "text-yellow-400 border-yellow-400/30"
                            : "text-green-400 border-green-400/30"
                      }
                    >
                      {course.level}
                    </Badge>
                  </div>

                  {course.progress > 0 && (
                    <div className="mb-4">
                      <div className="flex justify-between text-xs mb-1">
                        <span>Progress</span>
                        <span>{course.progress}%</span>
                      </div>
                      <div className="h-1.5 bg-secondary rounded-full overflow-hidden">
                        <div
                          className="h-full bg-primary transition-all duration-500"
                          style={{ width: `${course.progress}%` }}
                        />
                      </div>
                    </div>
                  )}

                  <div className="mt-auto pt-4 flex gap-2">
                    <Button className="w-full glow-purple group" asChild>
                      <a href="#">
                        {course.progress > 0 ? "Continue" : "Start Course"}
                        <ArrowRight size={16} className="ml-2 transition-transform group-hover:translate-x-1" />
                      </a>
                    </Button>
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
