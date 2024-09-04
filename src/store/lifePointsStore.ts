import { create } from "zustand";

type LifePointsState = {
  lifePoints: number;
  setInitial: (initial: number) => void;
  decrease: (by: number) => void;
};

export const useLifePointsState = create<LifePointsState>()((set) => ({
  lifePoints: 0,
  setInitial: (initial) => set({ lifePoints: initial }),
  decrease: (by) => set((state) => ({ lifePoints: state.lifePoints - by })),
}));
