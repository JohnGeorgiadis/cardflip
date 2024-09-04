import { useCardsState } from "../store/cardsStore";
import { useLifePointsState } from "../store/lifePointsStore";

export const setInitialPointsForAllCards = () => {
  const setInitialLifePoints = useLifePointsState.getState().setInitial;
  const cards = useCardsState.getState().initial ?? [];

  const lifePoints = cards.reduce((acc, card) => acc + card.lifePoints, 0);
  setInitialLifePoints(lifePoints);
};
