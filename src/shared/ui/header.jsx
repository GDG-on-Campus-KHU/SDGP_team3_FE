import { Navbar } from "@material-tailwind/react";
import clsx from "clsx";
import React from "react";
import { usePageBack } from "../model/usePageBack";
import { useNavigate } from "react-router-dom";

const HeaderVariants = {
  main: "flex pl-5",
  create: "justify-center",
};

const defaultStyle =
  "p-0 fixed w-full h-14 text-black flex items-center shadow-none border-none max-w-[600px] bg-background z-bar rounded-none";

/**
 * 공통 컴포넌트 - Header
 * @param {string} [variant] - 헤더의 종류 (default: 홈화면, create: 챌린지 생성 화면)
 * @param {string} [className] - 추가 헤더 스타일
 * @param {string} [title] - 헤더 제목
 *
 * @example
 *    <Header /> // 홈화면의 헤더
 *    <Header variant="create" title="챌린지 생성하기" /> // 챌린지 생성 화면의 헤더
 */

export default function Header({
  variant = "main",
  className,
  title,
  ...props
}) {
  const navigate = useNavigate();
  const handleBack = usePageBack();
  const goToMain = () => navigate("/");

  return (
    <Navbar className={clsx(className, defaultStyle)} {...props}>
      <header
        className={clsx(
          HeaderVariants[variant],
          "relative w-full h-full flex items-center"
        )}
      >
        {variant === "main" && (
          <img
            src="/icons/prevIcon.svg"
            alt="로고 아이콘"
            className=" cursor-pointer"
            onClick={() => goToMain()}
          /> // 추후 로고로 변경 예정
        )}
        <p className="!text-body-01 text-black">{title}</p>
        {variant === "create" && (
          <img
            className="absolute left-5 cursor-pointer"
            src="/icons/prevIcon.svg"
            alt="이전 아이콘"
            onClick={handleBack}
          />
        )}
      </header>
    </Navbar>
  );
}
