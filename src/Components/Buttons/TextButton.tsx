import { useContext } from "react";
import { TouchableOpacity, Text, StyleProp, TextStyle } from "react-native";
import { DimensionsContext } from "../Contexts/DimensionsContext";

interface propToTextButton {
  style?: StyleProp<TextStyle>;
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
  fontFamily?: string;
  textDecorationLine?:
    | "none"
    | "underline"
    | "line-through"
    | "underline line-through";
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
  const { isTabLandscape, screenWidth, screenHeight, fontFamily } =
    useContext(DimensionsContext);

  return (
    <TouchableOpacity onPress={props.onPressed}>
      <Text
        style={[
          props.style,
          {
            color: props.color,
            fontFamily: props.fontFamily || fontFamily,
            textDecorationLine: props.textDecorationLine,
            fontSize:
              props.fontSize || isTabLandscape
                ? screenHeight * 0.025
                : screenHeight * 0.02,
            margin: props.margin || screenHeight * 0.01,
            marginTop: props.marginTop,
            marginLeft: props.marginLeft,
            marginRight: props.marginRight,
            marginBottom: props.marginBottom,
            marginVertical: props.marginVertical,
            marginHorizontal: props.marginHorizontal,
            zIndex: props.zIndex,
          },
        ]}
      >
        {props.title}
      </Text>
    </TouchableOpacity>
  );
}
