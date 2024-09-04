import { StyleSheet, View } from "react-native";
import { useSharedValue } from "react-native-reanimated";
import { Card } from "./Card";
import { useCardsState } from "../store/cardsStore";
import { useLifePointsState } from "../store/lifePointsStore";
import { getRandomCards } from "../utils/getRandomCards";
import { setInitialPointsForAllCards } from "../utils/setInitialPointsForAllCards";

export const CardsStack = () => {
  const shuffleBack = useSharedValue(false);
  const cards = useCardsState((state) => state.initial ?? []);
  const getLifePointsById = useCardsState((state) => state.getLifePointsById);
  const setInitialCards = useCardsState((state) => state.setInitial);
  const decreaseLifePoints = useLifePointsState((state) => state.decrease);

  const onSwipeLeft = (id: number) => {
    decreaseLifePoints(getLifePointsById(id));
  };

  const onShuffleBack = () => {
    setInitialCards(getRandomCards());
    setInitialPointsForAllCards();
  };

  return (
    <View style={styles.container}>
      {cards.map((card, index) => (
        <Card
          card={card}
          key={card.id}
          index={index}
          shuffleBack={shuffleBack}
          onSwipeLeft={onSwipeLeft}
          onShuffleBack={onShuffleBack}
        />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
  },
  title: {
    color: "white",
  },
});
