import React, { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./tabs";
import {
  CHALLENGE_ICONS,
  CHALLENGE_MOCK_DATAS_1,
} from "@/shared/config/challengeConfig";
import ChallengeList from "../challengeList";
import { useChallengesStore } from "../../model/store/useChallengesStore";

export default function WrappedTabs({ open, setChallengeId, setPreviewImage }) {
  const challengeIcon = CHALLENGE_ICONS;
  const [currentTab, setCurrentTab] = useState("진행 중인 챌린지");

  const handleStampClick = (id) => {
    setChallengeId(id);
    setPreviewImage(null);
    open();
  };

  const { challenges } = useChallengesStore();

  return (
    <Tabs className="h-dvh max-w-[600px]" defaultValue="진행 중인 챌린지">
      <TabsList className="fixed max-w-[600px] z-bar">
        <TabsTrigger
          value="진행 중인 챌린지"
          onClick={() => {
            setCurrentTab("진행 중인 챌린지");
          }}
        >
          진행 중인 챌린지
        </TabsTrigger>
        <TabsTrigger
          value="완료한 챌린지"
          onClick={() => {
            setCurrentTab("완료한 챌린지");
          }}
        >
          완료한 챌린지
        </TabsTrigger>
      </TabsList>
      <div className="flex-1 px-5 !pb-24 pt-12 overflow-x-auto scrollbar-hide ">
        <div className="flex flex-col justify-center gap-4 w-full h-[90%]">
          <ChallengeList
            list={challenges}
            icons={challengeIcon}
            onStampClick={handleStampClick}
            currentTab={currentTab}
          />
        </div>
      </div>
    </Tabs>
  );
}
