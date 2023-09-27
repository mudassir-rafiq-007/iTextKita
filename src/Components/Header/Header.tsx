import { useContext, useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import HeaderMenu from "./HeaderMenu";
import ITextKita from "../../../assets/iTextKita.svg";
import { DimensionsContext } from "../Contexts/DimensionsContext";
import { useSafeAreaInsets } from "react-native-safe-area-context";

type propType = {
  title: string;
};

export default function Header(props: propType) {
  const { screenWidth, screenHeight, dimensionSetter } =
    useContext(DimensionsContext);

  const [visible, setVisible] = useState(false);
  const hideMenu = () => setVisible(false);
  const showMenu = () => setVisible(true);
  const insets = useSafeAreaInsets();

  return (
    <View style={[styles.main, { paddingTop: insets.top }]}>
      <ITextKita
        height={dimensionSetter({
          mobile: screenHeight * 0.08,
          tabPort: screenHeight * 0.08,
          tabLand: screenHeight * 0.12,
        })}
      />
      <View
        style={[
          styles.header,
          {
            paddingHorizontal: dimensionSetter({
              mobile: screenWidth * 0.05,
              tabPort: screenWidth * 0.05,
              tabLand: screenWidth * 0.1,
            }),
          },
        ]}
      >
        <Text
          style={[
            styles.title,
            {
              fontSize: dimensionSetter({
                mobile: screenHeight * 0.03,
                tabPort: screenHeight * 0.03,
                tabLand: screenHeight * 0.05,
              }),
            },
          ]}
        >
          {props.title}
        </Text>
        <HeaderMenu />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    alignItems: "center",
  },
  header: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  title: {
    color: "#084A5B",
    fontFamily: "Poppins-Bold",
  },
});
