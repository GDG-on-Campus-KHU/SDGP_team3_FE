import ChallengeCard from "@/shared/ui/ChallengeCard";
import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import TopSection from "./ui/topSection";
import Header from "@/shared/ui/header";
import { CREATE_CHALLENGE_MOCK_DATAS } from "@/shared/config/challengeConfig";
import { useState } from "react";
import FirstStep from "./firstStep";
import { useEffect } from "react";
import SecondStep from "./secondStep";
import { Btn } from "@/shared/ui/button";
import ThirdStep from "./thirdStep";

export default function Create() {
  const [step, setStep] = useState(1);
  const [goalCount, setGoalCount] = useState(1);
  const [chooseChallenge, setChooseChallenge] = useState({});

  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  const topInfo = [
    {
      step: 1,
      title: "챌린지 선택하기",
      description: "시작하고 싶은 챌린지를 선택해주세요",
    },
    {
      step: 2,
      title: "챌린지 목표 횟수 정하기",
      description:
        "챌린지를 시행할 목표 횟수를 정해주세요\n 목표 횟수에 따라 챌린지 진행 기간이 결정돼요",
    },
    {
      step: 3,
      title: "챌린지 시작",
      description: "기간 내에 목표 횟수를 열심히 달성해주세요!",
    },
  ];
  const challenges = CREATE_CHALLENGE_MOCK_DATAS;

  const location = useLocation();
  const navigate = useNavigate();

  const addStep = () => {
    setStep((prev) => prev + 1);
  };
  const subtractStep = () => {
    setStep((prev) => prev - 1);
  };

  useEffect(() => {
    console.log("step changed: ", step);
  }, [step]);

  return (
    <>
      <Header variant="create" title="챌린지 생성하기" />
      <section className="mt-[55px] h-[1px] w-full" />
      <div className="pb-4">
        <TopSection
          title={topInfo[step - 1].title}
          description={topInfo[step - 1].description}
        />
        <div className="flex flex-col gap-4 px-5 pt-24">
          {step === 1 ? (
            <FirstStep
              step={step}
              setStep={setStep}
              setChooseChallenge={setChooseChallenge}
            />
          ) : step === 2 ? (
            <SecondStep
              challenge={chooseChallenge}
              step={step}
              goalCount={goalCount}
              setGoalCount={setGoalCount}
              startDate={startDate}
              endDate={endDate}
              setStartDate={setStartDate}
              setEndDate={setEndDate}
            />
          ) : (
            <ThirdStep
              challenge={chooseChallenge}
              step={step}
              startDate={startDate}
              endDate={endDate}
              goalCount={goalCount}
            />
          )}
        </div>
      </div>
      {step !== 1 && (
        <div className="fixed bottom-4 w-full max-w-[600px] h-fit flex justify-between px-5 gap-4">
          {step === 2 && (
            <Btn className="w-full" variant="cancel" onClick={subtractStep}>
              이전
            </Btn>
          )}

          <Btn
            className="w-full"
            onClick={() => {
              step === 3 ? navigate("/") : addStep();
            }}
          >
            {step === 2 ? "시작하기" : "홈으로 돌아가기"}
          </Btn>
        </div>
      )}
    </>
  );
}

// {step !== 1 && (
//   <div className="fixed bottom-4 w-full max-w-[600px] h-fit flex justify-between px-5 gap-4">
//     {step === 2 && (
//       <Btn className="w-full" variant="cancel" onClick={subtractStep}>
//         이전
//       </Btn>
//     )}

//     <Btn className="w-full" onClick={addStep}>
//       {step === 2 ? "시작하기" : "홈으로 돌아가기"}
//     </Btn>
//   </div>
// )}
