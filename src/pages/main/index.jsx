import React from "react";
import Header from "../../shared/ui/header";
import { Btn } from "../../shared/ui/button";
import Footer from "../../shared/ui/Footer/footer";

export default function Main() {
  return (
    <>
      <Header />
      <Header variant="create" title="챌린지 생성하기" />
      <Btn variant="cancel">시작할래요</Btn>
      <Btn>시작할래요</Btn>
      <Btn disabled>비활성화 테스트</Btn>

      <Footer />
    </>
  );
}
