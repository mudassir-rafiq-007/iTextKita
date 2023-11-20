import {
  Text,
  View,
  Modal,
  Platform,
  TextInput,
  StyleProp,
  TextStyle,
  ViewStyle,
  StyleSheet,
  KeyboardAvoidingView,
} from "react-native";
import React, { useContext, useState } from "react";
import EntypeIcons from "react-native-vector-icons/Entypo";
import { Colors } from "../../Components/Constants/Colors";
import TextButton from "../../Components/Buttons/TextButton";
import FlatButton from "../../Components/Buttons/FlatButton";
import { DimensionsContext } from "../../Components/Contexts/DimensionsContext";

interface propsType {
  fontFamily: string;
  modalVisible: boolean;
  setShowModal: (value: boolean) => void;
}

export default function ResetPassword(props: propsType) {
  const [secureTextEntry, setSecureTextEntry] = useState<boolean>(true);
  const { screenWidth, screenHeight, fontFamily, dimensionSetter } =
    useContext(DimensionsContext);

  function containerStyle(): StyleProp<ViewStyle> {
    return {
      zIndex: 2,
      alignItems: "center",
      justifyContent: "center",
      height: screenHeight * 0.55,
      backgroundColor: Colors.primary,
      borderRadius: screenHeight * 0.02,
      width: dimensionSetter({
        mobile: "95%",
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
      fontSize: screenHeight * 0.02,
    };
  }

  function inputFieldStyle() {
    return [
      styles.inputField,
      {
        width: dimensionSetter({
          mobile: "90%",
          tabPort: "70%",
          tabLand: "50%",
        }),
        borderColor: Colors.secondary,
        borderWidth: 1,
        borderRadius: screenHeight * 0.01,
        height: dimensionSetter({
          mobile: screenHeight * 0.06,
          tabPort: screenHeight * 0.05,
          tabLand: screenHeight * 0.06,
        }),
      },
    ];
  }

  function textInputStyle() {
    return [
      styles.textInput,
      {
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
    <Modal
      transparent={true}
      animationType="slide"
      visible={props.modalVisible}
    >
      <KeyboardAvoidingView
        style={styles.main}
        behavior={Platform.OS == "ios" ? "padding" : "height"}
      >
        <View style={containerStyle()}>
          <Text
            style={{
              color: Colors.secondary,
              fontFamily: props.fontFamily,
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
              marginTop: screenHeight * 0.02,
            }}
          >
            <FlatButton
              title="Submit"
              zIndex={2}
              onPressed={() => props.setShowModal(false)}
              titleFontSize={dimensionSetter({
                mobile: screenWidth * 0.04,
                tabPort: screenWidth * 0.035,
                tabLand: screenWidth * 0.015,
              })}
              width={dimensionSetter({
                mobile: screenWidth * 0.8,
                tabPort: screenWidth * 0.5,
                tabLand: screenWidth * 0.3,
              })}
            />
            <TextButton
              title="Cancel"
              color={Colors.secondary}
              fontSize={screenHeight * 0.02}
              onPressed={() => props.setShowModal(false)}
            />
          </View>
        </View>
      </KeyboardAvoidingView>
    </Modal>
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
