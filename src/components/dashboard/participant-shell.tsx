"use client";

import { useState } from "react";
import { ParticipantSidebar } from "./participant-sidebar";
import { ParticipantTopbar } from "./participant-topbar";

interface Props {
  fullName: string;
  email: string;
  children: React.ReactNode;
}

export function ParticipantShell({ fullName, email, children }: Props) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex h-[100dvh] bg-[var(--beige-50)] dark:bg-background overflow-hidden md:p-3 md:gap-3">
      {/* Mobile backdrop */}
      <div
        className={[
          "fixed inset-0 z-40 bg-black/20 backdrop-blur-sm md:hidden transition-opacity duration-300",
          sidebarOpen ? "opacity-100" : "opacity-0 pointer-events-none",
        ].join(" ")}
        onClick={() => setSidebarOpen(false)}
      />

      {/* Sidebar — drawer on mobile, static on desktop */}
      <div
        className={[
          "fixed inset-y-0 left-0 z-50 w-72",
          "md:relative md:z-auto md:w-60 md:shrink-0 md:inset-auto",
          "transition-transform duration-300 ease-in-out",
          sidebarOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0",
        ].join(" ")}
      >
        <ParticipantSidebar
          fullName={fullName}
          email={email}
          onClose={() => setSidebarOpen(false)}
        />
      </div>

      {/* Right col */}
      <div className="flex-1 flex flex-col min-w-0 overflow-hidden gap-0 md:gap-3">
        <ParticipantTopbar
          fullName={fullName}
          onMenuClick={() => setSidebarOpen((o) => !o)}
        />
        <main
          className="flex-1 bg-white dark:bg-[var(--card)] overflow-y-auto md:rounded-3xl md:border md:border-[var(--beige-200)] dark:md:border-[var(--border)]"
          style={{ boxShadow: "0 2px 12px -2px rgb(61 53 46 / 0.05)" }}
        >
          {children}
        </main>
      </div>
    </div>
  );
}
