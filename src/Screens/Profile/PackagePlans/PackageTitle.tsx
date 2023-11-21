import { View, Text } from "react-native";
import React, { useContext } from "react";
import { Colors } from "../../../Components/Constants/Colors";
import { DimensionsContext } from "../../../Components/Contexts/DimensionsContext";

interface propsType {
  title: string;
  price: number;
}

export default function PackageTitle(props: propsType) {
  const {isTabLandscape, screenWidth, screenHeight, fontFamily } = useContext(DimensionsContext);
  return (
    <View style={{ gap: screenHeight * 0.005 }}>
      <Text
        style={{
          color: Colors.primary,
          fontFamily: "Poppins-Bold",
          fontSize: isTabLandscape ? screenHeight * 0.03 : screenHeight * 0.02,
        }}
      >
        {props.title}
      </Text>
      <Text
        style={{
          color: Colors.secondary,
          fontFamily: "Poppins-Bold",
          fontSize: isTabLandscape ? screenHeight * 0.03 : screenHeight * 0.02,
        }}
      >
        {props.price}$<Text style={{ fontFamily: fontFamily }}>/per month</Text>
      </Text>
    </View>
  );
}
