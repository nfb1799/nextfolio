import { getProduct } from "@/lib/products";
import { notFound } from "next/navigation";
import Image from "next/image";

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
      <Image
        src={product.imageUrl}
        alt={product.name}
        width={800}
        height={600}
        className="w-full rounded-lg aspect-[4/3] object-cover"
      />
      <h1 className="text-3xl font-bold tracking-tight text-slate-900">{product.name}</h1>
      <p className="mt-2 text-lg text-slate-600">${product.price}</p>
      <p className="mt-4 text-slate-600 leading-relaxed">{product.description}</p>
    </div>
  );
}