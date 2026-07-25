"use client"

import Button from "@/components/Button";

export default function ErrorState({
  title,
  message,
  onRetry,
}: {
  title: string;
  message: string;
  onRetry: () => void;
}) {
  return (
    <div className="text-center py-12">
      <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-red-50 text-red-500 text-2xl">
        !
      </div>
      <h1 className="text-xl font-semibold text-slate-900 mb-2">{title}</h1>
      <p className="text-slate-600 mb-6">{message}</p>
      <Button variant="secondary" onClick={onRetry}>Try again</Button>
    </div>
  )
}