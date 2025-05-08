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
      const newAch = challenge.ach + 1;
      const isDone = newAch >= challenge.obj;

      const updatedChallenge = {
        ...challenge,
        ach: newAch,
        is_done: isDone,
      };

      const updatedChallenges = [...state.challenges];
      updatedChallenges[index] = updatedChallenge;

      if (isDone) completedChallenge = updatedChallenge;

      return { challenges: updatedChallenges }; // 상태만 업데이트
    });

    return completedChallenge; // 컴포넌트한테 반환
  },
}));
