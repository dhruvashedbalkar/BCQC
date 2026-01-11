import { NextResponse } from 'next/server'
export const runtime = 'nodejs'
import { getDb } from '@/lib/db'
import * as crypto from 'crypto'

function isValidEmail(email: string) {
  const re = /^nnm\d{2}[a-z]{2}\d{3}@nmamit\.in$/
  return re.test(email)
}

function verifyPassword(stored: string, password: string) {
  try {
    const [saltHex, keyHex] = stored.split(':')
    const expectedBuf = Buffer.from(keyHex, 'hex')
    const expected = new Uint8Array(expectedBuf)
    return new Promise<boolean>((resolve, reject) => {
      crypto.scrypt(password, saltHex, expected.length, (err, derivedKey) => {
        if (err) {
          reject(err)
          return
        }
        const dkBuf = Buffer.isBuffer(derivedKey)
          ? (derivedKey as Buffer)
          : Buffer.from(derivedKey as any as Uint8Array)
        const dk = new Uint8Array(dkBuf)
        resolve(crypto.timingSafeEqual(expected, dk))
      })
    })
  } catch {
    return Promise.resolve(false)
  }
}

export async function POST(req: Request) {
  try {
    const body = await req.json()
    const { identifier, password } = body as { identifier?: string; password?: string }

    if (!identifier || !password) {
      return NextResponse.json({ error: 'Username or email and password are required' }, { status: 400 })
    }
    const treatAsEmail = identifier.includes('@')
    if (treatAsEmail && !isValidEmail(identifier)) {
      return NextResponse.json({ error: 'Email must match nnmYYddddd@nmamit.in' }, { status: 400 })
    }

    const db = await getDb()
    interface User { passwordHash: string; email: string }
    const users = db.collection<User>('users')

    const user = treatAsEmail
      ? await users.findOne({ email: identifier })
      : await users.findOne({ username: identifier })
    if (!user) {
      return NextResponse.json({ error: 'Invalid credentials' }, { status: 401 })
    }

    const ok = await verifyPassword(user.passwordHash, password)
    if (!ok) {
      return NextResponse.json({ error: 'Invalid credentials' }, { status: 401 })
    }

    const sessionId = crypto.randomBytes(24).toString('hex')
    const sessions = (await getDb()).collection('sessions')
    await sessions.insertOne({ sessionId, email: user.email, createdAt: new Date(), expiresAt: new Date(Date.now() + 1000 * 60 * 60 * 24 * 7) })

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