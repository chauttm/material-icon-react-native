import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Icon from "./MaterialIcons";

export default function App() {
  return (
    <View style={styles.container}>
      <Text>r app!</Text>
      <StatusBar style="auto" />
      <Icon name="add_a_photo" height="40" width="40" fill="#f0f" />
      <Icon name="lock" fill="#0f0" height="24" width="24" />
      <Icon name="lock" fill="#0f0" height="32" width="32" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
