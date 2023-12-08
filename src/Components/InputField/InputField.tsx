import { useContext } from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";
import { moderateVerticalScale } from "react-native-size-matters";
import { Colors } from "../../Components/Constants/Colors";
import { DimensionsContext } from "../../Components/Contexts/DimensionsContext";

interface propsType {
  title: string;
  height?: number;
  optional?: boolean;
  placeholder: string;
  borderRadius?: number;
  titleFontSize?: number;
  inputFontSize?: number;
  secureTextEntry?: boolean;
}

export default function InputField(props: propsType) {
  const { isMobile, fontRegular } = useContext(DimensionsContext);

  const textStyle = {
    color: "#fff",
    fontFamily: fontRegular,
    fontSize:
      props.titleFontSize || isMobile
        ? moderateVerticalScale(14)
        : moderateVerticalScale(11),
  };

  return (
    <View style={{ width: "100%" }}>
      <Text style={textStyle}>{`${props.title} ${
        props.optional ? "" : "*"
      }`}</Text>
      <TextInput
        selectionColor={Colors.primary}
        placeholder={props.placeholder}
        placeholderTextColor={Colors.primary}
        secureTextEntry={props.secureTextEntry}
        textContentType={props.secureTextEntry ? "newPassword" : null}
        style={[
          styles.textInput,
          {
            fontFamily: fontRegular,
            height: props.height || moderateVerticalScale(35, 0.05),
            borderRadius: props.borderRadius || moderateVerticalScale(3, 0.05),
            fontSize:
              props.inputFontSize || isMobile
                ? moderateVerticalScale(14)
                : moderateVerticalScale(11),
          },
        ]}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  textInput: {
    width: "100%",
    borderWidth: 1,
    color: Colors.primary,
    paddingHorizontal: "4%",
    backgroundColor: "#f7f7f7",
    textAlignVertical: "center",
    borderColor: Colors.secondary,
  },
});
