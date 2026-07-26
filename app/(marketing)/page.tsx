import Link from "next/link";
import { buttonBase, buttonVariants } from "@/components/Button";

export default function HomePage() {
  return (
    <div className="py-12 text-center">
      <h1 className="text-4xl font-bold tracking-tight text-slate-900">Welcome to Nextfolio</h1>
      <p className="mt-4 text-lg text-slate-600 max-w-xl mx-auto">
        A site built to learn and showcase nearly every feature of Next.js.
      </p>
      <div className="mt-8 flex flex-col sm:flex-row justify-center gap-3">
        <Link href="/blog" className={`${buttonBase} ${buttonVariants.primary}`}>Read the blog</Link>
        <Link href="/shop" className={`${buttonBase} ${buttonVariants.secondary}`}>Browse the shop</Link>
      </div>
    </div>
  );
}