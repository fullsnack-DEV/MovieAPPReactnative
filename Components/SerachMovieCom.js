import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export default function SerachMovieCom({ img, title, navigation, item }) {
  return (
    <TouchableOpacity
      onPress={() =>
        navigation.navigate("info", {
          item,
        })
      }
    >
      <View style={styles.container}>
        <View style={styles.imgcontainer}>
          <Image
            style={{ height: 80, width: 100, alignSelf: "center" }}
            source={{ uri: img }}
          />
        </View>
        <View style={styles.txtcontainer}>
          <Text
            style={{ fontSize: 14, fontWeight: "bold", color: "#fff" }}
            numberOfLines={1}
          >
            {title}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 100,
    width: "140%",
    flexDirection: "row",
  },
  imgcontainer: {
    height: "80%",
    width: "20%",
    left: "5%",
    alignSelf: "center",
  },
  txtcontainer: {
    alignSelf: "center",
    left: "5%",
    width: "50%",
    padding: 20,
  },
  iconcontainer: {
    height: "20%",
    width: "20%",
    alignSelf: "center",
    padding: 15,
    left: "25%",
  },
});
