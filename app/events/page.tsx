"use client"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { SectionHeading } from "@/components/section-heading"
import { GlassCard } from "@/components/glass-card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { motion } from "framer-motion"
import { MapPin, Clock, Users, QrCode } from "lucide-react"

export const events = [
  {
    id: 1,
    title: "DeFi Summit 2025",
    date: "Oct 15, 2025",
    time: "10:00 AM - 4:00 PM",
    location: "Grand Hall, Tech Campus",
    category: "Conference",
    attendees: 250,
    image: "/placeholder.svg?key=events1",
    description: "Join leading DeFi protocols and researchers for a day of talks and workshops.",
  },
  {
    id: 2,
    title: "Quantum Hackathon",
    date: "Nov 05, 2025",
    time: "48 Hours",
    location: "Innovation Hub",
    category: "Hackathon",
    attendees: 120,
    image: "/placeholder.svg?key=events2",
    description: "Build the future of quantum algorithms using Qiskit and Cirq.",
  },
  {
    id: 3,
    title: "AI Ethics Workshop",
    date: "Nov 12, 2025",
    time: "2:00 PM - 5:00 PM",
    location: "Room 304, CS Building",
    category: "Workshop",
    attendees: 45,
    image: "/placeholder.svg?key=events3",
    description: "Discussion on the ethical implications of autonomous agents.",
  },
]

export default function EventsPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />

      <div className="pt-32 pb-24 container mx-auto px-4">
        <SectionHeading
          title="Upcoming Events"
          subtitle="Connect, learn, and build with the community. Get your POAP for attending."
          className="mb-12"
        />

        <div className="grid gap-8">
          {events.map((event, index) => (
            <motion.div
              key={event.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <GlassCard className="p-0 overflow-hidden group">
                <div className="flex flex-col md:flex-row h-full">
                  {/* Date Block (Mobile) */}
                  <div className="md:hidden bg-primary/10 p-4 flex items-center justify-between">
                    <Badge variant="outline" className="border-primary/50 text-primary">
                      {event.category}
                    </Badge>
                    <span className="font-mono font-bold">{event.date}</span>
                  </div>

                  {/* Image */}
                  <div className="md:w-1/3 relative h-48 md:h-auto overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent md:hidden z-10" />
                    <img
                      src={event.image || "/placeholder.svg"}
                      alt={event.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute top-4 left-4 hidden md:block">
                      <Badge variant="secondary" className="bg-black/50 backdrop-blur-md">
                        {event.category}
                      </Badge>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1 p-6 md:p-8 flex flex-col justify-between">
                    <div>
                      <div className="flex justify-between items-start mb-4">
                        <div>
                          <h3 className="text-2xl font-bold mb-2 group-hover:text-primary transition-colors">
                            {event.title}
                          </h3>
                          <p className="text-muted-foreground mb-6">{event.description}</p>
                        </div>
                        <div className="hidden md:block text-center min-w-[80px]">
                          <div className="text-sm text-muted-foreground uppercase tracking-wider mb-1">
                            {event.date.split(" ")[0]}
                          </div>
                          <div className="text-3xl font-bold text-primary">
                            {event.date.split(" ")[1].replace(",", "")}
                          </div>
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6 text-sm text-muted-foreground">
                        <div className="flex items-center gap-2">
                          <Clock size={16} className="text-primary" />
                          {event.time}
                        </div>
                        <div className="flex items-center gap-2">
                          <MapPin size={16} className="text-primary" />
                          {event.location}
                        </div>
                        <div className="flex items-center gap-2">
                          <Users size={16} className="text-primary" />
                          {event.attendees} Registered
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center gap-4 pt-4 border-t border-border/50">
                      <Button className="glow-purple group-hover:bg-primary/90">Register Now</Button>
                      <Button variant="outline" className="gap-2 bg-transparent">
                        <QrCode size={16} />
                        Ticket
                      </Button>
                    </div>
                  </div>
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="container mx-auto px-4 pb-24">
        <SectionHeading
          title="Previous Events"
          subtitle="A look back at our past events and highlights."
          className="mb-12"
        />
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {[
            {
              id: 'p1',
              title: 'Blockchain Bootcamp',
              date: 'Aug 12, 2025',
              location: 'Innovation Lab',
              category: 'Workshop',
              image: '/placeholder.svg?key=past1',
              description: 'Hands-on Solidity and smart contracts with live coding sessions.',
            },
            {
              id: 'p2',
              title: 'Quantum Talk Series',
              date: 'Jul 02, 2025',
              location: 'Auditorium',
              category: 'Seminar',
              image: '/placeholder.svg?key=past2',
              description: 'Guest lecture on quantum error correction and cryptography.',
            },
            {
              id: 'p3',
              title: 'AI Agents Showcase',
              date: 'Jun 18, 2025',
              location: 'Tech Hub',
              category: 'Expo',
              image: '/placeholder.svg?key=past3',
              description: 'Student demos of autonomous agents for DeFi and analytics.',
            },
          ].map((ev, idx) => (
            <motion.div key={ev.id} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: idx * 0.1 }} viewport={{ once: true }}>
              <GlassCard className="overflow-hidden h-full">
                <div className="h-40 w-full overflow-hidden">
                  <img src={ev.image} alt={ev.title} className="w-full h-full object-cover" />
                </div>
                <div className="p-6 space-y-2">
                  <div className="flex items-center gap-2 text-xs text-muted-foreground">
                    <span className="px-2 py-0.5 rounded bg-muted">{ev.category}</span>
                    <span>{ev.date}</span>
                    <span>•</span>
                    <span>{ev.location}</span>
                  </div>
                  <h3 className="text-lg font-semibold">{ev.title}</h3>
                  <p className="text-sm text-muted-foreground">{ev.description}</p>
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
