import React from "react";
import { Text, StyleSheet, TouchableOpacity, View } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../Screens/HomeScreen";
import SearchScreen from "../Screens/SearchScreen";
import Accountscreen from "../Screens/Accountscreen";
import FavScreen from "../Screens/FavScreen";

import { MaterialCommunityIcons } from "@expo/vector-icons";
import HomeNavigator from "./HomeNavigator";

const Tab = createBottomTabNavigator();

const Tabbarcustombutton = ({ accessibilityState, children, onPress }) => {
  var isSelected = accessibilityState.selected;

  if (isSelected) {
    return (
      <View style={{ flex: 1, alignItems: "center" }}>
        <TouchableOpacity
          style={{
            justifyContent: "center",
            alignItems: "center",
            width: 50,
            height: 50,
            borderRadius: 25,
            backgroundColor: "#000",
          }}
          onPress={onPress}
        >
          {children}
        </TouchableOpacity>
      </View>
    );
  } else {
    return (
      <TouchableOpacity
        style={{
          flex: 1,
          height: 60,
          backgroundColor: "#000",
        }}
        activeOpacity={1}
        onPress={onPress}
      >
        {children}
      </TouchableOpacity>
    );
  }
};

const AppNavigator = () => (
  <Tab.Navigator
    tabBarOptions={{
      showLabel: false,
      activeTintColor: "red",

      style: {
        borderTopWidth: 0,
        color: "#000",
        backgroundColor: "#000",
        elevation: 0,
      },
    }}
  >
    <Tab.Screen
      name="Home"
      component={HomeNavigator}
      options={{
        tabBarIcon: ({ size, color }) => (
          <MaterialCommunityIcons name="home-flood" size={29} color={color} />
        ),
        tabBarButton: (props) => <Tabbarcustombutton {...props} />,
      }}
    />

    <Tab.Screen
      name="Search"
      component={SearchScreen}
      options={{
        tabBarIcon: ({ size, color }) => (
          <MaterialCommunityIcons name="magnify" size={29} color={color} />
        ),
        tabBarButton: (props) => <Tabbarcustombutton {...props} />,
        tabBarVisible: false,
      }}
    />

    <Tab.Screen
      name="Fav"
      component={FavScreen}
      options={{
        tabBarIcon: ({ size, color }) => (
          <MaterialCommunityIcons name="heart" size={29} color={color} />
        ),
        tabBarButton: (props) => <Tabbarcustombutton {...props} />,

        tabBarVisible: false,
      }}
    />

    <Tab.Screen
      name="Account"
      component={Accountscreen}
      options={{
        tabBarIcon: ({ size, color }) => (
          <MaterialCommunityIcons
            name="account-alert"
            size={29}
            color={color}
          />
        ),
        tabBarButton: (props) => <Tabbarcustombutton {...props} />,
      }}
    />
  </Tab.Navigator>
);

export default AppNavigator;
