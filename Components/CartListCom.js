import React from "react";
import { View, Text, SafeAreaView, Dimensions, StyleSheet } from "react-native";
import Swipeable from "react-native-gesture-handler/Swipeable";

//const
const { height, width } = Dimensions.get("window");

export default function CartListCom({ title, renderRightActions }) {
  return (
    <View style={styles.containers}>
      <Swipeable renderRightActions={renderRightActions}>
        <View style={styles.favmovie}>
          <View style={styles.imgcontainer} />

          <View style={styles.infocontainer}>
            <Text style={{ color: "#000", fontSize: 20 }}>{title}</Text>
          </View>
        </View>
      </Swipeable>
    </View>
  );
}

const styles = StyleSheet.create({
  favmovie: {
    height: "59%",
    width: "85%",
    backgroundColor: "#fff",
    alignSelf: "center",
    top: height * 0.2,
    flexDirection: "row",
    borderRadius: 20,
  },
  imgcontainer: {
    backgroundColor: "red",
    height: 60,
    width: 60,
    borderRadius: 30,
    marginVertical: "3%",
    marginLeft: "8%",
  },
  infocontainer: {
    alignSelf: "center",
    padding: 25,

    width: "70%",
    marginLeft: 5,
  },
  containers: {},
});
