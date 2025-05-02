import { Progress } from "@material-tailwind/react";
import React from "react";

/**
 * 공통 컴포넌트 - progress bar
 * @param {number} currentValue - 현재 게이지
 * @param {number} maxValue - 총 게이지
 *
 * @example
 *    <ProgressBar currentValue={5} maxValue={6} />
 */

export default function ProgressBar({ currentValue, maxValue }) {
  const progressPercentage = Math.round((currentValue / maxValue) * 100); // 퍼센트 계산

  return (
    <div className="flex w-full flex-col gap-1 h-auto">
      <p className="self-end text-caption-02 text-gray-700">
        {currentValue}/{maxValue}
      </p>
      <div className="relative bg-gray-100 h-2 w-full rounded-lg">
        <div
          className={`absolute left-0 bg-green-500 h-2 rounded-lg`}
          style={{ width: `${progressPercentage}%` }}
        ></div>
      </div>
    </div>
  );
}
