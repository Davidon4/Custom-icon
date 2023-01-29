import React, { useState, useEffect } from "react";
import { StyleSheet, View, Text } from "react-native";
import * as Font from "expo-font";

import { createIconSetFromIcoMoon } from "react-native-vector-icons";
import icoMoonConfig from "./selection.json";
const Icon = createIconSetFromIcoMoon(icoMoonConfig);

const App = () => {
  const [fontLoaded, setFontLoaded] = useState(false);

  useEffect(() => {
    const loadFonts = async () => {
      try {
        await Font.loadAsync({
          "roboto-mono": require("./assets/fonts/RobotoMono-Regular.ttf"),
          "icomoon": require("./assets/fonts/icomoon.ttf"),
        });
        console.log("Fonts loaded successfully");
        setFontLoaded(true);
      } catch (error) {
        console.log("Error loading fonts: ", error);
      }
    };
    loadFonts();
  }, []);
  if (!fontLoaded) {
    console.log("Fonts are still loading...");
    return null;
  }

  return (
    <View style={[styles.container, styles.center]}>
      <Icon name="phone" style={[styles.colorBlue, styles.fontSize30]} />
      <Text>This is a phone</Text>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f2f2f2",
  },
  center: {
    alignItems: "center",
    justifyContent: "center",
  },
  colorBlue: {
    color: "#002080",
  },
  fontSize30: {
    fontSize: 30,
  },
});