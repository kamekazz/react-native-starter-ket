import React, { useState } from "react";
import { View, Animated, TouchableOpacity, Text } from "react-native";
import { AppInfo } from "../../../constants/AppInfo";
import { TextEl } from "../../../style/element";

const HomeScreen = () => {
  const leftValue = useState(new Animated.Value(5))[0];
  function moveBall() {
    Animated.spring(leftValue, {
      toValue: 0,
      duration: 1000,
      useNativeDriver: false,
    }).start();
  }
  return (
    <View style={{ flex: 1 }}>
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Animated.View
          style={{
            width: 100,
            height: 100,
            borderRadius: 100 / 2,
            backgroundColor: "red",
            marginLeft: leftValue,
          }}
        />
        <TouchableOpacity onPress={moveBall}>
          <TextEl>{AppInfo.title}</TextEl>
        </TouchableOpacity>
      </View>
    </View>
  );
};

HomeScreen.navigationOptions = {
  header: null,
};

export default HomeScreen;
