import "server-only";
import { cacheLife, cacheTag } from "next/cache";

export type Post = {
  id: number;
  title: string;
  body: string;
};

export async function getPosts(): Promise<Post[]> {
  "use cache";
  cacheLife("minutes");
  cacheTag("posts");

  const res = await fetch("https://jsonplaceholder.typicode.com/posts?_limit=5");
  if (!res.ok) throw new Error("Failed to fetch posts");
  return res.json();
}

export async function getPost(id: string): Promise<Post> {
  "use cache";
  cacheLife("minutes");
  cacheTag("posts", `post-${id}`);

  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  if (!res.ok) throw new Error("Failed to fetch post");
  return res.json();
}
