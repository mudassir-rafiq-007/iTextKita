import { useContext } from "react";
import { View, Text, Platform, StyleSheet } from "react-native";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import { Colors } from "../../../../Components/Constants/Colors";
import { DimensionsContext } from "../../../../Components/Contexts/DimensionsContext";

export default function SubscribePage() {
  const {
    fontBold,
    fontRegular,
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
          height: isTabLandscape ? screenHeight * 0.13 : screenHeight * 0.1,
          width: dimensionSetter({
            mobile: "90%",
            tabPort: "70%",
            tabLand: "80%",
          }),
        },
      ]}
    >
      <View style={{ gap: screenHeight * 0.01 }}>
        <Text
          style={{
            color: Colors.primary,
            fontFamily: fontRegular,
            fontSize: isTabLandscape
              ? screenHeight * 0.025
              : screenHeight * 0.02,
          }}
        >
          Subscirbe Page
        </Text>
        <Text
          style={{
            color: Colors.active,
            fontFamily: fontRegular,
            textDecorationLine: "underline",
            fontSize: isTabLandscape
              ? screenHeight * 0.025
              : screenHeight * 0.02,
          }}
        >
          http://nt.k/p/6XuLyD
        </Text>
      </View>
      <MaterialIcons
        name="keyboard-arrow-right"
        color={Colors.secondary}
        size={screenHeight * 0.04}
      />
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
    height: "60%",
    width: "40%",
    borderWidth: 1,
    alignItems: "center",
    justifyContent: "center",
    borderColor: Colors.secondary,
  },
});
