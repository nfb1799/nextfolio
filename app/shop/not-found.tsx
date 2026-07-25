import NotFoundState from "@/components/NotFoundState";
export default function ShopNotFound() {
  return (
    <NotFoundState
      title="Product not found"
      message="That product doesn't exist — check the URL or head back to the shop."
      href="/shop"
      linkLabel="Back to shop"
    />
  );
}