import React, { useState, useEffect, useRef } from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  StatusBar,
  FlatList,
  Dimensions,
  Animated,
  ScrollView,
  _View,
} from "react-native";

import Movie from "../API/getmovies";
import BackDropmovie from "../Components/BackDropmovie";
import PopularCardcom from "../Components/PopularCardcom";
import RatingsCom from "../Components/RatingsCom";

const { width, height } = Dimensions.get("window");

//constants

const ITEM_SIZE = width * 0.74;
const EMPTY_ITEM_SIZE = (width - ITEM_SIZE) / 2;
const SPACING_UP = 10;
const SPACER_SIZE = (width - ITEM_SIZE) / 2;

export default function HomeScreen() {
  const [popular, setpopular] = useState([]);
  const [errorM, seterrorM] = useState("");

  const scrollX = useRef(new Animated.Value(0)).current;

  //calling the API first time when it renders

  useEffect(() => {
    loadmovie();
  }, []);

  //creating a async function to fetch
  const loadmovie = async () => {
    const response = await Movie.getpopular();
    const result = response.data.results;
    setpopular([{ key: "left" }, ...result, { key: "right" }]);
  };

  //getting the poster path from different URL
  const getposter = (path) =>
    `https://image.tmdb.org/t/p/w440_and_h660_face${path}`;

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#29282c" }}>
      <ScrollView>
        <View>
          <BackDropmovie movies={popular} scrollX={scrollX} />
          <Animated.FlatList
            data={popular}
            horizontal
            showsHorizontalScrollIndicator={false}
            snapToInterval={ITEM_SIZE}
            decelerationRate={0}
            keyExtractor={(item) => item.id}
            bounces={false}
            scrollEventThrottle={32}
            onScroll={Animated.event(
              [{ nativeEvent: { contentOffset: { x: scrollX } } }],
              { useNativeDriver: true }
            )}
            renderItem={({ item, index }) => {
              if (!item.poster_path) {
                return <View style={{ width: SPACER_SIZE }}></View>;
              }

              const inputRange = [
                (index - 2) * ITEM_SIZE,
                (index - 1) * ITEM_SIZE,
                index * ITEM_SIZE,
              ];

              const translateY = scrollX.interpolate({
                inputRange,
                outputRange: [0, -50, 0],
              });
              return (
                <PopularCardcom
                  poster={getposter(item.poster_path)} //passing the poster path to the getposter to get the poster
                  title={item.title}
                  rating={item.vote_average}
                  translateY={translateY}
                />
              );
            }}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});
