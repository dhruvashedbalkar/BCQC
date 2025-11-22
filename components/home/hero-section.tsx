"use client"

import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { Canvas } from "@react-three/fiber"
import { OrbitControls, Sphere, MeshDistortMaterial } from "@react-three/drei"
import Link from "next/link"
import { Suspense } from "react"

function AnimatedSphere() {
  return (
    <Sphere args={[1, 100, 200]} scale={2.4}>
      <MeshDistortMaterial color="#8b5cf6" attach="material" distort={0.5} speed={2} roughness={0} />
    </Sphere>
  )
}

function Scene() {
  return (
    <Canvas>
      <OrbitControls enableZoom={false} autoRotate />
      <ambientLight intensity={0.5} />
      <directionalLight position={[3, 2, 1]} />
      <AnimatedSphere />
    </Canvas>
  )
}

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(139,92,246,0.1),transparent_50%)]" />
        <div className="absolute top-20 right-20 w-72 h-72 bg-primary/20 rounded-full blur-[100px]" />
        <div className="absolute bottom-20 left-20 w-72 h-72 bg-blue-500/20 rounded-full blur-[100px]" />
      </div>

      <div className="container mx-auto px-4 relative z-10 grid lg:grid-cols-2 gap-12 items-center">
        {/* Text Content */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass border-primary/20 mb-6">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            <span className="text-xs font-medium text-primary-foreground/80">Next-Gen Deep Tech</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Building the <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-purple-400 to-secondary animate-gradient bg-300%">
              Future of <br />
              Decentralized <br />
              Intelligence
            </span>
          </h1>

          <p className="text-xl text-muted-foreground mb-8 max-w-lg">
            Blockchain × Quantum Computing × AI. Join the premier student community pushing the boundaries of deep tech
            innovation.
          </p>

          <div className="flex flex-wrap gap-4">
            <Button size="lg" className="h-12 px-8 text-base glow-purple" asChild>
              <Link href="/join">Join the Club</Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="h-12 px-8 text-base glass hover:bg-primary/10 bg-transparent"
              asChild
            >
              <Link href="/learn">Explore Learn Hub</Link>
            </Button>
          </div>
        </motion.div>

        {/* 3D Element */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="h-[400px] lg:h-[600px] w-full relative"
        >
          <Suspense fallback={null}>
            <Scene />
          </Suspense>
        </motion.div>
      </div>
    </section>
  )
}
