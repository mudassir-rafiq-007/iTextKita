import { useContext } from "react";
import { SelectList } from "react-native-dropdown-select-list";
import { Colors } from "../../../../../Components/Constants/Colors";
import DownArrowIcon from "../../../../../Components/DownArrowIcon/DownArrowIcon";
import { DimensionsContext } from "../../../../../Components/Contexts/DimensionsContext";

export default function SelectMonth() {
  const {
    fontBold,
    fontRegular,
    screenWidth,
    screenHeight,
    isTabLandscape,
    dimensionSetter,
  } = useContext(DimensionsContext);

  const extensionPeriod = [
    { key: 1, value: "1 Month" },
    { key: 2, value: "2 Months" },
    { key: 3, value: "3 Months" },
    { key: 4, value: "4 Months" },
    { key: 5, value: "5 Months" },
    { key: 6, value: "6 Months" },
    { key: 7, value: "7 Months" },
    { key: 8, value: "8 Months" },
    { key: 9, value: "9 Months" },
    { key: 10, value: "10 Months" },
    { key: 11, value: "11 Months" },
    { key: 12, value: "12 Months" },
  ];

  return (
    <SelectList
      data={extensionPeriod}
      setSelected={() => {}}
      search={false}
      arrowicon={<DownArrowIcon />}
      placeholder="Months"
      boxStyles={{
        width: "100%",
        alignItems: "center",
        backgroundColor: "#fff",
        height: screenHeight * 0.06,
        borderColor: Colors.secondary,
        borderRadius: screenHeight * 0.005,
      }}
      inputStyles={{
        flex: 1,
        color: "#a7a7a7",
        fontFamily: fontRegular,
        textAlignVertical: "center",
        fontSize: isTabLandscape ? screenHeight * 0.025 : screenHeight * 0.02,
      }}
      dropdownStyles={{
        borderColor: Colors.secondary,
        backgroundColor: "#fff",
        height: screenHeight * 0.2,
        borderRadius: screenHeight * 0.005,
      }}
      dropdownTextStyles={{
        color: "#fff",
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
