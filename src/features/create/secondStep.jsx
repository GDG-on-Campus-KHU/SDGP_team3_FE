import { cn } from "@/shared/lib/utils";
import ChallengeCard from "@/shared/ui/ChallengeCard";
import React, { useState, useEffect } from "react";
import { useCreatedChallengesStore } from "./model/store/useCreatedChallenge";
import { formatISOtoDateStr } from "./lib/formatISOtoDateStr";
export default function SecondStep() {
  const [isCountErr, setIsCountErr] = useState(false);
  const [isOverLimitErr, setIsOverLimitErr] = useState(false);

  const {
    step,
    goalCount,
    setGoalCount,
    chooseChallenge,
    startDate,
    endDate,
    setStartDate,
    setEndDate,
  } = useCreatedChallengesStore();

  const MAX_GOAL_COUNT = 10;
  const MIN_GOAL_COUNT = 1;

  const addGoalCount = () => {
    const next = Math.min(parseInt(goalCount || "0", 10) + 1, MAX_GOAL_COUNT);
    setGoalCount(next);
    setIsCountErr(next < MIN_GOAL_COUNT);
    setIsOverLimitErr(next > MAX_GOAL_COUNT);
  };

  const subtractGoalCount = () => {
    const current = parseInt(goalCount || "0", 10);
    const next = current > MIN_GOAL_COUNT ? current - 1 : MIN_GOAL_COUNT;

    setGoalCount(next);
    setIsCountErr(next < MIN_GOAL_COUNT);
    setIsOverLimitErr(false);
  };

  const handleInputChange = (e) => {
    const value = e.target.value;

    if (value === "") {
      setGoalCount("");
      setIsCountErr(true);
      setIsOverLimitErr(false);
    } else {
      const parsed = parseInt(value, 10);
      if (!isNaN(parsed)) {
        setGoalCount(parsed);
        setIsCountErr(parsed < MIN_GOAL_COUNT);
        setIsOverLimitErr(parsed > MAX_GOAL_COUNT);
      }
    }
  };

  // 시작일자 & 종료일 계산
  useEffect(() => {
    const now = new Date();
    const count = parseInt(goalCount || "0", 10);
    const daysToAdd =
      count >= MIN_GOAL_COUNT && count <= MAX_GOAL_COUNT ? count * 3 : 0;

    const end = new Date(now);
    end.setDate(end.getDate() + daysToAdd);

    const startISO = now.toISOString(); // ISO 8601 형식
    const endISO = daysToAdd > 0 ? end.toISOString() : "";

    setStartDate(startISO);
    setEndDate(endISO);
  }, [goalCount]);

  return (
    <div className="flex flex-col gap-5 pt-4">
      <ChallengeCard challenge={chooseChallenge} step={step} />
      {/* 목표 횟수 설정 */}
      <div>
        <p className="text-body-02 text-gray-700">목표 횟수를 설정해주세요</p>
        <p className="text-caption-02 text-gray-700 pt-2">목표 횟수</p>
        <div className="flex items-center gap-2 pt-1">
          <input
            type="number"
            value={goalCount}
            onChange={handleInputChange}
            className={cn(
              "w-24 border rounded py-2 text-body-01 text-center",
              isCountErr || isOverLimitErr
                ? "border-red-300"
                : "border-gray-300"
            )}
            min={1}
            max={10}
          />
          <div className="flex flex-col justify-between h-full">
            <button
              className={cn(
                "text-body-01 leading-none px-1 py-1",
                "hover:bg-gray-300 hover:rounded-sm"
              )}
              onClick={addGoalCount}
              disabled={goalCount >= MAX_GOAL_COUNT}
            >
              ▲
            </button>
            <button
              className={cn(
                "text-body-01 leading-none px-1 py-1",
                "hover:bg-gray-300 hover:rounded-sm"
              )}
              onClick={subtractGoalCount}
              disabled={goalCount <= MIN_GOAL_COUNT}
            >
              ▼
            </button>
          </div>
        </div>
        {isCountErr && (
          <p className="text-caption-01 text-red-400 pt-1">
            목표 횟수는 1 이상이어야 해요.
          </p>
        )}
        {isOverLimitErr && (
          <p className="text-caption-01 text-red-400 pt-1">
            목표 횟수는 10을 초과할 수 없어요.
          </p>
        )}
      </div>

      {/* 챌린지 진행 기간 */}
      <div>
        <p className="text-body-02 text-gray-700">챌린지 진행기간</p>
        <p className="text-caption-01 text-gray-700 pb-2">
          목표 횟수에 따라 챌린지의 진행기간이 자동으로 정해져요
        </p>
        {endDate ? (
          <p className="text-body-01 text-green-500">
            {formatISOtoDateStr(startDate)} - {formatISOtoDateStr(endDate)}
          </p>
        ) : (
          <p className="text-caption-01 text-gray-400">
            유효한 목표 횟수를 입력해주세요.
          </p>
        )}
      </div>
    </div>
  );
}
