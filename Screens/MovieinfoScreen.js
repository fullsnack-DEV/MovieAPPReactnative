import React from "react";
import {
  View,
  Text,
  FlatList,
  Image,
  Dimensions,
  SafeAreaView,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import RatingsCom from "../Components/RatingsCom";
//var
const { width, height } = Dimensions.get("window");
const BACKDROP_HEIGHT = height * 0.65;
//func
const getposter = (path) =>
  `https://image.tmdb.org/t/p/w440_and_h660_face${path}`;

export default function MovieinfoScreen({ route }) {
  const { item, name } = route.params;

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#000000" }}>
      <View
        style={{
          width,
          height: height * 0.6,
          position: "absolute",
          top: 0,
        }}
      >
        <Image
          source={{ uri: getposter(item.poster_path) }}
          style={{ height: height * 0.6, width }}
          resizeMode="cover"
        />

        <View style={{ position: "absolute", top: "80%" }}>
          <Text
            style={{
              fontSize: 35,
              fontWeight: "bold",
              color: "#fff",
              textAlign: "center",
              zIndex: 1,
            }}
          >
            {item.title || item.name}
          </Text>
          <View style={{ zIndex: 1 }}>
            <RatingsCom rating={item.vote_average} />
          </View>

          <Text
            numberOfLines={5}
            style={{
              color: "#fff",
              lineHeight: 20,
              textAlign: "center",
              zIndex: 1,
            }}
          >
            {item.overview}
          </Text>
        </View>
        <LinearGradient
          colors={["transparent", "#000000"]}
          style={{
            position: "absolute",
            bottom: 0,
            height: BACKDROP_HEIGHT * 0.9,
            width,
          }}
        />
      </View>
    </SafeAreaView>
  );
}
