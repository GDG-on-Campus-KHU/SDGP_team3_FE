import React, { useRef } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogFooter,
  DialogTitle,
} from "./dialog";
import { Btn } from "../button";
import { cn } from "@/shared/lib/utils";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Loading from "../loading";
import { certificateStamp } from "@/features/main/model/api/stampApi";
import { useStampsStore } from "@/features/main/model/store/useStampsStore";
import { useChallengesStore } from "@/features/main/model/store/useChallengesStore";

export default function PhotoDialog({
  isOpen,
  setIsOpen,
  onOpenChange,
  onChange,
  chooseChallenge,
  photoFile,
  openToast,
  title,
  description,
  cancelText,
  activeText,
  previewImage,
  setPreviewImage,
}) {
  const inputRef = useRef(null);
  const [isLoading, setIsLoading] = useState(false);
  const { stamps, addStamp } = useStampsStore();
  const { addChallengeCount } = useChallengesStore();

  const navigate = useNavigate();

  const handleTriggerFileUpload = () => {
    inputRef.current?.click(); // input 클릭 트리거
  };

  const handleConfirm = async () => {
    setIsLoading(true);
    setTimeout(async () => {
      console.log("previewImage : ", previewImage);

      try {
        await certificateStamp(
          photoFile,
          chooseChallenge.id,
          chooseChallenge.type
        );
        setIsOpen(false);
        openToast();
        addStamp({
          id: stamps.length,
          type: chooseChallenge.type,
          saved_at: new Date().toISOString(),
        });
        console.log(stamps);

        // 챌린지 카운트 +1
        const completedChallenge = addChallengeCount(chooseChallenge.id);

        // 목표 달성 시 성공 페이지로 이동
        if (completedChallenge) {
          setSuccessChallenge(completedChallenge);
          navigate("/challenge/success"); // ← 실제 경로로 수정
        }
      } catch (error) {
        console.error("스탬프 인증 실패:", error);
        addStamp({
          id: 7,
          type: chooseChallenge.type,
          saved_at: new Date().toISOString(), // 예시
        });
        const completedChallenge = addChallengeCount(chooseChallenge.id);
        if (completedChallenge) {
          setSuccessChallenge(completedChallenge);
          navigate("/challenge/success");
        }
        console.log(stamps);
      } finally {
        setIsLoading(false);
      }
    }, 3000);
  };

  return (
    <Dialog open={isOpen ?? false} onOpenChange={onOpenChange}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
          {description && <DialogDescription>{description}</DialogDescription>}
          <label
            htmlFor="photo-upload"
            className={cn(
              "cursor-pointer flex flex-col justify-center items-center gap-1  h-[300px] rounded-[20px] w-full border-dashed",
              !previewImage && "border-4 border-gray-300"
            )}
          >
            {previewImage ? (
              <div className="relative w-full h-80">
                <img
                  src={previewImage}
                  alt="미리보기"
                  className="object-cover w-full h-full rounded-[20px]"
                />
                {isLoading && (
                  <Loading className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2" />
                )}
              </div>
            ) : (
              <div className="flex flex-col justify-center items-center gap-1 w-full h-80">
                <img src="/icons/photoIcon.svg" alt="사진 아이콘" />
                <p className="text-caption-02 text-gray-500 font-light">
                  사진을 업로드해주세요
                </p>
              </div>
            )}
            <input
              type="file"
              id="photo-upload"
              ref={inputRef}
              className="hidden"
              onChange={onChange}
            />
          </label>
        </DialogHeader>
        <DialogFooter>
          {previewImage ? (
            <>
              {cancelText && (
                <Btn
                  className="w-full"
                  variant="cancel"
                  onClick={() => setPreviewImage(null)}
                >
                  {cancelText}
                </Btn>
              )}
              {activeText && (
                <Btn className="w-full" onClick={handleConfirm}>
                  {activeText}
                </Btn>
              )}
            </>
          ) : (
            <Btn className="w-full" onClick={handleTriggerFileUpload}>
              {activeText}
            </Btn>
          )}
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
