import { useContext } from "react";
import { StyleSheet } from "react-native";
import AmountSelection from "./AmountSelection";
import PurchaseHistory from "./PurchaseHistory";
import FlatButton from "../../../../Components/Buttons/FlatButton";
import TwoPersons from "../../../../Components/TwoPersons/TwoPersons";
import GradientView from "../../../../Components/GradientView/GradientView";
import { DimensionsContext } from "../../../../Components/Contexts/DimensionsContext";

type propsType = {
  navigation: {
    navigate: (screen: string) => void;
    setOptions: ({}: object) => void;
  };
};

export default function PurchaseCredits(props: propsType) {
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
      style={[
        styles.main,
        {
          gap: screenHeight * 0.03,
          paddingHorizontal: isTabLandscape ? "5%" : null,
          flexDirection: isTabLandscape ? "row" : "column",
          alignItems: isTabLandscape ? "flex-start" : "center",
          justifyContent: isTabLandscape ? "space-between" : null,
        },
      ]}
    >
      <AmountSelection />
      <PurchaseHistory />
      {!isTabLandscape && (
        <FlatButton zIndex={2} title="Pay Now (4.99$)" onPressed={() => {}} />
      )}
      <TwoPersons style={styles.twoPersons} />
    </GradientView>
  );
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    paddingTop: "4%",
    borderTopWidth: 1,
    alignItems: "center",
    borderColor: "#0003",
    backgroundColor: "white",
  },
  twoPersons: {
    zIndex: 1,
    opacity: 0.8,
    position: "absolute",
  },
});
