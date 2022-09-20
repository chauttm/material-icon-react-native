//import { StatusBar } from "expo-status-bar";
import React, { Fragment } from "react";
import { StyleSheet, Text, View, Button } from "react-native";
//import Icon from "./MaterialIcons";
//import DemoIcon from "./DemoIcons";
import { generateColorTheme } from "./ColorUtils";
//import { generateColorThemeWithTint } from "./ColorUtilsTint";
//import PrototypeTint from "./PrototypeTint";
import Prototype from "./Prototype";

export default function App() {
  return (
    <View
      style={{
        flexDirection: "row",
      }}
    >
      {Prototype(generateColorTheme("#c20000", "#FCD941", false))}
      {Prototype(generateColorTheme("#00c200", "#FCD941", true))}
      {Prototype(generateColorTheme("#FCD941", "#c20000", true))}

      {/*{PrototypeTint(generateColorTheme("#104473", "#06BD6D"))}*/}
    </View>
  );
}
