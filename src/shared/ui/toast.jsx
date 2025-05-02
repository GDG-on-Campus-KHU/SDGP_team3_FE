import React from "react";
import { motion, AnimatePresence } from "framer-motion";

/**
 * 공통 컴포넌트 - Toast
 * @param {boolean} isToastVisible - 토스트 보임 여부
 * @param {() => void} closeToast - 총 게이지
 * @param {string} description - 총 게이지
 *
 * @example
 *   const { isToastVisible, openToast, closeToast } = useToast();
 *
 *   <Toast
 *    isToastVisible={isToastVisible}
 *    closeToast={closeToast}
 *    description="인증에 성공하여 도장을 꾸욱 찍었어요!"
 *   />
 */
export default function Toast({ isToastVisible, closeToast, description }) {
  return (
    <AnimatePresence>
      {isToastVisible && (
        <motion.div
          className="z-toast absolute left-3 top-3 flex items-center w-fit max-w-fit px-4 py-3 bg-white rounded-xl shadow-md"
          role="alert"
          initial={{ y: -10 }}
          animate={{ y: 0 }}
          exit={{ y: -50 }} // 사라질 때 opacity 유지, y 값만 -50으로 위로 올라감
          transition={{ duration: 0.3 }} // 애니메이션 시간 설정
        >
          <img src="icons/checkIcon.svg" alt="세계 아이콘" />
          <p className="ms-3 text-black text-body-03">{description}</p>
          <button
            className="ml-3 bg-white text-gray-400 rounded-lg inline-flex items-center justify-center h-5 w-5"
            aria-label="Close"
            onClick={closeToast}
          >
            <img
              className="h-3 w-3"
              src="icons/closeIcon.svg"
              alt="세계 아이콘"
            />
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
