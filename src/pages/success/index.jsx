import TopSection from "@/features/create/ui/topSection";
import { useChallengesStore } from "@/features/main/model/store/useChallengesStore";
import { cn } from "@/shared/lib/utils";
import { Btn } from "@/shared/ui/button";
import ChallengeCard from "@/shared/ui/ChallengeCard";
import AssetDialog from "@/shared/ui/Modal/assetDialog";
import axios from "axios";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function SuccessPage() {
  const SERVER_URL = import.meta.env.VITE_APP_SERVER_URL;

  const [isOpen, setIsOpen] = useState(false);

  function close() {
    setIsOpen(false);
  }
  const location = useLocation();
  const { challenge } = location.state || {};

  const postRandomDecoration = async () => {
    const accessToken = localStorage.getItem("accessToken");
    const uid = localStorage.getItem("uid");
    try {
      const response = await axios.post(
        `${SERVER_URL}/api/users/decorations/random`,
        { uid: uid },
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );
      console.log(response.data);
      return response.data;
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <section className="mt-[55px] h-[1px] w-full" />
      <div className="pb-4">
        <TopSection
          title="챌린지 성공!"
          description="기간 내에 목표 횟수를 달성했어요!"
        />
        <div className="flex flex-col gap-4 px-5 pt-24">
          <div
            className={cn(
              "flex justify-center items-center mt-8",
              "bg-[url(/images/confetti-done.svg)] w-full h-[295px] bg-cover bg-center bg-no-repeat"
            )}
          >
            <ChallengeCard challenge={challenge} />
          </div>
        </div>
      </div>
      <div className="fixed bottom-4 w-full max-w-[600px] h-fit flex justify-between px-5 gap-4">
        <Btn
          className="w-full"
          onClick={() => {
            // postRandomDecoration();
            setIsOpen(true);
          }}
        >
          보상 확인하기
        </Btn>
      </div>
      <AssetDialog
        isOpen={isOpen}
        onOpenChange={(val) => {
          if (!val) close();
        }}
      />
    </>
  );
}
