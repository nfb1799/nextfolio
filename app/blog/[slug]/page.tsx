import { Suspense } from "react";
import type { Metadata } from "next";
import BlogPostContent from "./BlogPostContent";
import { getPost, getPosts } from "@/lib/posts";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPost(slug);
  return { title: post.title, description: post.body.slice(0, 150) };
}

export async function generateStaticParams() {
  const posts = await getPosts();
  return posts.map((post) => ({ slug: String(post.id) }));
}

export default function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  return (
    <Suspense fallback={<p className="text-gray-400">Loading post…</p>}>
      <BlogPostContent params={params} />
    </Suspense>
  );
}