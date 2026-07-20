"use client"

import { useEffect } from "react";

export default function DashboardError({
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
      <h1 className="text-2xl font-bold mb-2">Dashboard failed to load</h1>
      <p className="text-gray-600 mb-4">{error.message}</p>
      <button onClick={() => reset()} className="px-3 py-1 border rounded hover:bg-gray-100">
        Try again
      </button>
    </div>
  );
}