import { useContext } from "react";
import { View, Platform } from "react-native";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import {
  moderateScale,
  moderateVerticalScale,
} from "react-native-size-matters";
import { Colors } from "../Constants/Colors";
import { DimensionsContext } from "../Contexts/DimensionsContext";

export default function DownArrowIcon() {
  const { isMobile } = useContext(DimensionsContext);
  
  return (
    <View
      style={{
        backgroundColor: Colors.secondary,
        width: isMobile ? moderateScale(18) : moderateScale(12),
        height: isMobile ? moderateScale(18) : moderateScale(12),
        borderRadius: moderateVerticalScale(10),
        zIndex: Platform.OS == "android" ? 2 : null,
      }}
    >
      <MaterialIcons
        color={Colors.primary}
        name="keyboard-arrow-down"
        size={isMobile ? moderateScale(18) : moderateScale(12)}
      />
    </View>
  );
}
