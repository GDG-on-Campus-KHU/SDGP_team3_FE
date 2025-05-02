import React from "react";
import ChallengeCard from "@/shared/ui/ChallengeCard";
import { TabsContent } from "./Tabbar/tabs";

export default function ChallengeList({
  list,
  icons,
  onStampClick,
  currentTab,
}) {
  return (
    <>
      {list.map((challenge, index) => {
        return (
          <TabsContent className="pb-1" key={challenge.id} value={currentTab}>
            <ChallengeCard challenge={challenge} onStampClick={onStampClick} />
          </TabsContent>
        );
      })}
    </>
  );
}
