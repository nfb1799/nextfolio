import Link from "next/link";
import { getPosts } from "@/lib/posts";

export default async function BlogIndexPage() {
  const posts = await getPosts();
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Blog</h1>
      <ul className="space-y-2">
        {posts.map((post) => (
          <li key={post.id}>
            <Link href={`/blog/${post.id}`} className="text-blue-600 underline">
              {post.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}