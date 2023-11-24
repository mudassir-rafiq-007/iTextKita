import { useContext } from "react";
import { SelectList } from "react-native-dropdown-select-list";
import { Colors } from "../../Components/Constants/Colors";
import DownArrowIcon from "../../Components/DownArrowIcon/DownArrowIcon";
import { DimensionsContext } from "../../Components/Contexts/DimensionsContext";
import { Platform } from "react-native";

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
        width: "90%",
        borderRadius: 0,
        alignItems: "center",
        height: screenHeight * 0.06,
        borderColor: Colors.primary,
        backgroundColor: Colors.primary,
        borderTopLeftRadius: screenHeight * 0.01,
        borderBottomRightRadius: screenHeight * 0.01,
      }}
      inputStyles={{
        flex: 1,
        height: screenHeight * 0.06,
        alignItems: "center",
        lineHeight: Platform.OS == "ios" ? screenHeight * 0.06: null,
        fontFamily: fontRegular,
        color: "#d9d9d9",
        textAlignVertical: "center",
        fontSize: screenHeight * 0.02,
      }}
      dropdownStyles={{
        backgroundColor: "#fff",
        height: screenHeight * 0.25,
        borderColor: Colors.primary,
        borderRadius: screenHeight * 0.005,
      }}
      dropdownTextStyles={{
        color: "#d9d9d9",
        fontFamily: fontRegular,
        fontSize: screenHeight * 0.02,
      }}
      dropdownItemStyles={{
        borderWidth: 1,
        borderColor: "#fff",
        backgroundColor: Colors.primary,
        marginBottom: screenHeight * 0.005,
      }}
    />
  );
}
