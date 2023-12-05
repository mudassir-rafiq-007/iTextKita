import { useContext } from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import Subscribe from "./Subscribe";
import InputFields from "./InputFields";
import FlatButton from "../../Components/Buttons/FlatButton";
import TwoPersons from "../../Components/TwoPersons/TwoPersons";
import GradientView from "../../Components/GradientView/GradientView";
import { DimensionsContext } from "../../Components/Contexts/DimensionsContext";
import { moderateScale, moderateVerticalScale, scale, verticalScale} from "react-native-size-matters";
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
    isTabPortrait,
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
          {/* <FlatButton title="Subscribe Now" onPressed={() => {}} zIndex={2} /> */}
          <FlatButton
          zIndex={2}
          title="Add New Store"
          onPressed={() => {}} 
          width={(isTabPortrait ? moderateVerticalScale(450, 0.5):(isTabLandscape ? moderateVerticalScale(350, 0.5): moderateVerticalScale(300,0.5)))}
          height={moderateVerticalScale(40, 0.05)}
          titleFontSize={(isTabPortrait ? moderateVerticalScale(12, 0.5):(isTabLandscape ? moderateVerticalScale(12, 0.5): moderateVerticalScale(15,0.5)))}
        />
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
