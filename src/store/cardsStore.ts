import { ImageSourcePropType } from "react-native";
import { create } from "zustand";

export type CardType = {
  source: ImageSourcePropType;
  lifePoints: number;
  healthBackValue: number;
  id: number;
};

type CardsState = {
  initial: CardType[] | null;
  setInitial: (initial: CardType[]) => void;
  getLifePointsById: (id: number) => number;
  getHealthBackValueById: (id: number) => number;
};

export const useCardsState = create<CardsState>()((set, get) => ({
  initial: null,
  setInitial: (initial) => set({ initial }),
  getLifePointsById: (id) =>
    get().initial?.find((card) => card.id === id)?.lifePoints ?? 0,
  getHealthBackValueById: (id) =>
    get().initial?.find((card) => card.id === id)?.healthBackValue ?? 0,
}));
