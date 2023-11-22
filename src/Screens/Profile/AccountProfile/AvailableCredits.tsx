import { useContext } from "react";
import {
  View,
  Text,
  Platform,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { Colors } from "../../../Components/Constants/Colors";
import { DimensionsContext } from "../../../Components/Contexts/DimensionsContext";

export default function AvailableCredits() {
  const {
    fontFamily,
    screenWidth,
    screenHeight,
    isTabLandscape,
    dimensionSetter,
  } = useContext(DimensionsContext);
  return (
    <View
      style={[
        styles.main,
        {
          borderRadius: screenHeight * 0.005,
          paddingTop: Platform.OS == "android" ? "2%" : null,
          height: isTabLandscape ? screenHeight * 0.15 : screenHeight * 0.1,
          width: dimensionSetter({
            mobile: "90%",
            tabPort: "70%",
            tabLand: "90%",
          }),
        },
      ]}
    >
      <View style={{ gap: screenHeight * 0.01 }}>
        <Text
          style={{
            color: Colors.primary,
            fontSize: isTabLandscape
              ? screenHeight * 0.03
              : screenHeight * 0.02,
          }}
        >
          Available Credits
        </Text>
        <Text
          style={{
            color: Colors.secondary,
            fontFamily: "Poppins-Bold",
            fontSize: isTabLandscape
              ? screenHeight * 0.035
              : screenHeight * 0.025,
          }}
        >
          2451041
        </Text>
      </View>
      <TouchableOpacity
        onPress={() => {}}
        style={[
          styles.addMoreView,
          {
            borderRadius: screenHeight * 0.05,
            height: isTabLandscape ? "40%" : "60%",
            paddingTop: Platform.OS == "android" ? "1%" : null,
          },
        ]}
      >
        <Text
          style={{
            color: Colors.secondary,
            fontSize: screenHeight * 0.02,
            fontFamily: isTabLandscape ? "Poppins-Bold" : fontFamily,
          }}
        >
          Add more
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    width: "90%",
    borderWidth: 1,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: "5%",
    borderColor: Colors.secondary,
    justifyContent: "space-between",
  },
  addMoreView: {
    width: "40%",
    borderWidth: 1,
    alignItems: "center",
    justifyContent: "center",
    borderColor: Colors.secondary,
  },
});
