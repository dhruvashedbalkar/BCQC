"use client"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { GlassCard } from "@/components/glass-card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { motion } from "framer-motion"
import { Wallet, ArrowRight, CheckCircle2 } from "lucide-react"
import { useState, useCallback } from "react"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"

export default function JoinPage() {
  const [walletAddress, setWalletAddress] = useState<string | null>(null)
  const [mode, setMode] = useState<"register" | "login">("register")
  const [status, setStatus] = useState<string>("")

  const emailSchema = z
    .string()
    .regex(/^nnm\d{2}[a-z]{2}\d{3}@nmamit\.in$/, "Email must match nnmYYddddd@nmamit.in")

  const registerSchema = z.object({
    email: emailSchema,
    password: z.string().min(8, "Password must be at least 8 characters"),
  })

  const loginSchema = z.object({
    email: emailSchema,
    password: z.string().min(8, "Password must be at least 8 characters"),
  })

  const registerForm = useForm<z.infer<typeof registerSchema>>({ resolver: zodResolver(registerSchema) })
  const loginForm = useForm<z.infer<typeof loginSchema>>({ resolver: zodResolver(loginSchema) })

  const connectWallet = useCallback(async () => {
    try {
      const ethereum = (window as any).ethereum
      if (!ethereum) {
        setStatus("MetaMask not detected")
        return
      }
      const accounts: string[] = await ethereum.request({ method: "eth_requestAccounts" })
      const addr = accounts?.[0]
      if (addr && /^0x[a-fA-F0-9]{40}$/.test(addr)) {
        setWalletAddress(addr)
        setStatus("Wallet connected")
      } else {
        setStatus("Invalid wallet address")
      }
    } catch (e) {
      setStatus("Wallet connection failed")
    }
  }, [])

  const onRegister = registerForm.handleSubmit(async (values) => {
    setStatus("")
    try {
      const res = await fetch("/api/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...values, walletAddress }),
      })
      const data = await res.json()
      if (!res.ok) {
        setStatus(data.error || "Registration failed")
        return
      }
      setStatus("Registered successfully")
      window.location.reload()
    } catch {
      setStatus("Network error")
    }
  })

  const onLogin = loginForm.handleSubmit(async (values) => {
    setStatus("")
    try {
      const res = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      })
      const data = await res.json()
      if (!res.ok) {
        setStatus(data.error || "Login failed")
        return
      }
      setStatus("Signed in successfully")
      window.location.reload()
    } catch {
      setStatus("Network error")
    }
  })
  return (
    <main className="min-h-screen bg-background">
      <Navigation />

      <div className="pt-32 pb-24 container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Form Section */}
            <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }}>
              <GlassCard className="p-8 border-primary/20">
                <div className="mb-8 text-center">
                  <h1 className="text-3xl font-bold mb-2">Join the Club</h1>
                  <p className="text-muted-foreground">Start your journey into decentralized intelligence.</p>
                </div>

                <div className="space-y-6">
                  <div className="flex gap-2 mb-4">
                    <Button variant={mode === "register" ? "default" : "outline"} onClick={() => setMode("register")}
                      className={mode === "register" ? "glow-purple" : ""}
                    >
                      Join Club
                    </Button>
                    <Button variant={mode === "login" ? "default" : "outline"} onClick={() => setMode("login")}
                      className={mode === "login" ? "glow-blue" : ""}
                    >
                      Sign In
                    </Button>
                  </div>

                  <Button onClick={connectWallet} className="w-full h-12 text-base glow-purple flex items-center justify-center gap-2 bg-[#333] hover:bg-[#444] text-white">
                    <Wallet size={20} />
                    {walletAddress ? `${walletAddress.slice(0,6)}...${walletAddress.slice(-4)}` : "Connect Wallet"}
                  </Button>

                  <div className="relative">
                    <div className="absolute inset-0 flex items-center">
                      <span className="w-full border-t border-border" />
                    </div>
                    <div className="relative flex justify-center text-xs uppercase">
                      <span className="bg-background px-2 text-muted-foreground">Email is required even with wallet</span>
                    </div>
                  </div>

                  {mode === "register" ? (
                    <form onSubmit={onRegister} className="space-y-4">
                      <div className="space-y-2">
                        <Label htmlFor="reg-email">NMAMIT Email</Label>
                        <Input id="reg-email" className="h-11 bg-background/50" placeholder="nnm2xxxxxx@nmamit.in"
                          {...registerForm.register("email")}
                        />
                        {registerForm.formState.errors.email && (
                          <div className="text-red-400 text-sm">{registerForm.formState.errors.email.message}</div>
                        )}
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="reg-password">Password</Label>
                        <Input id="reg-password" type="password" className="h-11 bg-background/50"
                          {...registerForm.register("password")}
                        />
                        {registerForm.formState.errors.password && (
                          <div className="text-red-400 text-sm">{registerForm.formState.errors.password.message}</div>
                        )}
                      </div>
                      <Button type="submit" className="w-full h-11 glow-blue">
                        Create Account <ArrowRight size={16} className="ml-2" />
                      </Button>
                    </form>
                  ) : (
                    <form onSubmit={onLogin} className="space-y-4">
                      <div className="space-y-2">
                        <Label htmlFor="login-email">Email Address</Label>
                        <Input id="login-email" className="h-11 bg-background/50" placeholder="email@nmamit.in"
                          {...loginForm.register("email")}
                        />
                        {loginForm.formState.errors.email && (
                          <div className="text-red-400 text-sm">{loginForm.formState.errors.email.message}</div>
                        )}
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="login-password">Password</Label>
                        <Input id="login-password" type="password" className="h-11 bg-background/50"
                          {...loginForm.register("password")}
                        />
                        {loginForm.formState.errors.password && (
                          <div className="text-red-400 text-sm">{loginForm.formState.errors.password.message}</div>
                        )}
                      </div>
                      <Button type="submit" className="w-full h-11 glow-blue">
                        Sign In <ArrowRight size={16} className="ml-2" />
                      </Button>
                    </form>
                  )}

                  {status && (
                    <div className="text-sm mt-2 text-muted-foreground">{status}</div>
                  )}
                </div>
              </GlassCard>
            </motion.div>

            {/* Benefits Section */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="space-y-8"
            >
              <div>
                <h2 className="text-3xl font-bold mb-6">Why Join?</h2>
                <div className="space-y-4">
                  {[
                    "Access to exclusive workshops & hackathons",
                    "Mentorship from industry experts",
                    "Earn on-chain credentials & POAPs",
                    "Vote on club decisions via DAO",
                    "Launch your own projects with club funding",
                    "Network with 500+ innovative students",
                  ].map((benefit, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <CheckCircle2 className="text-primary flex-shrink-0" size={20} />
                      <span className="text-lg">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="p-6 rounded-xl bg-gradient-to-br from-primary/20 to-secondary/20 border border-primary/20">
                <div className="text-sm font-mono text-primary mb-2">MEMBERSHIP NFT PREVIEW</div>
                <div className="aspect-[3/2] rounded-lg bg-black/50 flex items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-blue-500/20" />
                  <div className="text-center z-10">
                    <div className="text-4xl font-bold mb-1">MEMBER</div>
                    <div className="font-mono text-xs tracking-widest">#0000</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  )
}
