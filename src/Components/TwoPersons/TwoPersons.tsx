import { useContext } from "react";
import { View, StyleProp, ViewStyle } from "react-native";
import { DimensionsContext } from "../Contexts/DimensionsContext";
import TwoPersonsBg from "../../../assets/images/two-persons.svg";

interface propsType {
  style: StyleProp<ViewStyle> | undefined;
}

export default function TwoPersons(props: propsType) {
  const { screenWidth, screenHeight, dimensionSetter } =
    useContext(DimensionsContext);

  function mainViewStyle() {
    return [
      props.style,
      {
        opacity: dimensionSetter({
          mobile: 0.5,
          tabPort: 0.5,
          tabLand: 0.1,
        }),
        bottom: dimensionSetter({
          mobile: screenHeight * 0.05,
          tabPort: screenHeight * 0.03,
          tabLand: screenHeight * 0.001,
        }),
      },
    ];
  }

  return (
    <View style={mainViewStyle()}>
      <TwoPersonsBg
        height={dimensionSetter({
          mobile: screenHeight * 0.2,
          tabPort: screenHeight * 0.3,
          tabLand: screenHeight * 0.6,
        })}
        width={screenWidth * 0.8}
      />
    </View>
  );
}
