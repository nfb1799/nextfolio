"use client"

import { useRouter } from "next/navigation";
import { useEffect } from "react";
import Button from "@/components/Button";

export default function Modal({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const onDismiss = () => router.back();

  useEffect(() => {
    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") onDismiss();
    }
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50" onClick={onDismiss}>
      <div className="bg-white rounded-lg p-6 max-w-md w-full" onClick={(e) => e.stopPropagation()}>
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