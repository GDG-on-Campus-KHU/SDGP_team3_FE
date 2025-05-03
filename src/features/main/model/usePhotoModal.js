// hooks/usePhotoModal.ts
import { useState } from "react";

export function usePhotoModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [challengeId, setChallengeId] = useState(null);
  const [previewImage, setPreviewImage] = useState(null);

  const open = (id) => {
    setChallengeId(id);
    setIsOpen(true);
    console.log(isOpen);
  };

  const close = () => {
    setIsOpen(false);
    setChallengeId(null);
    setPreviewImage(null);
  };

  const handleChange = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      const url = URL.createObjectURL(file);
      setPreviewImage(url);
    }
  };

  return {
    isOpen,
    open,
    close,
    challengeId,
    setChallengeId,
    previewImage,
    setPreviewImage,
    handleChange,
  };
}
