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
  Image,
} from "react-native";

import Movie from "../API/getmovies";
import BackDropmovie from "../Components/BackDropmovie";

import PopularCardcom from "../Components/PopularCardcom";
import RatingsCom from "../Components/RatingsCom";
import TitleComponent from "../Components/TitleComponent";
import Topratedcom from "../Components/Topratedcom";

const { width, height } = Dimensions.get("window");

//constants

const ITEM_SIZE = width * 0.74;
const EMPTY_ITEM_SIZE = (width - ITEM_SIZE) / 2;
const SPACING_UP = 10;
const SPACER_SIZE = (width - ITEM_SIZE) / 2;

export default function HomeScreen() {
  const [popular, setpopular] = useState([]);
  const [errorM, seterrorM] = useState("");
  const [upcoming, setupcoming] = useState([]);

  const scrollX = useRef(new Animated.Value(0)).current;

  //calling the API first time when it renders

  useEffect(() => {
    loadmovie();
  }, []);

  //creating a async function to fetch
  const loadmovie = async () => {
    const response = await Movie.getpopular();
    const response2 = await Movie.getupcoming();
    const result = response.data.results;

    setpopular([{ key: "left" }, ...result, { key: "right" }]);
    setupcoming(response2.data.results);
  };

  //getting the poster path from different URL
  const getposter = (path) =>
    `https://image.tmdb.org/t/p/w440_and_h660_face${path}`;

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#29282c" }}>
      <ScrollView>
        <BackDropmovie movies={popular} scrollX={scrollX} />
        <View style={{}}>
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
          <View style={{ top: 10, height: "50%" }}>
            <TitleComponent title={"Top Rated"} />
            <FlatList
              data={upcoming.reverse()}
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
          <View style={{ height: "10%" }}></View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});
