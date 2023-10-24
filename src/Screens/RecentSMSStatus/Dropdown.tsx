import { useState, useContext } from "react";
import { Text, View, Image, StyleSheet, TouchableOpacity } from "react-native";
import { DimensionsContext } from "../../Components/Contexts/DimensionsContext";

type propType = {
  name: string;
};

export default function Dropdown(props: propType) {
  const { screenWidth, screenHeight, fontFamily, dimensionSetter } =
    useContext(DimensionsContext);

  const [showDropdown, setShowDropdown] = useState<boolean>();

  function dropdownSwitch() {
    setShowDropdown(!showDropdown);
  }
  return (
    <>
      <TouchableOpacity
        onPress={dropdownSwitch}
        style={{
          flexDirection: "row",
          alignItems: "center",
          backgroundColor: "white",
          height: screenHeight * 0.06,
          justifyContent: "space-between",
          paddingHorizontal: screenWidth * 0.04,
        }}
      >
        <Text
          style={{
            fontFamily: fontFamily,
            fontSize: screenHeight * 0.02,
          }}
        >
          {props.name}
        </Text>
        <View style={styles.icons}>
          <Image
            source={require("../../../assets/Icons/like.png")}
            style={{
              height: screenHeight * 0.03,
              width: screenHeight * 0.03,
            }}
          />
          <Image
            source={require("../../../assets/Icons/arrowdown.png")}
            style={{
              height: screenHeight * 0.02,
              width: screenHeight * 0.02,
              transform: [{ rotate: showDropdown ? "180deg" : "0deg" }],
            }}
          />
        </View>
      </TouchableOpacity>
      {showDropdown && (
        <View
          style={{
            alignItems: "center",
            justifyContent: "center",
            paddingVertical: screenHeight * 0.02,
          }}
        >
          <Text
            style={{
              fontFamily: fontFamily,
              fontSize: screenHeight * 0.02,
            }}
          >
            {new Date().toDateString()}
          </Text>
          <Text
            style={{
              fontFamily: fontFamily,
              fontSize: screenHeight * 0.02,
            }}
          >
            Use messages for web to send SMS, MMS
          </Text>
        </View>
      )}
    </>
  );
}

const styles = StyleSheet.create({
  icons: {
    width: "15%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  center: {
    alignItems: "center",
    justifyContent: "center",
  },
});
