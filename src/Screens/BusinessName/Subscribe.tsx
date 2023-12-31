import { useContext } from "react";
import { View, Text, Image } from "react-native";
import { Colors } from "../../Components/Constants/Colors";
import { DimensionsContext } from "../../Components/Contexts/DimensionsContext";

export default function Subscribe() {
  const {
    fontBold,
    fontRegular,
    screenWidth,
    screenHeight,
    isTabLandscape,
    dimensionSetter,
  } = useContext(DimensionsContext);
  return (
    <View style={{ zIndex: 2, alignItems: "center", gap: screenHeight * 0.01 }}>
      <Image
        source={require("../../../assets/Icons/news-letter.png")}
        style={{
          width: isTabLandscape ? screenHeight * 0.15 : screenHeight * 0.1,
          height: isTabLandscape ? screenHeight * 0.15 : screenHeight * 0.1,
        }}
      />
      <Text
        style={{
          color: Colors.primary,
          fontFamily: fontBold,
          fontSize: isTabLandscape ? screenHeight * 0.04 : screenHeight * 0.03,
        }}
      >
        Subscribe
      </Text>
      <Text
        style={{
          textAlign: "center",
          color: Colors.primary,
          fontFamily: fontRegular,
          fontSize: isTabLandscape ? screenHeight * 0.025 : screenHeight * 0.02,
          width: dimensionSetter({
            mobile: screenWidth * 0.7,
            tabPort: screenWidth * 0.5,
            tabLand: "100%",
          }),
        }}
      >
        Get our newsletter and never miss out on a thing
      </Text>
    </View>
  );
}
