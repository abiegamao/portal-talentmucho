"use client";

import { usePathname } from "next/navigation";
import { Sun, Moon, Bell, Menu } from "lucide-react";
import { useTheme } from "next-themes";

const PAGE_TITLES: Record<string, string> = {
  "/participant": "Dashboard",
  "/participant/courses": "My Courses",
  "/participant/progress": "Progress",
  "/participant/certificates": "Certificates",
};

interface Props {
  fullName: string;
  onMenuClick: () => void;
}

export function ParticipantTopbar({ fullName, onMenuClick }: Props) {
  const pathname = usePathname();
  const { resolvedTheme, setTheme } = useTheme();
  const title = PAGE_TITLES[pathname] ?? "Dashboard";
  const initials = fullName
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase()
    .slice(0, 2);

  return (
    <header
      className="shrink-0 h-14 md:h-16 bg-white dark:bg-[var(--card)] md:rounded-2xl border-b border-[var(--beige-200)] dark:border-[var(--border)] md:border flex items-center px-4 md:px-6 gap-3"
      style={{ boxShadow: "0 2px 12px -2px rgb(61 53 46 / 0.07)" }}
    >
      {/* Hamburger — mobile only */}
      <button
        onClick={onMenuClick}
        className="md:hidden w-9 h-9 rounded-xl flex items-center justify-center text-[var(--taupe-400)] hover:bg-[var(--beige-100)] dark:hover:bg-[var(--accent)] transition-all"
        aria-label="Open menu"
      >
        <Menu className="size-5" />
      </button>

      <h1
        className="flex-1 font-serif font-light text-[var(--charcoal-900)] dark:text-foreground"
        style={{ fontSize: "clamp(1rem, 2vw, 1.35rem)" }}
      >
        {title}
      </h1>

      <div className="flex items-center gap-1">
        {/* Theme toggle */}
        <button
          onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
          className="w-9 h-9 rounded-xl flex items-center justify-center text-[var(--taupe-400)] hover:bg-[var(--beige-100)] dark:hover:bg-[var(--accent)] hover:text-[var(--espresso-700)] dark:hover:text-foreground transition-all duration-150"
          aria-label="Toggle theme"
        >
          {resolvedTheme === "dark" ? (
            <Sun className="size-4" />
          ) : (
            <Moon className="size-4" />
          )}
        </button>

        {/* Notifications */}
        <button
          className="w-9 h-9 rounded-xl flex items-center justify-center text-[var(--taupe-400)] hover:bg-[var(--beige-100)] dark:hover:bg-[var(--accent)] hover:text-[var(--espresso-700)] dark:hover:text-foreground transition-all duration-150"
          aria-label="Notifications"
        >
          <Bell className="size-4" />
        </button>

        {/* User chip */}
        <div className="flex items-center gap-2 pl-2 ml-1 border-l border-[var(--beige-200)] dark:border-[var(--border)]">
          <span className="text-sm font-medium text-[var(--espresso-800)] dark:text-foreground hidden sm:block">
            {fullName.split(" ")[0]}
          </span>
          <div className="w-8 h-8 rounded-full bg-[var(--beige-200)] dark:bg-[var(--accent)] flex items-center justify-center shrink-0">
            <span className="text-xs font-semibold text-[var(--espresso-700)] dark:text-foreground">
              {initials}
            </span>
          </div>
        </div>
      </div>
    </header>
  );
}
