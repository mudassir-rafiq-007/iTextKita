import { Platform, View } from "react-native";
import { useContext } from "react";
import { SelectList } from "react-native-dropdown-select-list";
import { moderateVerticalScale } from "react-native-size-matters";
import { Colors } from "../Constants/Colors";
import DownArrowIcon from "../DownArrowIcon/DownArrowIcon";
import { DimensionsContext } from "../Contexts/DimensionsContext";

interface propsType {
  data: object[];
  placeholder: string;
  boxHeight?: number;
  boxColor?: string;
  boxBorderColor?: string;
  boxTextColor?: string;
  fontSize?: number;
  dropdownHeight?: number;
  zIndex?: number;
}

export default function SelectFromList(props: propsType) {
  const { isMobile, fontRegular, screenHeight } = useContext(DimensionsContext);

  return (
    <View
      style={{
        width: "100%",
        zIndex: props.zIndex,
        height:
          Platform.OS == "ios"
            ? props.boxHeight || moderateVerticalScale(35, 0.05)
            : null,
      }}
    >
      <SelectList
        data={props.data}
        setSelected={() => {}}
        search={false}
        arrowicon={<DownArrowIcon />}
        placeholder={props.placeholder}
        boxStyles={{
          width: "100%",
          alignItems: "center",
          paddingHorizontal: "4%",
          borderRadius: screenHeight * 0.005,
          backgroundColor: props.boxColor || "#fff",
          borderColor: props.boxBorderColor || Colors.secondary,
          height: props.boxHeight || moderateVerticalScale(35, 0.05),
        }}
        inputStyles={{
          flex: 1,
          fontFamily: fontRegular,
          textAlignVertical: "center",
          color: props.boxTextColor || Colors.primary,
          height: props.boxHeight || moderateVerticalScale(35, 0.05),
          lineHeight:
            Platform.OS == "ios"
              ? props.boxHeight || moderateVerticalScale(35, 0.05)
              : null,
          fontSize:
            props.fontSize || isMobile
              ? moderateVerticalScale(14)
              : moderateVerticalScale(11),
        }}
        dropdownStyles={{
          borderColor: "#fff0",
          backgroundColor: "#fff",
          borderRadius: screenHeight * 0.005,
          height: props.dropdownHeight || screenHeight * 0.25,
        }}
        dropdownTextStyles={{
          color: Colors.secondary,
          fontFamily: fontRegular,
          fontSize:
            props.fontSize || isMobile
              ? moderateVerticalScale(14)
              : moderateVerticalScale(11),
        }}
        dropdownItemStyles={{
          borderWidth: 0,
          borderBottomWidth: 1,
          backgroundColor: "#fff",
          borderColor: Colors.secondary,
        }}
      />
    </View>
  );
}
