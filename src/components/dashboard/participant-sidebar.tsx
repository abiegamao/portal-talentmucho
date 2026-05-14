"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  BookOpen,
  BarChart2,
  Award,
  X,
} from "lucide-react";

const nav = [
  { href: "/participant", label: "Dashboard", icon: LayoutDashboard },
  { href: "/participant/courses", label: "My Courses", icon: BookOpen },
  { href: "/participant/progress", label: "Progress", icon: BarChart2 },
  { href: "/participant/certificates", label: "Certificates", icon: Award },
];

interface Props {
  onClose?: () => void;
}

export function ParticipantSidebar({ onClose }: Props) {
  const pathname = usePathname();

  return (
    <aside
      className="h-full flex flex-col rounded-r-3xl md:rounded-3xl overflow-hidden"
      style={{
        background: "var(--charcoal-900)",
        boxShadow:
          "0 8px 32px -4px rgb(0 0 0 / 0.30), inset -1px 0 0 rgb(255 255 255 / 0.04)",
      }}
    >
      {/* Brand */}
      <div
        className="px-6 pt-7 pb-5 flex items-start justify-between"
        style={{ borderBottom: "1px solid rgb(255 255 255 / 0.08)" }}
      >
        <div>
          <span
            className="block mb-1.5 text-xs font-semibold tracking-widest uppercase"
            style={{ color: "var(--clay-500)" }}
          >
            AI Bootcamp
          </span>
          <span
            className="font-serif font-light"
            style={{ fontSize: "1.25rem", color: "var(--beige-50)" }}
          >
            TalentMucho
          </span>
        </div>
        {onClose && (
          <button
            onClick={onClose}
            className="md:hidden w-8 h-8 rounded-xl flex items-center justify-center transition-colors"
            style={{ color: "rgb(255 255 255 / 0.4)" }}
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
              className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-all duration-150"
              style={{
                background: active ? "rgb(255 255 255 / 0.08)" : "transparent",
                color: active ? "rgb(255 255 255 / 0.95)" : "rgb(255 255 255 / 0.45)",
              }}
              onMouseEnter={(e) => {
                if (!active)
                  (e.currentTarget as HTMLElement).style.background =
                    "rgb(255 255 255 / 0.05)";
                (e.currentTarget as HTMLElement).style.color =
                  active ? "rgb(255 255 255 / 0.95)" : "rgb(255 255 255 / 0.70)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.background = active
                  ? "rgb(255 255 255 / 0.08)"
                  : "transparent";
                (e.currentTarget as HTMLElement).style.color = active
                  ? "rgb(255 255 255 / 0.95)"
                  : "rgb(255 255 255 / 0.45)";
              }}
            >
              <Icon
                className="size-4 shrink-0"
                style={{ color: active ? "var(--clay-500)" : "inherit" }}
              />
              <span className="flex-1">{label}</span>
              {active && (
                <span
                  className="w-1.5 h-1.5 rounded-full shrink-0"
                  style={{ background: "var(--clay-500)" }}
                />
              )}
            </Link>
          );
        })}
      </nav>

      {/* Bottom decoration */}
      <div
        className="px-6 py-5"
        style={{ borderTop: "1px solid rgb(255 255 255 / 0.06)" }}
      >
        <p
          className="text-xs leading-relaxed"
          style={{ color: "rgb(255 255 255 / 0.2)" }}
        >
          Claude AI Bootcamp
          <br />
          by TalentMucho
        </p>
      </div>
    </aside>
  );
}
