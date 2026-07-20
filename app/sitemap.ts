import type { MetadataRoute } from "next";
import { getPosts } from "@/lib/posts";
import { getProducts } from "@/lib/products";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const [posts, products] = await Promise.all([getPosts(), getProducts()]);
  const base = "nextfolio.example.com"

  return [
    { url: base, lastModified: new Date() },
    { url: `${base}/about`, lastModified: new Date() },
    { url: `${base}/blog`, lastModified: new Date() },
    ...posts.map((post) => ({ url: `${base}/blog/${post.id}`, lastModified: new Date() })),
    { url: `${base}/shop`, lastModified: new Date() },
    ...products.map((product) => ({ url: `${base}/shop/${product.id}`, lastModified: new Date() })),
  ];
}