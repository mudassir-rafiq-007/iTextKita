import { useContext } from "react";
import { View, Text, TextInput, Platform, StyleSheet } from "react-native";
import { useFonts } from "expo-font";
import { Colors } from "../../Components/Constants/Colors";
import { DimensionsContext } from "../../Components/Contexts/DimensionsContext";

export default function InputFields() {
  const { fontFamily, screenWidth, screenHeight, dimensionSetter } =
    useContext(DimensionsContext);

  const [fontsLoaded] = useFonts({
    "Poppins-Bold": require("../../../assets/fonts/Poppins-Bold.ttf"),
  });

  function textInputStyle() {
    return [
      styles.textInput,
      {
        fontFamily: fontFamily,
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

  if (!fontsLoaded) return null;

  return (
    <View
      style={[
        {
          zIndex: 2,
          gap: screenHeight * 0.02,
          width: dimensionSetter({
            mobile: "90%",
            tabPort: "70%",
            tabLand: "40%",
          }),
        },
      ]}
    >
      <View>
        <Text
          style={{
            color: Colors.primary,
            fontFamily: "Poppins-Bold",
            fontSize: screenHeight * 0.02,
          }}
        >
          Name
        </Text>
        <View style={[styles.inputField, { height: screenHeight * 0.06 }]}>
          <TextInput
            style={textInputStyle()}
            placeholder="John Gates"
            textAlignVertical="center"
            placeholderTextColor={"#c7c6c5"}
            selectionColor={Colors.secondary}
          />
        </View>
      </View>
      <View>
        <Text
          style={{
            color: Colors.primary,
            fontFamily: "Poppins-Bold",
            fontSize: screenHeight * 0.02,
          }}
        >
          Cell-Phone Number
        </Text>
        <View style={[styles.inputField, { height: screenHeight * 0.06 }]}>
          <TextInput
            style={textInputStyle()}
            placeholder="+63 9 Number"
            textAlignVertical="center"
            placeholderTextColor={"#c7c6c5"}
            selectionColor={Colors.secondary}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  inputField: {
    width: "100%",
    borderWidth: 1,
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
