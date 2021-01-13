import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  StatusBar,
  FlatList,
} from "react-native";

import getpop from "../API/getmovies";
export default function HomeScreen() {
  const [popular, setpopular] = useState([]);
  const [errorM, seterrorM] = useState("");

  //calling the API first time when it renders

  //creating a async function to fetch
  useEffect(() => {
    loadmovie();
  }, []);

  const loadmovie = async () => {
    const response = await getpop.getpopular();
    setpopular(response.data.results);
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#29282c" }}>
      <Text style={{ color: "#fff" }}>Movie List</Text>
      <FlatList
        data={popular}
        keyExtractor={(popular) => popular.id.toString()}
        renderItem={({ item }) => (
          <View>
            <Text style={{ color: "#fff" }}>{item.title}</Text>
            <Text style={{ color: "#fff" }}>{item.id}</Text>
          </View>
        )}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});
