import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "../Screens/HomeScreen";
import MovieinfoScreen from "../Screens/MovieinfoScreen";

const Stack = createStackNavigator();
const HomeNavigator = () => (
  <Stack.Navigator
    screenOptions={{
      headerShown: false,
    }}
  >
    <Stack.Screen name="home" component={HomeScreen} />
    <Stack.Screen name="info" component={MovieinfoScreen} />
  </Stack.Navigator>
);

export default HomeNavigator;
