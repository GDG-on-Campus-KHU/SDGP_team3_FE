// hooks/usePhotoModal.ts
import { useState } from "react";

export function usePhotoModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [chooseChallenge, setChooseChallenge] = useState(null);
  const [previewImage, setPreviewImage] = useState(null);
  const [photoFile, setPhotoFile] = useState(null);

  const open = (id, type) => {
    setChooseChallenge({ id, type });
    setTimeout(() => setIsOpen(true), 0);
  };

  const close = () => {
    setIsOpen(false);
    setChooseChallenge(null);
    setPreviewImage(null);
  };

  const handleChange = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      const url = URL.createObjectURL(file);
      setPreviewImage(url);
      setPhotoFile(file);
    }
  };

  return {
    isOpen,
    setIsOpen,
    open,
    close,
    chooseChallenge,
    setChooseChallenge,
    previewImage,
    setPreviewImage,
    handleChange,
    photoFile,
    setPhotoFile,
  };
}
