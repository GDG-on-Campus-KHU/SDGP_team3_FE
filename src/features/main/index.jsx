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
import { usePhotoModal } from "./model/usePhotoModal";
import PhotoDialog from "@/shared/ui/Modal/photoDialog";
import WrappedTabs from "./ui/Tabbar/wrappedTabs";

export default function Main() {
  const [challengeData, setChallengeData] = useState(CHALLENGE_MOCK_DATAS_1);
  const challengeIcon = CHALLENGE_ICONS;
  const [currentTab, setCurrentTab] = useState("진행 중인 챌린지");

  const {
    isOpen,
    open,
    close,
    challengeId,
    previewImage,
    setPreviewImage,
    handleChange,
  } = usePhotoModal();

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
      <section className="mt-[55px] h-[1px] w-full" />
      <WrappedTabs />
      <Footer />
      <PhotoDialog
        open={isOpen}
        onOpenChange={(val) => !val && close()}
        onChange={handleChange}
        previewImage={previewImage}
        setPreviewImage={setPreviewImage}
        title="인증 사진을 올려주세요"
        cancelText="다시 올리기"
        activeText={previewImage ? "인증하기" : "업로드하기"}
      />
    </>
  );
}
