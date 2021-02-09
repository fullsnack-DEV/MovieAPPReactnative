import React from "react";
import { View, Text, StyleSheet, SafeAreaView, Image } from "react-native";
import ButtonCom from "../Components/ButtonCom";

export default function Accountscreen() {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#000000" }}>
      <View style={styles.imgcontainer}>
        <Image
          style={{ height: 130, width: 130, borderRadius: 80 }}
          source={require("../assets/Images/zoro.jpg")}
        />
      </View>
      <View style={styles.txtcontainer}>
        <Text style={{ fontSize: 25, fontWeight: "bold", color: "#fff" }}>
          Ronora Zoro
        </Text>
      </View>
      <View style={{ top: 120, alignSelf: "center" }}>
        <ButtonCom title="Sign-out" />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  imgcontainer: {
    alignSelf: "center",
    top: 80,
  },
  txtcontainer: {
    alignSelf: "center",
    top: 100,
  },
});
