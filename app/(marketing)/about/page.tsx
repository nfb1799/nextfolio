export const metadata = {
  title: "About",
  description: "About this Next.js learning project.",
}

export default function AboutPage() {
  return (
    <div>
      <h1 className="text-3xl font-bold tracking-tight text-slate-900">About</h1>
      <p className="mt-4 text-slate-600 leading-relaxed max-w-xl">This site is my Next.js learning project, styled with Tailwind CSS.</p>
    </div>
  );
}