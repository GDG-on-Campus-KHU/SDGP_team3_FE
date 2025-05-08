import { create } from "zustand";
import { STAMP_DATAS } from "../../config/stampConfig";
import { getStamps } from "../api/stampApi";

export const useStampsStore = create((set) => ({
  // challenges: [],
  stamps: STAMP_DATAS,
  setStamps: (stamps) => set({ stamps }),

  // 서버에서 데이터 가져오기
  fetchStamps: async () => {
    const data = await getStamps();
    set({ stamps: data });
  },
}));
