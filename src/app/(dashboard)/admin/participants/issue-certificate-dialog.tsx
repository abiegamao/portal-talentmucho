"use client";

import { useOptimistic, useTransition } from "react";
import { Award, Circle } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/animate-ui/components/radix/dialog";
import { Checkbox } from "@/components/animate-ui/components/radix/checkbox";
import { issueCertificate, revokeCertificate } from "@/app/actions/certificates";
import { type Course } from "./columns";

interface Props {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  participant: {
    id: string;
    name: string;
    email: string;
    enrolledCourseIds: string[];
  };
  courses: Course[];
  certificateCourseIds: string[];
}

export function IssueCertificateDialog({
  open,
  onOpenChange,
  participant,
  courses,
  certificateCourseIds,
}: Props) {
  const [isPending, startTransition] = useTransition();
  const [optimisticIds, updateOptimistic] = useOptimistic(
    certificateCourseIds,
    (state: string[], courseId: string) =>
      state.includes(courseId)
        ? state.filter((id) => id !== courseId)
        : [...state, courseId]
  );

  const enrolledCourses = courses.filter((c) =>
    participant.enrolledCourseIds.includes(c.id)
  );

  function handleToggle(courseId: string) {
    const hasCert = optimisticIds.includes(courseId);
    startTransition(async () => {
      updateOptimistic(courseId);
      if (hasCert) {
        await revokeCertificate(participant.id, courseId);
      } else {
        await issueCertificate(participant.id, courseId);
      }
    });
  }

  const initials = participant.name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase()
    .slice(0, 2);

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <div className="flex items-center gap-3 mb-1">
            <div
              className="w-9 h-9 rounded-full flex items-center justify-center shrink-0 text-sm font-semibold text-white"
              style={{ background: "var(--charcoal-900)" }}
            >
              {initials}
            </div>
            <div className="min-w-0">
              <DialogTitle className="font-serif font-light text-base leading-snug">
                {participant.name}
              </DialogTitle>
              <DialogDescription className="text-xs truncate mt-0.5">
                {participant.email}
              </DialogDescription>
            </div>
          </div>
          <div
            className="text-xs font-semibold uppercase tracking-widest pt-1"
            style={{ color: "var(--clay-500)" }}
          >
            Issue Certificates
          </div>
        </DialogHeader>

        <div className="flex flex-col gap-2 pt-1">
          {enrolledCourses.length === 0 && (
            <p className="text-sm text-muted-foreground py-4 text-center">
              Not enrolled in any courses yet.
            </p>
          )}
          {enrolledCourses.map((course) => {
            const certified = optimisticIds.includes(course.id);
            return (
              <label
                key={course.id}
                className={[
                  "flex items-center gap-3 p-3 rounded-xl border cursor-pointer transition-all",
                  certified
                    ? "border-[var(--clay-500)]/30 bg-[rgb(125_107_90/0.06)]"
                    : "border-[var(--beige-200)] dark:border-[var(--border)] hover:border-[var(--taupe-400)]/40",
                ].join(" ")}
              >
                <Checkbox
                  checked={certified}
                  onCheckedChange={() => handleToggle(course.id)}
                  disabled={isPending}
                  className="shrink-0"
                />
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-[var(--charcoal-900)] dark:text-foreground leading-snug truncate">
                    {course.title}
                  </p>
                  <p className="text-xs text-[var(--taupe-400)] mt-0.5 uppercase tracking-wider">
                    {course.slug}
                  </p>
                </div>
                {certified ? (
                  <Award className="size-3.5 shrink-0 text-[var(--clay-500)]" />
                ) : (
                  <Circle className="size-3.5 shrink-0 text-[var(--taupe-400)]/40" />
                )}
              </label>
            );
          })}
        </div>

        <div
          className="flex items-center gap-1.5 pt-2 text-xs text-[var(--taupe-400)]"
          style={{ borderTop: "1px solid var(--beige-200)" }}
        >
          <Award className="size-3" />
          {optimisticIds.length} certificate{optimisticIds.length !== 1 ? "s" : ""} issued
        </div>
      </DialogContent>
    </Dialog>
  );
}
