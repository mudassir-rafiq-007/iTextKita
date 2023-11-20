import { useContext } from "react";
import { View, Text, Image } from "react-native";
import { Colors } from "../../Components/Constants/Colors";
import { DimensionsContext } from "../../Components/Contexts/DimensionsContext";

export default function Subscribe() {
  const { fontFamily, screenWidth, screenHeight, dimensionSetter } =
    useContext(DimensionsContext);
  return (
    <View style={{ zIndex: 2, alignItems: "center", gap: screenHeight * 0.01 }}>
      <Image
        source={require("../../../assets/Icons/news-letter.png")}
        style={{ height: screenHeight * 0.1, width: screenHeight * 0.1 }}
      />
      <Text
        style={{
          color: Colors.primary,
          fontFamily: "Poppins-Bold",
          fontSize: screenHeight * 0.03,
        }}
      >
        Subscribe
      </Text>
      <Text
        style={{
          textAlign: "center",
          color: Colors.primary,
          fontFamily: fontFamily,
          width: dimensionSetter({
            mobile: screenWidth * 0.7,
            tabPort: screenWidth * 0.5,
            tabLand: screenWidth * 0.2,
          }),
          fontSize: screenHeight * 0.02,
        }}
      >
        Get our newsletter and never miss out on a thing
      </Text>
    </View>
  );
}
