import { View, Text, Image, TextInput } from "react-native";
import React from "react";
import { COLORS, FONTS, SIZES, assets } from "../constants";

export default function HomeHeader() {
  return (
    <View
      style={{
        backgroundColor: "#209BF1",
        padding: SIZES.font,
      }}
    >
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Image
          source={require("../assets/images/logo.png")}
          resizeMode="contain"
          style={{ width: 90, height: 25 }}
        />
        <View style={{ width: 45, height: 45 }}>
          <Image
            source={require("../assets/images/person01.png")}
            resizeMode="contain"
            style={{ width: "100%", height: "100%" }}
          />
          <Image
            source={"../assets/icons/badge.png"}
            resizeMode="contain"
            style={{
              position: "absolute",
              width: 15,
              height: 15,
              bottom: 0,
              right: 0,
            }}
          />
        </View>
      </View>
      <View style={{ marginVertical: SIZES.font }}>
        <Text
          style={{
            fontFamily: FONTS.regular,
            fontSize: SIZES.small,
            color: COLORS.white,
          }}
        >
          Hello, Aryan👋🏻
        </Text>
        <Text
          style={{
            fontFamily: FONTS.bold,
            fontSize: SIZES.large,
            color: COLORS.white,
            fontWeight: "800",
            marginTop: 10,
          }}
        >
          Let's find a masterpiece!
        </Text>
      </View>
      <View style={{ marginTop: SIZES.font }}>
        <View
          style={{
            width: "100%",
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            paddingHorizontal: 10,
            paddingVertical: 15,
            borderRadius: 25,
            borderWidth: 1,
            borderColor: "#fff",
          }}
        >
          <Image
            source={require("../assets/icons/search.png")}
            resizeMode="contain"
            style={{ width: 20, height: 20, marginRight: SIZES.base }}
          />
          <TextInput
            placeholder="Search NFTs"
            placeholderTextColor={"#fff"}
            color="#fff"
            fontSize="15"
            style={{ flex: 1 }}
            onChangeText={() => {}}
          />
        </View>
      </View>
    </View>
  );
}
