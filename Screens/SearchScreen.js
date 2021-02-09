import React from "react";
import { View, Text, StyleSheet, SafeAreaView, TextInput } from "react-native";

export default function SearchScreen() {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#29282c" }}>
      <View style={styles.Searchcontainer}>
        <TextInput style={{ backgroundColor: "#fff" }} />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});
