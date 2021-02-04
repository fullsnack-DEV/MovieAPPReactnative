import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

//const
const { height, width } = Dimensions.get("window");

export default function DeleteItemCom() {
  return (
    <TouchableOpacity>
      <View style={styles.container}>
        <MaterialCommunityIcons name="delete-circle" size={45} color={"red"} />
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 60,
    width: 60,
    alignItems: "center",
    borderRadius: 50,
    backgroundColor: "#fff",
    justifyContent: "center",
    top: height * 0.22,
    right: 18,
  },
});
