import Ionicons from "@expo/vector-icons/Ionicons";
import { StyleSheet, Text, View } from "react-native";

export function SwipeInfo() {
  return (
    <View style={styles.root}>
      <View style={styles.container}>
        <Ionicons name="arrow-back" size={32} color="white" />
        <Text style={styles.text}>Result</Text>
        <Ionicons name="arrow-forward" size={32} color="white" />
      </View>
      <View style={styles.container}>
        <Ionicons name="skull-outline" size={32} color="red" />
        <Ionicons name="checkmark-circle-outline" size={32} color="green" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    width: "100%",
    gap: 8,
    paddingLeft: 48,
    paddingRight: 48,
  },
  text: {
    color: "#faca1c",
  },
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
});
