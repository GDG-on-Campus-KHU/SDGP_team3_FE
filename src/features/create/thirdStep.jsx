import { cn } from "@/shared/lib/utils";
import ChallengeCard from "@/shared/ui/ChallengeCard";
import React from "react";

export default function ThirdStep({
  challenge,
  step,
  startDate,
  endDate,
  goalCount,
}) {
  return (
    <div
      className={cn(
        "flex justify-center items-center mt-16",
        "bg-[url(/images/confetti.svg)] w-full h-[295px] bg-cover bg-center bg-no-repeat"
      )}
    >
      <ChallengeCard
        challenge={challenge}
        step={step}
        start_at={startDate}
        due_at={endDate}
        obj={goalCount}
      />
    </div>
  );
}
