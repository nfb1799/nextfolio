import { Suspense } from "react";
import type { Metadata } from "next";
import ProductDetails from "./ProductDetails";
import { getProduct, getProducts } from "@/lib/products";
import Skeleton from "@/components/Skeleton";

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
    <Suspense
      fallback={
        <div>
          <Skeleton className="aspect-[4/3] w-full mb-6" />
          <Skeleton className="h-8 w-1/2 mb-2" />
          <Skeleton className="h-5 w-24" />
        </div>
      }
    >
      <ProductDetails params={params} />
    </Suspense>
  );
}