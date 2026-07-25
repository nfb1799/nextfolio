import Link from "next/link";
import { getPosts } from "@/lib/posts";
import { card, cardHover } from "@/lib/ui";

export default async function BlogIndexPage() {
  const posts = await getPosts();
  return (
    <div>
      <h1 className="text-3xl font-bold tracking-tight text-slate-900 mb-6">Blog</h1>
      <div className="grid gap-4 sm:grid-cols-2">
        {posts.map((post) => (
          <Link key={post.id} href={`/blog/${post.id}`} className={`${card} ${cardHover} p-5 block`}>
            <h2 className="font-semibold text-slate-900">{post.title}</h2>
            <p className="mt-2 text-sm text-slate-600 line-clamp-2">{post.body}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}