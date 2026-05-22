"use server";

import { cookies } from "next/headers";
import { createClient } from "@/utils/supabase/server";
import { revalidatePath } from "next/cache";

export async function issueCertificate(participantId: string, courseId: string) {
  const cookieStore = await cookies();
  const supabase = createClient(cookieStore);

  const {
    data: { user },
  } = await supabase.auth.getUser();
  if (!user) return { error: "Not authenticated" };

  const { error } = await supabase.from("certificates").insert({
    participant_id: participantId,
    course_id: courseId,
    issued_by: user.id,
  });

  if (error) return { error: error.message };
  revalidatePath("/admin/participants");
  return { success: true };
}

export async function revokeCertificate(participantId: string, courseId: string) {
  const cookieStore = await cookies();
  const supabase = createClient(cookieStore);

  const { error } = await supabase
    .from("certificates")
    .delete()
    .eq("participant_id", participantId)
    .eq("course_id", courseId);

  if (error) return { error: error.message };
  revalidatePath("/admin/participants");
  return { success: true };
}

export async function bulkToggleCertificates(
  participantIds: string[],
  courseId: string,
  action: "grant" | "revoke"
): Promise<{ error: string | null }> {
  const cookieStore = await cookies();
  const supabase = createClient(cookieStore);

  const {
    data: { user },
  } = await supabase.auth.getUser();
  if (!user) return { error: "Not authenticated" };

  if (action === "revoke") {
    const { error } = await supabase
      .from("certificates")
      .delete()
      .in("participant_id", participantIds)
      .eq("course_id", courseId);
    if (error) return { error: error.message };
  } else {
    const { data: existing } = await supabase
      .from("certificates")
      .select("participant_id")
      .in("participant_id", participantIds)
      .eq("course_id", courseId);

    const existingIds = new Set((existing ?? []).map((c) => c.participant_id));
    const toInsert = participantIds
      .filter((id) => !existingIds.has(id))
      .map((id) => ({
        participant_id: id,
        course_id: courseId,
        issued_by: user.id,
      }));

    if (toInsert.length > 0) {
      const { error } = await supabase.from("certificates").insert(toInsert);
      if (error) return { error: error.message };
    }
  }

  revalidatePath("/admin/participants");
  return { error: null };
}

