import { useContext } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import EvilIcons from "react-native-vector-icons/EvilIcons";
import FontAwesomeIcons from "react-native-vector-icons/FontAwesome";
import SimpleLineIcons from "react-native-vector-icons/SimpleLineIcons";
import { Colors } from "../../../Components/Constants/Colors";
import { DimensionsContext } from "../../../Components/Contexts/DimensionsContext";
import { moderateScale, moderateVerticalScale, scale, verticalScale} from "react-native-size-matters";

interface propsType {
  navigate: (screen: string, {}: object) => void;
}

export default function UserDetails(props: propsType) {
  const {
    fontBold,
    fontRegular,
    screenWidth,
    screenHeight,
    isTabLandscape,
    isTabPortrait,
    dimensionSetter,
  } = useContext(DimensionsContext);

  const textStyle = {
    fontFamily: fontRegular,
    fontSize: isTabLandscape ? screenHeight * 0.02 : screenHeight * 0.015,
  };

  return (
    <View
      style={{
        // padding: moderateVerticalScale(5, 0.5),
        // gap: moderateVerticalScale(10, 0.5),
        // width: dimensionSetter({
        //   mobile: "90%",
        //   tabPort: "70%",
        //   tabLand: "80%",
        // }),
        width: (isTabPortrait ? moderateVerticalScale(500, 0.5):(isTabLandscape ? moderateVerticalScale(400, 0.5): moderateVerticalScale(310,0.5))),
      }}
    >
      <View
        style={{
          borderColor: "#D7D7D7",
          // borderWidth: 1,
          padding: moderateVerticalScale(5, 0.5),
          gap: moderateVerticalScale(5, 0.5),
        }}
      >
        <Text
          style={{
            color: Colors.primary,
            fontFamily: fontBold,
            fontSize: (isTabPortrait ? moderateVerticalScale(18, 0.5):(isTabLandscape ? moderateVerticalScale(18, 0.5): moderateVerticalScale(19,0.5))),
          }}
        >
          John Gates
        </Text>
        <Text style={[textStyle, { color: "#0005", fontSize: (isTabPortrait ? moderateVerticalScale(13, 0.5):(isTabLandscape ? moderateVerticalScale(13, 0.5): moderateVerticalScale(14,0.5))), }]}>
          Registered on 12/10/2023
        </Text>
      </View>
      <View
        style={{
          borderColor: "#D7D7D7",
          // borderWidth: 1,
          padding: moderateVerticalScale(5, 0.5),
          gap: moderateVerticalScale(5, 0.5),
        }}
      >
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            gap: screenWidth * 0.01,
          }}
        >
          <EvilIcons
            name="location"
            size={isTabLandscape ? screenHeight * 0.03 : screenHeight * 0.02}
          />
          <Text style={{fontSize: (isTabPortrait ? moderateVerticalScale(12, 0.5):(isTabLandscape ? moderateVerticalScale(12, 0.5): moderateVerticalScale(15,0.5)))}}>
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
            <FontAwesomeIcons
              name="newspaper-o"
              size={isTabLandscape ? screenHeight * 0.03 : screenHeight * 0.02}
            />
            <Text style={{fontSize: (isTabPortrait ? moderateVerticalScale(12, 0.5):(isTabLandscape ? moderateVerticalScale(12, 0.5): moderateVerticalScale(15,0.5)))}}>Plan 999 (Maritext)</Text>
          </View>
          <TouchableOpacity
            onPress={() => props.navigate("Plan Details", {})}
            style={{
              alignItems: "center",
              flexDirection: "row",
              gap: screenWidth * 0.01,
            }}
          >
            <Text
              style={{
                color: "#0484FF",
                fontFamily: fontRegular,
                fontSize: (isTabPortrait ? moderateVerticalScale(12, 0.5):(isTabLandscape ? moderateVerticalScale(12, 0.5): moderateVerticalScale(15,0.5))),
              }}
            >
              Active
            </Text>
            <SimpleLineIcons name="arrow-right" size={screenHeight * 0.015} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
