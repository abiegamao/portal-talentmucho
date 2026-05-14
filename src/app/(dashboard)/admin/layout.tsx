import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { createClient } from "@/utils/supabase/server";
import { AdminShell } from "@/components/dashboard/admin-shell";

export default async function AdminLayout({
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
    "Admin";
  const email = user.email ?? "";

  return (
    <AdminShell fullName={fullName} email={email}>
      {children}
    </AdminShell>
  );
}
