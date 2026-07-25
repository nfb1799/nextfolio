import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Container from "@/components/Container";
import Nav from "@/components/Nav";

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
      <body className="min-h-screen flex flex-col bg-slate-50 text-slate-900">
        <Nav />
        <main className="flex-1 py-8">
          <Container>{children}</Container>
        </main>
        <footer className="border-t border-slate-200 mt-12">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 py-8 flex flex-col sm:flex-row items-center justify-between gap-2 text-sm text-slate-500">
            <p>Nextfolio - built while learning Next.js</p>
            <a href="https://github.com/nfb1799/nextfolio" className="hover:text-slate-900 transition-colors">
              View on GitHub
            </a>
          </div>
        </footer>
      </body>
    </html>
  );
}