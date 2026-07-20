import { logout } from "./actions";

export default function DashboardPage() {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Dashboard</h1>
      <p className="text-gray-600 mb-4">You're seeing this because proxy.ts let you through.</p>
      <form action={logout}>
        <button type="submit" className="px-3 py-1 border rounded hover:bg-gray-100">
          Log out
        </button>
      </form>
    </div>
  );
}