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

export default function DeleteItemCom({ onPress }) {
  return (
    <TouchableOpacity style={{ marginRight: 35 }} onPress={onPress}>
      <View style={styles.container}>
        <MaterialCommunityIcons
          name="delete-circle"
          size={45}
          color={"white"}
        />
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

    justifyContent: "center",
    top: 12,
    right: 18,
  },
});
