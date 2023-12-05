import { useContext } from "react";
import { Text, View, StyleSheet, Platform, ScrollView } from "react-native";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import Form from "./Form";
import { Colors } from "../../Components/Constants/Colors";
import CustomModal from "../../Components/CustomModal/CustomModal";
import { DimensionsContext } from "../../Components/Contexts/DimensionsContext";
import { moderateScale, moderateVerticalScale, scale, verticalScale} from "react-native-size-matters";

interface propsType {
  modalVisible: boolean;
  originScreen: "Profile" | "Login";
  setShowModal: (value: "register" | "cancel" | undefined) => void;
}

export default function NewStoreRegistration(props: propsType) {
  const {
    fontBold,
    fontRegular,
    screenWidth,
    screenHeight,
    isTabLandscape,
    isTabPortrait,
    dimensionSetter,
  } = useContext(DimensionsContext);

  function onPressHandle(type: "cancel" | "register") {
    if (props.originScreen == "Login") {
      props.setShowModal(type);
    } else props.setShowModal(undefined);
  }

  const businessCategory = [
    { key: 1, value: "Retail" },
    { key: 2, value: "Wholesale" },
    { key: 3, value: "Warehouse" },
    { key: 4, value: "Retail" },
    { key: 5, value: "Wholesale" },
    { key: 6, value: "Warehouse" },
  ];

  const textStyle = {
    color: "#fff",
    fontFamily: fontRegular,
    fontSize: moderateVerticalScale(40, 0.05),
  };

  return (
    <CustomModal
      modalVisible={props.modalVisible}
      screenHeight={screenHeight}
      style={[
        {
          alignItems: "center",
          backgroundColor: Colors.primary,
          borderRadius: screenHeight * 0.03,
          paddingVertical: isTabLandscape ? "3%" : "5%",
          justifyContent: "center",
          gap: isTabLandscape ? screenHeight * 0.03 : screenHeight * 0.02,
          height: (isTabPortrait ? moderateVerticalScale(330, 0.5):(isTabLandscape ? moderateVerticalScale(340, 0.5): moderateVerticalScale(380,0.5))),
          width: (isTabPortrait ? moderateVerticalScale(350, 0.5):(isTabLandscape ? moderateVerticalScale(350, 0.5): moderateVerticalScale(320,0.5))),
        },
      ]}
    >
      <Text
        style={[
          styles.titleText,
          {
            fontFamily: fontBold,
            fontSize: (isTabPortrait ? moderateVerticalScale(15, 0.5):(isTabLandscape ? moderateVerticalScale(15, 0.5): moderateVerticalScale(19,0.5))),
          },
        ]}
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
  titleText: {
    color: "#fff",
    textAlign: "center",
  },
});
