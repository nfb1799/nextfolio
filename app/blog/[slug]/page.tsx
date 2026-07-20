import LikeButton from "@/components/LikeButton";

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  return (
    <div>
      <h1 className="text-2xl font-bold">Post: {slug}</h1>
      <p className="text-gray-600">Placeholder - Phase 3 wires this up to real data</p>
      <LikeButton />
    </div>
  );
}