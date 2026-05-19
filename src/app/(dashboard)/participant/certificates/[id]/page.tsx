import { cookies } from "next/headers";
import { createClient } from "@/utils/supabase/server";
import { notFound } from "next/navigation";
import { CertificateView } from "./certificate-view";

export default async function CertificatePage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const cookieStore = await cookies();
  const supabase = createClient(cookieStore);

  const {
    data: { user },
  } = await supabase.auth.getUser();

  const { data: cert } = await supabase
    .from("certificates")
    .select("id, certificate_number, issued_at, courses(title, slug, description)")
    .eq("id", id)
    .eq("participant_id", user?.id ?? "")
    .single();

  if (!cert) notFound();

  const participantName =
    user?.user_metadata?.full_name ?? user?.email ?? "Participant";

  type CertRow = {
    certificate_number: string;
    issued_at: string;
    courses?: { title: string; slug: string; description: string | null } | null;
  };

  const c = cert as CertRow;

  return (
    <div className="p-6 md:p-8">
      <CertificateView
        certificateNumber={c.certificate_number}
        issuedAt={c.issued_at}
        participantName={participantName}
        courseTitle={c.courses?.title ?? ""}
        courseSlug={c.courses?.slug ?? ""}
        courseDescription={c.courses?.description ?? null}
      />
    </div>
  );
}
