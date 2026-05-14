import { cookies } from "next/headers";
import { createClient } from "@/utils/supabase/server";
import { BookOpen, BarChart2, Award, Clock } from "lucide-react";

const stats = [
  { label: "Enrolled Courses", value: "—", icon: BookOpen },
  { label: "Lessons Completed", value: "—", icon: BarChart2 },
  { label: "Certificates", value: "—", icon: Award },
  { label: "Hours Spent", value: "—", icon: Clock },
];

export default async function ParticipantDashboard() {
  const cookieStore = await cookies();
  const supabase = createClient(cookieStore);
  const {
    data: { user },
  } = await supabase.auth.getUser();

  const firstName =
    user?.user_metadata?.full_name?.split(" ")[0] || "there";

  return (
    <div className="p-8 ">
      {/* Welcome */}
      <div className="mb-8">
        <span className="tm-eyebrow block mb-2">Welcome back</span>
        <h2
          className="font-serif font-light text-[var(--charcoal-900)] dark:text-foreground"
          style={{ fontSize: "clamp(1.75rem, 3vw, 2.25rem)" }}
        >
          Good to see you, {firstName}.
        </h2>
        <p className="tm-body-sm mt-1">
          Here&apos;s a summary of your bootcamp progress.
        </p>
      </div>

      {/* Stats grid */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {stats.map(({ label, value, icon: Icon }) => (
          <div
            key={label}
            className="bg-[var(--beige-100)] dark:bg-[var(--card)] rounded-2xl p-5 border border-[var(--beige-200)] dark:border-white/5"
          >
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs font-semibold text-[var(--taupe-400)] uppercase tracking-widest">
                {label}
              </span>
              <Icon className="size-4 text-[var(--clay-500)]" />
            </div>
            <span className="font-serif font-light text-3xl text-[var(--charcoal-900)] dark:text-foreground">
              {value}
            </span>
          </div>
        ))}
      </div>

      {/* Courses placeholder */}
      <div>
        <h3 className="font-serif font-light text-lg text-[var(--charcoal-900)] dark:text-foreground mb-4">
          My Courses
        </h3>
        <div className="rounded-2xl border border-dashed border-[var(--beige-300)] dark:border-[var(--border)] p-10 text-center">
          <BookOpen className="size-8 text-[var(--beige-300)] dark:text-muted-foreground mx-auto mb-3" />
          <p className="text-sm text-[var(--taupe-400)]">
            No courses enrolled yet.
          </p>
        </div>
      </div>
    </div>
  );
}
