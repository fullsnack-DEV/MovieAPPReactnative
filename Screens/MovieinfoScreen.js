import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  FlatList,
  Image,
  Dimensions,
  ScrollView,
  SafeAreaView,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import RatingsCom from "../Components/RatingsCom";
import Movies from "../API/getmovies";
import ButtonCom from "../Components/ButtonCom";
import { useSelector, useDispatch } from "react-redux";
//importing the hooks from React-Redux
import { addtofav } from "../Redux/Actions";
//importing a Action that we want to Dispatch
//var
const { width, height } = Dimensions.get("window");
const BACKDROP_HEIGHT = height * 0.65;
//func
const getposter = (path) =>
  `https://image.tmdb.org/t/p/w440_and_h660_face${path}`;

export default function MovieinfoScreen({ route }) {
  const dispatch = useDispatch();

  const { item, name } = route.params;
  const newid = item.id;
  console.log(newid);
  const title = item.title || item.name;
  console.log(title);

  useEffect(() => {
    console.log("this is the cast");
    getresults();
  }, [1]);

  const [credit, setcredit] = useState([]);

  const getresults = async () => {
    const response = await Movies.getcredit(item.id);
    setcredit(response.data.cast);
  };

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
            numberOfLines={1}
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
            numberOfLines={3}
            style={{
              color: "#fff",
              lineHeight: 20,
              textAlign: "center",
              zIndex: 1,
            }}
          >
            {item.overview}
          </Text>
          <Text
            style={{
              color: "#fff",
              fontSize: 22,
              fontWeight: "bold",

              marginTop: 12,
              marginLeft: 15,
            }}
          >
            Cast
          </Text>
          <View>
            <FlatList
              data={credit}
              keyExtractor={(item, index) => String(index)}
              horizontal
              showsHorizontalScrollIndicator={false}
              renderItem={({ item }) => {
                return (
                  <View
                    style={{
                      height: 90,
                      width: 90,
                      borderRadius: 50,
                      alignItems: "center",
                      marginVertical: 15,
                    }}
                  >
                    <Image
                      source={{ uri: getposter(item.profile_path) }}
                      style={{
                        width: 75,
                        height: 75,
                        borderRadius: 80,
                      }}
                    />
                  </View>
                );
              }}
            />
          </View>
        </View>
        <View
          style={{
            position: "absolute",
            top: height * 0.87,
            flexDirection: "row",
            alignSelf: "center",
          }}
        >
          <ButtonCom
            title="Add to WatchList!"
            onPress={() =>
              dispatch(addtofav(title, getposter(item.poster_path), newid))
            }
          />
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
