import "server-only"

export type Product = {
  id: string;
  name: string;
  price: number;
  description: string;
};

const products: Product[] = [
  { id: "1", name: "Keyboard", price: 89, description: "A mechanical keyboard." },
  { id: "2", name: "Mouse", price: 45, description: "An ergonomic mouse." },
  { id: "3", name: "Monitor", price: 249, description: "A 27-inch 4K monitor." },
];

export async function getProducts(): Promise<Product[]> {
  return products;
}

export async function getProduct(id: string): Promise<Product | undefined> {
  return products.find((p) => p.id === id);
}