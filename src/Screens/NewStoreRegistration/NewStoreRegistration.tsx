import { useContext } from "react";
import { Text, View, StyleSheet, Platform } from "react-native";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import InputField from "./InputField";
import SelectFromList from "./SelectFromList";
import { Colors } from "../../Components/Constants/Colors";
import FlatButton from "../../Components/Buttons/FlatButton";
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
          justifyContent: isTabLandscape ? "flex-start" : "center",
          gap: isTabLandscape ? screenHeight * 0.03 : screenHeight * 0.02,
          height: screenHeight * 0.7,
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
              : screenHeight * 0.02,
          },
        ]}
      >
        Store Information
      </Text>
      <View
        style={{
          alignItems: "center",
          width: isTabLandscape ? "80%" : "90%",
          justifyContent: isTabLandscape ? "center" : null,
          gap: isTabLandscape ? screenWidth * 0.01 : screenHeight * 0.02,
        }}
      >
        <InputField title="Business Name" placeholder="My Store" />
        <View style={{ zIndex: 3, width: "100%" }}>
          <Text style={textStyle}>Business Category *</Text>
          <View
            style={{
              width: "100%",
              height: Platform.OS == "ios" ? screenHeight * 0.06 : null,
            }}
          >
            <SelectFromList placeholder="Retail" data={businessCategory} />
          </View>
        </View>
        <InputField title="Sender ID" placeholder="#QUE$$F$F" />
        <InputField title="DTI" placeholder="No File Chosen" editable={false} />
        <FlatButton
          zIndex={2}
          title="Register"
          width={isTabLandscape ? "50%" : "100%"}
          onPressed={() => onPressHandle("register")}
        />
      </View>
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
