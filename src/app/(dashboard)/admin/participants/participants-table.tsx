"use client";

import { useState, useTransition, useRef, useEffect } from "react";
import { Award, KeyRound, CheckSquare, X, ChevronUp, ShieldCheck, ShieldAlert, Sparkles } from "lucide-react";
import { buildColumns, type Participant, type Course } from "./columns";
import { DataTable } from "./data-table";
import { ParticipantDetailPanel } from "./participant-detail-panel";
import { bulkToggleEnrollment } from "@/app/actions/enrollment";
import { bulkToggleCertificates } from "@/app/actions/certificates";
import { type IntakeResponse } from "./responses-table";
import { toast } from "sonner";
import { motion, AnimatePresence } from "framer-motion";

interface Props {
  participants: Participant[];
  courses: Course[];
  intakeResponses: IntakeResponse[];
}

export function ParticipantsTable({ participants, courses, intakeResponses }: Props) {
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [selectedRows, setSelectedRows] = useState<Participant[]>([]);
  const [activeMenu, setActiveMenu] = useState<"grant" | "revoke" | "cert-grant" | "cert-revoke" | null>(null);
  const [isPending, startTransition] = useTransition();

  const columns = buildColumns(courses);
  const selected = participants.find((p) => p.id === selectedId) || null;

  const menuRef = useRef<HTMLDivElement>(null);

  // Close bulk dropdown menu when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setActiveMenu(null);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  async function handleBulkEnrollment(courseId: string, action: "grant" | "revoke") {
    const ids = selectedRows.map((r) => r.id);
    if (ids.length === 0) return;

    setActiveMenu(null);
    startTransition(async () => {
      const res = await bulkToggleEnrollment(ids, courseId, action);
      if (res?.error) {
        toast.error(res.error);
      } else {
        toast.success(
          action === "grant"
            ? `Granted course access to ${ids.length} participant(s)`
            : `Revoked course access from ${ids.length} participant(s)`
        );
        setSelectedRows([]);
      }
    });
  }

  async function handleBulkCertificates(courseId: string, action: "grant" | "revoke") {
    const ids = selectedRows.map((r) => r.id);
    if (ids.length === 0) return;

    setActiveMenu(null);
    startTransition(async () => {
      const res = await bulkToggleCertificates(ids, courseId, action);
      if (res?.error) {
        toast.error(res.error);
      } else {
        toast.success(
          action === "grant"
            ? `Issued certificates to ${ids.length} participant(s)`
            : `Revoked certificates from ${ids.length} participant(s)`
        );
        setSelectedRows([]);
      }
    });
  }

  return (
    <>
      <DataTable
        columns={columns}
        data={participants}
        onRowClick={(p) => setSelectedId(p.id)}
        onSelectionChange={(rows) => setSelectedRows(rows)}
      />

      {/* Details Slide-out Panel */}
      <ParticipantDetailPanel
        open={!!selectedId}
        onClose={() => setSelectedId(null)}
        participant={selected}
        courses={courses}
        intakeResponses={intakeResponses}
      />

      {/* Bulk Operations Floating Action Bar */}
      <AnimatePresence>
        {selectedRows.length > 0 && (
          <motion.div
            initial={{ y: 80, x: "-50%", opacity: 0 }}
            animate={{ y: 0, x: "-50%", opacity: 1 }}
            exit={{ y: 80, x: "-50%", opacity: 0 }}
            transition={{ type: "spring", damping: 20, stiffness: 250 }}
            className="fixed bottom-6 left-1/2 z-40 bg-[var(--charcoal-900)] dark:bg-[var(--card)] text-white dark:text-foreground pl-5 pr-3 py-3 rounded-2xl border border-white/10 dark:border-white/5 shadow-2xl flex items-center gap-6 max-w-full md:max-w-max"
          >
            <div className="flex items-center gap-2">
              <CheckSquare className="size-4 text-[var(--clay-500)]" />
              <span className="text-xs font-semibold uppercase tracking-wider">
                {selectedRows.length} Selected
              </span>
            </div>

            <div className="h-4 w-[1px] bg-white/10 dark:bg-white/5" />

            <div className="flex items-center gap-2" ref={menuRef}>
              {/* Access Button Group */}
              <div className="relative">
                <button
                  disabled={isPending}
                  onClick={() => setActiveMenu(activeMenu === "grant" ? null : "grant")}
                  className="flex items-center gap-1 text-[10px] uppercase font-bold tracking-wider hover:bg-white/10 dark:hover:bg-white/5 px-3 py-1.5 rounded-lg transition-colors"
                >
                  Grant Access
                  <ChevronUp className="size-3 opacity-60" />
                </button>

                {activeMenu === "grant" && (
                  <div className="absolute bottom-full mb-3 left-0 bg-white dark:bg-[var(--card)] text-[var(--charcoal-900)] dark:text-foreground rounded-xl shadow-xl border border-[var(--beige-200)] dark:border-white/10 p-1 min-w-[200px] flex flex-col z-50">
                    <span className="text-[9px] font-bold text-[var(--taupe-400)] uppercase tracking-wider p-2">
                      Select Course
                    </span>
                    {courses.map((course) => (
                      <button
                        key={course.id}
                        onClick={() => handleBulkEnrollment(course.id, "grant")}
                        className="text-left text-xs px-3 py-2 rounded-lg hover:bg-[var(--beige-50)] dark:hover:bg-white/5 transition-colors font-medium"
                      >
                        {course.title}
                      </button>
                    ))}
                  </div>
                )}
              </div>

              <div className="relative">
                <button
                  disabled={isPending}
                  onClick={() => setActiveMenu(activeMenu === "revoke" ? null : "revoke")}
                  className="flex items-center gap-1 text-[10px] uppercase font-bold tracking-wider hover:bg-white/10 dark:hover:bg-white/5 px-3 py-1.5 rounded-lg transition-colors"
                >
                  Revoke Access
                  <ChevronUp className="size-3 opacity-60" />
                </button>

                {activeMenu === "revoke" && (
                  <div className="absolute bottom-full mb-3 left-0 bg-white dark:bg-[var(--card)] text-[var(--charcoal-900)] dark:text-foreground rounded-xl shadow-xl border border-[var(--beige-200)] dark:border-white/10 p-1 min-w-[200px] flex flex-col z-50">
                    <span className="text-[9px] font-bold text-[var(--taupe-400)] uppercase tracking-wider p-2">
                      Select Course
                    </span>
                    {courses.map((course) => (
                      <button
                        key={course.id}
                        onClick={() => handleBulkEnrollment(course.id, "revoke")}
                        className="text-left text-xs px-3 py-2 rounded-lg hover:bg-[var(--beige-50)] dark:hover:bg-white/5 transition-colors font-medium"
                      >
                        {course.title}
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* Certificates Button Group */}
              <div className="relative">
                <button
                  disabled={isPending}
                  onClick={() => setActiveMenu(activeMenu === "cert-grant" ? null : "cert-grant")}
                  className="flex items-center gap-1 text-[10px] uppercase font-bold tracking-wider hover:bg-white/10 dark:hover:bg-white/5 px-3 py-1.5 rounded-lg transition-colors"
                >
                  Issue Cert
                  <ChevronUp className="size-3 opacity-60" />
                </button>

                {activeMenu === "cert-grant" && (
                  <div className="absolute bottom-full mb-3 left-0 bg-white dark:bg-[var(--card)] text-[var(--charcoal-900)] dark:text-foreground rounded-xl shadow-xl border border-[var(--beige-200)] dark:border-white/10 p-1 min-w-[200px] flex flex-col z-50">
                    <span className="text-[9px] font-bold text-[var(--taupe-400)] uppercase tracking-wider p-2">
                      Select Course
                    </span>
                    {courses.map((course) => (
                      <button
                        key={course.id}
                        onClick={() => handleBulkCertificates(course.id, "grant")}
                        className="text-left text-xs px-3 py-2 rounded-lg hover:bg-[var(--beige-50)] dark:hover:bg-white/5 transition-colors font-medium"
                      >
                        {course.title}
                      </button>
                    ))}
                  </div>
                )}
              </div>

              <div className="relative">
                <button
                  disabled={isPending}
                  onClick={() => setActiveMenu(activeMenu === "cert-revoke" ? null : "cert-revoke")}
                  className="flex items-center gap-1 text-[10px] uppercase font-bold tracking-wider hover:bg-white/10 dark:hover:bg-white/5 px-3 py-1.5 rounded-lg transition-colors"
                >
                  Revoke Cert
                  <ChevronUp className="size-3 opacity-60" />
                </button>

                {activeMenu === "cert-revoke" && (
                  <div className="absolute bottom-full mb-3 left-0 bg-white dark:bg-[var(--card)] text-[var(--charcoal-900)] dark:text-foreground rounded-xl shadow-xl border border-[var(--beige-200)] dark:border-white/10 p-1 min-w-[200px] flex flex-col z-50">
                    <span className="text-[9px] font-bold text-[var(--taupe-400)] uppercase tracking-wider p-2">
                      Select Course
                    </span>
                    {courses.map((course) => (
                      <button
                        key={course.id}
                        onClick={() => handleBulkCertificates(course.id, "revoke")}
                        className="text-left text-xs px-3 py-2 rounded-lg hover:bg-[var(--beige-50)] dark:hover:bg-white/5 transition-colors font-medium"
                      >
                        {course.title}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>

            <div className="h-4 w-[1px] bg-white/10 dark:bg-white/5" />

            {/* Cancel Selection */}
            <button
              onClick={() => setSelectedRows([])}
              className="p-1 hover:bg-white/10 dark:hover:bg-white/5 rounded-lg text-white/60 hover:text-white transition-colors"
            >
              <X className="size-4" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
