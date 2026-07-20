import { Suspense } from "react";
import LoginForm from "./LoginForm";

export default async function LoginPage({
  searchParams,
}: {
  searchParams: Promise<{ from?: string }>;
}) {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Log in</h1>
      <p className="text-gray-600 mb-4">Mock login — just demonstrates the auth gate.</p>
      <Suspense fallback={<p className="text-gray-400">Loading form…</p>}>
        <LoginForm searchParams={searchParams} />
      </Suspense>
    </div>
  );
}