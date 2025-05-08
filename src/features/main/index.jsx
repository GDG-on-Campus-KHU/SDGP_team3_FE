import React, { useEffect, useState } from "react";
import Header from "../../shared/ui/header";
import Footer from "../../shared/ui/Footer/footer";
import { usePhotoModal } from "./model/usePhotoModal";
import PhotoDialog from "@/shared/ui/Modal/photoDialog";
import WrappedTabs from "./ui/Tabbar/wrappedTabs";
import { useChallengesStore } from "./model/store/useChallengesStore";
import Coupon from "./ui/Coupon/coupon";
import { useStampsStore } from "./model/store/useStampsStore";
import Toast from "@/shared/ui/toast";
import { useToast } from "@/shared/model/useToast";

export default function Main() {
  const {
    isOpen,
    setIsOpen,
    open,
    close,
    chooseChallenge,
    setChooseChallenge,
    previewImage,
    setPreviewImage,
    handleChange,
    photoFile,
  } = usePhotoModal();

  const { fetchChallenges } = useChallengesStore();
  const { stamps, fetchStamps } = useStampsStore();

  // Todo : 서버 연결 시 주석 해제
  useEffect(() => {
    fetchChallenges();
    // fetchStamps();
  }, []);

  const handleStampClick = (id, type) => {
    const challengeData = { id, type };
    setChooseChallenge(challengeData);
    setPreviewImage(null);
    open(id, type);
  };

  const { isToastVisible, openToast, closeToast } = useToast();

  return (
    <>
      <Header />
      <section className="mt-[55px] h-[1px] w-full" />
      <Coupon stamps={stamps} />
      <WrappedTabs
        open={open}
        chooseChallenge={chooseChallenge}
        setChooseChallenge={setChooseChallenge}
        setPreviewImage={setPreviewImage}
        handleStampClick={handleStampClick}
      />
      <Footer />
      <PhotoDialog
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        onOpenChange={(val) => {
          if (!val) close();
        }}
        onChange={handleChange}
        previewImage={previewImage}
        setPreviewImage={setPreviewImage}
        chooseChallenge={chooseChallenge}
        photoFile={photoFile}
        openToast={openToast}
        title="인증 사진을 올려주세요"
        cancelText="다시 올리기"
        activeText={previewImage ? "인증하기" : "업로드하기"}
      />
      <Toast
        isToastVisible={isToastVisible}
        closeToast={closeToast}
        description="인증에 성공하여 도장을 꾸욱 찍었어요!"
      />
    </>
  );
}
