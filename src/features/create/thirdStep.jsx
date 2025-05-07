import { cn } from "@/shared/lib/utils";
import ChallengeCard from "@/shared/ui/ChallengeCard";
import React from "react";
import { useEffect } from "react";
import {
  buildChallengePayload,
  useCreatedChallengesStore,
} from "./model/store/useCreatedChallenge";
import { createChallenges } from "./model/api/createChallengeApi";

export default function ThirdStep() {
  const { step, goalCount, chooseChallenge, startDate, endDate } =
    useCreatedChallengesStore();

  useEffect(() => {
    const submitChallenge = async () => {
      const payload = buildChallengePayload();
      await createChallenges(payload);
    };
    submitChallenge();
  }, []);

  return (
    <div
      className={cn(
        "flex justify-center items-center mt-16",
        "bg-[url(/images/confetti.svg)] w-full h-[295px] bg-cover bg-center bg-no-repeat"
      )}
    >
      <ChallengeCard
        challenge={chooseChallenge}
        step={step}
        start_at={startDate}
        due_at={endDate}
        obj={goalCount}
      />
    </div>
  );
}
