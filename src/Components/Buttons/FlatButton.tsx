import { useContext } from "react";
import { TouchableOpacity, Text, StyleSheet, Platform } from "react-native";
import { useFonts } from "expo-font";
import { shadow } from "../Constants/Shadow";
import { DimensionsContext } from "../Contexts/DimensionsContext";

interface propType {
  title: string;
  titleColor?: string;
  titleFontSize?: number;
  bgColor?: string;
  margin?: number;
  marginTop?: number;
  marginLeft?: number;
  marginRight?: number;
  marginBottom?: number;
  marginVertical?: number;
  marginHorizontal?: number;
  padding?: number;
  paddingTop?: number;
  paddingLeft?: number;
  paddingRight?: number;
  paddingBottom?: number;
  paddingVertical?: number;
  paddingHorizontal?: number;
  zIndex?: number;
  onPressed: () => void;
}
export default function FlatButton(props: propType) {
  const { screenHeight, screenWidth } = useContext(DimensionsContext);
  const [fontsLoaded] = useFonts({
    "Poppins-Bold": require("../../../assets/fonts/Poppins-Bold.ttf"),
  });

  if (!fontsLoaded) return null;
  return (
    <TouchableOpacity
      style={[
        styles.buttonContainer,
        {
          backgroundColor: props.bgColor || "#F6851F",
          margin: props.margin | (screenHeight * 0.005),
          marginTop: props.marginTop,
          marginLeft: props.marginLeft,
          marginRight: props.marginRight,
          marginBottom: props.marginBottom,
          marginVertical: props.marginVertical,
          marginHorizontal: props.marginHorizontal,
          padding: props.padding,
          paddingTop: props.paddingTop,
          paddingLeft: props.paddingLeft,
          paddingRight: props.paddingRight,
          paddingBottom: props.paddingBottom,
          paddingVertical:
            props.paddingVertical || Platform.OS == "android"
              ? screenHeight * 0.002
              : screenHeight * 0.006,
          paddingHorizontal: props.paddingHorizontal || screenWidth * 0.05,
          zIndex: props.zIndex,
        },
      ]}
      onPress={props.onPressed}
    >
      <Text
        style={[
          styles.buttonText,
          {
            color: props.titleColor || "white",
            fontSize: props.titleFontSize || screenHeight * 0.02,
            marginTop: Platform.OS == "android" ? screenHeight * 0.008 : null,
          },
        ]}
      >
        {props.title}
      </Text>
    </TouchableOpacity>
  );
}
const styles = StyleSheet.create({
  buttonText: {
    ...shadow,
    textAlign: "center",
    fontFamily: "Poppins-Bold",
  },

  buttonContainer: {
    ...shadow,
    alignItems: "center",
    justifyContent: "center",
    borderTopLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
});
