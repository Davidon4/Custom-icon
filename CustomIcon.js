import React, { useState, useEffect } from "react";
import { StyleSheet, View } from "react-native";
import * as Font from "expo-font";

import { createIconSetFromIcoMoon } from "@expo/vector-icons";
import icoMoonConfig from "./selection.json";
const Icon = createIconSetFromIcoMoon(icoMoonConfig);

const CustomIcon = () => {
  const [fontLoaded, setFontLoaded] = useState(false);

  useEffect(() => {
    const loadFonts = async () => {
      try {
        await Font.loadAsync({
          "roboto-mono": require("./assets/fonts/RobotoMono-Regular.ttf"),
          'icomoon': require("./assets/fonts/icomoon.ttf"),
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
      <Icon name="Bags" style={styles.icon} color='red' />
      <Icon name="Men-Clothing" style={styles.icon} color='green' />
      <Icon name="Fashion" style={styles.icon} color='blue' />
      <Icon name="Fragrances" style={styles.icon} color='grey' />
      <Icon name="Gadgets" style={styles.icon} color='purple' />
    </View>
  );
};

export default CustomIcon;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  icon: {
    fontSize: 40,
    margin: 10
  }
});
