import {
  Text,
  View,
  Platform,
  TextInput,
  StyleProp,
  TextStyle,
  ViewStyle,
  StyleSheet,
} from "react-native";
import React, { useContext, useState } from "react";
import EntypeIcons from "react-native-vector-icons/Entypo";
import { Colors } from "../../Components/Constants/Colors";
import TextButton from "../../Components/Buttons/TextButton";
import FlatButton from "../../Components/Buttons/FlatButton";
import CustomModal from "../../Components/CustomModal/CustomModal";
import { DimensionsContext } from "../../Components/Contexts/DimensionsContext";

interface propsType {
  modalVisible: boolean;
  setShowModal: (string: "cancel" | "submit") => void;
}

export default function ResetPassword(props: propsType) {
  const [secureTextEntry, setSecureTextEntry] = useState<boolean>(true);
  const {
    fontFamily,
    screenWidth,
    screenHeight,
    isTabLandscape,
    dimensionSetter,
  } = useContext(DimensionsContext);

  function containerStyle(): StyleProp<ViewStyle> {
    return {
      zIndex: 2,
      alignItems: "center",
      justifyContent: "center",
      gap: screenHeight * 0.03,
      backgroundColor: Colors.primary,
      borderRadius: screenHeight * 0.03,
      height: isTabLandscape ? screenHeight * 0.65 : screenHeight * 0.55,
      width: dimensionSetter({
        mobile: "90%",
        tabPort: "80%",
        tabLand: "60%",
      }),
    };
  }

  function inputLabelStyle(): StyleProp<TextStyle> {
    return {
      color: "white",
      fontFamily: fontFamily,
      alignSelf: "flex-start",
      fontSize: isTabLandscape ? screenHeight * 0.025 : screenHeight * 0.015,
    };
  }

  function inputFieldStyle(): StyleProp<ViewStyle> {
    return [
      styles.inputField,
      {
        borderWidth: 1,
        borderColor: Colors.secondary,
        borderRadius: screenHeight * 0.01,
        width: isTabLandscape ? "70%" : "90%",
        paddingHorizontal: screenWidth * 0.02,
        height: isTabLandscape ? screenHeight * 0.07 : screenHeight * 0.06,
      },
    ];
  }

  function textInputStyle() {
    return [
      styles.textInput,
      {
        color: Colors.primary,
        fontFamily: fontFamily,
        fontSize: dimensionSetter({
          mobile: screenHeight * 0.02,
          tabPort: screenHeight * 0.02,
          tabLand: screenHeight * 0.025,
        }),
        marginTop:
          Platform.OS == "android"
            ? dimensionSetter({
                mobile: screenHeight * 0.01,
                tabPort: screenHeight * 0.01,
                tabLand: screenHeight * 0.005,
              })
            : null,
        marginHorizontal: dimensionSetter({
          mobile: screenWidth * 0.02,
          tabPort: screenWidth * 0.01,
          tabLand: screenWidth * 0.005,
        }),
      },
    ];
  }

  return (
    <CustomModal
      modalVisible={props.modalVisible}
      screenHeight={screenHeight}
      style={containerStyle()}
    >
      <Text
        style={{
          color: "#fff",
          fontFamily: "Poppins-Bold",
          fontSize: screenHeight * 0.03,
          marginBottom: screenHeight * 0.01,
        }}
      >
        Reset Password
      </Text>
      <View
        style={{
          width: "100%",
          alignItems: "center",
          gap: screenHeight * 0.01,
        }}
      >
        <View>
          <Text style={inputLabelStyle()}>Mobile Number *</Text>
          <View style={inputFieldStyle()}>
            <TextInput
              style={textInputStyle()}
              placeholder="+123 456 7890"
              textAlignVertical="center"
              placeholderTextColor={"#c7c6c5"}
            />
          </View>
        </View>
        <View>
          <Text style={inputLabelStyle()}>Password *</Text>
          <View style={inputFieldStyle()}>
            <TextInput
              style={textInputStyle()}
              placeholder="Password"
              textAlignVertical="center"
              placeholderTextColor={"#c7c6c5"}
            />
            <EntypeIcons
              name={secureTextEntry ? "eye" : "eye-with-line"}
              color={Colors.primary}
              size={screenHeight * 0.025}
              style={{
                marginRight: dimensionSetter({
                  mobile: screenWidth * 0.04,
                  tabPort: screenWidth * 0.04,
                  tabLand: screenWidth * 0.01,
                }),
              }}
              onPress={() =>
                setSecureTextEntry((current) => (current ? false : true))
              }
            />
          </View>
        </View>
        <View>
          <Text style={inputLabelStyle()}>Confirm Password *</Text>
          <View style={inputFieldStyle()}>
            <TextInput
              style={textInputStyle()}
              placeholder="Confirm Password"
              textAlignVertical="center"
              placeholderTextColor={"#c7c6c5"}
            />
            <EntypeIcons
              name={secureTextEntry ? "eye" : "eye-with-line"}
              color={Colors.primary}
              size={screenHeight * 0.025}
              style={{
                marginRight: dimensionSetter({
                  mobile: screenWidth * 0.04,
                  tabPort: screenWidth * 0.04,
                  tabLand: screenWidth * 0.01,
                }),
              }}
              onPress={() =>
                setSecureTextEntry((current) => (current ? false : true))
              }
            />
          </View>
        </View>
      </View>
      <View
        style={{
          alignItems: "center",
          width: "100%",
          gap: screenHeight * 0.01,
        }}
      >
        <FlatButton
          zIndex={2}
          title="Submit"
          width={isTabLandscape ? "50%" : "90%"}
          onPressed={() => props.setShowModal("submit")}
        />

        <TextButton
          title="Cancel"
          textDecorationLine="underline"
          onPressed={() => props.setShowModal("cancel")}
        />
      </View>
    </CustomModal>
  );
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff0",
  },
  inputField: {
    alignItems: "center",
    flexDirection: "row",
    backgroundColor: "white",
    textAlignVertical: "center",
  },
  textInput: {
    flex: 1,
    width: "100%",
    color: "#c7c6c5",
    justifyContent: "center",
    textAlignVertical: "center",
  },
});
