import { TouchableOpacity, Text } from "react-native";
import { deviceHeight, deviceWidth } from "../Constants";
import { useFonts } from "expo-font/build/FontHooks";

interface propToTextButton {
  title: string;
  onPressed: () => void;
  color: string;
  fontSize?: number;
  margin?: number;
  marginVertical?: number;
  marginHorizontal?: number;
  marginLeft?: number;
  marginRight?: number;
  marginTop?: number;
  marginBottom?: number;
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
}

export default function TextButton(props: propToTextButton) {
  const [fontsLoaded] = useFonts({
    "Poppins-Regular": require("../../../assets/fonts/Poppins-Regular.ttf"),
  });

  if (!fontsLoaded) return null;
  return (
    <TouchableOpacity onPress={props.onPressed}>
      <Text
        style={{
          color: props.color,
          margin: props.margin ? props.margin : deviceHeight * 0.01,
          fontSize: props.fontSize || deviceWidth * 0.04,
          fontWeight: props.fontWeight,
          fontFamily: "Poppins-Regular",
          marginVertical: props.marginVertical,
          marginHorizontal: props.marginHorizontal,
          marginLeft: props.marginLeft,
          marginRight: props.marginRight,
          marginTop: props.marginTop,
          marginBottom: props.marginBottom,
        }}
      >
        {props.title}
      </Text>
    </TouchableOpacity>
  );
}
