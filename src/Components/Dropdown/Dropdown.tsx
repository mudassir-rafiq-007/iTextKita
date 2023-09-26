import { useState } from "react";
import { Colors } from "../Constants/Colors";
import MIcon from "react-native-vector-icons/MaterialIcons";
import { SelectList } from "react-native-dropdown-select-list";

type propType = {
  screenWidth: number;
  screenHeight: number;
  tabPortrait: boolean;
  showDropdown: boolean;
  tabLandscape: boolean;
};

type dimensionSetterProp = {
  mobile: any;
  tabPort: any;
  tabLand: any;
};

export default function Dropdown(props: propType) {
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

  // Selects value based on screen orientation
  function dimensionSetter({ mobile, tabPort, tabLand }: dimensionSetterProp) {
    if (props.tabPortrait) {
      return tabPort;
    } else if (props.tabLandscape) {
      return tabLand;
    } else if (!props.tabLandscape && !props.tabPortrait) {
      return mobile;
    }
  }

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
        height: props.screenHeight * 0.06,
        fontSize: dimensionSetter({
          mobile: props.screenHeight * 0.02,
          tabPort: props.screenHeight * 0.02,
          tabLand: props.screenHeight * 0.03,
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
        height: props.screenHeight * 0.06,
        paddingHorizontal: props.screenWidth * 0.03,
        width: dimensionSetter({
          mobile: props.screenWidth * 0.9,
          tabPort: props.screenWidth * 0.7,
          tabLand: props.screenWidth * 0.4,
        }),
      }}
      arrowicon={
        <MIcon
          color={Colors.primary}
          name="keyboard-arrow-down"
          size={dimensionSetter({
            mobile: props.screenHeight * 0.03,
            tabPort: props.screenHeight * 0.03,
            tabLand: props.screenHeight * 0.04,
          })}
          style={{
            zIndex: 2,
            backgroundColor: Colors.secondary,
            height: dimensionSetter({
              mobile: props.screenHeight * 0.03,
              tabPort: props.screenHeight * 0.03,
              tabLand: props.screenHeight * 0.04,
            }),
            width: dimensionSetter({
              mobile: props.screenHeight * 0.03,
              tabPort: props.screenHeight * 0.03,
              tabLand: props.screenHeight * 0.04,
            }),
            borderRadius: dimensionSetter({
              mobile: props.screenHeight * 0.015,
              tabPort: props.screenHeight * 0.015,
              tabLand: props.screenHeight * 0.02,
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
          mobile: props.screenHeight * 0.02,
          tabPort: props.screenHeight * 0.02,
          tabLand: props.screenHeight * 0.03,
        }),
      }}
    />
  );
}
