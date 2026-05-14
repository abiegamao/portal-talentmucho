import { Skeleton } from "@/components/ui/skeleton";
import { GraduationCap } from "lucide-react";

export default function AdminDashboardLoading() {
  return (
    <div className="p-8">
      {/* Welcome */}
      <div className="relative mb-8 rounded-2xl overflow-hidden bg-[var(--beige-100)] dark:bg-[var(--card)] border border-[var(--beige-200)] dark:border-white/5 px-5 pt-6 pb-6 sm:px-8 sm:pt-8 sm:pb-8 flex items-center justify-between gap-4">
        <div className="relative z-10 flex flex-col gap-2">
          <Skeleton className="h-3 w-28 rounded-full" />
          <Skeleton className="h-8 w-48" />
          <Skeleton className="h-3 w-72 rounded-full" />
        </div>
        <div
          className="shrink-0 w-16 h-16 sm:w-20 sm:h-20 rounded-2xl flex items-center justify-center"
          style={{ background: "var(--charcoal-900)" }}
        >
          <GraduationCap
            className="size-8 sm:size-10"
            style={{ color: "var(--clay-500)" }}
          />
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {Array.from({ length: 4 }).map((_, i) => (
          <div
            key={i}
            className="rounded-2xl border border-[var(--beige-200)] dark:border-white/5 bg-[var(--beige-100)] dark:bg-[var(--card)] p-5 flex flex-col gap-3"
          >
            <div className="flex items-center justify-between">
              <Skeleton className="h-3 w-28 rounded-full" />
              <Skeleton className="h-4 w-4 rounded" />
            </div>
            <Skeleton className="h-8 w-16" />
          </div>
        ))}
      </div>

      {/* Participants */}
      <div>
        <div className="flex items-center justify-between mb-4">
          <Skeleton className="h-6 w-28" />
          <Skeleton className="h-4 w-16 rounded-full" />
        </div>

        <div className="rounded-2xl border border-[var(--beige-200)] dark:border-white/5 overflow-hidden">
          <div
            className="grid grid-cols-[1fr_auto_auto_auto] gap-4 px-6 py-3"
            style={{
              background: "var(--beige-100)",
              borderBottom: "1px solid var(--beige-200)",
            }}
          >
            {Array.from({ length: 4 }).map((_, i) => (
              <Skeleton key={i} className="h-3 w-16 rounded-full" />
            ))}
          </div>

          {Array.from({ length: 3 }).map((_, i) => (
            <div
              key={i}
              className="grid grid-cols-[1fr_auto_auto_auto] gap-4 px-6 py-4 items-center"
              style={{ borderTop: i > 0 ? "1px solid var(--beige-200)" : undefined }}
            >
              <div className="flex flex-col gap-1.5">
                <Skeleton className="h-3.5 w-36 rounded-full" />
                <Skeleton className="h-3 w-44 rounded-full" />
              </div>
              <Skeleton className="h-6 w-16 rounded-full" />
              <Skeleton className="h-6 w-28 rounded-lg" />
              <Skeleton className="h-6 w-14 rounded-full" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
