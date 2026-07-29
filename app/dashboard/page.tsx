import { logout } from "./actions";
import Button from "@/components/Button";

export default function DashboardPage() {
  return (
    <div className="max-w-sm mx-auto rounded-lg border border-slate-200 bg-white shadow-sm p-6 text-center">
      <h1 className="text-2xl font-bold text-slate-900 mb-2">Dashboard</h1>
      <p className="text-sm text-slate-600 mb-6">You&apos;re seeing this because proxy.ts let you through.</p>
      <form action={logout}>
        <Button type="submit" variant="secondary" className="w-full">Log out</Button>
      </form>
    </div>
  );
}