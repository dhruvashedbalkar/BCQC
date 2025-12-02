"use client"

import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'
import { GlassCard } from '@/components/glass-card'
import { useEffect, useState } from 'react'

export default function ProfilePage() {
  const [user, setUser] = useState<{ email: string; walletAddress: string | null } | null>(null)

  useEffect(() => {
    ;(async () => {
      try {
        const res = await fetch('/api/auth/me', { credentials: 'include' })
        if (res.ok) setUser(await res.json())
      } catch {}
    })()
  }, [])

  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <div className="pt-32 pb-24 container mx-auto px-4">
        <h1 className="text-3xl font-bold mb-8">Profile</h1>
        <GlassCard className="max-w-xl">
          {user ? (
            <div className="space-y-3">
              <div className="font-mono text-sm">Email: {user.email}</div>
              <div className="font-mono text-sm">Wallet: {user.walletAddress || 'Not connected'}</div>
            </div>
          ) : (
            <div className="text-muted-foreground">Not signed in.</div>
          )}
        </GlassCard>
      </div>
      <Footer />
    </main>
  )
}