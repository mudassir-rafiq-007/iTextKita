import { useContext } from "react";
import { View, Text, StyleProp, ViewStyle } from "react-native";
import TwoPersonsIcon from "../../../assets/images/two-persons.svg";
import { DimensionsContext } from "../../Components/Contexts/DimensionsContext";

interface propsType {
  style: StyleProp<ViewStyle>;
}

export default function TwoPersonBg(props: propsType) {
  const {
    fontBold,
    fontRegular,
    screenWidth,
    screenHeight,
    isTabLandscape,
    dimensionSetter,
  } = useContext(DimensionsContext);
  return (
    <View style={props.style}>
      <TwoPersonsIcon
        height={dimensionSetter({
          mobile: screenHeight * 0.22,
          tabPort: screenHeight * 0.3,
          tabLand: screenHeight * 0.55,
        })}
        width={dimensionSetter({
          mobile: screenWidth * 0.9,
          tabPort: screenWidth * 0.95,
          tabLand: screenWidth * 0.95,
        })}
      />
      <Text
        style={{
          zIndex: 1,
          color: "white",
          fontFamily: fontRegular,
          marginVertical: dimensionSetter({
            mobile: screenHeight * 0.05,
            tabPort: screenHeight * 0.05,
            tabLand: screenHeight * 0.02,
          }),
          fontSize: dimensionSetter({
            mobile: screenWidth * 0.04,
            tabPort: screenWidth * 0.025,
            tabLand: screenWidth * 0.015,
          }),
        }}
      >
        ⓒ & 2023 NTech Crop.
      </Text>
    </View>
  );
}
