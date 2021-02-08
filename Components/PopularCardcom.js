import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  Image,
  Animated,
} from "react-native";
const { width, height } = Dimensions.get("window");
import RatingsCom from "./RatingsCom";

//constants

const ITEM_SIZE = width * 0.74;
const EMPTY_ITEM_SIZE = (width - ITEM_SIZE) / 2;
const SPACING = 10;

export default function PopularCardcom({ poster, title, rating, translateY }) {
  return (
    <View style={styles.container}>
      <Animated.View
        style={{
          marginHorizontal: SPACING,
          padding: SPACING * 2,
          alignItems: "center",
          transform: [{ translateY }],
          borderRadius: 34,
        }}
      >
        <Image source={{ uri: poster }} style={styles.img} />
        <Text style={{ fontSize: 18, color: "white" }} numberOfLines={1}>
          {title}
        </Text>
        <RatingsCom rating={rating} />
      </Animated.View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: ITEM_SIZE,
    marginVertical: height * 0.3,
  },
  card: {},
  img: {
    width: "100%",
    height: ITEM_SIZE * 1.2,
    resizeMode: "cover",
    borderRadius: 24,
    margin: 0,
    marginBottom: 10,
  },
});
