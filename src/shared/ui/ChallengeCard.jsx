import React from "react";
import { CHALLENGE_ICONS } from "../config/challengeConfig";
import ProgressBar from "./progressBar";
import { Btn } from "./button";
import { useLocation, useNavigate } from "react-router-dom";
import { useCreatedChallengesStore } from "@/features/create/model/store/useCreatedChallenge";
import { formatISOtoDateStr } from "@/features/create/lib/formatISOtoDateStr";

export default function ChallengeCard({
  challenge,
  onStampClick,
  // 챌린지 생성
  start_at,
  due_at,
  obj,
}) {
  const icons = CHALLENGE_ICONS;
  const matchedIcon = icons.find((icon) => icon.type === challenge.type);

  const { step, addStep, setChooseChallenge } = useCreatedChallengesStore();

  const location = useLocation();
  const pathname = location.pathname;

  const typeKeyMap = {
    tumbler: "tb",
    order_detail: "od",
    transportation: "tp",
    basket: "bs",
    plogging: "pg",
  };

  const prefix = typeKeyMap[challenge.type] || "";
  const challengeAch = challenge?.[`${prefix}_ach`] ?? 0;
  const challengeObj = challenge?.[`${prefix}_obj`] ?? 0;

  console.log(challenge.type);

  return (
    <div className="w-full px-5 py-4 bg-white shadow-md rounded-2xl flex gap-3">
      <div className="flex justify-center items-center rounded-full w-7 h-7 bg-green-500">
        <img src={matchedIcon?.src} alt={`${matchedIcon?.type} 아이콘`} />
      </div>
      <div className="w-full flex flex-col">
        {/* 챌린지 진행 기간 */}
        <div className="flex w-full justify-between">
          <p className="text-body-02 w-full text-black">{challenge.title}</p>
          {pathname === "/create" ? (
            start_at &&
            due_at && (
              <p className="text-caption-01 text-gray-700 w-full text-right">
                {formatISOtoDateStr(start_at)} - {formatISOtoDateStr(due_at)}
              </p>
            )
          ) : (
            <p className="text-caption-01 text-gray-700 w-full text-right">
              {challenge.start_at} - {challenge.due_at}
            </p>
          )}
        </div>
        <p className="text-caption-01 text-gray-700 mb-[2px]">
          {challenge.description}
        </p>

        {/* 프로그레스 바 */}
        {pathname !== "/create" ? (
          <ProgressBar currentValue={challengeAch} maxValue={challengeObj} />
        ) : (
          step === 3 && <ProgressBar currentValue={0} maxValue={obj} />
        )}
        {challenge.is_done && pathname !== "/create" ? (
          <p className="mt-3 text-caption-02 text-gray-700">
            {challengeObj}번의 목표 횟수를 모두 달성했어요!
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
                  addStep();
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
