import { Suspense } from "react";
import LoginForm from "./LoginForm";

export default async function LoginPage({
  searchParams,
}: {
  searchParams: Promise<{ from?: string }>;
}) {
  return (
    <div className="max-w-sm mx-auto rounded-lg border border-slate-200 bg-white shadow-sm p-6 text-center">
      <h1 className="text-2xl font-bold text-slate-900 mb-2">Log in</h1>
      <p className="text-sm text-slate-600 mb-6">Mock login — just demonstrates the auth gate.</p>
      <Suspense fallback={<p className="text-slate-400 text-sm">Loading form…</p>}>
        <LoginForm searchParams={searchParams} />
      </Suspense>
    </div>
  );
}