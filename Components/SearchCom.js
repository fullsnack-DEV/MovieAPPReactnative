import React from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
export default function SearchCom({ term, onchangeTerm, onSubmitTerm }) {
  return (
    <View style={styles.Searchcontainer}>
      <TextInput
        style={styles.txtinput}
        placeholder="Search Movies"
        autoCapitalize="none"
        autoCorrect={false}
        value={term}
        onChangeText={onchangeTerm}
        onEndEditing={onSubmitTerm}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  Searchcontainer: {
    top: 20,
    alignItems: "center",
    marginBottom: "10%",
    height: "10%",
  },
  txtinput: {
    backgroundColor: "#fff",
    height: "55%",
    borderRadius: 15,
    fontSize: 16,
    width: "60%",
    top: 20,

    padding: 8,
  },
});
