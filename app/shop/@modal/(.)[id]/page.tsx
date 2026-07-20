import { Suspense } from "react";
import ModalProductDetails from "./ModalProductDetails";

export default function ProductModal({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  return (
    <Suspense fallback={null}>
      <ModalProductDetails params={params} />
    </Suspense>
  );
}