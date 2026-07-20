import Link from "next/link";
import { getPosts } from "@/lib/posts";

export default async function RelatedPosts({ currentId }: { currentId: number }) {
  // artificial delay so I can actually see it stream in separately
  await new Promise((resolve) => setTimeout(resolve, 1500));

  const posts = await getPosts();
  const related = posts.filter((p) => p.id !== currentId).slice(0, 3);

  return (
    <div className="mt-8">
      <h2 className="font-semibold mb-2">Related Posts</h2>
      <ul className="space-y-1">
        {related.map((post) => (
          <li key={post.id}>
            <Link href={`/blog/${post.id}`} className="text-blue-600 underline text-sm">
              {post.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}