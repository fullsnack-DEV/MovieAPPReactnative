import React from "react";
import {
  View,
  Text,
  SafeAreaView,
  Dimensions,
  StyleSheet,
  Image,
} from "react-native";
import Swipeable from "react-native-gesture-handler/Swipeable";

//const
const { height, width } = Dimensions.get("window");

export default function CartListCom({ title, renderRightActions, img }) {
  return (
    <View style={styles.containers}>
      <Swipeable renderRightActions={renderRightActions}>
        <View style={styles.favmovie}>
          <View style={styles.imgcontainer}>
            <Image
              style={{
                height: 70,
                width: 70,
                borderRadius: 50,
                alignSelf: "center",
              }}
              source={{ uri: img }}
            />
          </View>

          <View style={styles.infocontainer}>
            <Text style={{ color: "#000", fontSize: 18, fontWeight: "bold" }}>
              {title}
            </Text>
          </View>
        </View>
      </Swipeable>
    </View>
  );
}

const styles = StyleSheet.create({
  favmovie: {
    height: 80,
    width: 300,
    backgroundColor: "#fff",
    alignSelf: "center",

    flexDirection: "row",
    borderRadius: 20,
  },
  imgcontainer: {
    height: 60,
    width: 60,
    borderRadius: 30,
    marginVertical: "1.5%",
    marginLeft: "8%",
  },
  infocontainer: {
    alignSelf: "center",
    padding: 25,

    width: "70%",
    marginLeft: 5,
  },
  containers: {
    padding: 25,
  },
});
