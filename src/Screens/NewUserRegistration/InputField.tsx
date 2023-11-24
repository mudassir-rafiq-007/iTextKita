import { useContext } from "react";
import { View, Text, TextInput } from "react-native";
import { Colors } from "../../Components/Constants/Colors";
import { DimensionsContext } from "../../Components/Contexts/DimensionsContext";

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
    dimensionSetter,
  } = useContext(DimensionsContext);

  const textStyle = {
    color: "#fff",
    fontFamily: fontRegular,
    fontSize: isTabLandscape ? screenHeight * 0.025 : screenHeight * 0.015,
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
          height: screenHeight * 0.06,
          textAlignVertical: "center",
          fontSize: screenHeight * 0.02,
          borderColor: Colors.secondary,
          borderRadius: screenHeight * 0.005,
        }}
      />
    </View>
  );
}
