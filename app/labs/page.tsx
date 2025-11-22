"use client"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { SectionHeading } from "@/components/section-heading"
import { GlassCard } from "@/components/glass-card"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { Cpu, Brain, Code2 } from "lucide-react"

export default function LabsPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />

      <div className="pt-32 pb-24 container mx-auto px-4">
        <SectionHeading
          title="Innovation Labs"
          subtitle="Interactive sandboxes to build, test, and deploy your ideas."
          className="mb-12"
        />

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Blockchain Lab */}
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.1 }}>
            <GlassCard className="h-full border-t-4 border-t-purple-500">
              <div className="mb-6 flex items-center gap-4">
                <div className="w-12 h-12 rounded-lg bg-purple-500/20 flex items-center justify-center text-purple-400">
                  <Code2 size={28} />
                </div>
                <div>
                  <h3 className="text-2xl font-bold">Web3 Lab</h3>
                  <p className="text-sm text-muted-foreground">Smart Contract IDE</p>
                </div>
              </div>

              <div className="aspect-video bg-black/50 rounded-lg border border-border mb-6 font-mono text-xs p-4 overflow-hidden relative group">
                <div className="text-green-400">
                  <span className="text-purple-400">contract</span> <span className="text-yellow-400">Token</span> {"{"}{" "}
                  <br />
                  &nbsp;&nbsp;<span className="text-purple-400">string public</span> name ={" "}
                  <span className="text-blue-400">"BQ Coin"</span>;<br />
                  &nbsp;&nbsp;<span className="text-purple-400">uint public</span> totalSupply;
                  <br />
                  {"}"}
                </div>
                <div className="absolute inset-0 bg-black/60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity backdrop-blur-sm">
                  <Button variant="secondary">Open Editor</Button>
                </div>
              </div>

              <ul className="space-y-2 mb-6 text-sm text-muted-foreground">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-purple-500" /> Solidity & Vyper Support
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-purple-500" /> Testnet Deployment
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-purple-500" /> Security Analysis Tools
                </li>
              </ul>

              <Button className="w-full glow-purple">Enter Lab</Button>
            </GlassCard>
          </motion.div>

          {/* Quantum Lab */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
            <GlassCard className="h-full border-t-4 border-t-blue-500">
              <div className="mb-6 flex items-center gap-4">
                <div className="w-12 h-12 rounded-lg bg-blue-500/20 flex items-center justify-center text-blue-400">
                  <Cpu size={28} />
                </div>
                <div>
                  <h3 className="text-2xl font-bold">Quantum Lab</h3>
                  <p className="text-sm text-muted-foreground">Circuit Composer</p>
                </div>
              </div>

              <div className="aspect-video bg-black/50 rounded-lg border border-border mb-6 relative group overflow-hidden">
                {/* Simple circuit visualization */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="flex items-center gap-4 opacity-50">
                    <div className="w-8 h-8 border border-blue-500 flex items-center justify-center">H</div>
                    <div className="h-0.5 w-8 bg-blue-500/50" />
                    <div className="w-8 h-8 border border-blue-500 rounded-full flex items-center justify-center">
                      ⊕
                    </div>
                    <div className="h-0.5 w-8 bg-blue-500/50" />
                    <div className="w-8 h-8 border border-blue-500 flex items-center justify-center">M</div>
                  </div>
                </div>
                <div className="absolute inset-0 bg-black/60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity backdrop-blur-sm">
                  <Button variant="secondary">Launch Composer</Button>
                </div>
              </div>

              <ul className="space-y-2 mb-6 text-sm text-muted-foreground">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-500" /> 5-Qubit Simulation
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-500" /> Qiskit Integration
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-500" /> Bloch Sphere Visualization
                </li>
              </ul>

              <Button className="w-full glow-blue">Enter Lab</Button>
            </GlassCard>
          </motion.div>

          {/* AI Lab */}
          <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.3 }}>
            <GlassCard className="h-full border-t-4 border-t-pink-500">
              <div className="mb-6 flex items-center gap-4">
                <div className="w-12 h-12 rounded-lg bg-pink-500/20 flex items-center justify-center text-pink-400">
                  <Brain size={28} />
                </div>
                <div>
                  <h3 className="text-2xl font-bold">Neural Lab</h3>
                  <p className="text-sm text-muted-foreground">Model Training Hub</p>
                </div>
              </div>

              <div className="aspect-video bg-black/50 rounded-lg border border-border mb-6 font-mono text-xs p-4 relative group overflow-hidden">
                <div className="text-pink-400">
                  import <span className="text-blue-400">torch</span>
                  <br />
                  model = <span className="text-yellow-400">Transformer</span>()
                  <br />
                  <span className="text-green-400"># Training started...</span>
                  <br />
                  Epoch 1: loss=0.45 accuracy=82%
                </div>
                <div className="absolute inset-0 bg-black/60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity backdrop-blur-sm">
                  <Button variant="secondary">Open Notebook</Button>
                </div>
              </div>

              <ul className="space-y-2 mb-6 text-sm text-muted-foreground">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-pink-500" /> Jupyter Notebooks
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-pink-500" /> GPU Acceleration
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-pink-500" /> Model Registry
                </li>
              </ul>

              <Button className="w-full glow-pink">Enter Lab</Button>
            </GlassCard>
          </motion.div>
        </div>
      </div>

      <Footer />
    </main>
  )
}
