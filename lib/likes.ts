import "server-only"
import { cacheLife, cacheTag } from "next/cache";
import { sql } from "./db";

export async function getLikes(postId: string): Promise<number> {
  "use cache";
  cacheLife("max");
  cacheTag(`likes-${postId}`);

  const rows = await sql`SELECT count FROM likes WHERE post_id = ${postId}`;
  return rows[0]?.count ?? 0;
}

export async function incrementLikes(postId: string): Promise<number> {
  const rows = await sql`
    INSERT INTO likes (post_id, count)
    VALUES (${postId}, 1)
    ON CONFLICT (post_id) DO UPDATE SET count = likes.count + 1
    RETURNING count
  `;
  return rows[0].count;
}
