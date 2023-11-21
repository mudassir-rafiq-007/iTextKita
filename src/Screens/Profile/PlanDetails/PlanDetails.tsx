import { View, Text, StyleSheet } from "react-native";
import React, { useContext, useEffect } from "react";
import Header from "../../../Components/Header/Header";
import { DimensionsContext } from "../../../Components/Contexts/DimensionsContext";
import GradientView from "../../../Components/GradientView/GradientView";
import TwoPersons from "../../../Components/TwoPersons/TwoPersons";
import PackageType from "./PackageType";
import PurchaseHistory from "./PurchaseHistory";

type propsType = {
  navigation: {
    navigate: (screen: string) => void;
    setOptions: ({}: object) => void;
  };
};

export default function PlanDetails(props: propsType) {
  const {
    fontFamily,
    screenWidth,
    screenHeight,
    isTabLandscape,
    dimensionSetter,
  } = useContext(DimensionsContext);

  useEffect(() => {
    props.navigation.setOptions({
      header: () => <Header title="PLAN DETAILS" />,
    });
  }, []);
  return (
    <GradientView
      style={[
        styles.main,
        {
          gap: screenHeight * 0.03,
          justifyContent: isTabLandscape ? "space-around" : null,
          alignItems: isTabLandscape ? "flex-start" : "center",
          flexDirection: isTabLandscape ? "row" : "column",
        },
      ]}
    >
      <PackageType navigate={props.navigation.navigate}/>
      <PurchaseHistory />
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
