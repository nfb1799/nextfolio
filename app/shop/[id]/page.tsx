import { Suspense } from "react";
import type { Metadata } from "next";
import ProductDetails from "./ProductDetails";
import { getProduct, getProducts } from "@/lib/products";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;
  const product = await getProduct(id);
  if (!product) return { title: "Product not found" };
  return { title: product.name, description: product.description };
}

export async function generateStaticParams() {
  const products = await getProducts();
  return products.map((product) => ({ id: product.id }));
}

export default function ProductPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  return (
    <Suspense fallback={<p className="text-gray-400">Loading product…</p>}>
      <ProductDetails params={params} />
    </Suspense>
  );
}