import React, { useState } from "react";
import Header from "../../shared/ui/header";
import Footer from "../../shared/ui/Footer/footer";
import { CHALLENGE_MOCK_DATAS_1 } from "../../shared/config/challengeConfig.js";
import { usePhotoModal } from "./model/usePhotoModal";
import PhotoDialog from "@/shared/ui/Modal/photoDialog";
import WrappedTabs from "./ui/Tabbar/wrappedTabs";

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

  return (
    <>
      <Header />
      <section className="mt-[55px] h-[1px] w-full" />
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
