import { NextResponse } from 'next/server'
export const runtime = 'nodejs'
import { getDb } from '@/lib/db'

type Member = {
  name: string
  role: string
  skills: string[]
}

const SKILLS = [
  'Solidity',
  'Rust',
  'Go',
  'Python',
  'Qiskit',
  'TensorFlow',
  'PyTorch',
  'Substrate',
  'Cosmos SDK',
  'Smart Contracts',
  'Design',
  'Figma',
  'Marketing',
  'Community',
  'Cryptography',
  'AI/ML',
  'React',
]

function pickRandomSkills(count: number) {
  const out: string[] = []
  const used = new Set<number>()
  while (out.length < count && used.size < SKILLS.length) {
    const i = Math.floor(Math.random() * SKILLS.length)
    if (!used.has(i)) {
      used.add(i)
      out.push(SKILLS[i])
    }
  }
  return out
}

export async function GET() {
  try {
    const db = await getDb()
    const users = db.collection<{ email: string; walletAddress?: string | null; createdAt?: Date }>('users')
    const docs = await users
      .find({}, { projection: { email: 1, walletAddress: 1, createdAt: 1 } })
      .sort({ createdAt: -1 })
      .toArray()

    const members: Member[] = docs.map((u) => {
      const name = u.email || (u.walletAddress ? u.walletAddress : 'Member')
      return {
        name,
        role: 'Member',
        skills: pickRandomSkills(3),
      }
    })

    return NextResponse.json({ members })
  } catch (e) {
    const msg = e instanceof Error ? e.message : 'Unexpected error'
    return NextResponse.json({ error: msg }, { status: 500 })
  }
}