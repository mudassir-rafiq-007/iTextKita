import {
  View,
  Text,
  Platform,
  StyleProp,
  TextStyle,
  TextInput,
  StyleSheet,
} from "react-native";
import React, { useContext } from "react";
import { Colors } from "../../Components/Constants/Colors";
import { DimensionsContext } from "../../Components/Contexts/DimensionsContext";

interface propsType {
  item: { title: string; placeholder: string };
}

export default function InputFields(props: propsType) {
  const { fontFamily, screenWidth, screenHeight, dimensionSetter } =
    useContext(DimensionsContext);

  function inputLabelStyle(): StyleProp<TextStyle> {
    return {
      color: Colors.primary,
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
          tabLand: "40%",
        }),
        borderWidth: 1,
        borderColor: Colors.secondary,
        borderRadius: screenHeight * 0.005,
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
          mobile: "2%",
          tabPort: "2%",
          tabLand: "2%",
        }),
      },
    ];
  }
  return (
    <View
      style={{
        width: "100%",
        alignItems: "center",
        gap: screenHeight * 0.01,
      }}
    >
      {props.item.title == "Poster" ? (
        <View>
          <Text style={inputLabelStyle()}>{props.item.title}</Text>
          <View style={inputFieldStyle()}>
            <View style={styles.posterView}>
              <Text style={textInputStyle()}>{props.item.placeholder}</Text>
              <View style={styles.uploadFileView}>
                <Text style={{ color: "#0484FF" }}>Upload File</Text>
              </View>
            </View>
          </View>
        </View>
      ) : (
        <View>
          <Text style={inputLabelStyle()}>{props.item.title}</Text>
          <View style={inputFieldStyle()}>
            <TextInput
              style={textInputStyle()}
              placeholder={props.item.placeholder}
              textAlignVertical="center"
              selectionColor={Colors.secondary}
              placeholderTextColor={"#c7c6c5"}
            />
          </View>
        </View>
      )}
    </View>
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
  posterView: {
    width: "100%",
    height: "100%",
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "center",
  },
  uploadFileView: {
    height: "70%",
    width: "30%",
    borderWidth: 1,
    marginRight: "5%",
    alignItems: "center",
    borderColor: "#0484FF",
    justifyContent: "center",
  },
});