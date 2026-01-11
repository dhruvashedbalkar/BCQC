"use client"

import { motion } from "framer-motion"
import { GlassCard } from "@/components/glass-card"
import { useEffect, useState } from "react"
import { projects } from "@/app/projects/page"
import { events } from "@/app/events/page"
import { leadership } from "@/app/members/page"

export function StatsSection() {
  const [usersCount, setUsersCount] = useState<number>(0)

  useEffect(() => {
    ;(async () => {
      try {
        const res = await fetch('/api/stats')
        const data = await res.json()
        if (res.ok) setUsersCount(data.usersCount || 0)
      } catch {}
    })()
  }, [])

  const activeMembers = usersCount + leadership.length
  const projectsBuilt = projects.length
  const workshopsHosted = events.filter((e) => e.category === 'Workshop').length
  const partnersCount = 15

  const stats = [
    { label: "Active Members", value: String(activeMembers), color: "text-purple-400" },
    { label: "Projects Built", value: String(projectsBuilt), color: "text-blue-400" },
    { label: "Workshops Hosted", value: String(workshopsHosted), color: "text-pink-400" },
    { label: "Partners", value: String(partnersCount), color: "text-green-400" },
  ]

  return (
    <section className="py-12 relative z-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <GlassCard className="text-center py-8">
                <h3 className={`text-4xl md:text-5xl font-bold mb-2 ${stat.color}`}>{stat.value}</h3>
                <p className="text-muted-foreground text-sm uppercase tracking-wider">{stat.label}</p>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
