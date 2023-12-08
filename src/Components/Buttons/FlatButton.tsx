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
import { shadow } from "../Constants/Shadow";
import { DimensionsContext } from "../Contexts/DimensionsContext";
import {
  moderateScale,
  moderateVerticalScale,
} from "react-native-size-matters";
import { Colors } from "../Constants/Colors";

interface propType {
  containerStyle?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
  title: string;
  titleColor?: string;
  titleFontSize?: number;
  bgColor?: string;
  width?: any;
  height?: any;
  borderRadius?: number;
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
  const { fontBold, isMobile } = useContext(DimensionsContext);

  return (
    <TouchableOpacity
      onPress={props.onPressed}
      style={[
        props.containerStyle,
        styles.buttonContainer,
        {
          zIndex: props.zIndex,
          width: props.width || moderateScale(300),
          height: props.height || moderateVerticalScale(40, 0.05),
          borderRadius: props.borderRadius || moderateVerticalScale(20, 0.05),
          backgroundColor: props.bgColor || Colors.secondary,
          margin: props.margin || moderateVerticalScale(10, 0.05),
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
          paddingVertical: props.paddingVertical,
          paddingHorizontal: props.paddingHorizontal,
        },
      ]}
    >
      <Text
        style={[
          styles.buttonText,
          {
            fontFamily: fontBold,
            color: props.titleColor || "white",
            fontSize:
              props.titleFontSize || isMobile
                ? moderateVerticalScale(15)
                : moderateVerticalScale(12),
          },
        ]}
      >
        {props.title}
      </Text>
    </TouchableOpacity>
  );
}
const styles = StyleSheet.create({
  buttonContainer: {
    ...shadow,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    ...shadow,
    textAlign: "center",
    // marginTop: Platform.OS == "android" ? moderateVerticalScale(4, 0.5) : moderateVerticalScale(4, 0.5),
  },
});
