import { useContext } from "react";
import { Text, View, StyleSheet, Platform, ScrollView } from "react-native";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
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
  const {
    fontBold,
    fontRegular,
    screenWidth,
    screenHeight,
    isTabLandscape,
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
    fontSize: isTabLandscape ? screenHeight * 0.025 : screenHeight * 0.015,
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
          height: Platform.OS == "ios" ? screenHeight * 0.8 : null,
          width: dimensionSetter({
            mobile: "90%",
            tabPort: "80%",
            tabLand: "60%",
          }),
        },
      ]}
    >
      <Text
        style={[
          styles.titleText,
          {
            fontFamily: fontBold,
            fontSize: isTabLandscape
              ? screenHeight * 0.04
              : screenHeight * 0.025,
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
      <View style={{ position: "absolute", top: "3%", right: "3%" }}>
        <MaterialIcons
          name="cancel"
          color={Colors.secondary}
          size={screenHeight * 0.04}
          onPress={() => onPressHandle("cancel")}
        />
      </View>
    </CustomModal>
  );
}

const styles = StyleSheet.create({
  titleText: {
    color: "#fff",
    textAlign: "center",
  },
});
