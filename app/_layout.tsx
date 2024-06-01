import { View, Text } from "react-native";
import React, { useEffect } from "react";
import { SplashScreen, Stack } from "expo-router";
SplashScreen.preventAutoHideAsync();
const RootLayout = () => {
  useEffect(() => {
    SplashScreen.hideAsync();
  }, []);
  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen name="(auth)" options={{ headerShown: false }} />
    </Stack>
  );
};

export default RootLayout;
