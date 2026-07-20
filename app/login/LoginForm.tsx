import { login } from "./actions";

export default async function LoginForm({
  searchParams,
}: {
  searchParams: Promise<{ from?: string }>;
}) {
  await new Promise((resolve) => setTimeout(resolve, 1000)); // Artifical wait to see the loading form
  const { from } = await searchParams;

  return (
    <form action={login} className="space-y-2">
      <input type="hidden" name="redirectTo" value={from ?? "/dashboard"} />
      <button type="submit" className="px-3 py-1 border rounded hover:bg-gray-100">
        Log in as demo user
      </button>
    </form>
  );
}