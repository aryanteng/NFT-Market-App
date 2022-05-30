import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import { COLORS, SHADOWS, SIZES } from "../constants";

function CircleButton({ imgUrl, handlePress, ...props }) {
  return (
    <TouchableOpacity
      style={{
        width: 40,
        height: 40,
        backgroundColor: COLORS.white,
        position: "absolute",
        borderRadius: SIZES.extraLarge,
        alignItems: "center",
        justifyContent: "center",
        ...SHADOWS.light,
        ...props,
      }}
      onPress={handlePress}
    >
      <Image
        source={require("../assets/icons/heart.png")}
        resizeMode="contain"
        style={{ width: 24, height: 24 }}
      />
    </TouchableOpacity>
  );
}

export default CircleButton;
