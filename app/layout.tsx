import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Nextfolio",
    template: "%s | Nextfolio",
  },
  description: "A Next.js feature showcase for learning the technology",
};

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="inter.className">
      <body className="min-h-screen flex flex-col">
        <nav className="border-b p-4 flex gap-4">
          <a href="/">Home</a>
          <a href="/about">About</a>
          <a href="/blog">Blog</a>
          <a href="/shop">Shop</a>
          <a href="/dashboard">Dashboard</a>
        </nav>
        <main className="flex-1 p-6">
          {children}
        </main>
        <footer className="border-t p-4 text-sm text-gray-500">
          Nextfolio - Built while learning Next.js
        </footer>
      </body>
    </html>
  );
}