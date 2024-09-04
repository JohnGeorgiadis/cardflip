import { StatusBar } from "expo-status-bar";
import { useEffect } from "react";
import { StyleSheet, Text } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { CardsStack } from "./src/components/CardsStack";
import LifePoints from "./src/components/LifePoints";
import { useCardsState } from "./src/store/cardsStore";
import { getRandomCards } from "./src/utils/getRandomCards";
import { setInitialPointsForAllCards } from "./src/utils/setInitialPointsForAllCards";
import { SwipeInfo } from "./src/components/SwipeInfo";

export default function App() {
  const setInitialCards = useCardsState((state) => state.setInitial);

  useEffect(() => {
    setInitialCards(getRandomCards());
    setInitialPointsForAllCards();
  }, []);

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <StatusBar style="light" />
        <Text style={styles.title}>Warhammer 40k Card Companion Game</Text>
        <LifePoints containerStyle={styles.lifePoints} />
        <GestureHandlerRootView>
          <CardsStack />
        </GestureHandlerRootView>
        <SwipeInfo />
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
    alignItems: "center",
  },
  title: {
    color: "#faca1c",
  },
  lifePoints: {
    marginLeft: "auto",
    marginRight: 40,
    marginTop: 24,
  },
});
