import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

export default function Topratedcom({ poster, title }) {
  return (
    <View style={styles.container}>
      <Image source={{ uri: poster }} style={styles.img} />
      <View style={styles.txtcontainer}>
        <Text style={styles.txt}>{title}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 15,
    height: "35%",

    top: 20,
  },
  img: {
    height: "98%",
    width: 180,
    borderRadius: 15,
  },

  txt: {
    color: "#fff",
    textAlign: "center",
    fontSize: 18,
  },
  txtcontainer: {
    marginVertical: 15,
  },
});
