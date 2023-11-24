import { useContext } from "react";
import { View, Text, TextInput, Platform, StyleSheet } from "react-native";
import { Colors } from "../../Components/Constants/Colors";
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

  function textInputStyle() {
    return [
      styles.textInput,
      {
        fontFamily: fontRegular,
        width: dimensionSetter({
          mobile: "70%",
          tabPort: "80%",
          tabLand: "80%",
        }),
        fontSize: dimensionSetter({
          mobile: screenHeight * 0.025,
          tabPort: screenHeight * 0.02,
          tabLand: screenHeight * 0.025,
        }),
        marginTop: Platform.OS == "android" ? screenHeight * 0.01 : null,
        marginHorizontal: dimensionSetter({
          mobile: screenWidth * 0.01,
          tabPort: screenWidth * 0.01,
          tabLand: screenWidth * 0.005,
        }),
      },
    ];
  }

  return (
    <View
      style={[
        {
          zIndex: 2,
          gap: screenHeight * 0.02,
          flexDirection: isTabLandscape ? "row" : "column",
          justifyContent: isTabLandscape ? "center" : null,
          width: dimensionSetter({
            mobile: "90%",
            tabPort: "70%",
            tabLand: "80%",
          }),
        },
      ]}
    >
      <View
        style={{
          width: isTabLandscape ? "40%" : null,
          gap: isTabLandscape ? screenHeight * 0.01 : null,
        }}
      >
        <Text
          style={{
            color: Colors.primary,
            fontFamily: fontBold,
            fontSize: screenHeight * 0.02,
          }}
        >
          Name
        </Text>
        <View
          style={[
            styles.inputField,
            {
              borderWidth: isTabLandscape ? 2 : 1,
              height: isTabLandscape
                ? screenHeight * 0.07
                : screenHeight * 0.06,
            },
          ]}
        >
          <TextInput
            style={textInputStyle()}
            placeholder="John Gates"
            textAlignVertical="center"
            selectionColor={Colors.secondary}
            placeholderTextColor={Colors.primary}
          />
        </View>
      </View>
      <View
        style={{
          width: isTabLandscape ? "40%" : null,
          gap: isTabLandscape ? screenHeight * 0.01 : null,
        }}
      >
        <Text
          style={{
            color: Colors.primary,
            fontFamily: fontBold,
            fontSize: screenHeight * 0.02,
          }}
        >
          Cell-Phone Number
        </Text>
        <View
          style={[
            styles.inputField,
            {
              borderWidth: isTabLandscape ? 2 : 1,
              height: isTabLandscape
                ? screenHeight * 0.07
                : screenHeight * 0.06,
            },
          ]}
        >
          <TextInput
            style={textInputStyle()}
            placeholder="+63 9 Number"
            textAlignVertical="center"
            selectionColor={Colors.secondary}
            placeholderTextColor={Colors.primary}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  inputField: {
    width: "100%",
    borderRadius: 5,
    alignItems: "center",
    flexDirection: "row",
    backgroundColor: "#FFF",
    textAlignVertical: "center",
    borderColor: Colors.secondary,
  },
  textInput: {
    flex: 1,
    width: "100%",
    color: "#c7c6c5",
    justifyContent: "center",
    textAlignVertical: "center",
  },
});
