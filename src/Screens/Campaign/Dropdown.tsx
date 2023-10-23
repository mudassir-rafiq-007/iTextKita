import { useState } from "react";
import { Platform, View } from "react-native";
import { Colors } from "../../Components/Constants/Colors";
import MIcon from "react-native-vector-icons/MaterialIcons";
import { SelectList } from "react-native-dropdown-select-list";

type dimensionSetterProp = {
  mobile: any;
  tabPort: any;
  tabLand: any;
};

type propType = {
  fontFamily: string;
  screenWidth: number;
  screenHeight: number;
  showDropdown: boolean;
  dimensionSetter: ({}: dimensionSetterProp) => any;
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

  return (
    <SelectList
      data={data}
      search={false}
      setSelected={setSelected}
      fontFamily={props.fontFamily}
      placeholder="Select Template"
      dropdownShown={props.showDropdown}
      inputStyles={{
        zIndex: Platform.OS == "android" ? 2 : null,
        opacity: 0.5,
        width: "90%",
        color: "white",
        textAlignVertical: "center",
        fontFamily: props.fontFamily,
        height: props.screenHeight * 0.06,
        fontSize: props.screenHeight * 0.02,
        lineHeight: Platform.OS == "ios" ? props.screenHeight * 0.06 : null,
        marginTop: Platform.OS == "android" ? props.screenHeight * 0.008 : null,
      }}
      boxStyles={{
        zIndex: Platform.OS == "android" ? 2 : null,
        borderWidth: 0,
        alignItems: "center",
        borderTopLeftRadius: 5,
        borderTopRightRadius: 0,
        borderBottomLeftRadius: 0,
        borderBottomRightRadius: 5,
        height: props.screenHeight * 0.06,
        paddingLeft: props.screenWidth * 0.03,
        backgroundColor: Colors.primary,
        paddingRight: props.dimensionSetter({
          mobile: props.screenWidth * 0.04,
          tabPort: props.screenWidth * 0.04,
          tabLand: props.screenWidth * 0.03,
        }),
        width: props.dimensionSetter({
          mobile: props.screenWidth * 0.9,
          tabPort: props.screenWidth * 0.7,
          tabLand: props.screenWidth * 0.4,
        }),
      }}
      arrowicon={
        <View
          style={{
            zIndex: Platform.OS == "android" ? 2 : null,
            backgroundColor: Colors.secondary,
            height: props.dimensionSetter({
              mobile: props.screenHeight * 0.03,
              tabPort: props.screenHeight * 0.03,
              tabLand: props.screenHeight * 0.04,
            }),
            width: props.dimensionSetter({
              mobile: props.screenHeight * 0.03,
              tabPort: props.screenHeight * 0.03,
              tabLand: props.screenHeight * 0.04,
            }),
            borderRadius: props.dimensionSetter({
              mobile: props.screenHeight * 0.015,
              tabPort: props.screenHeight * 0.015,
              tabLand: props.screenHeight * 0.02,
            }),
          }}
        >
          <MIcon
            color={Colors.primary}
            name="keyboard-arrow-down"
            size={props.dimensionSetter({
              mobile: props.screenHeight * 0.03,
              tabPort: props.screenHeight * 0.03,
              tabLand: props.screenHeight * 0.04,
            })}
          />
        </View>
      }
      dropdownStyles={{
        zIndex: Platform.OS == "android" ? 3 : null,
        position: "absolute",
        width: props.dimensionSetter({
          mobile: props.screenWidth * 0.9,
          tabPort: props.screenWidth * 0.7,
          tabLand: props.screenWidth * 0.4,
        }),
        height: props.dimensionSetter({
          mobile: props.screenHeight * 0.25,
          tabPort: props.screenHeight * 0.25,
          tabLand: props.screenHeight * 0.2,
        }),
        borderRadius: 5,
        top: props.screenHeight * 0.05,
        backgroundColor: "#D9D9D9",
        borderColor: Colors.primary,
        borderWidth: props.dimensionSetter({
          mobile: 1,
          tabPort: 1,
          tabLand: 3,
        }),
      }}
      dropdownItemStyles={{
        zIndex: Platform.OS == "android" ? 2 : null,
        borderColor: Colors.primary,
        borderBottomWidth: props.dimensionSetter({
          mobile: 1,
          tabPort: 1,
          tabLand: 2,
        }),
      }}
      dropdownTextStyles={{
        zIndex: Platform.OS == "android" ? 2 : null,
        color: Colors.primary,
        fontFamily: props.fontFamily,
        fontSize: props.dimensionSetter({
          mobile: props.screenHeight * 0.02,
          tabPort: props.screenHeight * 0.02,
          tabLand: props.screenHeight * 0.025,
        }),
      }}
    />
  );
}
