"use client"

import { useEffect } from "react";
import Button from "@/components/Button";

export default function ShopError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div>
      <h1 className="text-2xl font-bold mb-2">Something went wrong loading the shop</h1>
      <p className="text-slate-600 mb-4">{error.message}</p>
      <Button variant="secondary" onClick={() => reset()}>
        Try again
      </Button>
    </div>
  );
}