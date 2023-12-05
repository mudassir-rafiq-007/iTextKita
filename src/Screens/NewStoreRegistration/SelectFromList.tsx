import { useContext } from "react";
import { SelectList } from "react-native-dropdown-select-list";
import { Colors } from "../../Components/Constants/Colors";
import DownArrowIcon from "../../Components/DownArrowIcon/DownArrowIcon";
import { DimensionsContext } from "../../Components/Contexts/DimensionsContext";
import { Platform } from "react-native";
import {
  moderateScale,
  moderateVerticalScale,
  scale,
  verticalScale
} from "react-native-size-matters";
interface propsType {
  data: object[];
  placeholder: string;
}

export default function SelectFromList(props: propsType) {
  const {
    fontBold,
    fontRegular,
    screenWidth,
    screenHeight,
    isTabLandscape,
    isTabPortrait,
    dimensionSetter,
  } = useContext(DimensionsContext);

  return (
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
        backgroundColor: "#fff",
        height: moderateVerticalScale(35, 0.05),
        borderColor: Colors.secondary,
        borderRadius: screenHeight * 0.005,
      }}
      inputStyles={{
        flex: 1,
        height: screenHeight * 0.06,
        lineHeight: Platform.OS == "ios" ? screenHeight * 0.07 : null,
        textAlignVertical: "center",
        color: Colors.primary,
        fontFamily: fontRegular,
        fontSize: moderateVerticalScale(18, 0.05),
      }}
      dropdownStyles={{
        backgroundColor: "#fff",
        height: screenHeight * 0.25,
        borderColor: Colors.secondary,
        borderRadius: screenHeight * 0.005,
      }}
      dropdownTextStyles={{
        color: "#d9d9d9",
        fontFamily: fontRegular,
        fontSize: moderateVerticalScale(18, 0.05),
      }}
      dropdownItemStyles={{
        borderWidth: 1,
        borderColor: "#fff",
        backgroundColor: Colors.primary,
        // marginBottom: screenHeight * 0.005,
      }}
    />
  );
}
