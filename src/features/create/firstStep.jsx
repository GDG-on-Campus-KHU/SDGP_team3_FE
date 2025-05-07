import ChallengeCard from "@/shared/ui/ChallengeCard";
import React from "react";
import { CREATE_CHALLENGE_MOCK_DATAS } from "@/shared/config/challengeConfig";

export default function FirstStep({ step, setStep, setChooseChallenge }) {
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
