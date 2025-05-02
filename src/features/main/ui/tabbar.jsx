import clsx from "clsx";
import React from "react";

export default function Tabbar({ currentTab, handleTabClick }) {
  return (
    <>
      <div className="w-full flex justify-evenly items-center mt-15 h-12">
        <div
          className="text-body-02 text-black w-full h-full flex justify-center items-center"
          onClick={handleTabClick}
        >
          <p>진행 중인 챌린지</p>
        </div>
        <div
          className="text-body-02 text-black w-full h-full flex justify-center items-center"
          onClick={handleTabClick}
        >
          <p>완료한 챌린지</p>
        </div>
      </div>
      <div className="relative h-1 bg-gray-100 w-full">
        <section
          className={clsx(
            "absolute w-1/2 h-1 bg-gray-500",
            currentTab === "진행 중인 챌린지" ? "left-0" : "right-0"
          )}
        />
      </div>
    </>
  );
}
