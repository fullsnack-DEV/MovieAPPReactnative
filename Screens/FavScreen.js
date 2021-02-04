import React from "react";
import { View, Text, StyleSheet, SafeAreaView, Dimensions } from "react-native";
import CartListCom from "../Components/CartListCom";
import DeleteItemCom from "../Components/DeleteItemCom";

//const

export default function FavScreen() {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#000000" }}>
      <CartListCom
        title="Nero"
        renderRightActions={() => {
          return <DeleteItemCom />;
        }}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});
