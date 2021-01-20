import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function TitleComponent({ title }) {
  return (
    <View style={styles.txtcontainer}>
      <Text style={styles.txt}> {title} </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  txtcontainer: {
    left: 20,
    top: 15,
  },
  txt: {
    fontSize: 25,
    color: "#fff",
  },
});
