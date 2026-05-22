"use client";

import {
  Tabs,
  TabsList,
  TabsTrigger,
  TabsContents,
  TabsContent,
} from "@/components/animate-ui/components/radix/tabs";
import { ParticipantsTable } from "./participants-table";
import { ResponsesTable, type IntakeResponse } from "./responses-table";
import { type Participant, type Course } from "./columns";

interface Props {
  participants: Participant[];
  courses: Course[];
  intakeResponses: IntakeResponse[];
}

export function ParticipantsPageTabs({ participants, courses, intakeResponses }: Props) {
  return (
    <Tabs defaultValue="participants">
      <TabsList>
        <TabsTrigger value="participants">
          Participants
          <span className="ml-2 text-[10px] font-bold tabular-nums opacity-60">
            {participants.length}
          </span>
        </TabsTrigger>
        <TabsTrigger value="intake">
          Onboarding Responses
          <span className="ml-2 text-[10px] font-bold tabular-nums opacity-60">
            {intakeResponses.length}
          </span>
        </TabsTrigger>
      </TabsList>

      <TabsContents>
        <TabsContent value="participants">
          <div className="pt-2">
            <ParticipantsTable
              participants={participants}
              courses={courses}
              intakeResponses={intakeResponses}
            />
          </div>
        </TabsContent>

        <TabsContent value="intake">
          <div className="pt-2">
            <ResponsesTable responses={intakeResponses} />
          </div>
        </TabsContent>
      </TabsContents>
    </Tabs>
  );
}
