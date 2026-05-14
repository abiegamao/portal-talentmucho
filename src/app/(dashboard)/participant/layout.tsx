import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { createClient } from "@/utils/supabase/server";
import { ParticipantShell } from "@/components/dashboard/participant-shell";

export default async function ParticipantLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const cookieStore = await cookies();
  const supabase = createClient(cookieStore);
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) redirect("/login");

  const fullName =
    user.user_metadata?.full_name ||
    user.email?.split("@")[0] ||
    "Participant";
  const email = user.email ?? "";

  return (
    <ParticipantShell fullName={fullName} email={email}>
      {children}
    </ParticipantShell>
  );
}
