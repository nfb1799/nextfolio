import "server-only"
import { cacheLife, cacheTag } from "next/cache";
import { sql } from "./db";

export type Comment = {
  id: string;
  postId: string;
  author: string;
  text: string;
  createdAt: string;
};

export async function getComments(postId: string): Promise<Comment[]> {
  "use cache";
  cacheLife("max");
  cacheTag(`comments-${postId}`);

  const rows = await sql`
    SELECT id, post_id, author, text, created_at
    FROM comments
    WHERE post_id = ${postId}
    ORDER BY created_at ASC
  `;

  return rows.map((row) => ({
    id: row.id,
    postId: row.post_id,
    author: row.author,
    text: row.text,
    createdAt: new Date(row.created_at).toISOString(),
  }));
}

export async function addComment(postId: string, author: string, text: string) {
  await sql`
    INSERT INTO comments (id, post_id, author, text)
    VALUES (${crypto.randomUUID()}, ${postId}, ${author}, ${text})
  `;
}
