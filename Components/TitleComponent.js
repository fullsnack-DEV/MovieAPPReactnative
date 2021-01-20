import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function TitleComponent({ title }) {
  return (
    <View style={styles.txtcontainer}>
      <Text style={styles.txt} numberOfLines={1}>
        {title}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  txtcontainer: {
    left: 20,
    top: 10,
  },
  txt: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#fff",
    fontFamily: "copse",
  },
});
