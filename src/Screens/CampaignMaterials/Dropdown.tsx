import { useContext, useState } from "react";
import {
  Text,
  View,
  FlatList,
  Platform,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import AntDesignIcons from "react-native-vector-icons/AntDesign";
import { Colors } from "../../Components/Constants/Colors";
import { DimensionsContext } from "../../Components/Contexts/DimensionsContext";

interface campaignData {
  key: string;
  value: any;
}

interface propsType {
  name: string;
  data: campaignData[];
}

export default function Dropdown(props: propsType) {
  const { isTabLandscape, screenWidth, screenHeight, fontRegular, fontBold } =
    useContext(DimensionsContext);
  const [showDropdown, setShowDropdown] = useState<boolean>();

  function dropdownSwitch() {
    setShowDropdown(!showDropdown);
  }
  return (
    <View>
      <TouchableOpacity
        onPress={dropdownSwitch}
        style={[styles.tileView, { height: screenHeight * 0.06 }]}
      >
        <Text
          style={{
            color: Colors.primary,
            fontFamily: fontRegular,
            fontSize: screenHeight * 0.02,
            marginTop: Platform.OS == "android" ? screenHeight * 0.008 : null,
          }}
        >
          {props.name}
        </Text>
        <AntDesignIcons
          color={"#0007"}
          size={screenHeight * 0.02}
          name={showDropdown ? "up" : "down"}
        />
      </TouchableOpacity>
      {showDropdown && (
        <View
          style={{
            paddingVertical: screenHeight * 0.02,
          }}
        >
          <FlatList
            data={props.data}
            renderItem={({ item }) => (
              <View
                style={{
                  flexDirection: "row",
                  backgroundColor: "#F5F5F5",
                  padding: screenHeight * 0.01,
                  justifyContent: "space-between",
                  borderRadius: screenHeight * 0.01,
                  marginVertical: screenHeight * 0.005,
                }}
              >
                <Text
                  style={{
                    color: "#0008",
                    fontFamily: fontRegular,
                    fontSize: isTabLandscape
                      ? screenHeight * 0.02
                      : screenHeight * 0.015,
                  }}
                >
                  {item.key}
                </Text>
                <Text
                  style={{
                    fontFamily: fontRegular,
                    fontSize: isTabLandscape
                      ? screenHeight * 0.02
                      : screenHeight * 0.015,
                    color: item.key == "Short Link" ? "blue" : Colors.secondary,
                  }}
                >
                  {item.value}
                </Text>
              </View>
            )}
          />
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  tileView: {
    width: "100%",
    alignItems: "center",
    borderBottomWidth: 1,
    flexDirection: "row",
    paddingHorizontal: "2%",
    borderBottomColor: "#0002",
    justifyContent: "space-between",
  },
});
