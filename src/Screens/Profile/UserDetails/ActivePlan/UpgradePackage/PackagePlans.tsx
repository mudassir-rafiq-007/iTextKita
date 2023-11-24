import { useContext, useState } from "react";
import { View, Text, Platform, StyleSheet, ScrollView } from "react-native";
import PackageTitle from "./PackageTitle";
import PackagePerks from "./PackagePerks";
import { Colors } from "../../../../../Components/Constants/Colors";
import TwoPersons from "../../../../../Components/TwoPersons/TwoPersons";
import GradientView from "../../../../../Components/GradientView/GradientView";
import { DimensionsContext } from "../../../../../Components/Contexts/DimensionsContext";

type propsType = {
  navigation: {
    navigate: (screen: string) => void;
    setOptions: ({}: object) => void;
  };
};

interface Layout {
  x: number | null;
  y: number | null;
  width: number | null;
  height: number | null;
}

export default function PackagePlans(props: propsType) {
  const {
    fontBold,
    fontRegular,
    screenWidth,
    screenHeight,
    isTabLandscape,
    dimensionSetter,
  } = useContext(DimensionsContext);
  const [viewPosition, setViewPosition] = useState<Layout>();

  const basicPackagePerks = [
    "Text Blast",
    "Online Marketing",
    "1 Brand ID",
    "1 User",
  ];
  const maritextPackagePerks = [
    "Text Blast",
    "Online Marketing",
    "3 Brand ID",
    "Unlimited User",
    "Personal Messaging",
    "Statistics",
  ];

  const borderLine = (
    <View
      style={{
        width: "100%",
        borderBottomWidth: 1,
        borderBottomColor: Colors.secondary,
      }}
    />
  );

  function packageViewStyle(height: number) {
    return [
      styles.packageView,
      {
        backgroundColor: isTabLandscape ? "#EFEFEF" : null,
        gap: screenHeight * 0.01,
        borderRadius: screenHeight * 0.005,
        height: isTabLandscape ? height * 1.4 : height,
        width: dimensionSetter({
          mobile: "90%",
          tabPort: "70%",
          tabLand: "50%",
        }),
      },
    ];
  }

  return (
    <GradientView style={styles.main}>
      <ScrollView
        style={{ height: screenHeight }}
        contentContainerStyle={{
          flexGrow: 1,
          width: screenWidth,
          alignItems: "center",
          gap: isTabLandscape ? screenHeight * 0.04 : screenHeight * 0.03,
        }}
      >
        {/* Basic Package View */}
        <View style={packageViewStyle(screenHeight * 0.3)}>
          <PackageTitle title="Basic" price={29.99} />
          {borderLine}
          <PackagePerks perks={basicPackagePerks} />
        </View>

        {/* Maritext Package View with Popular Now tag */}
        {viewPosition && (
          <View
            style={[
              styles.popularNowView,
              {
                height: screenHeight * 0.04,
                width: dimensionSetter({
                  mobile: "40%",
                  tabPort: "30%",
                  tabLand: "15%",
                }),
                top: viewPosition.y - screenHeight * 0.02,
                left:
                  viewPosition.x +
                  dimensionSetter({
                    mobile: screenWidth * 0.4,
                    tabPort: screenWidth * 0.3,
                    tabLand: screenWidth * 0.3,
                  }),
              },
            ]}
          >
            <Text
              style={{
                color: "#fff",
                fontFamily: fontBold,
                fontSize: screenHeight * 0.02,
              }}
            >
              Popular Now
            </Text>
          </View>
        )}
        <View
          onLayout={(layout) => setViewPosition(layout.nativeEvent.layout)}
          style={packageViewStyle(screenHeight * 0.35)}
        >
          <PackageTitle title="Maritext" price={59.99} />
          {borderLine}
          <PackagePerks perks={maritextPackagePerks} />
        </View>
        <TwoPersons style={styles.twoPersons} />
      </ScrollView>
    </GradientView>
  );
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    paddingTop: "2%",
  },
  packageView: {
    zIndex: 2,
    borderWidth: 1,
    paddingHorizontal: "5%",
    justifyContent: "center",
    borderColor: Colors.secondary,
    paddingTop: Platform.OS == "android" ? "2%" : null,
  },
  popularNowView: {
    zIndex: 3,
    position: "absolute",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#26F05F",
  },
  twoPersons: {
    zIndex: 1,
    opacity: 0.8,
    position: "absolute",
  },
});
