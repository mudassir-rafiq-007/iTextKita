import { useState, useContext } from "react";
import { Colors } from "../Constants/Colors";
import MIcon from "react-native-vector-icons/MaterialIcons";
import { SelectList } from "react-native-dropdown-select-list";
import { DimensionsContext } from "../Contexts/DimensionsContext";

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
        alignItems: "center",
        justifyContent: "center",
        textAlignVertical: "center",
        fontFamily: "Poppins-Regular",
        height: screenHeight * 0.06,
        fontSize: dimensionSetter({
          mobile: screenHeight * 0.02,
          tabPort: screenHeight * 0.02,
          tabLand: screenHeight * 0.03,
        }),
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
        paddingHorizontal: screenWidth * 0.03,
        width: dimensionSetter({
          mobile: screenWidth * 0.9,
          tabPort: screenWidth * 0.7,
          tabLand: screenWidth * 0.4,
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
        />
      }
      dropdownStyles={{
        zIndex: 2,
        borderRadius: 5,
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
          tabLand: screenHeight * 0.03,
        }),
      }}
    />
  );
}
