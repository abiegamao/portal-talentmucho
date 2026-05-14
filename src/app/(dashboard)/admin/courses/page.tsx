import Link from "next/link";
import { cookies } from "next/headers";
import { GraduationCap, Users, ChevronRight } from "lucide-react";
import { createClient } from "@/utils/supabase/server";

export default async function CoursesPage() {
  const cookieStore = await cookies();
  const supabase = createClient(cookieStore);

  const { count: responseCount } = await supabase
    .from("intake_responses")
    .select("*", { count: "exact", head: true });

  return (
    <div className="p-8">
      <div className="flex items-start justify-between gap-4 mb-8">
        <div>
          <span className="tm-eyebrow block mb-2">Bootcamp Management</span>
          <h2
            className="font-serif font-light text-[var(--charcoal-900)] dark:text-foreground"
            style={{ fontSize: "clamp(1.4rem, 2.5vw, 2rem)" }}
          >
            Courses
          </h2>
          <p className="tm-body-sm mt-1">
            Manage cohorts and view participant intake responses.
          </p>
        </div>
        <div className="shrink-0 w-12 h-12 rounded-2xl flex items-center justify-center bg-[var(--beige-100)] dark:bg-[var(--card)] border border-[var(--beige-200)] dark:border-[var(--border)]">
          <GraduationCap className="size-5 text-[var(--clay-500)]" />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        <Link
          href="/admin/courses/cohort-1"
          className="group relative rounded-2xl border border-[var(--beige-200)] dark:border-[var(--border)] bg-white dark:bg-[var(--card)] p-6 hover:shadow-md hover:-translate-y-0.5 transition-all duration-200"
        >
          <div className="flex items-start justify-between mb-4">
            <div
              className="w-10 h-10 rounded-xl flex items-center justify-center"
              style={{ background: "var(--clay-500)" }}
            >
              <GraduationCap className="size-5 text-white" />
            </div>
            <ChevronRight className="size-4 text-[var(--taupe-400)] group-hover:text-[var(--charcoal-900)] dark:group-hover:text-foreground transition-colors mt-1" />
          </div>

          <h3 className="font-serif font-light text-lg text-[var(--charcoal-900)] dark:text-foreground mb-1">
            Cohort 1
          </h3>
          <p className="text-xs text-[var(--taupe-400)] font-light mb-4">
            Claude AI Bootcamp · Wave 1
          </p>

          <div className="flex items-center gap-1.5 text-sm text-[var(--taupe-400)]">
            <Users className="size-3.5" />
            <span>
              <span className="font-semibold text-[var(--charcoal-900)] dark:text-foreground">
                {responseCount ?? 0}
              </span>{" "}
              intake{responseCount === 1 ? "" : "s"} submitted
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
}
