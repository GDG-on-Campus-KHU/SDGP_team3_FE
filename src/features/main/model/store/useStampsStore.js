import { create } from "zustand";
import { STAMP_DATAS } from "../../config/stampConfig";
import { getStamps } from "../api/stampApi";

export const useStampsStore = create((set) => ({
  // stamps: [...STAMP_DATAS],
  stamps: [],
  setStamps: (stamps) => set({ stamps }),

  // 서버에서 데이터 가져오기
  fetchStamps: async () => {
    const data = await getStamps();
    set({ stamps: data });
  },

  // 도장 추가
  addStamp: (newStamp) =>
    set((state) => ({
      stamps: [...state.stamps, newStamp],
    })),
}));
