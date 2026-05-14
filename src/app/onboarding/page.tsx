import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { createClient } from "@/utils/supabase/server";
import CohortIntakeForm from "@/components/cohort1/CohortIntakeForm";

export const metadata = {
  title: "Getting Started · TalentMucho",
  robots: { index: false },
};

export default async function OnboardingPage() {
  const cookieStore = await cookies();
  const supabase = createClient(cookieStore);

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) redirect("/login");

  const { data: intake } = await supabase
    .from("intake_responses")
    .select("user_id")
    .eq("user_id", user.id)
    .maybeSingle();

  if (intake) redirect("/participant");

  return (
    <div className="min-h-screen flex flex-col">
      <CohortIntakeForm onboardingMode />
    </div>
  );
}
