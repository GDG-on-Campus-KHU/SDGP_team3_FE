import { create } from "zustand";
import { getChallenges } from "../api/challengeApi";
import { CHALLENGE_MOCK_DATAS_1 } from "@/shared/config/challengeConfig";

export const useChallengesStore = create((set) => ({
  challenges: [],
  // challenges: CHALLENGE_MOCK_DATAS_1,
  setChallenges: (challenges) => set({ challenges }),
  // 성공한 챌린지
  successChallenge: null,
  setSuccessChallenge: (challenge) => set({ successChallenge: challenge }),

  // 서버에서 데이터 가져오기
  fetchChallenges: async () => {
    const data = await getChallenges();
    set({ challenges: data });
  },

  addChallenge: (newChallenge) => {
    set((state) => ({
      challenges: [...state.challenges, newChallenge],
    }));
  },

  // 챌린지 포기하기
  giveupChallenges: (challengeId) => {
    set((state) => ({
      challenges: state.challenges.filter(
        (challenge) => challengeId === challenge.id
      ),
    }));
  },
  // 챌린지 성취 횟수 추가
  addChallengeCount: (challengeId) => {
    let completedChallenge = null;

    set((state) => {
      const index = state.challenges.findIndex(
        (challenge) => challenge.id === challengeId
      );
      if (index === -1) return state;

      const challenge = state.challenges[index];
      let updatedChallenge = { ...challenge };

      if (challenge.type === "tumbler") {
        // 텀블러 사용하기라면
        const newAch = (challenge.tb_ach || 0) + 1;
        const isDone = newAch >= (challenge.tb_obj || 0);
        updatedChallenge.tb_ach = newAch;
        updatedChallenge.is_done = isDone;
        if (isDone) completedChallenge = updatedChallenge;
      } else if (challenge.type === "order_details") {
        // 일회용 수저 사용 안 하기라면
        const newAch = (challenge.od_ach || 0) + 1;
        const isDone = newAch >= (challenge.od_obj || 0);
        updatedChallenge.od_ach = newAch;
        updatedChallenge.is_done = isDone;
        if (isDone) completedChallenge = updatedChallenge;
      }

      const updatedChallenges = [...state.challenges];
      updatedChallenges[index] = updatedChallenge;

      return { challenges: updatedChallenges };
    });

    return completedChallenge;
  },
}));
