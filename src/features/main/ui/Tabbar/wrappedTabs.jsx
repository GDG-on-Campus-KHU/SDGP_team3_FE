import React, { useRef, useState } from "react";
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

  const scrollRef = useRef(null);

  const handleStampClick = (id) => {
    setChallengeId(id);
    setPreviewImage(null);
    open();
  };

  const handleTabClick = (tab) => {
    setCurrentTab(tab);
    if (scrollRef.current) {
      scrollRef.current.scrollTop = 0;
    }
  };

  const { challenges } = useChallengesStore();

  return (
    <Tabs
      className=" h-dvh max-w-[600px] pt-1 border !border-t-gray-100 !border-t-2 border-transparent"
      defaultValue="진행 중인 챌린지"
    >
      <TabsList className="sticky top-14 max-w-[600px] px-5 bg-background z-bar">
        <TabsTrigger
          value="진행 중인 챌린지"
          onClick={() => {
            handleTabClick("진행 중인 챌린지");
          }}
        >
          진행 중인 챌린지
        </TabsTrigger>
        <TabsTrigger
          value="완료한 챌린지"
          onClick={() => {
            handleTabClick("완료한 챌린지");
          }}
        >
          완료한 챌린지
        </TabsTrigger>
      </TabsList>
      <div
        ref={scrollRef}
        className="flex-1 px-5 pt-3 !pb-24 overflow-y-auto scrollbar-hide h-[56dvh]"
      >
        <div className="flex flex-col justify-start gap-4 w-full h-auto">
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
