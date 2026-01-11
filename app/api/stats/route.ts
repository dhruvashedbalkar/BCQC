import { NextResponse } from 'next/server'
import { getDb } from '@/lib/db'

export const runtime = 'nodejs'

export async function GET() {
  try {
    const db = await getDb()
    const usersCount = await db.collection('users').countDocuments({})
    return NextResponse.json({ usersCount })
  } catch (e) {
    return NextResponse.json({ usersCount: 0 }, { status: 200 })
  }
}