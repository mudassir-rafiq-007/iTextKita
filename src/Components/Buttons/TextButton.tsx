import { useContext } from "react";
import { TouchableOpacity, Text, StyleProp, TextStyle } from "react-native";
import { moderateVerticalScale } from "react-native-size-matters";
import { Colors } from "../Constants/Colors";
import { DimensionsContext } from "../Contexts/DimensionsContext";

interface propToTextButton {
  style?: StyleProp<TextStyle>;
  title: string;
  color?: string;
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
  const { fontRegular } = useContext(DimensionsContext);

  return (
    <TouchableOpacity onPress={props.onPressed}>
      <Text
        style={[
          props.style,
          {
            color: props.color || Colors.secondary,
            fontFamily: props.fontFamily || fontRegular,
            textDecorationLine: props.textDecorationLine,
            fontSize: props.fontSize || moderateVerticalScale(14),
            margin: props.margin || moderateVerticalScale(10),
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
