import { useContext, useState } from "react";
import { View, Text, Platform, StyleSheet } from "react-native";
import ExtendModal from "./ExtendModal/ExtendModal";
import { Colors } from "../../../Components/Constants/Colors";
import TextButton from "../../../Components/Buttons/TextButton";
import { DimensionsContext } from "../../../Components/Contexts/DimensionsContext";

export default function ExpiryDate() {
  const [showModal, setShowModal] = useState<boolean>(true);
  const {
    fontFamily,
    screenWidth,
    screenHeight,
    isTabLandscape,
    dimensionSetter,
  } = useContext(DimensionsContext);
  return (
    <View
      style={[
        styles.main,
        {
          borderRadius: screenHeight * 0.005,
          paddingTop: Platform.OS == "android" ? "2%" : null,
          height: isTabLandscape ? screenHeight * 0.13 : screenHeight * 0.1,
          width: dimensionSetter({
            mobile: "90%",
            tabPort: "70%",
            tabLand: "80%",
          }),
        },
      ]}
    >
      <View style={{ gap: screenHeight * 0.01 }}>
        <Text
          style={{
            color: Colors.primary,
            fontSize: isTabLandscape
              ? screenHeight * 0.025
              : screenHeight * 0.02,
          }}
        >
          Sender ID Expiration Date
        </Text>
        <Text
          style={{
            color: Colors.secondary,
            fontFamily: "Poppins-Bold",
            fontSize: isTabLandscape
              ? screenHeight * 0.025
              : screenHeight * 0.02,
          }}
        >
          18 September 2023
        </Text>
      </View>
      <TextButton
        title="Extend"
        color={Colors.secondary}
        textDecorationLine="underline"
        onPressed={() => setShowModal(true)}
      />
      {showModal && (
        <ExtendModal
          fontFamily={fontFamily}
          modalVisible={showModal}
          setShowModal={(value) => setShowModal(value)}
        />
      )}
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
