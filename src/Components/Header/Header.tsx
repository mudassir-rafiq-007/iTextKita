import { useContext } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import HeaderMenu from "./HeaderMenu";
import { Colors } from "../Constants/Colors";
import ITextKita from "../../../assets/images/iTextKita.svg";
import { DimensionsContext } from "../Contexts/DimensionsContext";

type propType = {
  title: string;
  goBack?: () => void;
  showBackButton?: boolean;
};

export default function Header(props: propType) {
  const {
    fontBold,
    fontRegular,
    screenWidth,
    screenHeight,
    isTabLandscape,
    dimensionSetter,
  } = useContext(DimensionsContext);

  const insets = useSafeAreaInsets();

  return (
    <View style={[styles.main, { paddingTop: insets.top }]}>
      <ITextKita
        height={isTabLandscape ? screenHeight * 0.12 : screenHeight * 0.08}
      />
      <View
        style={[
          styles.header,
          {
            justifyContent: props.showBackButton ? null : "space-between",
            paddingHorizontal: isTabLandscape
              ? screenWidth * 0.1
              : screenWidth * 0.05,
          },
        ]}
      >
        {props.showBackButton && (
          <TouchableOpacity
            onPress={props.goBack}
            style={{
              width: isTabLandscape ? screenHeight * 0.04 : screenHeight * 0.03,
              height: isTabLandscape ? screenHeight * 0.04 : screenHeight * 0.03,
            }}
          >
            <MaterialIcons
              name="arrow-back-ios"
              color={Colors.primary}
              size={isTabLandscape? screenHeight * 0.04 : screenHeight * 0.03}
            />
          </TouchableOpacity>
        )}
        <Text
          style={{
            color: Colors.primary,
            fontFamily: fontBold,
            fontSize: isTabLandscape
              ? screenHeight * 0.05
              : screenHeight * 0.03,
          }}
        >
          {props.title.toLocaleUpperCase()}
        </Text>
        {!props.showBackButton && <HeaderMenu />}
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
  },
});
