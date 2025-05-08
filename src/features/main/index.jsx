import React, { useEffect, useState } from "react";
import Header from "../../shared/ui/header";
import Footer from "../../shared/ui/Footer/footer";
import { usePhotoModal } from "./model/usePhotoModal";
import PhotoDialog from "@/shared/ui/Modal/photoDialog";
import WrappedTabs from "./ui/Tabbar/wrappedTabs";
import { useChallengesStore } from "./model/store/useChallengesStore";
import Coupon from "./ui/Coupon/coupon";
import { useStampsStore } from "./model/store/useStampsStore";

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
  const { stamps, fetchStamps } = useStampsStore();

  // Todo : 서버 연결 시 주석 해제
  useEffect(() => {
    fetchChallenges();
    fetchStamps();
  }, []);

  return (
    <>
      <Header />
      <section className="mt-[55px] h-[1px] w-full" />
      <Coupon stamps={stamps} />
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
