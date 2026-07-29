"use client"

import { useRouter } from "next/navigation";
import { useCallback, useEffect } from "react";
import Button from "@/components/Button";

export default function Modal({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const onDismiss = useCallback(() => router.back(), [router]);

  useEffect(() => {
    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") onDismiss();
    }
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [onDismiss]);

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4 animate-fade-in" onClick={onDismiss}>
      <div className="bg-white rounded-lg p-6 max-w-md w-full shadow-lg animate-scale-in" onClick={(e) => e.stopPropagation()}>
        {children}
        <div className="mt-6 pt-4 border-t border-slate-100">
          <Button variant="ghost" onClick={onDismiss}>
            Close
          </Button>
        </div>
      </div>
    </div>
  );
}