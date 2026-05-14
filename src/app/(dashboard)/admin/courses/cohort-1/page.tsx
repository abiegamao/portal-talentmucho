import { cookies } from "next/headers";
import Link from "next/link";
import { ArrowLeft, ClipboardList } from "lucide-react";
import { createClient } from "@/utils/supabase/server";
import { ResponsesTable } from "./responses-table";

export default async function Cohort1ResponsesPage() {
  const cookieStore = await cookies();
  const supabase = createClient(cookieStore);

  const { data: responses } = await supabase
    .from("intake_responses")
    .select("*")
    .order("submitted_at", { ascending: false });

  return (
    <div className="p-8">
      <div className="mb-6">
        <Link
          href="/admin/courses"
          className="inline-flex items-center gap-1.5 text-sm text-[var(--taupe-400)] hover:text-[var(--charcoal-900)] dark:hover:text-foreground transition-colors mb-6"
        >
          <ArrowLeft className="size-3.5" />
          Back to Courses
        </Link>

        <div className="flex items-start justify-between gap-4">
          <div>
            <span className="tm-eyebrow block mb-2">Cohort 1 · Claude AI Bootcamp</span>
            <h2
              className="font-serif font-light text-[var(--charcoal-900)] dark:text-foreground"
              style={{ fontSize: "clamp(1.4rem, 2.5vw, 2rem)" }}
            >
              Intake Responses
            </h2>
            <p className="tm-body-sm mt-1">
              {responses?.length ?? 0} participant{responses?.length === 1 ? "" : "s"} submitted their intake form.
            </p>
          </div>
          <div className="shrink-0 w-12 h-12 rounded-2xl flex items-center justify-center bg-[var(--beige-100)] dark:bg-[var(--card)] border border-[var(--beige-200)] dark:border-[var(--border)]">
            <ClipboardList className="size-5 text-[var(--clay-500)]" />
          </div>
        </div>
      </div>

      <ResponsesTable responses={responses ?? []} />
    </div>
  );
}
