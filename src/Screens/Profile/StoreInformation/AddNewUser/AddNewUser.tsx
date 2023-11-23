import { useContext } from "react";
import { Text, View, StyleSheet, Platform } from "react-native";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import InputField from "./InputField";
import { Colors } from "../../../../Components/Constants/Colors";
import FlatButton from "../../../../Components/Buttons/FlatButton";
import CustomModal from "../../../../Components/CustomModal/CustomModal";
import { DimensionsContext } from "../../../../Components/Contexts/DimensionsContext";
import SelectFromList from "../../../NewStoreRegistration/SelectFromList";

interface propsType {
  modalVisible: boolean;
  setShowModal: (value: "next" | "cancel") => void;
}

export default function AddNewUser(props: propsType) {
  const {
    fontFamily,
    screenWidth,
    screenHeight,
    isTabLandscape,
    dimensionSetter,
  } = useContext(DimensionsContext);

  const textStyle = {
    color: "#fff",
    fontFamily: fontFamily,
    fontSize: isTabLandscape ? screenHeight * 0.025 : screenHeight * 0.015,
  };

  const roles = [
    { key: 1, value: "Owner" },
    { key: 2, value: "General Manager" },
    { key: 1, value: "Superviser" },
    { key: 1, value: "Manager" },
    { key: 1, value: "Assistant" },
    { key: 1, value: "Sales" },
  ];

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
          height: isTabLandscape ? screenHeight * 0.7 : screenHeight * 0.8,
          width: dimensionSetter({
            mobile: "90%",
            tabPort: "80%",
            tabLand: "80%",
          }),
        },
      ]}
    >
      <Text
        style={[
          styles.titleText,
          {
            fontSize: isTabLandscape
              ? screenHeight * 0.04
              : screenHeight * 0.02,
          },
        ]}
      >
        User Account
      </Text>
      <View
        style={{
          zIndex: 3,
          width: "90%",
          flexDirection: isTabLandscape ? "row" : "column",
          justifyContent: isTabLandscape ? "center" : null,
          gap: isTabLandscape ? screenWidth * 0.05 : screenHeight * 0.02,
        }}
      >
        <View
          style={{
            gap: screenHeight * 0.02,
            width: isTabLandscape ? "40%" : null,
          }}
        >
          <InputField title="First Name" placeholder="John" />
          <InputField title="Last Name" placeholder="Smith" />
          {isTabLandscape ? (
            <InputField title="Mobile Number" placeholder="+92 302 4767172" />
          ) : (
            <InputField
              title="Password"
              placeholder="Password"
              secureTextEntry={true}
            />
          )}
        </View>
        <View
          style={{
            zIndex: 3,
            gap: screenHeight * 0.02,
            width: isTabLandscape ? "40%" : null,
            justifyContent: isTabLandscape ? "flex-end" : null,
            flexDirection: isTabLandscape ? "column-reverse" : "column",
          }}
        >
          <InputField
            secureTextEntry={true}
            title="Confirm Password"
            placeholder="Confirm Password"
          />
          {!isTabLandscape ? (
            <InputField title="Mobile Number" placeholder="+92 302 4767172" />
          ) : (
            <InputField
              title="Password"
              placeholder="Password"
              secureTextEntry={true}
            />
          )}
          <View style={{ zIndex: 3, width: "100%" }}>
            <Text style={textStyle}>Role *</Text>
            <View
              style={{
                width: "100%",
                height: Platform.OS == "ios" ? screenHeight * 0.06 : null,
              }}
            >
              <SelectFromList placeholder="Manager" data={roles} />
            </View>
          </View>
        </View>
      </View>
      <FlatButton
        zIndex={2}
        title="Next"
        onPressed={() => props.setShowModal("next")}
        width={isTabLandscape ? "50%" : "90%"}
      />
      <View style={{ position: "absolute", top: "3%", right: "3%" }}>
        <MaterialIcons
          name="cancel"
          color={Colors.secondary}
          size={screenHeight * 0.04}
          onPress={() => props.setShowModal("cancel")}
        />
      </View>
    </CustomModal>
  );
}

const styles = StyleSheet.create({
  titleText: {
    color: "#fff",
    textAlign: "center",
    fontFamily: "Poppins-Bold",
  },
});
