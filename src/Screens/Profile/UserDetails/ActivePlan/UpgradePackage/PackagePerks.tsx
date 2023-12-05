import { useContext } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import IonIcons from "react-native-vector-icons/Ionicons";
import { Colors } from "../../../../../Components/Constants/Colors";
import { DimensionsContext } from "../../../../../Components/Contexts/DimensionsContext";

interface propsType {
  perks: string[];
}

export default function PackagePerks(props: propsType) {
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
      style={{
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <View style={{ gap: screenHeight * 0.01 }}>
        {props.perks.map((perk) => (
          <View
            key={perk}
            style={{
              flexDirection: "row",
              alignItems: "center",
              gap: screenWidth * 0.02,
            }}
          >
            <IonIcons
              color={Colors.secondary}
              size={isTabLandscape ? screenHeight * 0.03 : screenHeight * 0.02}
              name={"checkmark-circle-outline"}
            />
            <Text
              style={{
                color: Colors.primary,
                fontFamily: fontRegular,
                fontSize: isTabLandscape
                  ? screenHeight * 0.025
                  : screenHeight * 0.015,
              }}
            >
              {perk}
            </Text>
          </View>
        ))}
      </View>
      <TouchableOpacity
        style={[
          styles.button,
          {
            height: screenHeight * 0.04,
            borderRadius: screenHeight * 0.05,
          },
        ]}
      >
        <Text
          style={{
            color: "#fff",
            fontFamily: fontBold,
            fontSize: screenHeight * 0.015,
          }}
        >
          Subscribe Now
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    width: "40%",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: Colors.secondary,
  },
});
