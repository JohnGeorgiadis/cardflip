import { Text, View, StyleSheet, ViewProps } from "react-native";
import { useLifePointsState } from "../store/lifePointsStore";

export type LifePointsPropsType = {
  containerStyle?: ViewProps["style"];
};

export default function LifePoints({ containerStyle }: LifePointsPropsType) {
  const points = useLifePointsState((state) => state.lifePoints);
  
  return (
    <View style={containerStyle}>
      <Text style={styles.text}>{points}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    color: "#05ff74",
    fontWeight: "bold",
  },
});
