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
import tv from "../API/Tmdb";
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
  const [nowplaying, setnowplaying] = useState([]);
  const [shows, setshows] = useState([]);
  const [onair, setonair] = useState([]);
  const scrollX = useRef(new Animated.Value(0)).current;

  //calling the API first time when it renders

  useEffect(() => {
    loadmovie();
  }, []);

  //creating a async function to fetch
  const loadmovie = async () => {
    const response = await Movie.getpopular();
    const response2 = await Movie.getupcoming();
    const response3 = await Movie.getNowplaying();
    const response4 = await Movie.getshows();
    const response5 = await Movie.getonair();
    const result = response.data.results;

    setpopular([{ key: "left" }, ...result, { key: "right" }]);
    setupcoming(response2.data.results);
    setnowplaying(response3.data.results);
    setshows(response4.data.results);
    setonair(response5.data.results);
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
          <View style={{ height: height * 2 }}>
            <View>
              <View
                style={{
                  height: height * 0.5,

                  top: "-20%",
                }}
              >
                <TitleComponent title={"Top Rated"} />
                <FlatList
                  data={nowplaying.reverse()}
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

              <View style={{ height: height * 0.5, top: "-20%" }}>
                <TitleComponent title={"Newly arrived"} />
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
              <View style={{ height: height * 0.5, top: "-20%" }}>
                <TitleComponent title={"Tv Shows"} />
                <FlatList
                  data={shows}
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
              <View style={{ height: height * 0.5, top: "-20%" }}>
                <TitleComponent title={"Shows on Air"} />
                <FlatList
                  data={onair}
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
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});
