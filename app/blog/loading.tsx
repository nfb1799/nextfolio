import Skeleton from "@/components/Skeleton";

export default function BlogLoading() {
  return (
    <div>
      <Skeleton className="h-8 w-32 mb-6" />
      <div className="grid gap=4 sm:grid-cols-2">
        {Array.from({ length: 4 }).map((_, i) => (
          <div key={i} className="rounded-lg border border-slate-200 p-5">
            <Skeleton className="h-5 w-3/4 mb-2" />
            <Skeleton className="h-4 w-full mb-1" />
            <Skeleton className="h-4 w-2/3" />
          </div>
        ))}
      </div>
    </div>
  );
}