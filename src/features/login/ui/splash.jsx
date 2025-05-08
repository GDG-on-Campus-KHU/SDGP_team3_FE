import React from "react";

export default function Splash() {
  return (
    <div className="flex flex-col gap-3 justify-center items-center">
      <section className="flex gap-1 justify-center items-center">
        <p className="text-title-02 text-black">'꾸욱'</p>
        <p className="text-title-02 text-black !font-normal">
          눌러 만드는 작은 습관
        </p>
      </section>
      <img className="w-44 -mt-16" src="/icons/logo/logo-kr.svg" alt="로고" />
    </div>
  );
}
