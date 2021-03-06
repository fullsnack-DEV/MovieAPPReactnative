import React from "react";
import {
  View,
  Text,
  FlatList,
  Image,
  Dimensions,
  Animated,
  StyleSheet,
} from "react-native";

const { width, height } = Dimensions.get("window");

const ITEM_SIZE = width * 0.74;
const BACKDROP_HEIGHT = height * 0.65;
const getBackdropPath = (path) =>
  `https://image.tmdb.org/t/p/w370_and_h556_multi_faces${path}`;

import { LinearGradient } from "expo-linear-gradient";
const EMPTY_ITEM_SIZE = (width - ITEM_SIZE) / 2;

//Backdrop Component
export default function BackDropmovie({ movies, scrollX }) {
  const data = [EMPTY_ITEM_SIZE, ...movies, EMPTY_ITEM_SIZE];
  return (
    <View
      style={{
        width,
        height: height * 0.6,
        position: "absolute",
        top: 0,
      }}
    >
      <FlatList
        horizontal
        style={{
          width,
        }}
        contentContainerStyle={{
          width,
          height: height * 0.6,

          flexDirection: "column",
          justifyContent: "center",
        }}
        data={data}
        keyExtractor={(item, index) => String(index)}
        renderItem={({ item, index }) => {
          const inputRange = [(index - 2) * ITEM_SIZE, (index - 1) * ITEM_SIZE];
          const outputRange = [0, width];
          const translateX = scrollX.interpolate({
            inputRange,
            outputRange,
          });

          return (
            <Animated.View
              key={(item, index) => String(index)}
              removeClippedSubviews={true}
              style={[
                StyleSheet.absoluteFillObject,
                {
                  transform: [{ translateX }],
                  top: (-height * 0.6) / 2,
                  width,
                  height: height * 0.6,

                  overflow: "hidden",
                },
              ]}
            >
              <Image
                source={{ uri: getBackdropPath(item.backdrop_path) }}
                style={{ height: height * 0.6, width }}
                resizeMode="cover"
                key={(index) => String(index)}
              />
            </Animated.View>
          );
        }}
      />
      <LinearGradient
        colors={["transparent", "#000000"]}
        style={{
          position: "absolute",
          bottom: 0,
          height: BACKDROP_HEIGHT * 0.1,
          width,
        }}
      />
    </View>
  );
}
