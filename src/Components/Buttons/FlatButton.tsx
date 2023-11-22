import { useContext } from "react";
import {
  Text,
  Platform,
  StyleProp,
  ViewStyle,
  TextStyle,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { useFonts } from "expo-font";
import { shadow } from "../Constants/Shadow";
import { DimensionsContext } from "../Contexts/DimensionsContext";

interface propType {
  containerStyle?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
  title: string;
  titleColor?: string;
  titleFontSize?: number;
  bgColor?: string;
  width?: any;
  height?: any;
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
  const { isTabLandscape, screenHeight, screenWidth, dimensionSetter } =
    useContext(DimensionsContext);
  const [fontsLoaded] = useFonts({
    "Poppins-Bold": require("../../../assets/fonts/Poppins-Bold.ttf"),
  });

  if (!fontsLoaded) return null;
  return (
    <TouchableOpacity
      style={[
        props.containerStyle,
        styles.buttonContainer,
        {
          width:
            props.width ||
            dimensionSetter({
              mobile: screenWidth * 0.9,
              tabPort: screenWidth * 0.7,
              tabLand: screenWidth * 0.4,
            }),
          height:
            props.height || isTabLandscape
              ? screenHeight * 0.07
              : screenHeight * 0.06,
          borderRadius: screenHeight * 0.1,
          backgroundColor: props.bgColor || "#F6851F",
          margin: props.margin || screenHeight * 0.005,
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
          paddingHorizontal: props.paddingHorizontal,
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
            fontSize:
              props.titleFontSize || isTabLandscape
                ? screenHeight * 0.03
                : screenHeight * 0.02,
            marginTop: Platform.OS == "android" ? screenHeight * 0.006 : null,
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
  },
});
