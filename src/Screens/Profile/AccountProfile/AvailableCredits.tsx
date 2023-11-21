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
  const { fontFamily, screenWidth, screenHeight, dimensionSetter } =
    useContext(DimensionsContext);
  return (
    <View
      style={[
        styles.main,
        {
          height: screenHeight * 0.1,
          borderRadius: screenHeight * 0.005,
          paddingTop: Platform.OS == "android" ? "2%" : null,
          width: dimensionSetter({
            mobile: "90%",
            tabPort: "70%",
            tabLand: "70%"
          }),
        },
      ]}
    >
      <View style={{ gap: screenHeight * 0.01 }}>
        <Text style={{ color: Colors.primary, fontSize: screenHeight * 0.02 }}>
          Available Credits
        </Text>
        <Text
          style={{
            color: Colors.secondary,
            fontFamily: "Poppins-Bold",
            fontSize: screenHeight * 0.025,
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
            paddingTop: Platform.OS == "android" ? "1%" : null,
          },
        ]}
      >
        <Text
          style={{
            fontFamily: fontFamily,
            color: Colors.secondary,
            fontSize: screenHeight * 0.02,
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
    height: "60%",
    width: "40%",
    borderWidth: 1,
    alignItems: "center",
    justifyContent: "center",
    borderColor: Colors.secondary,
  },
});
