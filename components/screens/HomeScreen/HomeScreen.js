import React, { useState } from "react";
import { View, Animated, TouchableOpacity, Text, Image } from "react-native";
import { AppInfo } from "../../../constants/AppInfo";
import { TextEl } from "../../../style/element";
import { gbStyle } from "../../../style/globalStyle";
import { StyleSheet } from "react-native";

const HomeScreen = () => {
  return (
    <View style={style.container}>
      <Image
        source={require("../../../assets/images/map.jpg")}
        style={{ width: 500, height: 900, opacity: 0.5 }}
        resizeMode="cover"
      />
    </View>
  );
};

HomeScreen.navigationOptions = {
  header: null,
};

export default HomeScreen;
const style = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
});
