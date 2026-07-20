import "server-only";

export type Post = {
  id: number;
  title: string;
  body: string;
};

export async function getPosts(): Promise<Post[]> {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts?_limit=5", {
    next: { revalidate: 60, tags: ["posts"] },
  });
  if (!res.ok) throw new Error("Failed to fetch posts");
  return res.json();
}

export async function getPost(id: number): Promise<Post> {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
    next: { revalidate: 60, tags: [`post-${id}`] },
  });
  if (!res.ok) throw new Error("Failed to fetch post");
  return res.json();
}