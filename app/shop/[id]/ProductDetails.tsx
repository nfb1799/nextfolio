import { getProduct } from "@/lib/products";
import { notFound } from "next/navigation";

export default async function ProductDetails({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const product = await getProduct(id);
  if (!product) notFound();

  return (
    <div>
      <h1 className="text-2xl font-bold">{product.name}</h1>
      <p className="text-gray-600 mt-2">${product.price}</p>
      <p className="mt-4">{product.description}</p>
    </div>
  );
}