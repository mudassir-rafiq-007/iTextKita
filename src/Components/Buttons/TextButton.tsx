import { TouchableOpacity, Text } from "react-native";
import { deviceHeight, deviceWidth } from "../Constants";
import { useFonts } from "expo-font/build/FontHooks";

interface propToTextButton {
  title: string;
  color: string;
  margin?: number;
  marginTop?: number;
  marginLeft?: number;
  marginRight?: number;
  marginBottom?: number;
  marginVertical?: number;
  marginHorizontal?: number;
  fontSize?: number;
  fontWeight?:
  | "normal"
  | "bold"
  | "100"
  | "200"
  | "300"
  | "400"
  | "500"
  | "600"
  | "700"
  | "800"
  | "900";
  zIndex?: number;
  onPressed: () => void;
}

export default function TextButton(props: propToTextButton) {
  const [fontsLoaded] = useFonts({
    "Poppins-Regular": require("../../../assets/fonts/Poppins-Regular.ttf"),
    "Poppins-Bold": require("../../../assets/fonts/Poppins-Bold.ttf"),
  });

  if (!fontsLoaded) return null;
  return (
    <TouchableOpacity onPress={props.onPressed}>
      <Text
        style={{
          color: props.color,
          fontFamily: props.fontWeight == "bold" ? "Poppins-Bold" : "Poppins-Regular",
          fontSize: props.fontSize || deviceWidth * 0.04,
          margin: props.margin || deviceHeight * 0.01,
          marginTop: props.marginTop,
          marginLeft: props.marginLeft,
          marginRight: props.marginRight,
          marginBottom: props.marginBottom,
          marginVertical: props.marginVertical,
          marginHorizontal: props.marginHorizontal,
          zIndex: props.zIndex,
        }}
      >
        {props.title}
      </Text>
    </TouchableOpacity>
  );
}
