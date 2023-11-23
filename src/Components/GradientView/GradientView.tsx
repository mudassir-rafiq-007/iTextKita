import { ViewStyle, StyleProp } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

interface propsType {
  style: StyleProp<ViewStyle> | undefined;
  children: React.JSX.Element | React.JSX.Element[] | undefined;
}

export default function GradientView(props: propsType) {
  return (
    <LinearGradient
      style={props.style}
      locations={[0.5, 1]}
      colors={["#FFFFFF", "#008080"]}
    >
      {props.children}
    </LinearGradient>
  );
}
