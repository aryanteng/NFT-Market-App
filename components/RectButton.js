import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import { COLORS, SHADOWS, SIZES } from "../constants";

export default function RectButton(props) {
  return (
    <TouchableOpacity
      style={{
        backgroundColor: COLORS.primary,
        borderRadius: SIZES.extraLarge,
        alignItems: "center",
        justifyContent: "center",
        padding: SIZES.small,
        minWidth: props.minWidth,
        ...SHADOWS.light,
        ...props,
      }}
      onPress={props.handlePress}
    >
      <Text
        style={{
          fontWeight: "700",
          fontSize: props.fontSize,
          color: COLORS.white,
        }}
      >
        Place a bid
      </Text>
    </TouchableOpacity>
  );
}
