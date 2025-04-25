import { useEffect } from "react";
import { useState } from "react";

export function useToast() {
  const [isToastVisible, setIsToastVisible] = useState(false);

  const openToast = () => {
    setIsToastVisible(true);
    console.log(isToastVisible);
  };
  const closeToast = () => {
    setIsToastVisible(false);
  };

  useEffect(() => {
    if (isToastVisible) {
      const timer = setTimeout(() => {
        setIsToastVisible(false);
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [isToastVisible]);

  return {
    isToastVisible,
    openToast,
    closeToast,
    // autoCloseToast,
  };
}
