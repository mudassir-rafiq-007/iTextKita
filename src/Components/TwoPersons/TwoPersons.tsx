import { useContext } from "react";
import { View, StyleProp, ViewStyle } from "react-native";
import { DimensionsContext } from "../Contexts/DimensionsContext";
import TwoPersonsBg from "../../../assets/images/two-persons.svg";

interface propsType {
  style?: StyleProp<ViewStyle>;
  opacity?: number;
}

export default function TwoPersons(props: propsType) {
  const { screenWidth, screenHeight, valueFor, isTabLandscape } =
    useContext(DimensionsContext);

  function mainViewStyle() {
    return [
      props.style,
      {
        opacity: props.opacity || isTabLandscape ? 0.2 : 0.5,
        bottom: valueFor({
          mobile: screenHeight * 0.05,
          tabPortrait: screenHeight * 0.03,
          tabLandscape: screenHeight * 0.001,
        }),
      },
    ];
  }

  return (
    <View style={mainViewStyle()}>
      <TwoPersonsBg
        width={screenWidth * 0.8}
        height={valueFor({
          mobile: screenHeight * 0.2,
          tabPortrait: screenHeight * 0.3,
          tabLandscape: screenHeight * 0.5,
        })}
      />
    </View>
  );
}
