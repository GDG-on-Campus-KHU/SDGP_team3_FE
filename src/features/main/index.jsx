import React from "react";
import Header from "../../shared/ui/header";
import Footer from "../../shared/ui/Footer/footer";
import {
  CHALLENGE_ICONS,
  CHALLENGE_MOCK_DATAS_1,
  CHALLENGE_MOCK_DATAS_2,
} from "../../shared/config/challengeConfig.js";
import ChallengeList from "./ui/challengeList.jsx";
import { useState } from "react";
import Tabbar from "./ui/tabbar.jsx";

export default function Main() {
  const [challengeData, setChallengeData] = useState(CHALLENGE_MOCK_DATAS_1);
  const challengeIcon = CHALLENGE_ICONS;
  const [currentTab, setCurrentTab] = useState("진행 중인 챌린지");

  const handleTabClick = () => {
    if (currentTab === "진행 중인 챌린지") {
      // 완료된 챌린지 탭을 눌렀을 경우
      setCurrentTab("완료된 챌린지");
      setChallengeData(CHALLENGE_MOCK_DATAS_2);
    } else {
      // 진행 중인 챌린지 탭을 눌렀을 경우
      setCurrentTab("진행 중인 챌린지");
      setChallengeData(CHALLENGE_MOCK_DATAS_1);
    }
  };

  return (
    <>
      <Header />
      <section className="mt-14 h-[1px] bg-gray-300 w-full" />
      <Tabbar currentTab={currentTab} handleTabClick={handleTabClick} />{" "}
      <div className="flex-1 overflow-auto scrollbar-hide p-5 !pb-28">
        <div className="flex flex-col justify-center gap-4 w-full ">
          <ChallengeList list={challengeData} icons={challengeIcon} />
        </div>
      </div>
      <Footer />
    </>
  );
}
