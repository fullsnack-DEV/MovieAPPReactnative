import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

export default function Topratedcom({ poster, title }) {
  return (
    <View style={styles.container}>
      <Image source={{ uri: poster }} style={styles.img} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 5,
    height: "80%",
    top: 10,
  },
  img: {
    height: "90%",
    width: 150,
    borderRadius: 15,
    left: 12,
  },

  txt: {
    color: "#fff",
    fontSize: 18,
  },
  txtcontainer: {
    marginVertical: 15,
    width: "80%",
    alignSelf: "center",
  },
});
