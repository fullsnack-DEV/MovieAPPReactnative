import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import AppNavigator from "./Navigation/AppNavigator";
import { Provider } from "react-redux";
import { Store } from "./Redux/Store";

import AppLoading from "expo-app-loading";
import { useFonts, copse } from "@expo-google-fonts/copse";

export default function App() {
  let [fontsloaded, error] = useFonts({
    copse,
  });

  if (fontsloaded) {
    return <AppLoading />;
  }

  return (
    <Provider store={Store}>
      <NavigationContainer>
        <AppNavigator />
      </NavigationContainer>
    </Provider>
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
