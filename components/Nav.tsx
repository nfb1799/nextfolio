"use client"

import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";
import { useState } from "react";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/blog", label: "Blog" },
  { href: "/shop", label: "Shop" },
  { href: "/dashboard", label: "Dashboard" },
];

function isLinkActive(pathname: string, href: string, from: string | null) {
  if (pathname === "/login" && from === href) return true;
  if (href === "/") return pathname === "/";
  return pathname.startsWith(href);
}

export default function Nav() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const from = searchParams.get("from");
  const [isOpen, setIsOpen] = useState(false);

  return(
    <header className="sticky top-0 z-40 border-b border-slate-200 bg-white/80 backdrop-blur">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 flex items-center justify-between h-14">
        <Link href="/" className="font-semibold text-slate-900">
          Nextfolio
        </Link>

        <div className="hidden sm:flex gap-6">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={
                isLinkActive(pathname, link.href, from)
                ? "text-brand-600 font-medium"
                : "text-slate-600 hover:text-slate-900 transition-colors"
              }
            >
              {link.label}
            </Link>
          ))}
        </div>

        <button
          onClick={() => setIsOpen((open) => !open)}
          className="sm:hidden text-slate-600"
          aria-label="Toggle menu"
        >
          {isOpen ? "✕" : "☰"}
        </button>
      </div>
      {isOpen && (
        <div className="sm:hidden border-t border-slate-200 bg-white px-4 py-3 flex flex-col gap-3 animate-fade-in">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className={isLinkActive(pathname, link.href, from) ? "text-brand-600 font-medium" : "text-slate-600"}
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}