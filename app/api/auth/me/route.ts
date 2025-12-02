import { NextResponse } from 'next/server'
import { getDb } from '@/lib/db'

export const runtime = 'nodejs'

export async function GET(req: Request) {
  const cookieHeader = req.headers.get('cookie') || ''
  const match = cookieHeader.match(/(?:^|;\s*)session_id=([^;]+)/)
  const sessionId = match?.[1]
  if (!sessionId) {
    return NextResponse.json({ error: 'Not authenticated' }, { status: 401 })
  }

  const db = await getDb()
  const sessions = db.collection('sessions')
  const session = await sessions.findOne<{ email: string; expiresAt: Date }>({ sessionId })
  if (!session) {
    return NextResponse.json({ error: 'Invalid session' }, { status: 401 })
  }

  const users = db.collection('users')
  const user = await users.findOne<{ email: string; walletAddress: string | null }>({ email: session.email })
  if (!user) {
    return NextResponse.json({ error: 'User not found' }, { status: 404 })
  }

  return NextResponse.json({ email: user.email, walletAddress: user.walletAddress })
}