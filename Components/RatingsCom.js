import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { AntDesign } from "@expo/vector-icons";

export default function RatingsCom({ rating }) {
  const ratestar = Math.floor(rating / 2);
  const maxStar = Array(5 - ratestar).fill("staro");
  const ratings = [...Array(ratestar).fill("star"), ...maxStar];

  return (
    <View style={styles.rating}>
      <Text style={styles.ratingno}>{rating}</Text>
      {ratings.map((type, index) => {
        return <AntDesign key={index} name={type} size={12} color="tomato" />;
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  ratingno: {
    marginRight: 4,
    color: "white",
    fontSize: 14,
  },
  rating: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 4,
  },
});
