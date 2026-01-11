import { NextResponse } from 'next/server'
export const runtime = 'nodejs'
import { getDb } from '@/lib/db'
import * as crypto from 'crypto'

function isValidEmail(email: string) {
  const re = /^nnm\d{2}[a-z]{2}\d{3}@nmamit\.in$/
  return re.test(email)
}

function isValidWallet(addr?: string) {
  if (!addr) return true
  return /^0x[a-fA-F0-9]{40}$/.test(addr)
}

async function hashPassword(password: string) {
  const salt = crypto.randomBytes(16).toString('hex')
  const keyHex = await new Promise<string>((resolve, reject) => {
    crypto.scrypt(password, salt, 64, (err, derivedKey) => {
      if (err) {
        reject(err)
        return
      }
      const dkBuf = Buffer.isBuffer(derivedKey)
        ? (derivedKey as Buffer)
        : Buffer.from(derivedKey as any as Uint8Array)
      resolve(dkBuf.toString('hex'))
    })
  })
  return `${salt}:${keyHex}`
}

interface User {
  email: string
  username: string
  passwordHash: string
  walletAddress: string | null
  createdAt: Date
}

function isValidUsername(username?: string) {
  if (!username) return false
  return /^[a-zA-Z][a-zA-Z0-9_]{2,19}$/.test(username)
}

export async function POST(req: Request) {
  try {
    const body = await req.json()
    const { email, username, password, walletAddress } = body as {
      email?: string
      username?: string
      password?: string
      walletAddress?: string
    }

    if (!email || !username || !password) {
      return NextResponse.json({ error: 'Email, username and password are required' }, { status: 400 })
    }
    if (!isValidEmail(email)) {
      return NextResponse.json({ error: 'Email must match nnmYYddddd@nmamit.in' }, { status: 400 })
    }
    if (!isValidUsername(username)) {
      return NextResponse.json({ error: 'Username must be 3-20 chars, letters/numbers/underscore, start with letter' }, { status: 400 })
    }
    if (!isValidWallet(walletAddress)) {
      return NextResponse.json({ error: 'Invalid wallet address' }, { status: 400 })
    }

    const db = await getDb()
    const users = db.collection<User>('users')

    const existingEmail = await users.findOne({ email })
    if (existingEmail) {
      return NextResponse.json({ error: 'Email already registered' }, { status: 409 })
    }
    const existingUsername = await users.findOne({ username })
    if (existingUsername) {
      return NextResponse.json({ error: 'Username already taken' }, { status: 409 })
    }

    const passwordHash = await hashPassword(password)

    const doc: User = {
      email,
      username,
      passwordHash,
      walletAddress: walletAddress || null,
      createdAt: new Date(),
    }
    await users.insertOne(doc)

    const sessionId = crypto.randomBytes(24).toString('hex')
    const sessions = (await getDb()).collection('sessions')
    await sessions.insertOne({ sessionId, email, createdAt: new Date(), expiresAt: new Date(Date.now() + 1000 * 60 * 60 * 24 * 7) })

    const res = NextResponse.json({ success: true })
    res.cookies.set('session_id', sessionId, {
      httpOnly: true,
      sameSite: 'lax',
      secure: process.env.NODE_ENV === 'production',
      path: '/',
      maxAge: 60 * 60 * 24 * 7,
    })
    return res
  } catch (e) {
    const msg = e instanceof Error ? e.message : 'Unexpected error'
    return NextResponse.json({ error: msg }, { status: 500 })
  }
}