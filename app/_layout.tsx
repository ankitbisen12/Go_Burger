import { Stack, useRouter } from "expo-router";
import { SplashScreen } from "expo-router";
import "./global.css";
import React, { useEffect, useState } from "react";
import { useFonts } from "expo-font";
import { ActivityIndicator } from "react-native";
import { StatusBar } from "expo-status-bar";
import { Provider, useDispatch, useSelector } from "react-redux";
import { store } from "../store/store";
import { checkAuthAsync, selectLoggedInUser } from "../features/auth/authSlice";
import { fetchCartItemsByUserIdAsync } from "../features/cart/cartSlice";
import { fetchLoggedInUserAsync } from "../features/user/userSlice";
import type { AppDispatch } from "../store/store";

function RootLayoutContent() {
  const dispatch = useDispatch<AppDispatch>();
  const user = useSelector(selectLoggedInUser);
  const [isNavigationReady, setIsNavigationReady] = useState<Boolean>(false);
  const router = useRouter();
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
      setIsNavigationReady(true);
    }
  }, [fontsLoaded]);

  useEffect(() => {
    dispatch(checkAuthAsync());
  }, [dispatch]);

  useEffect(() => {
    if (user) {
      dispatch(fetchCartItemsByUserIdAsync());
      //we can get req.user by token on backend so no need to given in front-end
      dispatch(fetchLoggedInUserAsync());
    }
  }, [dispatch, user]);

  useEffect(() => {
    console.log("loggedin token", user);
    if (!isNavigationReady) {
      return;
    }

    if (!user) {
      console.log("bhag bc");
      router.replace("/sign-in");
    } else {
      router.replace("/");
    }
  }, [user, isNavigationReady]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <React.Fragment>
      <StatusBar style="dark" />
      <Stack screenOptions={{ headerShown: false }} />
    </React.Fragment>
  );
}

export default function RootLayout() {
  return (
    <Provider store={store}>
      <RootLayoutContent />
    </Provider>
  );
}
