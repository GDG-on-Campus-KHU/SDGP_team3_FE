import { GoogleLogin } from "@react-oauth/google";
import React from "react";
import GoogleAuthLogin from "./googleLogin";

export default function LoginUi() {
  return (
    <section className="flex flex-col gap-7">
      <img className="h-12" src="/icons/logo/logo-kr-2.svg" alt="로고" />
      {/* <button className="flex justify-center items-center gap-2 w-60 h-12 border border-gray-300 rounded-lg active:bg-gray-100">
        <img className="h-6" src="/icons/login/googleIcon.svg" alt="로고" />
        <p className="text-body-01 text-black">구글로 로그인하기</p>
      </button> */}
      <GoogleAuthLogin />
    </section>
  );
}
