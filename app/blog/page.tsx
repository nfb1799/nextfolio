import Link from "next/link";

const posts = [
  { slug: "hello-world", title: "Hello World" },
  { slug: "learning-app-router", title: "Learning the App Router" },
];

export default function BlogIndexPage() {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Blog</h1>
      <ul className="space-y-2">
        {posts.map((post) => (
          <li key={post.slug}>
            <Link href={`/blog/${post.slug}`} className="text-blue-600 underline">
              {post.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}