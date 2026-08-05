import { neon } from "@neondatabase/serverless";

if (!process.env.DATABASE_URL) {
  throw new Error("DATABASE_URL is not set");
}

const sql = neon(process.env.DATABASE_URL);

await sql`CREATE TABLE IF NOT EXISTS comments (
  id TEXT PRIMARY KEY,
  post_id TEXT NOT NULL,
  author TEXT NOT NULL,
  text TEXT NOT NULL,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
)`;

await sql`CREATE INDEX IF NOT EXISTS comments_post_id_idx ON comments (post_id)`;

await sql`CREATE TABLE IF NOT EXISTS likes (
  post_id TEXT PRIMARY KEY,
  count INTEGER NOT NULL DEFAULT 0
)`;

console.log("Schema ready.");
