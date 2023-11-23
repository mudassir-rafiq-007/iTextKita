import { useContext } from "react";
import { View, Text } from "react-native";
import IonIcons from "react-native-vector-icons/Ionicons";
import EvilIcons from "react-native-vector-icons/EvilIcons";
import AntDesignIcons from "react-native-vector-icons/AntDesign";
import { Colors } from "../../../Components/Constants/Colors";
import { DimensionsContext } from "../../../Components/Contexts/DimensionsContext";

interface propsType {
  storeName: string;
  navigate: (screen: string, {}: object) => void;
}

export default function StoreDetails(props: propsType) {
  const {
    fontFamily,
    screenWidth,
    screenHeight,
    isTabLandscape,
    dimensionSetter,
  } = useContext(DimensionsContext);

  const textStyle = {
    fontFamily: fontFamily,
    fontSize: isTabLandscape ? screenHeight * 0.02 : screenHeight * 0.015,
  };
  return (
    <View
      style={{
        borderColor: "#D7D7D7",
        borderWidth: isTabLandscape ? 1 : null,
        padding: isTabLandscape ? screenHeight * 0.02 : null,
        gap: isTabLandscape ? screenHeight * 0.02 : screenHeight * 0.01,
        width: dimensionSetter({
          mobile: "90%",
          tabPort: "70%",
          tabLand: "80%",
        }),
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
        <Text style={textStyle}>
          12 Roman St, Winnipeg Village, Denver City
        </Text>
      </View>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          gap: screenWidth * 0.02,
        }}
      >
        <AntDesignIcons
          name="idcard"
          size={isTabLandscape ? screenHeight * 0.03 : screenHeight * 0.02}
        />
        <Text style={textStyle}>000-000-000-000</Text>
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
          <IonIcons
            name="person-outline"
            size={isTabLandscape ? screenHeight * 0.03 : screenHeight * 0.02}
          />
          <Text style={textStyle}>
            #QREN134 <Text style={{ color: Colors.active }}>(Active)</Text>
          </Text>
        </View>
      </View>
    </View>
  );
}
