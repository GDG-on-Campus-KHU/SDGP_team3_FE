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
  const { addChallengeCount, successChallenge, setSuccessChallenge } =
    useChallengesStore();

  const navigate = useNavigate();

  const handleTriggerFileUpload = () => {
    inputRef.current?.click(); // input 클릭 트리거
  };

  const handleConfirm = async () => {
    setIsLoading(true);
    setTimeout(async () => {
      console.log("previewImage : ", previewImage);

      try {
        const response = await certificateStamp(
          photoFile,
          chooseChallenge.id,
          chooseChallenge.type
        );
        setIsOpen(false);
        if (response?.status === 201) {
          openToast();
          addStamp({
            id: stamps.length,
            type: chooseChallenge.type,
            saved_at: new Date().toISOString(),
          });
          console.log(stamps);

          const updatedChallenge = addChallengeCount(chooseChallenge.id);
          console.log("updatedChallenge.is_done : ", updatedChallenge.is_done);

          if (updatedChallenge?.is_done) {
            setSuccessChallenge(updatedChallenge);
            navigate("/challenge/success", {
              state: { challenge: updatedChallenge },
            });
            console.log("어 대박 이거 나오면 성공한 거임: ", updatedChallenge);
          }
          console.log("왜 이동을 안 할까요: ", updatedChallenge);
        }
      } catch (error) {
        console.error("스탬프 인증 실패:", error);
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
