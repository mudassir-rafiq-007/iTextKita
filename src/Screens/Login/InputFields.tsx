import { useContext, useState } from "react";
import { View, StyleSheet, TextInput, Platform } from "react-native";
import Key from "../../../assets/images/key.svg";
import User from "../../../assets/images/user.svg";
import Hide from "../../../assets/images/hide.svg";
import { DimensionsContext } from "../../Components/Contexts/DimensionsContext";

export default function InputFields() {
  const {
    fontBold,
    fontRegular,
    screenWidth,
    screenHeight,
    isTabLandscape,
    dimensionSetter,
  } = useContext(DimensionsContext);

  const [secureTextEntry, setSecureTextEntry] = useState<boolean>(true);

  function inputFieldStyle() {
    return [
      styles.inputField,
      {
        height: screenHeight * 0.06,
      },
    ];
  }

  function textInputStyle() {
    return [
      styles.textInput,
      {
        fontFamily: fontRegular,
        fontSize: screenHeight * 0.02,
        marginTop:
          Platform.OS == "android"
            ? dimensionSetter({
                mobile: screenHeight * 0.005,
                tabPort: screenHeight * 0.01,
                tabLand: screenHeight * 0.005,
              })
            : null,
        marginHorizontal: isTabLandscape
          ? screenWidth * 0.005
          : screenWidth * 0.01,
      },
    ];
  }

  return (
    <View
      style={[
        styles.form,
        {
          zIndex: 2,
          gap: screenHeight * 0.03,
          width: dimensionSetter({
            mobile: "80%",
            tabPort: "60%",
            tabLand: "30%",
          }),
        },
      ]}
    >
      <View style={inputFieldStyle()}>
        <User
          height={dimensionSetter({
            mobile: screenHeight * 0.05,
            tabPort: screenHeight * 0.03,
            tabLand: screenHeight * 0.03,
          })}
          width={dimensionSetter({
            mobile: screenWidth * 0.05,
            tabPort: screenWidth * 0.03,
            tabLand: screenWidth * 0.03,
          })}
          style={{
            marginHorizontal: dimensionSetter({
              mobile: screenWidth * 0.05,
              tabPort: screenWidth * 0.03,
              tabLand: screenWidth * 0.01,
            }),
          }}
        />
        <TextInput
          style={textInputStyle()}
          placeholder="User Name"
          textAlignVertical="center"
          selectionColor={"#fff"}
          placeholderTextColor={"#c7c6c5"}
        />
      </View>
      <View style={inputFieldStyle()}>
        <Key
          height={dimensionSetter({
            mobile: screenHeight * 0.05,
            tabPort: screenHeight * 0.03,
            tabLand: screenHeight * 0.03,
          })}
          width={dimensionSetter({
            mobile: screenWidth * 0.05,
            tabPort: screenWidth * 0.03,
            tabLand: screenWidth * 0.03,
          })}
          style={{
            marginHorizontal: dimensionSetter({
              mobile: screenWidth * 0.05,
              tabPort: screenWidth * 0.03,
              tabLand: screenWidth * 0.01,
            }),
          }}
        />
        <TextInput
          style={[
            ...textInputStyle(),
            {
              width: dimensionSetter({
                mobile: "70%",
                tabPort: "80%",
                tabLand: "80%",
              }),
            },
          ]}
          selectionColor={"#fff"}
          placeholder="Password"
          textAlignVertical="center"
          placeholderTextColor={"#c7c6c5"}
          secureTextEntry={secureTextEntry}
        />
        <Hide
          height={dimensionSetter({
            mobile: screenHeight * 0.05,
            tabPort: screenHeight * 0.03,
            tabLand: screenHeight * 0.03,
          })}
          width={dimensionSetter({
            mobile: screenWidth * 0.05,
            tabPort: screenWidth * 0.03,
            tabLand: screenWidth * 0.03,
          })}
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
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#fff",
    justifyContent: "center",
  },
  form: {
    alignItems: "center",
    justifyContent: "center",
  },
  inputField: {
    width: "100%",
    alignItems: "center",
    flexDirection: "row",
    backgroundColor: "#084A5B",
    textAlignVertical: "center",
  },
  textInput: {
    flex: 1,
    width: "100%",
    color: "#c7c6c5",
    justifyContent: "center",
    textAlignVertical: "center",
  },
  registerView: {
    zIndex: 2,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
});
