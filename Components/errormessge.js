import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function Errormessge({ error }) {
  return (
    <View style={styles.errorcontainer}>
      <Text style={styles.txt}>{error}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  errorcontainer: {
    justifyContent: "center",
  },
  txt: {
    fontSize: 25,
    fontStyle: "italic",
  },
});
