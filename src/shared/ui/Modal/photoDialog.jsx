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

export default function PhotoDialog({
  isOpen,
  onOpenChange,
  onChange,
  title,
  description,
  cancelText,
  activeText,
  previewImage,
  setPreviewImage,
}) {
  const inputRef = useRef(null);

  const handleTriggerFileUpload = () => {
    inputRef.current?.click(); // input 클릭 트리거
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
              <img
                src={previewImage}
                alt="미리보기"
                className="object-cover w-full h-full rounded-[20px]"
              />
            ) : (
              <>
                <img src="/icons/photoIcon.svg" alt="사진 아이콘" />
                <p className="text-caption-02 text-gray-500 font-light">
                  사진을 업로드해주세요
                </p>
              </>
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
              {activeText && <Btn className="w-full">{activeText}</Btn>}
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

// Dialog,
// DialogPortal,
// DialogOverlay,
// DialogTrigger,
// DialogClose,
// DialogContent,
// DialogHeader,
// DialogFooter,
// DialogTitle,
// DialogDescription,
