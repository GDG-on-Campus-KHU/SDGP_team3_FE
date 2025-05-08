import React from "react";
import ChallengeCard from "@/shared/ui/ChallengeCard";
import { TabsContent } from "./Tabbar/tabs";

export default function ChallengeList({
  list = [],
  icons,
  onStampClick,
  currentTab,
}) {
  const safeList = Array.isArray(list) ? list : [];

  const filteredList = safeList.filter((challenge) =>
    currentTab === "진행 중인 챌린지" ? !challenge.is_done : challenge.is_done
  );
  return (
    <>
      {filteredList.map((challenge) => (
        <TabsContent className="pb-1" key={challenge.id} value={currentTab}>
          <ChallengeCard challenge={challenge} onStampClick={onStampClick} />
        </TabsContent>
      ))}
    </>
  );
}
