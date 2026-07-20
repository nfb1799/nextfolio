import Link from "next/link";
import Image from "next/image";
import { getProducts } from "@/lib/products";

export const metadata = {
  title: "Shop",
  description: "A demonstrative shop using modals",
}

export default async function ShopPage() {
  const products = await getProducts();
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Shop</h1>
      <div className="grid grid-cols-3 gap-4">
        {products.map((product) => (
          <Link
            key={product.id}
            href={`/shop/${product.id}`}
            className="border rounded p-4 hover:shadow"
          >
            <Image src={product.imageUrl} alt={product.name} width={400} height={300} className="rounded mb-2" />
            <h2 className="font-semibold">{product.name}</h2>
            <p className="text-gray-600">${product.price}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}