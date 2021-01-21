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
    padding: 15,
    height: "40%",
    top: 20,
  },
  img: {
    height: "240%",
    width: 180,
    borderRadius: 15,
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
