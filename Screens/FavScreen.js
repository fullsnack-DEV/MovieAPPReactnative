import React from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Dimensions,
  FlatList,
} from "react-native";
import CartListCom from "../Components/CartListCom";
import DeleteItemCom from "../Components/DeleteItemCom";
import { useSelector, useDispatch } from "react-redux";
import { deletefav } from "../Redux/Actions";

//const

export default function FavScreen() {
  const cart = useSelector((state) => state.Cart);
  const dispatch = useDispatch();
  console.log(cart);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#000000" }}>
      <View
        style={{
          marginVertical: 25,
          alignSelf: "center",
          alignItems: "center",
        }}
      >
        <Text style={{ color: "red", fontSize: 16, fontWeight: "bold" }}>
          Fav Movies!
        </Text>
      </View>
      <Text
        style={{
          color: "#fff",
          top: -25,
          alignSelf: "center",
          fontWeight: "700",
          fontSize: 15,
        }}
      >
        Swipe Left to Delete
      </Text>
      <FlatList
        style={styles.moviecartcontainer}
        data={cart}
        showsVerticalScrollIndicator={false}
        keyExtractor={(cart) => String(Math.random(cart.id))}
        renderItem={(data) => (
          <CartListCom
            title={data.item.title}
            img={data.item.img}
            renderRightActions={() => (
              <DeleteItemCom
                onPress={() => dispatch(deletefav(data.item.id))}
              />
            )}
          />
        )}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  moviecartcontainer: {
    top: 180,
    alignSelf: "center",
    width: "100%",
  },
});
