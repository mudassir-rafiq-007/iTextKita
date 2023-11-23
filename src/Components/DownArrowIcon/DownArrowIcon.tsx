import { useContext } from "react";
import { View, Platform } from "react-native";
import { Colors } from "../Constants/Colors";
import { DimensionsContext } from "../Contexts/DimensionsContext";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";

export default function DownArrowIcon() {
  const { screenHeight, screenWidth, dimensionSetter } =
    useContext(DimensionsContext);
  return (
    <View
      style={{
        zIndex: Platform.OS == "android" ? 2 : null,
        backgroundColor: Colors.secondary,
        height: dimensionSetter({
          mobile: screenHeight * 0.03,
          tabPort: screenHeight * 0.03,
          tabLand: screenHeight * 0.04,
        }),
        width: dimensionSetter({
          mobile: screenHeight * 0.03,
          tabPort: screenHeight * 0.03,
          tabLand: screenHeight * 0.04,
        }),
        borderRadius: dimensionSetter({
          mobile: screenHeight * 0.015,
          tabPort: screenHeight * 0.015,
          tabLand: screenHeight * 0.02,
        }),
      }}
    >
      <MaterialIcons
        color={Colors.primary}
        name="keyboard-arrow-down"
        size={dimensionSetter({
          mobile: screenHeight * 0.03,
          tabPort: screenHeight * 0.03,
          tabLand: screenHeight * 0.04,
        })}
      />
    </View>
  );
}
