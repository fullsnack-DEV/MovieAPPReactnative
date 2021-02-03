import React from "react";
import { View, Text, FlatList, Image, TouchableOpacity } from "react-native";

import Topratedcom from "./Topratedcom";

//
const getposter = (path) =>
  `https://image.tmdb.org/t/p/w440_and_h660_face${path}`;

export default function Moviesflatlist({ data, navigation }) {
  return (
    <View>
      <FlatList
        data={data}
        keyExtractor={(item, index) => String(index)}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={({ item, index }) => {
          const name = item.name;
          return (
            <TouchableOpacity
              onPress={() =>
                navigation.navigate("info", {
                  item,
                  name,
                })
              }
            >
              <Topratedcom
                poster={getposter(item.poster_path)}
                title={item.title}
              />
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
}
