import { BookOpen } from "lucide-react";

export default function Loading() {
  return (
    <div className="p-8 animate-pulse">
      {/* Welcome */}
      <div className="relative mb-8 px-5 pt-6 pb-0 sm:px-8 sm:pt-8 flex items-end justify-between gap-4">
        <div className="relative z-10 pb-6 sm:pb-8 w-full">
          <div className="h-4 w-24 bg-[var(--beige-200)] dark:bg-white/10 rounded mb-2" />
          <div className="h-10 w-3/4 max-w-sm bg-[var(--beige-200)] dark:bg-white/10 rounded mb-4" />
          <div className="h-4 w-64 bg-[var(--beige-200)] dark:bg-white/10 rounded mb-4" />
          <div className="h-6 w-40 bg-[var(--beige-200)] dark:bg-white/10 rounded-full" />
        </div>
        <div className="w-24 h-24 sm:w-36 sm:h-36 md:w-[180px] md:h-[180px] bg-[var(--beige-200)] dark:bg-white/10 rounded-full shrink-0 relative z-10" />
      </div>

      {/* Separator */}
      <div className="my-8 h-px bg-gradient-to-r from-transparent via-[var(--beige-200)] dark:via-white/10 to-transparent" />

      {/* Courses */}
      <div>
        <div className="h-6 w-32 bg-[var(--beige-200)] dark:bg-white/10 rounded mb-4" />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {[...Array(3)].map((_, i) => (
            <div
              key={i}
              className="rounded-2xl border border-[var(--beige-200)] dark:border-white/5 bg-[var(--beige-100)] dark:bg-[var(--card)] p-6 flex flex-col gap-3 h-48"
            >
              <div className="flex items-center justify-between">
                <div className="h-3 w-16 bg-[var(--beige-200)] dark:bg-white/10 rounded" />
                <BookOpen className="size-4 text-[var(--beige-200)] dark:text-white/10" />
              </div>
              <div className="space-y-2 mt-2">
                <div className="h-5 w-full bg-[var(--beige-200)] dark:bg-white/10 rounded" />
                <div className="h-4 w-3/4 bg-[var(--beige-200)] dark:bg-white/10 rounded" />
              </div>
              <div className="mt-auto pt-2 border-t border-[var(--beige-200)] dark:border-white/5">
                <div className="h-3 w-20 bg-[var(--beige-200)] dark:bg-white/10 rounded" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
