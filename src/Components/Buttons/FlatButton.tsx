import { View, TouchableOpacity, Text, StyleSheet } from "react-native";
import { deviceHeight, deviceWidth } from "../Constants";
import { useFonts } from "expo-font";

interface propType {
  title: string;
  bgColor?: string;
  titleColor?: string;
  margin?: number;
  marginVertical?: number;
  marginHorizontal?: number;
  marginLeft?: number;
  marginRight?: number;
  marginTop?: number;
  marginBottom?: number;
  padding?: number;
  paddingVertical?: number;
  paddingHorizontal?: number;
  paddingLeft?: number;
  paddingRight?: number;
  paddingTop?: number;
  paddingBottom?: number;
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
          marginVertical: props.marginVertical,
          marginHorizontal: props.marginHorizontal,
          marginLeft: props.marginLeft,
          marginRight: props.marginRight,
          marginTop: props.marginTop,
          marginBottom: props.marginBottom,
          padding: props.padding,
          paddingVertical: props.paddingVertical | (deviceHeight * 0.002),
          paddingHorizontal: props.paddingHorizontal | (deviceWidth * 0.08),
          paddingLeft: props.paddingLeft,
          paddingRight: props.paddingRight,
          paddingTop: props.paddingTop,
          paddingBottom: props.paddingBottom,
        },
      ]}
      onPress={props.onPressed}
    >
      <Text
        style={[
          styles.buttonText,
          {
            color: props.titleColor || "white",
            fontFamily: "Poppins-Bold",
            elevation: 20,
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
    fontSize: deviceHeight * 0.028,
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
