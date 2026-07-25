import { Suspense } from "react";
import type { Metadata } from "next";
import BlogPostContent from "./BlogPostContent";
import { getPost, getPosts } from "@/lib/posts";
import Skeleton from "@/components/Skeleton";

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
    <Suspense
      fallback={
        <div>
          <Skeleton className="h-9 w-2/3 mb-4" />
          <Skeleton className="h-4 w-full mb-2" />
          <Skeleton className="h-4 w-5/6" />
        </div>
      }
    >
      <BlogPostContent params={params} />
    </Suspense>
  );
}