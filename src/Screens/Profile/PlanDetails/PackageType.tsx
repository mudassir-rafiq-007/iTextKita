import { useContext } from "react";
import { View, Text, Platform, StyleSheet } from "react-native";
import { Colors } from "../../../Components/Constants/Colors";
import TextButton from "../../../Components/Buttons/TextButton";
import { DimensionsContext } from "../../../Components/Contexts/DimensionsContext";

interface propsType {
  navigate: (value: string) => void;
}

export default function PackageType(props: propsType) {
  const {
    fontFamily,
    screenWidth,
    screenHeight,
    isTabLandscape,
    dimensionSetter,
  } = useContext(DimensionsContext);
  return (
    <View
      style={{
        alignItems: isTabLandscape ? null : "center",
        gap: isTabLandscape ? screenHeight * 0.03 : screenHeight * 0.02,
        width: dimensionSetter({
          mobile: "100%",
          tabPort: "80%",
          tabLand: "35%",
        }),
      }}
    >
      <Text
        style={{
          width: "90%",
          textAlign: "left",
          color: Colors.primary,
          fontSize: screenHeight * 0.02,
          fontFamily: isTabLandscape ? "Poppins-Bold" : fontFamily,
        }}
      >
        Your Package Details
      </Text>
      <View
        style={[
          styles.main,
          {
            borderRadius: screenHeight * 0.005,
            paddingTop: Platform.OS == "android" ? "2%" : null,
            height: isTabLandscape ? screenHeight * 0.12 : screenHeight * 0.1,
            width: dimensionSetter({
              mobile: "90%",
              tabPort: "90%",
              tabLand: "100%",
            }),
          },
        ]}
      >
        <View style={{ gap: screenHeight * 0.01 }}>
          <Text
            style={{ color: Colors.primary, fontSize: screenHeight * 0.02 }}
          >
            Basic
          </Text>
          <Text
            style={{
              color: Colors.secondary,
              fontFamily: "Poppins-Bold",
              fontSize: screenHeight * 0.02,
            }}
          >
            29.99$<Text style={{ fontFamily: fontFamily }}>/per month</Text>
          </Text>
        </View>
        <TextButton
          title="Renew / Upgrade"
          color={Colors.secondary}
          onPressed={() => props.navigate("Package Plans")}
          fontSize={isTabLandscape ? screenHeight * 0.02 : screenHeight * 0.015}
        />
      </View>
      <View
        style={{
          borderWidth: 1,
          paddingLeft: "5%",
          borderColor: "#0002",
          justifyContent: "center",
          gap: screenHeight * 0.01,
          width: dimensionSetter({
            mobile: "90%",
            tabPort: "90%",
            tabLand: "100%",
          }),
          height: isTabLandscape ? screenHeight * 0.12 : screenHeight * 0.1,
        }}
      >
        <Text
          style={{
            color: "#0006",
            fontFamily: fontFamily,
            fontSize: screenHeight * 0.02,
          }}
        >
          Plan Expiration Date
        </Text>
        <Text
          style={{
            color: Colors.secondary,
            fontFamily: "Poppins-Bold",
            fontSize: screenHeight * 0.02,
          }}
        >
          18 September 2023
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    width: "90%",
    borderWidth: 1,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: "5%",
    borderColor: Colors.secondary,
    justifyContent: "space-between",
  },
  addMoreView: {
    height: "60%",
    width: "40%",
    borderWidth: 1,
    alignItems: "center",
    justifyContent: "center",
    borderColor: Colors.secondary,
  },
});
