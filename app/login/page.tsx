import { login } from "./actions";

export default async function LoginPage({
  searchParams,
}: {
  searchParams: Promise<{ from?: string }>;
}) {
  const { from } = await searchParams;

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Log in</h1>
      <p className="text-gray-600 mb-4">Mock login - Just demonstrating the auth gate.</p>
      <form action={login} className="space-y-2">
        <input type="hidden" name="redirectTo" value={from ?? "/dashboard"} />
        <button type="submit" className="px-3 py-1 border rounded hover:bg-gray-100">
          Log in as demo user
        </button>
      </form>
    </div>
  );
}