import React, { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./tabs";
import {
  CHALLENGE_ICONS,
  CHALLENGE_MOCK_DATAS_1,
  CHALLENGE_MOCK_DATAS_2,
} from "@/shared/config/challengeConfig";
import ChallengeList from "../challengeList";

export default function WrappedTabs() {
  const [challengeData, setChallengeData] = useState(CHALLENGE_MOCK_DATAS_1);
  const challengeIcon = CHALLENGE_ICONS;

  const [currentTab, setCurrentTab] = useState("진행 중인 챌린지");

  return (
    <Tabs className="h-dvh max-w-[600px]" defaultValue="진행 중인 챌린지">
      <TabsList className="fixed max-w-[600px] z-bar">
        <TabsTrigger
          value="진행 중인 챌린지"
          onClick={() => {
            setCurrentTab("진행 중인 챌린지");
            setChallengeData(CHALLENGE_MOCK_DATAS_1);
          }}
        >
          진행 중인 챌린지
        </TabsTrigger>
        <TabsTrigger
          value="완료한 챌린지"
          onClick={() => {
            setCurrentTab("완료한 챌린지");
            setChallengeData(CHALLENGE_MOCK_DATAS_2);
          }}
        >
          완료한 챌린지
        </TabsTrigger>
      </TabsList>
      <div className="flex-1 px-5 !pb-24 pt-12 overflow-x-auto scrollbar-hide ">
        <div className="flex flex-col justify-center gap-4 w-full h-[90%]">
          <ChallengeList
            list={challengeData}
            icons={challengeIcon}
            onStampClick={open}
            currentTab={currentTab}
          />
        </div>
        <div className="flex flex-col justify-center gap-4 w-full"></div>
      </div>
    </Tabs>
  );
}
