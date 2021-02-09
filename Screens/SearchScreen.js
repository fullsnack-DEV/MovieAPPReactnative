import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, SafeAreaView, FlatList } from "react-native";
import SearchCom from "../Components/SearchCom";

import Movies from "../API/getmovies";
import SerachMovieCom from "../Components/SerachMovieCom";

//costants
const getposter = (path) =>
  `https://image.tmdb.org/t/p/w440_and_h660_face${path}`;

export default function SearchScreen({ navigation }) {
  const [term, setterm] = useState();
  const [qmovies, setqmovies] = useState();

  const getquery = async () => {
    const response = await Movies.getqueryMovie(term);
    setqmovies(response.data.results);
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#29282c" }}>
      <SearchCom
        term={term}
        onchangeTerm={(newterm) => setterm(newterm)}
        onSubmitTerm={() => getquery()}
      />
      <FlatList
        data={qmovies}
        keyExtractor={(item, index) => String(index)}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => {
          return (
            <SerachMovieCom
              img={getposter(item.poster_path)}
              title={item.title}
              navigation={navigation}
              item={item}
            />
          );
        }}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});
