import { useNavigate } from "react-router-dom";

/**
 * 공통 훅 : usePageBack
 * 이전 페이지로 이동할 때 사용하는 훅입니다
 *
 * @example
 * const handleBack = usePageBack();
 *
 * <button onClick={handleBack}>뒤로 가기</button>
 */
export const usePageBack = () => {
  const navigate = useNavigate();

  return () => navigate(-1);
};
