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
  TouchableOpacity,
} from "react-native";

import Movie from "../API/getmovies";
import tv, { movies } from "../API/Tmdb";
import BackDropmovie from "../Components/BackDropmovie";
import Errormessge from "../Components/errormessge";
import Moviesflatlist from "../Components/Moviesflatlist";

import PopularCardcom from "../Components/PopularCardcom";
import RatingsCom from "../Components/RatingsCom";
import TitleComponent from "../Components/TitleComponent";
import Topratedcom from "../Components/Topratedcom";
import UseApi from "../Hooks/UseApi";

const { width, height } = Dimensions.get("window");

//constants

const ITEM_SIZE = width * 0.74;
const EMPTY_ITEM_SIZE = (width - ITEM_SIZE) / 2;
const SPACING_UP = 10;
const SPACER_SIZE = (width - ITEM_SIZE) / 2;

export default function HomeScreen({ navigation }) {
  const scrollX = useRef(new Animated.Value(0)).current;

  //calling the API first time when it renders

  const {
    request: loadmovies,
    popular,
    errorM,
    nowplaying,
    onair,
    upcoming,
    Arriving,
    shows,
  } = UseApi();

  useEffect(() => {
    loadmovies();
  }, []);

  //getting the poster path from different URL
  const getposter = (path) =>
    `https://image.tmdb.org/t/p/w440_and_h660_face${path}`;

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#000000" }}>
      <StatusBar style="dark" />
      {errorM && (
        <>
          <Errormessge error={"Not able to load the data "} />
        </>
      )}
      <ScrollView>
        <View>
          <BackDropmovie movies={popular} scrollX={scrollX} />
          <Animated.FlatList
            data={popular}
            horizontal
            showsHorizontalScrollIndicator={false}
            snapToInterval={ITEM_SIZE}
            decelerationRate={0}
            keyExtractor={(item) => `${item.id}`}
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
                <TouchableOpacity
                  onPress={() =>
                    navigation.navigate("info", {
                      item,
                    })
                  }
                >
                  <PopularCardcom
                    poster={getposter(item.poster_path)} //passing the poster path to the getposter to get the poster
                    title={item.title}
                    rating={item.vote_average}
                    translateY={translateY}
                  />
                </TouchableOpacity>
              );
            }}
          />
          <View style={{ height: height * 1.4 }}>
            <View>
              <View
                style={{
                  height: height * 0.5,
                  top: "-14%",
                }}
              >
                <TitleComponent title={"Top Rated"} />
                <Moviesflatlist
                  data={nowplaying.reverse()}
                  navigation={navigation}
                />
              </View>

              <View style={{ height: height * 0.5, top: "-20%" }}>
                <TitleComponent title={"Newly arrived"} />
                <Moviesflatlist
                  data={upcoming.reverse()}
                  navigation={navigation}
                />
              </View>
              <View style={{ height: height * 0.5, top: "-26%" }}>
                <TitleComponent title={"Tv Shows"} />
                <Moviesflatlist
                  data={shows.reverse()}
                  navigation={navigation}
                />
              </View>
              <View style={{ height: height * 0.5, top: "-32%" }}>
                <TitleComponent
                  title={"Shows on Air"}
                  navigation={navigation}
                />
                <Moviesflatlist data={onair} navigation={navigation} />
              </View>
              <View style={{ height: height * 0.5, top: "-38%" }}>
                <TitleComponent title={"Ariving Today"} />
                <Moviesflatlist
                  data={Arriving.reverse()}
                  navigation={navigation}
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
