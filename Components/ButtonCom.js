import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

export default function ButtonCom({ title, onPress }) {
  return (
    <TouchableOpacity style={styles.buttoncontainer} onPress={onPress}>
      <Text
        style={{
          color: "#fff",
          fontWeight: "bold",
          textAlignVertical: "center",
          fontSize: 16,
        }}
      >
        {title}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  buttoncontainer: {
    height: 50,
    width: 165,
    backgroundColor: "red",
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-around",
    borderRadius: 20,
  },
});
