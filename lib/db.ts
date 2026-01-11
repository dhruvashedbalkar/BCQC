import { MongoClient, Db } from 'mongodb'

let client: MongoClient | null = null
let db: Db | null = null

export async function getDb(): Promise<Db> {
  const uri = process.env.MONGODB_URI
  if (!uri) {
    throw new Error('MONGODB_URI env var is not set')
  }

  if (db) return db

  if (!client) {
    client = new MongoClient(uri)
    await client.connect()
  }

  db = client.db(process.env.MONGODB_DB || 'BCQC')

  const users = db.collection('users')
  await users.createIndex({ email: 1 }, { unique: true })
  await users.createIndex({ username: 1 }, { unique: true, sparse: true })

  return db
}

export async function closeDb() {
  if (client) {
    await client.close()
    client = null
    db = null
  }
}