import { useContext } from "react";
import { Text, StyleSheet, Platform, ScrollView } from "react-native";
import { moderateVerticalScale } from "react-native-size-matters";
import Form from "./Form";
import { Colors } from "../../Components/Constants/Colors";
import CustomModal from "../../Components/CustomModal/CustomModal";
import { DimensionsContext } from "../../Components/Contexts/DimensionsContext";

interface propsType {
  modalVisible: boolean;
  originScreen: "Profile" | "Login";
  setShowModal: (value: "register" | "cancel" | undefined) => void;
}

export default function NewStoreRegistration(props: propsType) {
  const { fontBold, screenHeight, isTabLandscape, isMobile, valueFor } =
    useContext(DimensionsContext);

  function onPressHandle(type: "cancel" | "register") {
    if (props.originScreen == "Login") {
      props.setShowModal(type);
    } else props.setShowModal(undefined);
  }

  return (
    <CustomModal
      modalVisible={props.modalVisible}
      screenHeight={screenHeight}
      style={[
        styles.main,
        {
          width: isMobile
            ? moderateVerticalScale(320)
            : moderateVerticalScale(350),
          height: valueFor({
            mobile: moderateVerticalScale(380),
            tabPortrait: moderateVerticalScale(330),
            tabLandscape: moderateVerticalScale(340),
          }),
        },
      ]}
    >
      <Text
        style={{
          color: "#fff",
          fontFamily: fontBold,
          fontSize: isMobile
            ? moderateVerticalScale(19)
            : moderateVerticalScale(15),
        }}
      >
        Store Information
      </Text>
      {Platform.OS == "android" ? (
        <ScrollView
          nestedScrollEnabled={true}
          style={{ width: "100%", height: screenHeight * 0.6 }}
          contentContainerStyle={{
            flexGrow: 1,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Form onPressHandle={(value) => onPressHandle(value)} />
        </ScrollView>
      ) : (
        <Form onPressHandle={(value) => onPressHandle(value)} />
      )}
    </CustomModal>
  );
}

const styles = StyleSheet.create({
  main: {
    alignItems: "center",
    justifyContent: "center",
    gap: moderateVerticalScale(15),
    backgroundColor: Colors.primary,
    borderRadius: moderateVerticalScale(20),
  },
});
