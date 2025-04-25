import React from "react";
import Header from "../../shared/ui/header";
import { Btn } from "../../shared/ui/button";
import Footer from "../../shared/ui/Footer/footer";
import ProgressBar from "../../shared/ui/progressBar";
import { Progress } from "@material-tailwind/react";
import Toast from "../../shared/ui/toast";
import { useToast } from "../../shared/model/useToast";

export default function Main() {
  const { isToastVisible, openToast, closeToast } = useToast();
  return (
    <>
      <Header />
      <Header variant="create" title="챌린지 생성하기" />
      <Btn variant="cancel">시작할래요</Btn>
      <Btn>시작할래요</Btn>
      <Btn disabled>비활성화 테스트</Btn>
      <ProgressBar currentValue={5} maxValue={6} />
      <Btn onClick={() => openToast()}>asdf</Btn>
      <Toast
        isToastVisible={isToastVisible}
        closeToast={closeToast}
        description="인증에 성공하여 도장을 꾸욱 찍었어요!"
      />
      <Footer />
    </>
  );
}
