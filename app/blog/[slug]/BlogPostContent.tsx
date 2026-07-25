import { Suspense } from "react";
import LikeButton from "@/components/LikeButton";
import RelatedPosts from "@/components/RelatedPosts";
import CommentForm from "@/components/CommentForm";
import { getPost } from "@/lib/posts";
import { getComments } from "@/lib/comments";
import { getLikes } from "@/lib/likes";

export default async function BlogPostContent({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = await getPost(slug);
  const comments = await getComments(slug);
  const likes = await getLikes(slug);

  return (
    <article>
      <h1 className="text-3xl font-bold tracking-tight text-slate-900">{post.title}</h1>
      <p className="mt-4 text-slate-600 leading-relaxed max-w-xl">{post.body}</p>

      <div className="mt-6">
        <LikeButton postId={slug} initialLikes={likes} />
      </div>

      <div className="mt-10 pt-8 border-t border-slate-200">
        <Suspense fallback={<p className="text-sm text-slate-400">Loading related posts...</p>}>
          <RelatedPosts currentId={post.id} />
        </Suspense>
      </div>

      <div className="mt-10 pt-8 border-t border-slate-200">
        <CommentForm postId={slug} comments={comments} />
      </div>
    </article>
  );
}