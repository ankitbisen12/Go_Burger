import { Stack } from "expo-router";
import { SplashScreen } from "expo-router";
import "./global.css";
import React, { useEffect } from "react";
import { useFonts } from "expo-font";
import { StatusBar } from "expo-status-bar";

export default function RootLayout() {
  const [fontsLoaded] = useFonts({
    "Rubik-Bold": require("../assets/fonts/Rubik-Bold.ttf"),
    "Rubik-ExtraBold": require("../assets/fonts/Rubik-ExtraBold.ttf"),
    "Rubik-Light": require("../assets/fonts/Rubik-Light.ttf"),
    "Rubik-Medium": require("../assets/fonts/Rubik-Medium.ttf"),
    "Rubik-Regular": require("../assets/fonts/Rubik-Regular.ttf"),
    "Rubik-SemiBold": require("../assets/fonts/Rubik-SemiBold.ttf"),
    "Ultra-Regular": require("../assets/fonts/Ultra-Regular.ttf"),
    "ArchivoBlack-Regular": require("../assets/fonts/ArchivoBlack-Regular.ttf"),
  });

  useEffect(() => {
    if (fontsLoaded) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <React.Fragment>
      <StatusBar style="light" />
      <Stack />
    </React.Fragment>
  );
}
