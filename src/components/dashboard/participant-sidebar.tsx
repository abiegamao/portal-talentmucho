"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { logout } from "@/app/actions/auth";
import {
  LayoutDashboard,
  BookOpen,
  BarChart2,
  Award,
  LogOut,
  X,
} from "lucide-react";

const nav = [
  { href: "/participant", label: "Dashboard", icon: LayoutDashboard },
  { href: "/participant/courses", label: "My Courses", icon: BookOpen },
  { href: "/participant/progress", label: "Progress", icon: BarChart2 },
  { href: "/participant/certificates", label: "Certificates", icon: Award },
];

interface Props {
  fullName: string;
  email: string;
  onClose?: () => void;
}

export function ParticipantSidebar({ fullName, email, onClose }: Props) {
  const pathname = usePathname();
  const initials = fullName
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase()
    .slice(0, 2);

  return (
    <aside
      className="h-full flex flex-col bg-white dark:bg-[var(--card)] rounded-r-3xl md:rounded-3xl border-r border-[var(--beige-200)] dark:border-[var(--border)] md:border overflow-hidden"
      style={{ boxShadow: "0 4px 24px -4px rgb(61 53 46 / 0.10), 0 1px 4px -1px rgb(61 53 46 / 0.06)" }}
    >
      {/* Brand */}
      <div className="px-6 pt-7 pb-5 border-b border-[var(--beige-100)] dark:border-[var(--border)] flex items-start justify-between">
        <div>
          <span className="tm-eyebrow block mb-1.5">AI Bootcamp</span>
          <span
            className="font-serif font-light text-[var(--charcoal-900)] dark:text-foreground"
            style={{ fontSize: "1.25rem" }}
          >
            TalentMucho
          </span>
        </div>
        {/* Mobile close button */}
        {onClose && (
          <button
            onClick={onClose}
            className="md:hidden w-8 h-8 rounded-xl flex items-center justify-center text-[var(--taupe-400)] hover:bg-[var(--beige-100)] transition-colors"
            aria-label="Close menu"
          >
            <X className="size-4" />
          </button>
        )}
      </div>

      {/* Nav */}
      <nav className="flex-1 px-3 py-4 space-y-0.5 overflow-y-auto">
        {nav.map(({ href, label, icon: Icon }) => {
          const active = pathname === href;
          return (
            <Link
              key={href}
              href={href}
              onClick={onClose}
              className={[
                "flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-all duration-150",
                active
                  ? "bg-[var(--beige-100)] dark:bg-[var(--accent)] text-[var(--espresso-800)] dark:text-foreground"
                  : "text-[var(--taupe-400)] hover:bg-[var(--beige-50)] dark:hover:bg-[var(--accent)] hover:text-[var(--espresso-700)] dark:hover:text-foreground",
              ].join(" ")}
            >
              <Icon
                className={[
                  "size-4 shrink-0 transition-colors",
                  active ? "text-[var(--clay-500)]" : "",
                ].join(" ")}
              />
              <span className="flex-1">{label}</span>
              {active && (
                <span className="w-1.5 h-1.5 rounded-full bg-[var(--clay-500)] shrink-0" />
              )}
            </Link>
          );
        })}
      </nav>

      {/* User */}
      <div className="px-3 py-3 border-t border-[var(--beige-100)] dark:border-[var(--border)] space-y-0.5">
        <div className="flex items-center gap-2.5 px-3 py-2 rounded-xl">
          <div className="w-8 h-8 rounded-full bg-[var(--beige-200)] dark:bg-[var(--accent)] flex items-center justify-center shrink-0">
            <span className="text-xs font-semibold text-[var(--espresso-700)] dark:text-foreground">
              {initials}
            </span>
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-xs font-semibold text-[var(--charcoal-900)] dark:text-foreground truncate">
              {fullName}
            </p>
            <p className="text-xs text-[var(--taupe-400)] truncate">{email}</p>
          </div>
        </div>

        <form action={logout}>
          <button
            type="submit"
            className="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm text-[var(--taupe-400)] hover:bg-red-50 dark:hover:bg-red-950/30 hover:text-red-500 transition-all duration-150"
          >
            <LogOut className="size-4 shrink-0" />
            Sign out
          </button>
        </form>
      </div>
    </aside>
  );
}
