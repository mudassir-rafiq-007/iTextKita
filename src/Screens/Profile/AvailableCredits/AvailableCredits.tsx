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
import { moderateScale, moderateVerticalScale, scale, verticalScale} from "react-native-size-matters";

interface propsType{
  navigate: (screen: string, {}: object) => void
}

export default function AvailableCredits(props: propsType) {
  const {
    fontBold,
    fontRegular,
    screenWidth,
    screenHeight,
    isTabLandscape,
    isTabPortrait,
    dimensionSetter,
  } = useContext(DimensionsContext);
  return (
    <View
      style={[
        styles.main,
        {
          borderRadius: screenHeight * 0.005,
          paddingTop: Platform.OS == "android" ? "2%" : null,
          height: (isTabPortrait ? moderateVerticalScale(70, 0.5):(isTabLandscape ? moderateVerticalScale(70, 0.5): moderateVerticalScale(70,0.5))),
          width: (isTabPortrait ? moderateVerticalScale(500, 0.5):(isTabLandscape ? moderateVerticalScale(400, 0.5): moderateVerticalScale(310,0.5))),
        },
      ]}
    >
      <View style={{ gap: screenHeight * 0.01 }}>
        <Text
          style={{
            color: Colors.primary,
            fontFamily: fontRegular,
            fontSize: (isTabPortrait ? moderateVerticalScale(12, 0.5):(isTabLandscape ? moderateVerticalScale(12, 0.5): moderateVerticalScale(15,0.5))),
          }}
        >
          Available Credits
        </Text>
        <Text
          style={{
            fontFamily: fontBold,
            color: Colors.secondary,
            fontSize: (isTabPortrait ? moderateVerticalScale(16, 0.5):(isTabLandscape ? moderateVerticalScale(16, 0.5): moderateVerticalScale(20,0.5))),
          }}
        >
          2451041
        </Text>
      </View>
      <TouchableOpacity
        onPress={() => props.navigate("Purchase Credits", {})}
        style={[
          styles.addMoreView,
          {
            borderRadius: screenHeight * 0.05,
            height: (isTabPortrait ? moderateVerticalScale(35, 0.5):(isTabLandscape ? moderateVerticalScale(35, 0.5): moderateVerticalScale(35,0.5))),
            paddingTop: Platform.OS == "android" ? "1%" : null,
          },
        ]}
      >
        <Text
          style={{
            color: Colors.secondary,
            fontSize: (isTabPortrait ? moderateVerticalScale(15, 0.5):(isTabLandscape ? moderateVerticalScale(15, 0.5): moderateVerticalScale(16,0.5))),
            fontFamily: fontBold,
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
