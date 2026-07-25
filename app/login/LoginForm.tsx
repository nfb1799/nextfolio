import { login } from "./actions";
import Button from "@/components/Button";

export default async function LoginForm({
  searchParams,
}: {
  searchParams: Promise<{ from?: string }>;
}) {
  await new Promise((resolve) => setTimeout(resolve, 1000)); // Artifical wait to see the loading form
  const { from } = await searchParams;

  return (
    <form action={login} className="space-y-3">
      <input type="hidden" name="redirectTo" value={from ?? "/dashboard"} />
      <Button type="submit" variant="primary" className="w-full">Log in as demo user</Button>
    </form>
  );
}