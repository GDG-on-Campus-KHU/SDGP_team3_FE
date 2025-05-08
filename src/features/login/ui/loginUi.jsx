import { GoogleLogin } from "@react-oauth/google";
import React from "react";
import GoogleAuthLogin from "./googleLogin";

export default function LoginUi({ onClick }) {
  return (
    <section className="flex flex-col mb-16 gap-7 justify-center items-center">
      <img className="w-44 -mb-16" src="/icons/logo/logo-kr.svg" alt="로고" />
      <button className="flex justify-center items-center gap-2 w-60 h-12 border border-gray-300 rounded-lg active:bg-gray-100">
        <img className="h-6" src="/icons/login/googleIcon.svg" alt="로고" />
        <p className="text-body-01 text-black" onClick={onClick}>
          구글로 로그인하기
        </p>
      </button>
      {/* <GoogleAuthLogin /> */}
    </section>
  );
}
