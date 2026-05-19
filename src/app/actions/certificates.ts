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
