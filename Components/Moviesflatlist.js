import React from "react";
import { View, Text, FlatList, Image } from "react-native";
import Topratedcom from "./Topratedcom";

//
const getposter = (path) =>
  `https://image.tmdb.org/t/p/w440_and_h660_face${path}`;

export default function Moviesflatlist({ data }) {
  return (
    <View>
      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={({ item, index }) => {
          return (
            <Topratedcom
              poster={getposter(item.poster_path)}
              title={item.title}
            />
          );
        }}
      />
    </View>
  );
}
