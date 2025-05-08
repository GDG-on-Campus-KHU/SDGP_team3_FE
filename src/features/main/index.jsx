import React, { useState } from "react";
import Header from "../../shared/ui/header";
import Footer from "../../shared/ui/Footer/footer";
import { CHALLENGE_MOCK_DATAS_1 } from "../../shared/config/challengeConfig.js";
import { usePhotoModal } from "./model/usePhotoModal";
import PhotoDialog from "@/shared/ui/Modal/photoDialog";
import WrappedTabs from "./ui/Tabbar/wrappedTabs";
import { useEffect } from "react";
import { useChallengesStore } from "./model/store/useChallengesStore";
import Coupon from "./ui/Coupon/coupon";

export default function Main() {
  const {
    isOpen,
    open,
    close,
    setChallengeId,
    previewImage,
    setPreviewImage,
    handleChange,
  } = usePhotoModal();

  const { fetchChallenges } = useChallengesStore();

  // Todo : 서버 연결 시 주석 해제
  // useEffect(() => {
  //   fetchChallenges();
  // }, []);

  return (
    <>
      <Header />
      <section className="mt-[55px] h-[1px] w-full" />
      {/* <Coupon /> */}

      <div className="px-5 mb-6">
        <p className="text-body-02 text-black">지금까지 꾸욱 찍은 스탬프예요</p>
        <div className="h-36 bg-white rounded-2xl shadow-md"></div>
      </div>
      <WrappedTabs
        open={open}
        setChallengeId={setChallengeId}
        setPreviewImage={setPreviewImage}
      />
      <Footer />
      <PhotoDialog
        isOpen={isOpen}
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
