import { Suspense } from "react";
import LikeButton from "@/components/LikeButton";
import RelatedPosts from "@/components/RelatedPosts";
import { getPost } from "@/lib/posts";

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = await getPost(slug);

  return (
    <div>
      <h1 className="text-2xl font-bold">{post.title}</h1>
      <p className="text-gray-600">{post.body}</p>
      <LikeButton />

      <Suspense fallback={<p className="mt-8 text-sm text-gray-400">Loading related posts</p>}>
        <RelatedPosts currentId={post.id} />
      </Suspense>
    </div>
  );
}