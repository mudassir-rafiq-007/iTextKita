import { useContext } from "react";
import { View, StyleSheet, ScrollView } from "react-native";
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

export default function CreateCampaign(props: propsType) {
  const {
    fontBold,
    fontRegular,
    screenWidth,
    screenHeight,
    isTabLandscape,
    dimensionSetter,
  } = useContext(DimensionsContext);

  const inputsData = [
    { title: "Campaign Name", placeholder: "My First Campaign" },
    { title: "Poster", placeholder: "No File Upload" },
    { title: "Youtube ID", placeholder: "Link" },
    { title: "Facebook ID", placeholder: "Link" },
    { title: "Duration", placeholder: "7 Days" },
  ];

  return (
    <GradientView style={[styles.main, { height: screenHeight }]}>
      <ScrollView
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
            width: "100%",
            height: screenHeight,
            alignItems: "center",
            gap: screenHeight * 0.05,
          }}
        >
          <View
            style={{
              zIndex: 2,
              width: "100%",
              paddingTop: isTabLandscape ? "2%" : null,
              flexDirection: isTabLandscape ? "row" : "column",
              alignItems: isTabLandscape ? "flex-start" : null,
              justifyContent: isTabLandscape ? "center" : null,
              gap: isTabLandscape ? null : screenHeight * 0.015,
            }}
          >
            <View
              style={{
                gap: screenHeight * 0.02,
                width: isTabLandscape ? "40%" : null,
                justifyContent: isTabLandscape ? "center" : null,
              }}
            >
              <InputFields item={inputsData[0]} />
              <InputFields item={inputsData[1]} />
              <InputFields item={inputsData[2]} />
            </View>
            <View
              style={{
                gap: screenHeight * 0.02,
                width: isTabLandscape ? "40%" : null,
                justifyContent: isTabLandscape ? "center" : null,
              }}
            >
              <InputFields item={inputsData[3]} />
              <InputFields item={inputsData[4]} />
            </View>
          </View>
          <FlatButton zIndex={2} title="Create" onPressed={() => {}} />
        </View>
      </ScrollView>
      <TwoPersons style={styles.twoPersons} />
    </GradientView>
  );
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    paddingTop: "4%",
  },
  twoPersons: {
    zIndex: 1,
    opacity: 0.8,
    position: "absolute",
    alignSelf: "center"
  },
});
