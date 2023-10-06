import { useState, useContext } from "react";
import MIcon from "react-native-vector-icons/MaterialIcons";
import { SelectList } from "react-native-dropdown-select-list";
import { Colors } from "../../Components/Constants/Colors";
import { DimensionsContext } from "../../Components/Contexts/DimensionsContext";
import { Platform } from "react-native";

type propType = {
  data?: [];
  showDropdown: boolean;
  type: "Store" | "Role";
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
      data={props.data || data}
      search={false}
      dropdownShown={props.showDropdown}
      placeholder={props.type}
      setSelected={setSelected}
      fontFamily="Poppins-Regular"
      inputStyles={{
        alignItems: "center",
        color: Colors.primary,
        height: screenHeight * 0.06,
        lineHeight: Platform.OS == "ios" ? screenHeight * 0.06 : null,
        textAlignVertical: "center",
        fontFamily: "Poppins-Regular",
        marginTop: Platform.OS == "android" ? screenHeight * 0.008 : null,
        fontSize: dimensionSetter({
          mobile: screenHeight * 0.022,
          tabPort: screenHeight * 0.02,
          tabLand: screenHeight * 0.025,
        }),
      }}
      boxStyles={{
        borderWidth: 0,
        alignItems: "center",
        borderTopLeftRadius: 5,
        borderTopRightRadius: 0,
        borderBottomLeftRadius: 0,
        borderBottomRightRadius: 5,
        backgroundColor: "white",
        height: screenHeight * 0.06,
        paddingHorizontal: screenWidth * 0.03,
        width: dimensionSetter({
          mobile: "100%",
          tabPort: "100%",
          tabLand: "100%",
        }),
      }}
      arrowicon={
        <MIcon
          color={Colors.primary}
          name="keyboard-arrow-down"
          size={dimensionSetter({
            mobile: screenHeight * 0.03,
            tabPort: screenHeight * 0.03,
            tabLand: screenHeight * 0.04,
          })}
          style={{
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
        />
      }
      dropdownStyles={{
        width: "100%",
        borderRadius: 5,
        borderColor: "white",
        backgroundColor: Colors.primary,
        borderWidth: dimensionSetter({ mobile: 1, tabPort: 1, tabLand: 3 }),
      }}
      dropdownItemStyles={{
        borderColor: "white",
        borderBottomWidth: dimensionSetter({
          mobile: 1,
          tabPort: 1,
          tabLand: 2,
        }),
      }}
      dropdownTextStyles={{
        color: "white",
        fontFamily: "Poppins-Regular",
        fontSize: dimensionSetter({
          mobile: screenHeight * 0.02,
          tabPort: screenHeight * 0.02,
          tabLand: screenHeight * 0.03,
        }),
      }}
    />
  );
}
