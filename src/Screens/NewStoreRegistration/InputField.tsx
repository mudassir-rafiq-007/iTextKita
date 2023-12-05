import { useContext } from "react";
import { View, Text, TextInput } from "react-native";
import { Colors } from "../../Components/Constants/Colors";
import { DimensionsContext } from "../../Components/Contexts/DimensionsContext";
import {
  moderateScale,
  moderateVerticalScale,
  scale,
  verticalScale
} from "react-native-size-matters";

interface propsType {
  title: string;
  placeholder: string;
  secureTextEntry?: boolean;
}

export default function InputField(props: propsType) {
  const {
    fontBold,
    fontRegular,
    screenWidth,
    screenHeight,
    isTabLandscape,
    isTabPortrait,
    dimensionSetter,
  } = useContext(DimensionsContext);

  const textStyle = {
    color: "#fff",
    fontFamily: fontRegular,
    fontSize: (isTabPortrait ? moderateVerticalScale(11, 0.5):(isTabLandscape ? moderateVerticalScale(11, 0.5): moderateVerticalScale(14,0.5))),
  };

  return (
    <View style={{ width: "100%" }}>
      <Text style={textStyle}>{props.title} *</Text>
      <TextInput
        selectionColor={Colors.primary}
        placeholder={props.placeholder}
        secureTextEntry={props.secureTextEntry}
        textContentType={props.secureTextEntry ? "newPassword" : null}
        placeholderTextColor={Colors.primary}
        style={{
          width: "100%",
          borderWidth: 1,
          color: Colors.primary,
          paddingHorizontal: "4%",
          fontFamily: fontRegular,
          backgroundColor: "#f7f7f7",
          height: moderateVerticalScale(35, 0.05),
          textAlignVertical: "center",
          fontSize: (isTabPortrait ? moderateVerticalScale(11, 0.5):(isTabLandscape ? moderateVerticalScale(11, 0.5): moderateVerticalScale(14,0.5))),
          borderColor: Colors.secondary,
          borderRadius: moderateVerticalScale(3, 0.05),
        }}
      />
    </View>
  );
}
