import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import FirstStep from "./firstStep";
import SecondStep from "./secondStep";
import ThirdStep from "./thirdStep";

import TopSection from "./ui/topSection";
import { TOP_INFO } from "./config/headerConfig";

import Header from "@/shared/ui/header";
import { Btn } from "@/shared/ui/button";

export default function Create() {
  // TODO : state들 store로 관리
  const [step, setStep] = useState(1);
  const [goalCount, setGoalCount] = useState(1);
  const [chooseChallenge, setChooseChallenge] = useState({});

  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  const topInfo = TOP_INFO;
  const navigate = useNavigate();

  const addStep = () => {
    setStep((prev) => prev + 1);
  };
  const subtractStep = () => {
    setStep((prev) => prev - 1);
  };

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
