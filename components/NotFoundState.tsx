import Link from "next/link";
import { buttonBase, buttonVariants } from "@/components/Button";

export default function NotFoundState({
  title,
  message,
  href="/",
  linkLabel="Back home",
}: {
  title: string;
  message: string;
  href?: string;
  linkLabel?: string;
}) {
  return (
    <div className="text-center py-12">
      <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-slate-100 text-slate-400 text-2xl">
        ?
      </div>
      <h1 className="text-xl font-semibold text-slate-900 mb-2">{title}</h1>
      <p className="text-slate-600 mb-6">{message}</p>
      <Link href={href} className={`${buttonBase} ${buttonVariants.secondary}`}>{linkLabel}</Link>
    </div>
  );
}