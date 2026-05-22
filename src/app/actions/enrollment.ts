"use server";

import { cookies } from "next/headers";
import { revalidatePath } from "next/cache";
import { createClient } from "@/utils/supabase/server";

export async function toggleEnrollment(
  participantId: string,
  courseId: string
): Promise<{ error: string | null }> {
  const cookieStore = await cookies();
  const supabase = createClient(cookieStore);

  const { data: existing } = await supabase
    .from("enrollments")
    .select("id")
    .eq("participant_id", participantId)
    .eq("course_id", courseId)
    .maybeSingle();

  if (existing) {
    const { error } = await supabase
      .from("enrollments")
      .delete()
      .eq("id", existing.id);
    if (error) return { error: error.message };
  } else {
    const { error } = await supabase
      .from("enrollments")
      .insert({ participant_id: participantId, course_id: courseId });
    if (error) return { error: error.message };
  }

  revalidatePath("/admin/participants");
  return { error: null };
}

export async function bulkToggleEnrollment(
  participantIds: string[],
  courseId: string,
  action: "grant" | "revoke"
): Promise<{ error: string | null }> {
  const cookieStore = await cookies();
  const supabase = createClient(cookieStore);

  if (action === "revoke") {
    const { error } = await supabase
      .from("enrollments")
      .delete()
      .in("participant_id", participantIds)
      .eq("course_id", courseId);
    if (error) return { error: error.message };
  } else {
    const { data: existing } = await supabase
      .from("enrollments")
      .select("participant_id")
      .in("participant_id", participantIds)
      .eq("course_id", courseId);

    const existingIds = new Set((existing ?? []).map((e) => e.participant_id));
    const toInsert = participantIds
      .filter((id) => !existingIds.has(id))
      .map((id) => ({ participant_id: id, course_id: courseId }));

    if (toInsert.length > 0) {
      const { error } = await supabase.from("enrollments").insert(toInsert);
      if (error) return { error: error.message };
    }
  }

  revalidatePath("/admin/participants");
  return { error: null };
}

