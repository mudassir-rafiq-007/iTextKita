import { useContext } from "react";
import { Platform, StyleSheet } from "react-native";
import { SelectList } from "react-native-dropdown-select-list";
import { moderateVerticalScale } from "react-native-size-matters";
import { Colors } from "../../Components/Constants/Colors";
import DownArrowIcon from "../../Components/DownArrowIcon/DownArrowIcon";
import { DimensionsContext } from "../../Components/Contexts/DimensionsContext";

interface propsType {
  data: object[];
  placeholder: string;
}

export default function SelectFromList(props: propsType) {
  const { fontRegular } = useContext(DimensionsContext);

  return (
    <SelectList
      data={props.data}
      setSelected={() => {}}
      search={false}
      arrowicon={<DownArrowIcon />}
      placeholder={props.placeholder}
      boxStyles={styles.box}
      inputStyles={{
        flex: 1,
        alignItems: "center",
        fontFamily: fontRegular,
        color: Colors.placeholder,
        textAlignVertical: "center",
        height: moderateVerticalScale(40),
        fontSize: moderateVerticalScale(14),
        lineHeight: Platform.OS == "ios" ? moderateVerticalScale(40) : null,
      }}
      dropdownStyles={styles.dropdown}
      dropdownItemStyles={styles.dropdownItem}
      dropdownTextStyles={{
        color: Colors.secondary,
        fontFamily: fontRegular,
        fontSize: moderateVerticalScale(14),
      }}
    />
  );
}

const styles = StyleSheet.create({
  box: {
    width: "100%",
    borderRadius: 0,
    alignItems: "center",
    borderColor: Colors.primary,
    backgroundColor: Colors.primary,
    height: moderateVerticalScale(40),
    borderTopLeftRadius: moderateVerticalScale(8),
    borderBottomRightRadius: moderateVerticalScale(8),
  },
  dropdown: {
    borderColor: "#fff",
    backgroundColor: "#fff",
    height: moderateVerticalScale(120),
    borderRadius: moderateVerticalScale(5),
  },
  dropdownItem: {
    backgroundColor: "#fff",
    borderBottomColor: Colors.secondary,
    borderBottomWidth: moderateVerticalScale(1),
  },
});
