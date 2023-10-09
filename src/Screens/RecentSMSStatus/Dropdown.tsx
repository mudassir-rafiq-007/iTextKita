import { useState, useContext } from "react";
import { Platform, StyleSheet, Text, View, Image } from "react-native";
import { SelectList } from "react-native-dropdown-select-list";
import { DimensionsContext } from "../../Components/Contexts/DimensionsContext";

type propType = {
  name: string;
  showDropdown: boolean;
};

export default function Dropdown(props: propType) {
  const { screenWidth, screenHeight, dimensionSetter } =
    useContext(DimensionsContext);

  const [selected, setSelected] = useState<string>("");

  const data = [
    {
      value: (
        <View style={styles.center}>
          <Text
            style={{
              fontFamily: "Poppins-Regular",
              fontSize: screenHeight * 0.02,
            }}
          >
            {new Date().toDateString()}
          </Text>
          <Text
            style={{
              fontFamily: "Poppins-Regular",
              fontSize: screenHeight * 0.02,
            }}
          >
            Use messages for web to send SMS, MMS
          </Text>
        </View>
      ),
      disabled: true,
    },
  ];

  const Icons = (
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
        }}
      />
    </View>
  );

  return (
    <SelectList
      data={data}
      search={false}
      placeholder={props.name}
      dropdownShown={props.showDropdown}
      setSelected={setSelected}
      fontFamily="Poppins-Regular"
      inputStyles={{
        textAlignVertical: "center",
        height: screenHeight * 0.06,
        fontFamily: "Poppins-Regular",
        fontSize: screenHeight * 0.02,
        lineHeight: Platform.OS == "ios" ? screenHeight * 0.06 : null,
        marginTop: Platform.OS == "android" ? screenHeight * 0.005 : null,
      }}
      boxStyles={{
        width: "100%",
        borderWidth: 0,
        borderRadius: 0,
        alignItems: "center",
        backgroundColor: "white",
        height: screenHeight * 0.06,
        paddingHorizontal: dimensionSetter({
          mobile: screenWidth * 0.04,
          tabPort: screenWidth * 0.04,
          tabLand: screenWidth * 0.03,
        }),
      }}
      arrowicon={Icons}
      dropdownStyles={{
        marginTop: 0,
        borderWidth: 0,
        borderRadius: 0,
        alignItems: "center",
      }}
      disabledItemStyles={{ backgroundColor: "#D3D3D3" }}
    />
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
