export default function NavSkeleton() {
  return (
    <header className="sticky top-0 z-40 border-b border-slate-200 bg-white/80 backdrop-blur">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 flex items-center justify-between h-14">
        <span className="font-semibold text-slate-900">Nextfolio</span>
        <div className="hidden sm:flex gap-6 text-slate-400">
          <span>Home</span>
          <span>About</span>
          <span>Blog</span>
          <span>Shop</span>
          <span>Dashboard</span>
        </div>
      </div>
    </header>
  );
}