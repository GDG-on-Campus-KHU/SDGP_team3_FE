import { create } from "zustand";

export const useCreatedChallengesStore = create((set) => ({
  // 챌린지 생성 단계
  step: 1,
  setStep: (step) => set({ step }),
  addStep: () => set((state) => ({ step: state.step + 1 })),
  subtractStep: () => set((state) => ({ step: state.step - 1 })),

  // 챌린지 목표 횟수
  goalCount: 1,
  setGoalCount: (goalCount) => set({ goalCount }),

  // 선택한 챌린지
  chooseChallenge: {},
  setChooseChallenge: (challenge) => set({ chooseChallenge: challenge }),

  // 챌린지 시작 기간, 종료 기간
  startDate: "",
  endDate: "",
  setStartDate: (startDate) => set({ startDate }),
  setEndDate: (endDate) => set({ endDate }),
}));

export const buildChallengePayload = () => {
  const { startDate, endDate, goalCount, chooseChallenge } =
    useCreatedChallengesStore.getState();

  return {
    uid: localStorage.getItem("uid"),
    title: chooseChallenge.title,
    description: chooseChallenge.description,
    start_at: startDate,
    due_at: endDate,
    od_obj: chooseChallenge.type === "order_detail" ? goalCount : null,
    od_ach: chooseChallenge.type === "order_detail" ? 0 : null,
    tb_obj: chooseChallenge.type === "tumbler" ? goalCount : null,
    tb_ach: chooseChallenge.type === "tumbler" ? 0 : null,
  };
};
