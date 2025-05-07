import React from "react";
import { CHALLENGE_ICONS } from "../config/challengeConfig";
import ProgressBar from "./progressBar";
import { Btn } from "./button";
import { useLocation, useNavigate } from "react-router-dom";

export default function ChallengeCard({
  challenge,
  onStampClick,
  step,
  setStep,
  setChooseChallenge,
  // 챌린지 생성
  start_at,
  due_at,
  obj,
}) {
  const icons = CHALLENGE_ICONS;

  const location = useLocation();
  const pathname = location.pathname;

  return (
    <div className="w-full px-5 py-4 bg-white shadow-md rounded-2xl flex gap-3">
      <div className="flex justify-center items-center rounded-full w-7 h-7 bg-green-500">
        <img src={icons[challenge.type]} alt="텀블러 아이콘" />
      </div>
      <div className="w-full flex flex-col">
        <div className="flex w-full justify-between">
          <p className="text-body-02 w-full text-black">{challenge.title}</p>
          <div className="mt-[2px] w-full">
            {pathname === "/create" ? (
              start_at &&
              due_at && (
                <p className="text-caption-01 text-gray-700 mt-[2px] w-full text-right">
                  {start_at.replace(/-/g, ".")} - {due_at.replace(/-/g, ".")}
                </p>
              )
            ) : (
              <p className="text-caption-01 text-gray-700 mt-[2px] w-full text-right">
                {challenge.start_at} - {challenge.due_at}
              </p>
            )}
          </div>
        </div>
        <p className="text-caption-01 text-gray-700 mb-[2px]">
          {challenge.description}
        </p>
        {pathname !== "/create" ? (
          <ProgressBar currentValue={challenge.ach} maxValue={challenge.obj} />
        ) : (
          step === 3 && <ProgressBar currentValue={0} maxValue={obj} />
        )}
        {challenge.is_done && pathname !== "/create" ? (
          <p className="mt-3 text-caption-02 text-gray-700">
            {challenge.obj}번의 목표 횟수를 모두 달성했어요!
          </p>
        ) : (
          step !== 2 &&
          step !== 3 && (
            <Btn
              className="self-end mt-3"
              onClick={() => {
                if (challenge.start_at) {
                  onStampClick(challenge.id);
                } else {
                  setStep((prevStep) => prevStep + 1);
                  setChooseChallenge(challenge);
                }
              }}
            >
              {challenge.start_at ? "도장 찍기" : "시작하기"}
            </Btn>
          )
        )}
      </div>
    </div>
  );
}
