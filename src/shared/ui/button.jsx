import { Button } from "@material-tailwind/react";
import clsx from "clsx";

const buttonVariants = {
  default: "bg-green-500 text-white",
  cancel: "bg-gray-300 text-white",
};

const defaultStyle =
  "flex justify-center items-center py-[10px] px-11 rounded-lg w-fit !text-body-02 shadow-md";

/**
 * 공통 컴포넌트 - Button
 * @param {string} [variant] - 버튼의 종류 (default: 기본, cancel: 취소)
 * @param {string} [className] - 추가 버튼 스타일
 * @param {boolean = true} [disabled] - 비활성화 시 추가
 *
 * @example
 *    <Btn>시작할래요</Btn> // default button
 *    <Btn variant="cancel">시작할래요</Btn> // cancel button
 *    <Btn disabled>비활성화 테스트</Btn> // disabled button
 * @returns
 */
export function Btn({ variant = "default", className, disabled, ...props }) {
  return (
    <Button
      className={clsx(
        buttonVariants[variant],
        className,
        defaultStyle,
        "disabled:bg-gray-500 disabled:text-gray-700 disabled:cursor-not-allowed"
      )}
      disabled={disabled}
      {...props}
    ></Button>
  );
}
