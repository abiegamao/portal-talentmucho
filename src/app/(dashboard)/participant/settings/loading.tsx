import { Loader2 } from "lucide-react";

export default function Loading() {
  return (
    <div className="p-8 h-full flex flex-col items-center justify-center text-[var(--taupe-400)]">
      <Loader2 className="size-8 animate-spin mb-4 text-[var(--clay-500)]" />
      <p className="text-sm">Loading settings...</p>
    </div>
  );
}
