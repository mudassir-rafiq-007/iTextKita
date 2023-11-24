import { useContext } from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import Subscribe from "./Subscribe";
import InputFields from "./InputFields";
import FlatButton from "../../Components/Buttons/FlatButton";
import TwoPersons from "../../Components/TwoPersons/TwoPersons";
import GradientView from "../../Components/GradientView/GradientView";
import { DimensionsContext } from "../../Components/Contexts/DimensionsContext";

type propsType = {
  navigation: {
    setOptions: ({}: object) => void;
    navigate: (screen: string) => void;
  };
};

export default function BusinessName(props: propsType) {
  const {
    fontBold,
    fontRegular,
    screenWidth,
    screenHeight,
    isTabLandscape,
    dimensionSetter,
  } = useContext(DimensionsContext);

  return (
    <GradientView
      style={{
        flex: 1,
        height: screenHeight,
        paddingTop: isTabLandscape ? "2%" : "5%",
      }}
    >
      <ScrollView
        keyboardShouldPersistTaps="handled"
        style={{ zIndex: 2 }}
        contentContainerStyle={{
          flexGrow: 1,
          width: screenWidth,
          alignItems: "center",
          gap: screenHeight * 0.05,
        }}
      >
        <View
          style={{
            zIndex: 2,
            width: "100%",
            height: screenHeight,
            alignItems: "center",
            gap: screenHeight * 0.05,
          }}
        >
          <Subscribe />
          <InputFields />
          <FlatButton title="Subscribe Now" onPressed={() => {}} zIndex={2} />
        </View>
      </ScrollView>
      <TwoPersons style={styles.twoPersons} />
    </GradientView>
  );
}

const styles = StyleSheet.create({
  twoPersons: {
    zIndex: 1,
    opacity: 0.8,
    alignSelf: "center",
    position: "absolute",
  },
});
