import React from "react";
import StampList from "../Stamp/stampList";

export default function Coupon({ stamps }) {
  return (
    <div className="flex flex-col justify-start gap-1 px-5 mb-6 ">
      <p className="text-body-02 text-black">지금까지 꾸욱 찍은 스탬프예요</p>
      <div className="grid grid-cols-5 grid-rows-2 h-36 px-2 py-3 w-auto place-items-center bg-white rounded-2xl shadow-md">
        <StampList stamps={stamps} />
      </div>
    </div>
  );
}
