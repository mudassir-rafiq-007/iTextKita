import { TouchableOpacity, Text, StyleSheet } from "react-native";
import { useFonts } from "expo-font";
import { deviceHeight, deviceWidth } from "../Constants/DeviceDimensions";

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
  zIndex?: number
  onPressed: () => void;
}
export default function FlatButton(props: propType) {
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
          margin: props.margin | (deviceHeight * 0.005),
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
          paddingVertical: props.paddingVertical || deviceHeight * 0.002,
          paddingHorizontal: props.paddingHorizontal || deviceWidth * 0.08,
          zIndex: props.zIndex
        },
      ]}
      onPress={props.onPressed}
    >
      <Text
        style={[
          styles.buttonText,
          {
            elevation: 20,
            color: props.titleColor || "white",
            fontFamily: "Poppins-Bold",
            fontSize: props.titleFontSize || deviceHeight * 0.028,
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
    marginTop: deviceHeight * 0.008,
    textAlign: "center",
    elevation: 4,
    shadowRadius: 4,
    shadowOpacity: 0.4,
    shadowColor: "#000",
    shadowOffset: { height: 4, width: 0 },
  },

  buttonContainer: {
    alignItems: "center",
    justifyContent: "center",
    borderTopLeftRadius: 10,
    borderBottomRightRadius: 10,
    elevation: 20,
    shadowRadius: 4,
    shadowOpacity: 0.5,
    shadowColor: "#000",
    shadowOffset: { height: 5, width: 0 },
  },
});
