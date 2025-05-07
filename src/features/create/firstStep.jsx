import ChallengeCard from "@/shared/ui/ChallengeCard";
import React from "react";
import { CREATE_CHALLENGE_MOCK_DATAS } from "@/shared/config/challengeConfig";
import { useCreatedChallengesStore } from "./model/store/useCreatedChallenge";

export default function FirstStep() {
  const { step, setStep, setChooseChallenge } = useCreatedChallengesStore();
  const challenges = CREATE_CHALLENGE_MOCK_DATAS;

  return (
    <>
      {challenges.map((challenge) => (
        <ChallengeCard
          key={challenge.id}
          challenge={challenge}
          step={step}
          setStep={setStep}
          setChooseChallenge={setChooseChallenge}
        />
      ))}
    </>
  );
}
