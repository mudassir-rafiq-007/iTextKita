import { useContext } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import EvilIcons from "react-native-vector-icons/EvilIcons";
import FontAwesomeIcons from "react-native-vector-icons/FontAwesome";
import SimpleLineIcons from "react-native-vector-icons/SimpleLineIcons";
import { Colors } from "../../../Components/Constants/Colors";
import { DimensionsContext } from "../../../Components/Contexts/DimensionsContext";

interface propsType{
  navigate: (screen: string) => void;
}

export default function UserDetails(props: propsType) {
  const {isTabLandscape, fontFamily, screenWidth, screenHeight, dimensionSetter } =
    useContext(DimensionsContext);

  const textStyle = {
    fontFamily: fontFamily,
    fontSize: screenHeight * 0.015,
  };
  return (
    <View
      style={{
        gap: isTabLandscape ? screenHeight * 0.02 : screenHeight * 0.005,
        width: dimensionSetter({
          mobile: "90%",
          tabPort: "70%",
          tabLand: "70%"
        }),
      }}
    >
      <Text
        style={{
          color: Colors.primary,
          fontFamily: "Poppins-Bold",
          fontSize: screenHeight * 0.025,
        }}
      >
        John Gates
      </Text>
      <Text style={[textStyle, { color: "#0005" }]}>
        Registered on 12/10/2023
      </Text>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          gap: screenWidth * 0.01,
        }}
      >
        <EvilIcons name="location" size={screenHeight * 0.02} />
        <Text style={textStyle}>
          12 Roman St, Winnipeg Village, Denver City
        </Text>
      </View>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <View
          style={{
            alignItems: "center",
            flexDirection: "row",
            gap: screenWidth * 0.01,
          }}
        >
          <FontAwesomeIcons name="newspaper-o" size={screenHeight * 0.02} />
          <Text style={textStyle}>Plan 999 (Maritext)</Text>
        </View>
        <TouchableOpacity
          onPress={() => props.navigate("Plan Details")}
          style={{
            alignItems: "center",
            flexDirection: "row",
            gap: screenWidth * 0.01,
          }}
        >
          <Text
            style={{
              color: "#0484FF",
              fontFamily: fontFamily,
              fontSize: screenHeight * 0.02,
            }}
          >
            Active
          </Text>
          <SimpleLineIcons name="arrow-right" size={screenHeight * 0.02} />
        </TouchableOpacity>
      </View>
    </View>
  );
}
