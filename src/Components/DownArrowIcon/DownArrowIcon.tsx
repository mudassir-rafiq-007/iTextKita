import { View, Platform } from "react-native";
import { moderateVerticalScale } from "react-native-size-matters";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import { Colors } from "../Constants/Colors";

export default function DownArrowIcon() {
  return (
    <View
      style={{
        backgroundColor: Colors.secondary,
        width: moderateVerticalScale(20),
        height: moderateVerticalScale(20),
        borderRadius: moderateVerticalScale(10),
        zIndex: Platform.OS == "android" ? 2 : null,
      }}
    >
      <MaterialIcons
        color={Colors.primary}
        name="keyboard-arrow-down"
        size={moderateVerticalScale(20)}
      />
    </View>
  );
}
