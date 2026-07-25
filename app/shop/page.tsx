import Link from "next/link";
import Image from "next/image";
import { getProducts } from "@/lib/products";
import { card, cardHover } from "@/lib/ui";

export const metadata = {
  title: "Shop",
  description: "A demonstrative shop using modals",
}

export default async function ShopPage() {
  const products = await getProducts();
  return (
    <div>
      <h1 className="text-3xl font-bold tracking-tight text-slate-900 mb-6">Shop</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {products.map((product) => (
          <Link
            key={product.id}
            href={`/shop/${product.id}`}
            className={`${card} ${cardHover} overflow-hidden block`}
          >
            <Image
              src={product.imageUrl}
              alt={product.name}
              width={400}
              height={300}
              className="w-full aspect-[4/3] object-cover"
            />
            <div className="p-4">
              <h2 className="font-semibold text-slate-900">{product.name}</h2>
              <p className="mt-1 text-slate-600">${product.price}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}