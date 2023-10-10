import { useState, useContext } from "react";
import { Colors } from "../../Components/Constants/Colors";
import MIcon from "react-native-vector-icons/MaterialIcons";
import { SelectList } from "react-native-dropdown-select-list";
import { DimensionsContext } from "../../Components/Contexts/DimensionsContext";
import { Platform, View } from "react-native";

type propType = {
  showDropdown: boolean;
};

export default function Dropdown(props: propType) {
  const { screenWidth, screenHeight, dimensionSetter } =
    useContext(DimensionsContext);
  const [selected, setSelected] = useState<string>("");
  const data = [
    { key: 1, value: "Youtube Link" },
    { key: 2, value: "Days Available Online" },
    { key: 3, value: "Facebook Page ID" },
    { key: 4, value: "Instagram Page ID" },
    { key: 5, value: "Messenger Page ID" },
    { key: 6, value: "Add Poster Upto 3MB" },
    { key: 7, value: "Status" },
    { key: 8, value: "Expiration Date" },
    { key: 9, value: "URL" },
  ];

  return (
    <SelectList
      data={data}
      search={false}
      dropdownShown={props.showDropdown}
      placeholder="Select Template"
      setSelected={setSelected}
      fontFamily="Poppins-Regular"
      inputStyles={{
        zIndex: 2,
        opacity: 0.5,
        color: "white",
        width: "90%",
        textAlignVertical: "center",
        height: screenHeight * 0.06,
        fontFamily: "Poppins-Regular",
        fontSize: screenHeight * 0.02,
        lineHeight: Platform.OS == "ios" ? screenHeight * 0.06 : null,
        marginTop: Platform.OS == "android" ? screenHeight * 0.008 : null,
      }}
      boxStyles={{
        zIndex: 2,
        borderWidth: 0,
        alignItems: "center",
        borderTopLeftRadius: 5,
        borderTopRightRadius: 0,
        borderBottomLeftRadius: 0,
        borderBottomRightRadius: 5,
        backgroundColor: Colors.primary,
        height: screenHeight * 0.06,
        paddingLeft: screenWidth * 0.03,
        paddingRight: dimensionSetter({
          mobile: screenWidth * 0.04,
          tabPort: screenWidth * 0.04,
          tabLand: screenWidth * 0.03,
        }),
        width: dimensionSetter({
          mobile: screenWidth * 0.9,
          tabPort: screenWidth * 0.7,
          tabLand: screenWidth * 0.4,
        }),
      }}
      arrowicon={
        <View
          style={{
            zIndex: 2,
            backgroundColor: Colors.secondary,
            height: dimensionSetter({
              mobile: screenHeight * 0.03,
              tabPort: screenHeight * 0.03,
              tabLand: screenHeight * 0.04,
            }),
            width: dimensionSetter({
              mobile: screenHeight * 0.03,
              tabPort: screenHeight * 0.03,
              tabLand: screenHeight * 0.04,
            }),
            borderRadius: dimensionSetter({
              mobile: screenHeight * 0.015,
              tabPort: screenHeight * 0.015,
              tabLand: screenHeight * 0.02,
            }),
          }}
        >
          <MIcon
            color={Colors.primary}
            name="keyboard-arrow-down"
            size={dimensionSetter({
              mobile: screenHeight * 0.03,
              tabPort: screenHeight * 0.03,
              tabLand: screenHeight * 0.04,
            })}
            style={{}}
          />
        </View>
      }
      dropdownStyles={{
        zIndex: 3,
        position: "absolute",
        width: dimensionSetter({
          mobile: screenWidth * 0.9,
          tabPort: screenWidth * 0.7,
          tabLand: screenWidth * 0.4,
        }),
        height: dimensionSetter({
          mobile: screenHeight * 0.25,
          tabPort: screenHeight * 0.25,
          tabLand: screenHeight * 0.2,
        }),
        top: screenHeight * 0.05,
        borderRadius: 5,
        backgroundColor: "#D9D9D9",
        borderColor: Colors.primary,
        borderWidth: dimensionSetter({ mobile: 1, tabPort: 1, tabLand: 3 }),
      }}
      dropdownItemStyles={{
        zIndex: 2,
        borderColor: Colors.primary,
        borderBottomWidth: dimensionSetter({
          mobile: 1,
          tabPort: 1,
          tabLand: 2,
        }),
      }}
      dropdownTextStyles={{
        zIndex: 2,
        color: Colors.primary,
        fontFamily: "Poppins-Regular",
        fontSize: dimensionSetter({
          mobile: screenHeight * 0.02,
          tabPort: screenHeight * 0.02,
          tabLand: screenHeight * 0.025,
        }),
      }}
    />
  );
}
