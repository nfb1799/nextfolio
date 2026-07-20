import Modal from "@/components/Modal";
import { getProduct } from "@/lib/products";
import { notFound } from "next/navigation";

export default async function ProductModal({
  params,
}: {
  params: Promise<{id: string}>;
}) {
  const { id } = await params;
  const product = await getProduct(id);
  if (!product) notFound();

  return(
    <Modal>
      <h2 className="text-xl font-bold">{product.name}</h2>
      <p className="text-gray-600 mt-1">${product.price}</p>
      <p className="mt-2 text-sm">{product.description}</p>
    </Modal>
  );
}