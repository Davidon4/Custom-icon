import React, { useCallback } from "react";
import { View, Text, StyleSheet } from "react-native";
import CustomIcon from "./CustomIcon";
import { useFonts } from "expo-font";

const App = () => {
  const [fontsLoaded] = useFonts({
    "RobotoMono-Regular": require("./assets/fonts/RobotoMono-Regular.ttf"),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }
  

  return (
    <>
      <View style={styles.container}>
      <Text style={styles.title}>Custom Icons</Text>
        <CustomIcon />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 30,
    fontFamily: "RobotoMono-Regular",
    alignSelf: "center",
  },
});

export default App;
